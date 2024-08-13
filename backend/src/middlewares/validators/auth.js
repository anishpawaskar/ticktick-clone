import { z } from "zod";

export const validateSignupInput = (req, res, next) => {
  const body = req.body;

  const userShcema = z
    .object({
      email: z.string().email({ message: "Invalid email address" }).trim(),
      password: z
        .string()
        .min(6, { message: "Password must be 6-64 characters long." })
        .max(64, { message: "Password must be 6-64 characters long." })
        .trim(),
      nickname: z.string(),
      avatarUrl: z.string(),
    })
    .strict();

  const partilUserSchema = userShcema.partial({
    nickname: true,
    avatarUrl: true,
  });

  const response = partilUserSchema.safeParse(body);

  if (response.success) {
    next();
  } else {
    return res.status(400).json({ message: response.error.errors[0].message });
  }
};

export const validateSigninInput = (req, res, next) => {
  const body = req.body;

  const loginUserSchema = z
    .object({
      email: z.string().email({ message: "Invalid email address" }).trim(),
      password: z
        .string()
        .min(6, { message: "Password must be 6-64 characters long." })
        .max(64, { message: "Password must be 6-64 characters long." })
        .trim(),
    })
    .strict();

  const response = loginUserSchema.safeParse(body);

  if (response.success) {
    next();
  } else {
    return res.status(400).json({ message: response.error.errors[0].message });
  }
};
