const { Router } = require("express");
const router = Router();
const directoryController = require("../controllers/directory");

router.post("/new", directoryController.newPost);
router.get("/:id", directoryController.get);

module.exports = router;
