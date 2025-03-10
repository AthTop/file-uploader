const { Router } = require("express");
const router = Router();
const shareController = require("../controllers/share");

router.post("/", shareController.post);
router.get("/:id", shareController.get);
router.get("/:shareid/download/:fileid", shareController.getDownload);

module.exports = router;
