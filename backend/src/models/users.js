import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: String,
  hashPassword: String,
  nickname: String,
  avatarUrl: String,
});

const Users = mongoose.model("Users", usersSchema);

export const createNewUser = async (payload) => {
  const newUser = new Users(payload);
  return newUser.save();
};

export const findUserByEmail = async (filter) => {
  const user = Users.findOne(filter).exec();
  return user;
};
