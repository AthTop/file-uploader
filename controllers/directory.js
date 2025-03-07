const db = require("../db");
const { isAuth } = require("../routes/authMiddleware");

exports.get = [
  isAuth,
  async (req, res) => {
    res.locals.pageTitle = "Directory";
    const directory = await db.getDirectoryById(req.params.id);
    res.locals.directory = directory;
    req.session.currentDirectoryId = directory.id;
    res.render("directory");
  },
];

exports.newPost = [
  isAuth,
  async (req, res, next) => {
    const name = req.body.name;
    try {
      const newDir = await db.createDirectory(
        name,
        req.session.currentDirectoryId,
        req.user.id
      );
      res.redirect(`/directory/${newDir.id}`);
    } catch (err) {
      next(err);
    }
  },
];
