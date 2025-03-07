const { isAuth } = require("../routes/authMiddleware");
const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });

exports.get = [
  isAuth,
  (req, res) => {
    res.locals.pageTitle = "Upload";
    res.render("uploadFile");
  },
];

exports.post = [
  isAuth,
  upload.single("uploaded_file"),
  (req, res) => {
    res.render("index");
  },
];
