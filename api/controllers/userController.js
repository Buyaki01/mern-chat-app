import User from "../models/User.js ";

export const register = async (req, res) => {
  const {username, email, password} = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
  
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};