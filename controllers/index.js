const { isAuth } = require("../routes/authMiddleware");

exports.get = [
  isAuth,
  (req, res) => {
    res.locals.pageTitle = "Register";
    res.render("index");
  },
];
