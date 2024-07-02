const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const authenticateUser = async (username, password) => {
  const user = await User.findOne({ where: { username } });

  if (user && (await bcrypt.compare(password, user.password))) {
    return generateToken(user.id);
  } else {
    throw new Error("Invalid credentials");
  }
};

module.exports = {
  authenticateUser,
};
