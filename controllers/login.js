const passport = require("passport");
const validateLogin = require("../lib/validateLogin");
const { validateResult } = require("express-validator");

exports.get = (req, res) => {
  // Grab and clear errors from passport's verify cb that are stored in session.messages
  res.locals.inputErrors = req.session.messages;
  req.session.messages = [];
  res.locals.pageTitle = "Login";
  return res.render("login");
};

exports.post = passport.authenticate("local", {
  failureRedirect: "/login",
  failureMessage: true,
  successRedirect: "/",
});
