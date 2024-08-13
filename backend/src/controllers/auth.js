import { createNewUser, findUserByEmail } from "../models/users.js";
import {
  compareHashPassword,
  generateHashPassword,
  generateJwt,
} from "../utils/auth.js";

export const signupUser = async (req, res) => {
  try {
    const { nickname, email, password, avatarUrl } = req.body;

    const existingUser = await findUserByEmail({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const newUser = await createNewUser({
      nickname: nickname ?? "",
      avatarUrl: avatarUrl ?? "",
      email,
      hashPassword: await generateHashPassword(password),
    });

    const payload = {
      nickname: nickname ?? "",
      email,
      avatarUrl: avatarUrl ?? "",
    };

    const token = generateJwt(payload);

    return res.status(201).json({
      message: "User logged in successfully.",
      user: { userId: newUser._id, ...payload },
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error while registering user." });
  }
};

export const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await findUserByEmail({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const matchPassword = await compareHashPassword(
      password,
      existingUser.hashPassword
    );

    if (!matchPassword) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const payload = {
      email: existingUser.email,
      nickname: existingUser.nickname,
      avatarUrl: existingUser.avatarUrl,
    };

    const token = generateJwt(payload);

    return res.status(200).json({
      message: "User logged in successfully.",
      user: { userId: existingUser._id, ...payload },
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error while loggin user." });
  }
};
