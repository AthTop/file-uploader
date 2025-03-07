const { body } = require("express-validator");
const db = require("../db");

const validateLogin = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .custom(async (username) => {
      try {
        const user = await db.getUserByUsername(username);
        if (!user) {
          throw new Error("Username not found");
        }
      } catch (err) {
        throw new Error("Internal server error during username validation");
      }
    }),
];

module.exports = validateLogin;
