import React, { useState } from 'react'

const networkImages = [
  "Network-1.png",
  "Network-3.png",
  "Network-4.png",
  "Network-5.png",
  "Network-6.png",
  "Network-7.png",
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
        <h2 className="text-5xl font-bold text-justify">Network - Group Work</h2>
        <h2>Design Development, Constuction Set, Revit</h2>

        {/* Image Carousel */}
        <div id="controls-carousel" className="relative items-center justify-center w-full mt-4 mb-20" data-carousel="static">
          <div className="relative h-[750px] overflow-hidden rounded-2xl shadow-xl">
            {networkImages.map((img, index) => (
              <div
                key={index}
                className={`hidden duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={`/photos/CONSTRUCTION SET - Network/${img}`}
                  className="w-full h-full object-contain"
                  alt=""
                  onClick={() => openImage(`/photos/CONSTRUCTION SET - Network/${img}`)}
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
                The Network addresses the desired agency sought after by the target
                demographic of temporary occupants, generally ranging from the ages of
                twenty to mid-thirties, by providing an individualized experience for each
                resident, prioritizing a theatrical circulation path that relieves into individual
                paths for each resident. The three towers of the Network each serve a
                different sub genre within the overall target demographic, consisting of four
                unit types, with each type having three different configurations, resulting in a
                total of twelve unique unit plans. The live-work units are located in the
                largest tower, along the edge of the street across from the transit center.
                This orientation best allows for visitors of the live-work units, who may not
                be living in the units but have business to attend to with the renters, a
                separately desired circulation path, being the egress stairs that are tucked in
                between the live-work units. This however, is not a limitation, as if desired,
                the central circulation path is open to all on the site.
              </p>
            </div>
            <img src="/photos/CONSTRUCTION SET - Network/Network-4.png"
              className="lg:w-1/2 w-full rounded-xl shadow-lg object-contain"
              alt=""
              onClick={() => openImage(`/photos/CONSTRUCTION SET - Network/Network-4.png`)}
            />
          </div>

          {/* Section 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <img src="/photos/CONSTRUCTION SET - Network/Network-5.png"
              className="lg:w-1/2 w-full rounded-xl shadow-lg object-contain"
              alt=""
              onClick={() => openImage(`/photos/CONSTRUCTION SET - Network/Network-5.png`)}
            />
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p>
                Adjacent to the live
                work units, the two-bedroom units share the parti wall. The two-bedroom
                units have three configurations for three different residential preferences; an
                internalized balcony within the middle of the unit, which is easily accessible
                and acts as a common room of sorts, an external balcony at the corner of
                the non-parti wall, which has semi-private balcony access, as it is tucked at
                the end of the hall, and lastly the external balcony attached to the two
                bedrooms, providing the most privacy of the three balconies. This logic is
                repeated within the one-bedroom and studio units as well, with the plans
                varying every three floors. No two balconies face on another, in order to
                convey a feeling of ownership over ones space.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p>
                The less subtle attraction of the Network is the “network” itself, the series of
                walkways that sit within the empty space of the three towers.  The series of
                six walkways features three stair variations which all discharge to a
                communal outdoor balcony space. Where these spaces are located
                determines the orientation of the balconies within the buildings, and whether
                they face away from the parcel or to the neighboring parcels, providing
                privacy in small outdoor spaces “owned” by the occupants. The upper level
                outdoor spaces created by the balconies are medium sized spaces,
                anticipated for small gatherings or individual activity that requires a slightly
                larger space. The ground floor provides the largest outdoor spaces,
                allocated for large outdoor gatherings like barbecues, park games, and
                larger party events
              </p>
            </div>
            <img src="/photos/CONSTRUCTION SET - Network/Network-6.png"
              className="lg:w-1/2 w-full rounded-xl shadow-lg object-contain"
              alt=""
              onClick={() => openImage(`/photos/CONSTRUCTION SET - Network/Network-6.png`)}
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
