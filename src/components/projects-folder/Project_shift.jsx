import React, { useState } from 'react'

const prefix = import.meta.env.BASE_URL;

const shiftGallery = [
  "Shift-1.png",
  "Shift-3.png",
  "Shift-4.png",
  "Shift-5.png",
  "Shift-6.png",
  "Shift-7.png",
  "Shift-Render-1.png",
];

export const Project_shift = () => {
  {/** Expand Image */ }
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="Project_shift" className="w-screen bg-[#fffefb] text-[#1e1e1e] py-16 px-4 md:px-10 lg:px-16 space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-justify">Shift</h2>
        <h2 className="font-sans">Education, Institutional</h2>

        {/* Image Carousel */}
        <div id="controls-carousel" className="relative items-center justify-center w-full mt-4 mb-20" data-carousel="static">
          <div className="relative h-[800px] overflow-hidden rounded-2xl shadow-xl">
            {shiftGallery.map((img, index) => (
              <div
                key={index}
                className={`hidden duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={`${prefix}photos/SPRING SECOND YEAR - Shift/${img}`}
                  className="w-full h-full object-contain"
                  alt=""
                  onClick={() => openImage(`${prefix}photos/CONSTRUCTION SET - Network/${img}`)}
                />
              </div>
            ))}
          </div>

          <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/40 shadow-md backdrop-blur-sm hover:scale-105 transition">
              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
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
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/SPRING SECOND YEAR - Shift/Shift-3.png`}
              className="rounded-xl shadow-lg object-contain cursor-pointer"
              alt=""
              onClick={() => openImage(`${prefix}/photos/SPRING SECOND YEAR - Shift/Shift-3.png`)}
            />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>

            
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="project-paragraph">
                The project proposal design aims to satisfy environmental
                needs while facilitating a comfortable space for those inhabiting it,
                ideally the students, teachers, and staff. Basis of the design was for
                mulated in exercise one through photographing a tree resembling
                that of a canopy.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="project-paragraph">
                This shifted pattern that emerged could offer an captivating
                effect while achieving a beneficial environmental impact. By utilizing 
                the <strong>shifts</strong> in the design, overhangs form that protect lower floors
                from the harsh sun during the summer months yet with it tucked in
                glass facade, the winter months can recieve adequate daylighting.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/SPRING SECOND YEAR - Shift/Shift-8.png`}
              className="rounded-xl shadow-lg object-contain cursor-pointer"
              alt=""
              onClick={() => openImage(`${prefix}/photos/SPRING SECOND YEAR - Shift/Shift-8.png`)}
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
