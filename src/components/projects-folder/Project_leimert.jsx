import React, { useState } from 'react'

const prefix = import.meta.env.BASE_URL;


const leimertGallery = [
  "Leimert-1.png",
  "Leimert-2.png",
  "Leimert-3.png",
  "Leimert-Diagram1.png",
  "Leimert-2nd-3rd-Plan.png",
  "Leimert-Sub-Ground-Plan.png",
  "Leimert-Cross-Section-B-C.png",
];

export const Project_leimert = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? leimertGallery.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === leimertGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="Project_leimert" className="w-screen bg-[#fdfaf5] text-[#1e1e1e] py-16 px-4 md:px-10 lg:px-16 space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-justify">Leimert Park Community Arts Center</h2>
        <h2 className="font-sans">Public, Varying Space, Depth, Intrigue, Garden Space</h2>

        {/* Image Carousel */}
        <div className="relative bg-[#fdfaf5] h-[700px] w-full overflow-hidden rounded-2xl shadow-xl mt-6 mb-20 border border-[#e0e0e0]">
          <img
            src={`${prefix}photos/FALL SECOND YEAR/${leimertGallery[currentIndex]}`}
            className="w-full h-full object-contain transition-all duration-500"
            onClick={() =>
              openImage(`${prefix}photos/FALL SECOND YEAR/${leimertGallery[currentIndex]}`)
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

        {/* Main Description */}
        <div className="space-y-16">
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="project-paragraph text-left">
                The main idea of this project is exploring the variation of the grid in previous
                renditions to develop varying spaces, depth, and intrigue. The project utilizes
                its variety and connects the variations together to form one cohesive through
                line with its circulation.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/FALL SECOND YEAR/Leimert-Diagram2.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/FALL SECOND YEAR/Leimert-Diagram2.png`)}
              />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/FALL SECOND YEAR/Leimert-4.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/FALL SECOND YEAR/Leimert-4.png`)}
              />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>

            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="project-paragraph text-right">There is a constant dialogue between outdoor and indoor spaces both with
                subtracting away from the mass and through glazing. </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="project-paragraph text-left">
                Another focus of the proposal is its connection with gardening. Many of the spaces
                that open the elements
                can be used to house a variety of plant life bringing the earth within and con
                tinuing a connection between exterior and interior.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/FALL SECOND YEAR/Leimert-Longitudinal-Section-A.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/FALL SECOND YEAR/Leimert-Longitudinal-Section-A.png`)}
              />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>

          </div>
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