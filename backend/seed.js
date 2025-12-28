// Script to populate database with sample products
// Run with: node backend/seed.js

const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

const sampleProducts = [
  {
    name: 'Wireless Headphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    category: 'Electronics',
    stock: 50
  },
  {
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    description: 'Feature-rich smartwatch with fitness tracking and smartphone notifications.',
    category: 'Electronics',
    stock: 30
  },
  {
    name: 'Laptop Backpack',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    description: 'Durable and stylish backpack designed for laptops and daily commute.',
    category: 'Accessories',
    stock: 100
  },
  {
    name: 'Running Shoes',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    description: 'Comfortable running shoes with excellent cushioning and breathable material.',
    category: 'Fashion',
    stock: 75
  },
  {
    name: 'Coffee Maker',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1517668808823-d6e7abce4f42?w=500',
    description: 'Automatic coffee maker with programmable timer and multiple brew sizes.',
    category: 'Home & Kitchen',
    stock: 40
  },
  {
    name: 'Smartphone Case',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500',
    description: 'Protective case with shock absorption and raised edges for screen protection.',
    category: 'Accessories',
    stock: 200
  },
  {
    name: 'Yoga Mat',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    description: 'Non-slip yoga mat with extra cushioning for comfortable workouts.',
    category: 'Sports',
    stock: 60
  },
  {
    name: 'Desk Lamp',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    description: 'LED desk lamp with adjustable brightness and color temperature.',
    category: 'Home & Kitchen',
    stock: 80
  },
  {
    name: 'Water Bottle',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500',
    description: 'Stainless steel insulated water bottle keeps drinks cold for 24 hours.',
    category: 'Accessories',
    stock: 150
  },
  {
    name: 'Bluetooth Speaker',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    description: 'Portable Bluetooth speaker with excellent sound quality and long battery.',
    category: 'Electronics',
    stock: 45
  },
  {
    name: 'Winter Jacket',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    description: 'Warm and stylish winter jacket perfect for cold weather.',
    category: 'Fashion',
    stock: 55
  },
  {
    name: 'Gaming Mouse',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    description: 'High-precision gaming mouse with customizable RGB lighting.',
    category: 'Electronics',
    stock: 90
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products added successfully');
    
    mongoose.connection.close();
    console.log('Database connection closed');
  })
  .catch((error) => {
    console.error('Error:', error);
    mongoose.connection.close();
  });

