export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "event_uploads"); // replace with your preset name

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dbcciugyn/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url; // 👈 Cloudinary URL
};
