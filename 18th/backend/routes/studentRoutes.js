const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(["Varsha", "Anjali", "Rohit"]);
});

router.get("/marks", (req, res) => {
  res.json([
    { name: "Varsha", marks: 85 },
    { name: "Anjali", marks: 72 }
  ]);
});

module.exports = router;
