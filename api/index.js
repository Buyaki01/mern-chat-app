import express from 'express'; // Add "type": "module", in package.json to allow one to use import instead of require
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
})

const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})
