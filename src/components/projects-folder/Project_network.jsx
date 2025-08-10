import React, { useState } from 'react'

const prefix = import.meta.env.BASE_URL;

const networkGallery = [
  "Network1.png",
  "Network2.png",
  "Network3.png",
  "Network4.png",
  "Network5.png",
  "Network7.png",
  "Network8.png",
  "Network9.png",
  "Network10.png",
  "Network11.png",
  "Network12.png",
  "Network13.png",
  "Network14.png",
  "Network15.png",
  "Network16.png",
  "Network17.png",
  "Network18.png",
  "Network19.png",
];

export const Project_network = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? networkGallery.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === networkGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="Project_network" className="w-screen bg-[#fdfaf5] text-[#1e1e1e] py-16 px-4 md:px-10 lg:px-16 space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-justify">Network - Group Work</h2>
        <h2 className="font-sans">Design Development, Constuction Set, Revit</h2>

        {/* Image Carousel */}
        <div className="relative bg-[#fdfaf5] h-[700px] w-full overflow-hidden rounded-2xl shadow-xl mt-6 mb-20 border border-[#e0e0e0]">
          <img
            src={`${prefix}/photos/CONSTRUCTION SET - Network/${networkGallery[currentIndex]}`}
            className="w-full h-full object-contain transition-all duration-500"
            onClick={() =>
              openImage(`${prefix}photos/CONSTRUCTION SET - Network/${networkGallery[currentIndex]}`)
            }
            alt=""
          />

          {/* Prev Button */}
          <button type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={goPrev} data-carousel-prev>
            <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/40 shadow-md backdrop-blur-sm hover:scale-105 transition">
              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>

          {/* Next Button */}
          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={goNext}
            data-carousel-next>
            <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/40 shadow-md backdrop-blur-sm hover:scale-105 transition">
              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-[97%] max-h-[97%] rounded-lg shadow-2xl transition-transform duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={closeImage}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  )
}
