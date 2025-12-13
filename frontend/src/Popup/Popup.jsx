import { useState, useEffect } from "react";

export default function PopupRedirect() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true); // auto open once on mount
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl p-8 text-center transform transition-all duration-300 scale-95 animate-[fadeIn_0.3s_ease-out_forwards]">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition">
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          EdVantage Laureates – Tech Star Awards 2026 4th Edition{" "}
          <span className="block text-lg font-semibold text-green-700 mt-1">
            (ELTSA 2026)
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-8">
          Celebrating{" "}
          <span className="font-semibold text-green-700">
            Excellence Beyond Borders
          </span>
          <br />
          Join us for innovation, learning, and recognition.
        </p>

        {/* CTA Button */}
        <a
          href="https://edvantage360solution.netlify.app/ELTSA"
          target="_blank"
          onClick={() => setOpen(false)}
          className="inline-block rounded-xl bg-green-700 px-8 py-3 text-lg font-medium text-white shadow-lg hover:bg-green-800 hover:shadow-xl transition">
          Learn More
        </a>

        {/* <a
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);

            window.open(
              "https://edvantage360solution.netlify.app/GSSA",
              "_blank"
            );
          }}
          className="inline-block rounded-xl bg-green-700 px-8 py-3 text-lg font-medium text-white shadow-lg hover:bg-green-800 hover:shadow-xl transition">
          Learn More
        </a> */}
      </div>
    </div>
  );
}
