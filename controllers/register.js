const validateRegistration = require("../lib/validateRegistration");
const { validationResult } = require("express-validator");
const { genPassword } = require("../lib/passwordUtils");
const db = require("../db");

exports.get = (req, res, next) => {
  res.locals.pageTitle = "Register";
  return res.render("register");
};

exports.post = [
  validateRegistration,
  async (req, res, next) => {
    const errors = validationResult(req);
    const { username, password } = req.body;
    if (!errors.isEmpty()) {
      res.locals.pageTitle = "Register";
      res.locals.form = username;
      console.log(errors.array());
      res.locals.inputErrors = errors.array();
      return res.status(400).render("register");
    }
    try {
      const hashedPassword = await genPassword(password);
      await db.createUser(username, hashedPassword);
      req.session.message = "Registered successfully";
      return res.redirect("/success");
    } catch (err) {
      return next(err);
    }
  },
];
