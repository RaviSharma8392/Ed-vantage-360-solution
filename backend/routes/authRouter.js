const express = require("express");
const authRouter = express.Router();
const { signUp, login } = require("../controllers/authController");

// Signup route
authRouter.post("/auth", signUp);

// Login route
authRouter.post("/login", login);
// logout route
authRouter.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure:false,// true in production (HTTPS)
    sameSite: 'none', //none is used for cookie will be sent with cross-site requests, if cookie has Secure: true
  });
  return res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = authRouter;
