// Script to create an admin user
// Run with: node backend/createAdmin.js

const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    readline.question('Enter admin email: ', async (email) => {
      readline.question('Enter admin password: ', async (password) => {
        readline.question('Enter admin name: ', async (name) => {
          try {
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
              // Update existing user to admin
              existingUser.isAdmin = true;
              await existingUser.save();
              console.log('Existing user updated to admin successfully!');
            } else {
              // Create new admin user
              const adminUser = new User({
                name,
                email,
                password,
                isAdmin: true
              });
              await adminUser.save();
              console.log('Admin user created successfully!');
            }
          } catch (error) {
            console.error('Error:', error.message);
          } finally {
            mongoose.connection.close();
            readline.close();
          }
        });
      });
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    readline.close();
  });

