import User from "../models/User.js ";
import bcryptjs from 'bcryptjs';

export const register = async (req, res, next) => {
  const {username, email, password} = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
  
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};