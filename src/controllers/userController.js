const userService = require("../services/userService");
const catchAsync = require("../utils/catchAsync"); //funcion de orden superior manejador de errores

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await userService.createUser({ name, email, password });
  res.status(201).json(newUser);
};

const addReserve = async (req, res) => {
  const { userId, reserveId } = req.body;
  await userService.addReserve({ userId, reserveId });
  res.status(201).json({ message: "Todo ok" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userValidated = await userService.loginUser({ email, password });
  res.status(200).json(userValidated);  
};

module.exports = {
  getUsers: catchAsync(getUsers),
  getUserById: catchAsync(getUserById),
  createUser: catchAsync(createUser),
  addReserve: catchAsync(addReserve),
  loginUser: catchAsync(loginUser),
};
