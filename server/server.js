const express = require('express')
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require('cors')
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const app = express()
const Product = require('./dbModels/product.js');

app.use(cors())

mongoose.connect(process.env.ATLAS_URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected.");
});

app.get("/api/catalog", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

app.get("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
});

app.get('/api/image/:filename', async (req, res) => {
  const { filename } = req.params;
  const { width, height } = req.query;
  const imagePath = path.join(__dirname, 'images', filename);

  if (!fs.existsSync(imagePath)) {
    res.status(404).send('Image not found');
    return;
  }

  try {
    let resizeOptions = {fit: 'inside',};

    if (width) {resizeOptions.width = parseInt(width)};
    if (height) {resizeOptions.height = parseInt(height)};

    const fileExtension = path.extname(filename).toLowerCase();

    let outputOptions;
    let responseType;

    if (fileExtension === '.png') {
      outputOptions = { compressionLevel: 9 };
      responseType = 'image/png';
    } else {
      outputOptions = { quality: 80 };
      responseType = 'image/jpeg';
    }

    const resizedImage = await sharp(imagePath)
      .resize(resizeOptions)
      .toFormat(fileExtension === '.png' ? 'png' : 'jpeg', outputOptions)
      .toBuffer();

    res.type(responseType).send(resizedImage);
  } catch (error) {
    res.status(500).send('Error resizing image');
  }
});

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
// });

app.listen(1337, () => {console.log("server started on port 1337")})