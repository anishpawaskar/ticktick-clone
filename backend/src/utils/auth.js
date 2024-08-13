import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const generateHashPassword = async (password) => {
  return bcrypt.hash(password, parseInt(process.env.HASH_SALT_ROUND));
};

export const compareHashPassword = async (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};

export const generateJwt = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};

export const verifyJwt = (req, res, next) => {
  const token = ""; //extract token from req

  if (!token) {
    return res.status(401).json({ message: "Access denied." });
  }

  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = userData;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid token" });
  }
};
