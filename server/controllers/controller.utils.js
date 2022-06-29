const User = require("../models/user-model");

const getUserFields = async (userId) => {
  try {
    const user = await User.findById(userId).select({
      token: 1,
      tokenSecret: 1,
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (err) {
    next(err);
  }
};

module.exports = { getUserFields };   
