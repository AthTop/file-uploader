const { Router } = require("express");
const router = Router();
const uploadController = require("../controllers/upload");

router.get("/:id", uploadController.get);
router.post("/:id", uploadController.post);
module.exports = router;
