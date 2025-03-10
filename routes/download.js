const { Router } = require("express");
const router = Router();
const downloadController = require("../controllers/download");
const { isAuth } = require("./authMiddleware");

router.get("/:fileid", isAuth, downloadController.get);
module.exports = router;
