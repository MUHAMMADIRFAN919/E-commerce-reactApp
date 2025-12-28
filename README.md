# Ecommerce Full-Stack Application

A fully functional eCommerce web application built with React (frontend) and Node.js/Express (backend) with MongoDB database. This project is designed for beginners and implements all the required features for a complete eCommerce experience.

## Features

### Frontend
- ✅ Responsive design for desktop and mobile views
- ✅ Home page with featured products
- ✅ Product listing page with search functionality
- ✅ Product detail page
- ✅ Shopping cart with localStorage persistence
- ✅ User authentication (Login/Register)
- ✅ Admin panel for product management (CRUD operations)
- ✅ Protected routes for admin access

### Backend
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose
- ✅ JWT authentication
- ✅ Product CRUD operations
- ✅ Search and filter functionality
- ✅ Protected admin routes

## Technology Stack

- **Frontend:** React.js, React Router, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ecommerce-fullstack-design
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` folder:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_secret_key_here_change_this_in_production
   ```

   **Note:** If you're using MongoDB Atlas, replace `MONGO_URI` with your connection string.

4. **Start MongoDB**
   
   If using local MongoDB:
   ```bash
   # On Windows
   mongod

   # On Mac/Linux
   sudo systemctl start mongod
   ```

5. **Seed the database (optional)**

   To populate the database with sample products:
   ```bash
   cd backend
   node seed.js
   ```

   **Important:** Before running the seed script, create an admin user manually or use the register endpoint and then update the user in MongoDB to set `isAdmin: true`.

## Running the Application

### Option 1: Run both frontend and backend together
From the root directory:
```bash
npm run dev
```

### Option 2: Run separately

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Creating an Admin User

To access the admin panel, you need to create a user with admin privileges:

1. Register a new user through the registration page
2. In MongoDB, find the user and update:
   ```javascript
   db.users.updateOne(
     { email: "your-email@example.com" },
     { $set: { isAdmin: true } }
   )
   ```

   Or use MongoDB Compass to manually set `isAdmin: true` for your user.

## Project Structure

```
ecommerce-fullstack-design/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── auth.js
│   │   └── admin.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── seed.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── ProtectedRoute.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Products.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── Cart.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── AdminPanel.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## API Endpoints

### Products
- `GET /api/products` - Get all products (supports ?search=query)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get single product

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Admin (Protected)
- `GET /api/admin/products` - Get all products (admin)
- `POST /api/admin/products` - Create new product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product

**Note:** Admin endpoints require JWT token in Authorization header: `Bearer <token>`

## Deployment

### Backend Deployment (Render/Heroku)
1. Set environment variables in your hosting platform
2. Ensure MongoDB connection string is set
3. Deploy the backend folder

### Frontend Deployment (Vercel/Netlify)
1. Build the React app: `cd frontend && npm run build`
2. Update API URLs in frontend to point to your deployed backend
3. Deploy the build folder or connect your repository

## Features Implementation Status

### Week 1: Static Frontend ✅
- [x] Project setup
- [x] Responsive frontend (desktop and mobile)
- [x] Home Page
- [x] Product Listing Page
- [x] Product Details Page
- [x] Cart Page

### Week 2: Backend Integration ✅
- [x] MongoDB setup
- [x] Express.js backend
- [x] CRUD API endpoints
- [x] Dynamic content rendering
- [x] Search functionality

### Week 3: Additional Features ✅
- [x] User authentication (JWT)
- [x] Cart management (localStorage)
- [x] Admin panel with protected routes
- [x] Responsive testing

## Contributing

This is a learning project. Feel free to fork and enhance it with additional features!

## License

MIT License

## Author

Built as part of Full-Stack Development Internship Program

---

**Note:** This is a beginner-friendly project. The code is intentionally kept simple and easy to understand. For production use, consider adding error handling, validation, security enhancements, and testing.

