import React from "react";

// Image Card Component
const GalleryImage = ({ src, alt }) => (
  <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 min-w-[200px]">
    <img
      src={src}
      alt={alt}
      className="w-full h-60 object-cover"
      loading="lazy"
    />
  </div>
);

// Video Card Component
const GalleryVideo = ({ src, title }) => (
  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
    <iframe
      src={src}
      title={title}
      className="w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  </div>
);

const PastEditions = ({ media }) => {
  // Split images: first 5 in grid, rest in horizontal scroll
  const firstImages = media.images?.slice(0, 3) || [];
  const extraImages = media.images?.slice(3) || [];

  return (
    <div className="p-8 bg-black min-h-screen text-gray-100">
      {/* Heading */}
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Past Editions
        </h1>
        <p className="mt-3 text-lg text-gray-400">
          A glimpse into our journey through past events
        </p>
      </div> */}

      {/* Images Section */}
      {media.images?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-6 text-gray-200">Images</h2>

          {/* First 5 in grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
            {firstImages.map((src, i) => (
              <GalleryImage key={i} src={src} alt={`Past Event ${i + 1}`} />
            ))}
          </div>

          {/* Rest in horizontal scroll */}
          {extraImages.length > 0 && (
            <div className="overflow-x-auto">
              <div className="flex space-x-4 pb-4">
                {extraImages.map((src, i) => (
                  <GalleryImage
                    key={i + 5}
                    src={src}
                    alt={`Past Event ${i + 6}`}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Videos Section */}
      {media.videos?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-6 text-gray-200">Videos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {media.videos.map((src, i) => (
              <GalleryVideo key={i} src={src} title={`Past Video ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PastEditions;
