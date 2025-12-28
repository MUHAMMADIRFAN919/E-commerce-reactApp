const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products (with optional search)
router.get('/', async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};

    // Search by name or category
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } }
      ];
    } else if (category) {
      query.category = { $regex: category, $options: 'i' };
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET featured products (first 8 products)
router.get('/featured', async (req, res) => {
  try {
    const products = await Product.find().limit(8);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

