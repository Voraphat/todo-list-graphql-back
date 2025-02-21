import User from "../models/User.js";

const userResolver = {
  getUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw err;
    }
  },
  getUser : async ({ id }) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (err) {
      throw err;
    }
  },
  addUser : async ({ name, email, age }) => {
  const user = new User({
    name,
    email,
    age,
  });
  try {
    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
  },
};

export default userResolver;
