const express = require("express");
const router = express.Router();
const hsnController = require("./hsnController");

router.get("/", hsnController.getAll);
router.get("/:id", hsnController.getById);
router.post("/", hsnController.createHSN);

module.exports = router;
