import React, { useState } from 'react'

const prefix = import.meta.env.BASE_URL;

const fanBridgeGallery = [
  "Fan-Bridge-1.jpeg",
  "Fan-Bridge-2.png",
  "Fan-Bridge-3.png",
  "Fan-Bridge-Data.png",
];


export const Project_fan_bridge = () => {
  {/** Expand Image  */ }
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="Project_fan_bridge" className="w-screen bg-[#fffefb] text-[#1e1e1e] py-16 px-4 md:px-10 lg:px-16 space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-justify">The Observatory</h2>
        <h2 className="font-sans">Mix, Public, Residential</h2>

        {/* Image Carousel */}
        <div id="controls-carousel" className="relative items-center justify-center w-full mt-4 mb-20" data-carousel="static">
          <div className="relative h-[700px] overflow-hidden rounded-2xl shadow-xl">
            {fanBridgeGallery.map((img, index) => (
              <div
                key={index}
                className={`hidden duration-700 ease-in-out`}
                data-carousel-item={index === 0 ? "active" : undefined}
              >
                <img
                  src={`${prefix}photos/FALL THIRD YEAR - Fan-Bridge/${img}`}
                  className="w-full h-full object-contain"
                  onClick={() => openImage(`${prefix}photos/FALL THIRD YEAR - Fan-Bridge/${img}`)}
                  alt=""
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
              <h3 className="text-2xl font-semibold">Occupancy & Height</h3>
              <p className="">Levels 1 & 2 are classified as <strong>Business (B)</strong>, and Level 3 is classified as <strong>Residential (R-2)</strong>.</p>
              <p className="">The building is designed to a <strong>Code Height</strong> of <strong>60'-0"</strong> and <strong>4 stories</strong>, constructed using <strong>Type IVA</strong> fire-resistive construction.</p>
              <p className="">Sprinklered according to <strong>NFPA-13 (903.3.1.1)</strong> for increased safety and allowable limits.</p>
            </div>

            <div className="lg:w-1/2 w-full">
              <img
                src={`${prefix}/photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-2nd-Floor-Plan.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-2nd-Floor-Plan.png`)}
              />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-Section-EW-NS.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-Section-EW-NS.png`)} />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>

            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold">Material & Exterior Systems</h3>
              <p>Exterior walls are constructed from <strong>noncombustible or ignition-resistant materials</strong> such as <em>Shou Sugi Ban</em> siding and stone paneling.</p>
              <p>Windows meet CBC 708A standards with <strong>multi-pane tempered glazing</strong>.</p>
              <p>Recycled aluminum louver shading and multi-pane glazing systems improve energy performance.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold">Fire & Egress</h3>
              <p>All common paths of egress are under <strong>125'</strong>, complying with IBC Table 1006.2.1 for R-2 occupancies.</p>
              <p>Exit separation exceeds the 1/3 diagonal requirement, with <strong>100'</strong> provided against the <strong>30'</strong> minimum required.</p>
              <p>Handrails maintain <strong>1½" clearance</strong> from adjacent surfaces and are free from sharp elements as per CBC 1014.7.</p>
            </div>

            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-3rd-Floor-Plan.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt=""
                onClick={() => openImage(`${prefix}/photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-3rd-Floor-Plan.png`)} />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 w-full">
              <img src={`${prefix}/photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-Section-EW-NS.png`}
                className="rounded-xl shadow-lg object-contain cursor-pointer"
                alt="Click Image to Expand"
                onClick={() => openImage(`${prefix}/photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-Section-EW-NS.png`)}
              />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>

            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold">Assembly & Details</h3>
              <p>Stone Paneling assembly includes <strong>8" batt insulation</strong>, <strong>3" rigid insulation</strong>, air space, clips, and variable-sized stone panels over gypsum and AVB barriers.</p>
              <p>Shou Sugi Ban siding features an ignition-resistant layered build over gypsum and batt insulation.</p>
              <p>Roof edge includes a stainless coping with drip edge, ZIP system sheathing, and closed-cell spray foam for high thermal resistance.</p>
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
