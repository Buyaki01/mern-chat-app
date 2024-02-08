import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import express from 'express'; // Add "type": "module", in package.json to allow one to use import instead of require
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message)
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})

app.use("/api/register", userRoutes);
app.use("/api/login", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  })
})