const db = require("../db");
const { isAuth } = require("../routes/authMiddleware");
const { uploadHandler } = require("../lib/cloudinary");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

exports.get = [
  isAuth,
  (req, res) => {
    res.locals.directoryId = req.params.id;
    res.locals.pageTitle = "Upload";
    res.render("uploadFile");
  },
];

exports.post = [
  isAuth,
  upload.single("uploaded_file"),
  async (req, res, next) => {
    const directoryId = req.params.id;
    const { originalname, mimetype, size } = req.file;
    const userId = req.user.id;
    try {
      const cloudinaryResult = await uploadHandler(req.file.buffer);
      const { secure_url, public_id } = cloudinaryResult;
      await db.createFileInDirectory(
        originalname,
        secure_url,
        directoryId,
        userId,
        mimetype,
        size,
        public_id
      );
    } catch (err) {
      return next(err);
    }
    res.redirect(`/directory/${directoryId}`);
  },
];
