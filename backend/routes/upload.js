// backend/routes/upload.js
const express = require("express");
const { v2: cloudinary } = require("cloudinary");

const router = express.Router();

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// endpoint to generate signature
router.get("/signature", async (req, res) => {
    console.log("hi")
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      { timestamp },
      process.env.CLOUDINARY_API_SECRET
    );

    res.json({
      signature,
      timestamp,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
    });
  } catch (error) {
    console.error("❌ Cloudinary signature error:", error);
    res.status(500).json({ error: "Failed to generate signature" });
  }
});

module.exports = router;
