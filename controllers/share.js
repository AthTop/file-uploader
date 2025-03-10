const db = require("../db");
const { addHours } = require("../lib/dateHelper");
const downloadController = require("./download");

exports.get = async (req, res, next) => {
  try {
    const shareId = req.params.id;
    const directoryId = req.query.directoryId;
    const share = await db.getShareById(shareId);
    if (!share || share.expiresAt < new Date()) {
      return res.status(404).send("Share not found or expired");
    }
    res.locals.pageTitle = "Share";
    res.locals.directory = share.directory;
    res.locals.directory.parentDirectoryId = "";
    res.locals.share = share;
    res.render("share");
  } catch (err) {
    return next(err);
  }
};

exports.post = async (req, res, next) => {
  try {
    res.locals.pageTitle = "Success";
    const directory = req.session.currentDirectory;
    const expires = addHours(new Date(), parseInt(req.body.expires));
    const share = await db.createShare(directory, expires);
    res.locals.share = share;
    res.render("successfulShare");
  } catch (err) {
    return next(err);
  }
};

exports.getDownload = [
  async (req, res, next) => {
    const shareId = req.params.shareid;
    const share = await db.getShareById(shareId);
    if (!share || share.expiresAt < new Date()) {
      return res.status(404).send("Share not found or expired");
    }
    return next();
  },
  downloadController.get,
];
