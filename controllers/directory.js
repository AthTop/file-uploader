const db = require("../db");
const { isAuth } = require("../routes/authMiddleware");

exports.get = [
  isAuth,
  async (req, res) => {
    res.locals.pageTitle = "Directory";
    const directory = await db.getDirectoryById(req.params.id);
    res.locals.directory = directory;
    // Save current directory id in session to link new folders or files to it
    req.session.currentDirectory = directory;
    res.render("directory");
  },
];

exports.newPost = [
  isAuth,
  async (req, res, next) => {
    const name = req.body.name;
    const currentDirectory = req.session.currentDirectory;
    try {
      const newDir = await db.createDirectory(
        name,
        currentDirectory.id,
        req.user.id
      );
      res.redirect(`/directory/${newDir.id}`);
    } catch (err) {
      next(err);
    }
  },
];

exports.updatePost = [
  isAuth,
  async (req, res, next) => {
    const name = req.body.name;
    const directoryId = req.params.id;
    const currentDirectory = req.session.currentDirectory;
    if (name !== currentDirectory.name) {
      try {
        const updatedDir = db.updateDirectoryName(directoryId, name);
      } catch (err) {
        return next(err);
      }
    }
    res.redirect(`/directory/${currentDirectory.id}`);
  },
];

exports.deleteGet = [
  isAuth,
  async (req, res, next) => {
    const directoryId = req.params.id;
    const currentDirectory = req.session.currentDirectory;
    try {
      db.deleteDirectoryById(directoryId);
    } catch (err) {
      return next(err);
    }
    res.redirect(`/directory/${currentDirectory.id}`);
  },
];
