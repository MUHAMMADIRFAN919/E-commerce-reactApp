# Quick Setup Guide

## Step-by-Step Setup Instructions

### 1. Install Dependencies

From the root directory:
```bash
npm run install-all
```

Or manually:
```bash
npm install
cd backend
npm install
cd ../frontend
npm install
cd ..
```

### 2. Setup MongoDB

**Option A: Local MongoDB**
- Install MongoDB from https://www.mongodb.com/try/download/community
- Start MongoDB service
- Default connection: `mongodb://localhost:27017/ecommerce`

**Option B: MongoDB Atlas (Cloud)**
- Create free account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get connection string
- Replace `MONGO_URI` in `.env` file

### 3. Configure Environment Variables

Create `backend/.env` file:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key_change_this_to_something_random
```

**Important:** Change `JWT_SECRET` to a random string for security!

### 4. Seed the Database (Optional)

To add sample products:
```bash
cd backend
node seed.js
```

### 5. Create Admin User

To create an admin user (required for admin panel):
```bash
cd backend
node createAdmin.js
```

Follow the prompts to enter:
- Admin email
- Admin password
- Admin name

### 6. Start the Application

**Option 1: Run both together**
```bash
npm run dev
```

**Option 2: Run separately**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm start
```

### 7. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### 8. First Steps

1. Register a new user account
2. Login with your credentials
3. Browse products
4. Add products to cart
5. If you created an admin user, login and access `/admin` to manage products

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your `MONGO_URI` in `.env` file
- If using Atlas, ensure your IP is whitelisted

### Port Already in Use
- Backend: Change `PORT` in `.env` file
- Frontend: Change port in `frontend/package.json` scripts or set `PORT=3001` environment variable

### Admin Panel Not Accessible
- Make sure you've created an admin user using `createAdmin.js`
- Check that your user has `isAdmin: true` in the database
- Ensure you're logged in with the admin account

## Next Steps

- Customize the design to match the Figma template
- Add more products via admin panel
- Test all features (search, cart, authentication)
- Deploy to production when ready

