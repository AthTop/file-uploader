const { Router } = require("express");
const router = Router();
const uploadController = require("../controllers/upload");

router.get("/", uploadController.get);
router.post("/", uploadController.post);
module.exports = router;
