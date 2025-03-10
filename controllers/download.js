const db = require("../db");
const https = require("https");

exports.get = async (req, res, next) => {
  try {
    const fileId = req.params.fileid;
    const file = await db.getFileById(fileId);
    if (!file) {
      return res.status(404).send("File not found");
    }
    const fileUrl = file.location;
    const fileName = file.name;
    const mimeType = file.type;

    https
      .get(fileUrl, (response) => {
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${fileName}"`
        );
        res.setHeader("Content-type", mimeType);
        response.pipe(res);
      })
      .on("error", (err) => {
        next(err);
      });
  } catch (err) {
    return next(err);
  }
};
