import React, { useState } from 'react'
import 'flowbite'

const prefix = import.meta.env.BASE_URL;
const encodePath = (path) => path.replace(/ /g, '%20');

const networkGallery = [
  "Network1.png",
  "Network2.png",
  "Network3.png",
  "Network4.png",
  "Network5.png",
  "Network7.png",
  "Network8.png",
  "Network9.png",
  "Network11.png",
  "Network12.png",
  "Network13.png",
  "Network14.png",
  "Network14.png",
  "Network15.png",
  "Network16.png",
  "Network17.png",
  "Network18.png",
  "Network19.png",
];

export const Project_network = () => {
  {/** Expand Image */ }
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="Project_network" className="w-screen bg-[#fdfaf5] text-[#1e1e1e] py-16 px-4 md:px-10 lg:px-16 space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-justify">Network - Group Work</h2>
        <h2 className="font-sans">Design Development, Constuction Set, Revit</h2>

        {/* Image Carousel */}
        <div id="controls-carousel" className="relative items-center justify-center w-full mt-4 mb-20" data-carousel="static">
          <div className="relative h-[750px] overflow-hidden rounded-2xl shadow-xl">
            {networkGallery.map((img, index) => (
              <div
                key={index}
                className={`hidden duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={`${prefix}${encodePath("photos/CONSTRUCTION SET - Network/")}${encodePath(img)}`}
                  className="w-full h-full object-contain"
                  alt=""
                  onClick={() => openImage(`${prefix}${encodePath("photos/CONSTRUCTION SET - Network/")}${encodePath(img)}`)}
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
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="project-paragraph">
                The <strong>Network</strong> addresses the desired agency sought after by the target
                demographic of temporary occupants, generally ranging from the ages of
                twenty to mid-thirties, by providing an individualized experience for each
                resident, prioritizing a theatrical circulation path that relieves into individual
                paths for each resident.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/CONSTRUCTION SET - Network/Network7.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/CONSTRUCTION SET - Network/Network7.png`)}
              />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>

          </div>

          {/* Section 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/CONSTRUCTION SET - Network/Network8.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/CONSTRUCTION SET - Network/Network8.png`)}
              />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="project-paragraph">
                Adjacent to the live
                work units, the two-bedroom units share the parti wall. The two-bedroom
                units have three configurations for three different residential preferences. 
                No two balconies face on another, in order to
                convey a feeling of ownership over ones space.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="project-paragraph">
                The less subtle attraction of the Network is the “network” itself, the series of
                walkways that sit within the empty space of the three towers. The upper level
                outdoor spaces created by the balconies are medium sized spaces,
                anticipated for small gatherings or individual activity that requires a slightly
                larger space. The ground floor provides the largest outdoor spaces,
                allocated for large outdoor gatherings like barbecues, park games, and
                larger party events.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/CONSTRUCTION SET - Network/Network9.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/CONSTRUCTION SET - Network/Network9.png`)}
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
