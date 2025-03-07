const { Router } = require("express");
const router = Router();
const registerController = require("../controllers/register");

router.get("/", registerController.get);
router.post("/", registerController.post);
module.exports = router;
