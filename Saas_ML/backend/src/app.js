require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const trendRoutes = require("./routes/trends");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/trends", trendRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Backend rodando na porta ${PORT}`));
