const db = require("../db");
const { file } = require("../db/prisma");
const { isAuth } = require("../routes/authMiddleware");

exports.get = [
  isAuth,
  async (req, res, next) => {
    const fileId = req.params.id;
    try {
      const file = await db.getFileById(fileId);
      res.locals.pageTitle = "File";
      res.locals.file = file;
      res.render("file");
    } catch (err) {
      return next(err);
    }
  },
];

exports.updatePost = [
  isAuth,
  async (req, res, next) => {
    const fileId = req.params.id;
    const name = req.body.name;
    try {
      await db.updateFileName(name, fileId);
      res.redirect(`/file/${fileId}`);
    } catch (err) {
      return next(err);
    }
  },
];

exports.deleteGet = [
  isAuth,
  async (req, res, next) => {
    const fileId = req.params.id;
    try {
      await db.deleteFileById(fileId);
      res.redirect(`/directory/${req.session.currentDirectory.id}`);
    } catch (err) {
      return next(err);
    }
  },
];
