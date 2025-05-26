const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ email, password: hashedPassword, name });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "User registration failed" });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email/password, find user in DB etc.
    // if invalid: return res.status(400).json({ error: "Invalid credentials" });

    // Assume user found & validated
    const user = { id: "someUserId", role: "admin" }; // example

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set token as cookie for client
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true in production for HTTPS
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 3600000, // 1 hour in milliseconds
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


module.exports = { signUp, login };
