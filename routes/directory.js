const { Router } = require("express");
const router = Router();
const directoryController = require("../controllers/directory");

router.post("/new", directoryController.newPost);
router.post("/:id/update", directoryController.updatePost);
router.get("/:id/delete", directoryController.deleteGet);
router.get("/:id", directoryController.get);

module.exports = router;
