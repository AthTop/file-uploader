const { Router } = require("express");
const router = Router();
const downloadController = require("../controllers/download");

router.get("/:id", downloadController.get);
module.exports = router;
