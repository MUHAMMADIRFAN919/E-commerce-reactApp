const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { auth, adminAuth } = require('../middleware/auth');

// All admin routes require authentication and admin role
router.use(auth);
router.use(adminAuth);

// GET all products (admin view)
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new product
router.post('/products', async (req, res) => {
  try {
    const { name, price, image, description, category, stock } = req.body;

    const product = new Product({
      name,
      price,
      image,
      description,
      category,
      stock
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update product
router.put('/products/:id', async (req, res) => {
  try {
    const { name, price, image, description, category, stock } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, image, description, category, stock },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE product
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

