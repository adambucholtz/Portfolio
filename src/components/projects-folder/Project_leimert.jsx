import React, { useState } from 'react'

const leimertGallery = [
  "Leimert-1.png",
  "Leimert-2.png",
  "Leimert-3.png",
  "Leimert-4.png",
];

export const Project_leimert = () => {
  {/** Expand Image */ }
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="Project_leimert" className="w-screen bg-[#fdfaf5] text-[#1e1e1e] py-16 px-4 md:px-10 lg:px-16 space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-justify">Leimert Park Community Arts Center</h2>
        <h2>Public, Varying Space, Depth, Intrigue, Garden Space</h2>

        {/* Image Carousel */}
        <div id="controls-carousel" className="relative items-center justify-center w-full mt-4 mb-20" data-carousel="static">
          <div className="relative h-[750px] overflow-hidden rounded-2xl shadow-xl">
            {leimertGallery.map((img, index) => (
              <div
                key={index}
                className={`hidden duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={`/photos/FALL SECOND YEAR/${img}`}
                  className="w-full h-full object-contain"
                  alt=""
                  onClick={() => openImage(`/photos/FALL SECOND YEAR/${img}`)}
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
              <p>
                The main idea of this project is exploring the variation of the grid in previous
                renditions to develop varying spaces, depth, and intrigue. The project utilizes
                its variety and connects the variations together to form one cohesive through
                line with its circulation.
              </p>
            </div>
            <img src="/photos/FALL SECOND YEAR/Leimert-2nd-3rd-Plan.png"
              className="lg:w-1/2 w-full rounded-xl shadow-lg object-contain"
              alt=""
              onClick={() => openImage(`/photos/FALL SECOND YEAR/Leimert-2nd-3rd-Plan.png`)}
            />
          </div>

          {/* Section 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <img src="/photos/FALL SECOND YEAR/Leimert-Sub-Ground-Plan.png"
              className="lg:w-1/2 w-full rounded-xl shadow-lg object-contain"
              alt=""
              onClick={() => openImage(`/photos/FALL SECOND YEAR/Leimert-Sub-Ground-Plan.png`)}
            />
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p>On the first floor users can enter through two main entrances. One accesses
                the cafe and the other to an information desk that peers into the auditorium be
                low. There is a constant dialogue between outdoor and indoor spaces both with
                subtracting away from the mass and through glazing. The first floor exemplifies
                this dialogue. There is circulation between an outdoor patio space and an in
                door workspace connected through the cafe and second gallery. The sub level
                slowly drops below the superstructure leading into a spacious lobby. From the
                lobby leads into the first gallery which showcases the prominent musical im
                pact of the community. This gallery also is multi-heighted facilitating amble light
                and symbolically suggesting the scale of impact of the musical achievements
                of the community. </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p>
                Another focus of the proposal is its connection with gardening. Inspired by
                the Ron Finley Project there is an exterior space on the upper most corner
                designed to facilitate a potential rooftop gardening space. Its large square
                footage provides ample room to educate and cultivate and even section off a
                space if a greenhouse is desired. Many of the spaces that open the elements
                can be used to house a variety of plant life bringing the earth within and con
                tinuing a connection between exterior and interior.
              </p>
            </div>
            <img src="/photos/FALL SECOND YEAR/Leimert-Cross-Section-B-C.png"
              className="lg:w-1/2 w-full rounded-xl shadow-lg object-contain"
              alt=""
              onClick={() => openImage(`/photos/FALL SECOND YEAR/Leimert-Cross-Section-B-C.png`)}
            />
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