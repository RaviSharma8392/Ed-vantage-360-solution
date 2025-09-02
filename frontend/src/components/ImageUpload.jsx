// src/components/ImageUpload.jsx
import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({ onUpload }) => {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    // 1. Get signature from backend
    const sigRes = await axios.get(
      "http://localhost:5000/api/upload/signature"
    );
    const { signature, timestamp, cloudName, apiKey } = sigRes.data;

    // 2. Create form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);

    // 3. Upload to Cloudinary
    const uploadRes = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    setLoading(false);
    onUpload(uploadRes.data.secure_url); // send URL to parent
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {loading && <p>Uploading...</p>}
    </div>
  );
};

export default ImageUpload;
