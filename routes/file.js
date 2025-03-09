const { Router } = require("express");
const router = Router();
const fileController = require("../controllers/file");

router.post("/:id/update", fileController.updatePost);
router.get("/:id/delete", fileController.deleteGet);
router.get("/:id", fileController.get);

module.exports = router;
