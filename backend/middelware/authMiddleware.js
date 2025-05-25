const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyAdmin = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user to request for later use

    next(); // move to next middleware or route
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyAdmin;
