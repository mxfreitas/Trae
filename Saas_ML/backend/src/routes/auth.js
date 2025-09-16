const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login OK" });
});

router.post("/register", (req, res) => {
  res.json({ message: "Usuário registrado" });
});

module.exports = router;
