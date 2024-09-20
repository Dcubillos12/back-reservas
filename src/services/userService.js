const User = require("../models/User");

module.exports = {
  getUsers: async () => {
    const users = await User.find().populate("reserves");
    return users;
  },
  getUserById: async (id) => {
    const user = await User.findById(id);
    return user;
  },

  createUser: async (user) => {
    const newUser = await User.create(user);
    return newUser;
  },

  addReserve: async ({ userId, reserveId }) => {
    const user = await User.findById(userId);
    user.reserves = reserveId;
    await user.save(); //si no hacemos esto no se va a modificar el BD
    return user;
  },

  loginUser: async ({ email, password }) => {
    const user = await User.findOne({ email, password });
    if (!user) {
      throw new Error("Credenciales incorrectas");
    }
    return user;
  },
};
