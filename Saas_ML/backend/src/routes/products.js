const express = require("express");
const router = express.Router();

// Produtos mockados para teste
const products = [
  { name: "Produto 1", price: 100, seller: "Vendedor A" },
  { name: "Produto 2", price: 200, seller: "Vendedor B" }
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
