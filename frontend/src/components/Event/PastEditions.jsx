import { useNavigate } from "react-router-dom";
import React from "react";

/* ================= IMAGE CARD ================= */

const ImageCard = ({ src }) => (
  <div className="overflow-hidden rounded-xl bg-gray-900">
    <img
      src={src}
      alt=""
      loading="lazy"
      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
);

/* ================= MAIN ================= */

const PastEditions = ({ media }) => {
  const navigate = useNavigate();
  const images = media.images || [];

  return (
    <section className="bg-black min-h-screen text-gray-100 p-4 sm:p-6 md:p-8">
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-700 transition">
        ← Back to Home
      </button>

      <h2 className="text-2xl font-semibold mb-6">Images</h2>

      {/* AUTO GRID */}
      <div
        className="
          grid gap-4
          grid-cols-2
          sm:grid-cols-3
         
        ">
        {images.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>
    </section>
  );
};

export default PastEditions;
