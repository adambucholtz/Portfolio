import React, { useState } from 'react'

const oasisGallery = [
  "Oasis-1.jpg",
  "Oasis-11.jpg",
  "Oasis-5.jpg",
  "Oasis-2.jpg",
  "Oasis-3.jpg",
  "Oasis-4.jpg",
  "Oasis-6.jpg",
  "Oasis-7.jpg",
  "Oasis-8.jpg",
];

export const Project_oasis = () => {
  {/** Expand Image */ }
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="Project_oasis" className="w-screen bg-[#fffefb] text-[#1e1e1e] py-16 px-4 md:px-10 lg:px-16 space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-justify">Oasis</h2>
        <h2 className="font-sans">Public, Multi-Family Residential</h2>

        {/* Image Carousel */}
        <div id="controls-carousel" className="relative items-center justify-center w-full mt-4 mb-20" data-carousel="static">
          <div className="relative h-[750px] overflow-hidden rounded-2xl shadow-xl">
            {oasisGallery.map((img, index) => (
              <div
                key={index}
                className={`hidden duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={`/photos/THIRD YEAR SPRING - Oasis/${img}`}
                  className="w-full h-full object-contain"
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
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 w-full">
              <img src="/photos/THIRD YEAR SPRING - Oasis/Oasis-3.jpg"
              className="rounded-xl shadow-lg object-contain cursor-pointer"
              alt=""
              onClick={() => openImage(`/photos/THIRD YEAR SPRING - Oasis/Oasis-3.jpg`)}
            />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>
            
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="text-lg font-helvetica leading-8 whitespace-pre-line text-justify indent-6 tracking-wide">
                When you think of an <strong>oasis</strong>, it evokes strong feelings of ease, desire, and having your needs met. Not only does the
                project focus on accommodating the needs of one specific demographic but a collective of a diverse demographic, first
                time dwelling owners in the rise of increasing housing instability. The project aims to satisfy the varying needs for all
                of these users in what many consider a very prescriptive area of architecture, housing. One of the common themes that
                drove the project forward was individuality and uniqueness. These themes, supported by giving users agency, helped
                inform the decisions that developed the project. It became a conversation about how it is possible to maximize the
                differences within the project, while still maintaining a collective look.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-4 text-lg leading-relaxed">
              <p className="text-lg font-helvetica leading-8 whitespace-pre-line mb-16 text-justify indent-6 tracking-wide">
                Architecturally, the project was developed from three separate and distinct massings that share a universal ideal. The
                towers vary in height, size, and lifestyle. The earthy red short yet long tower, adjacent to the train station houses the
                live work units. The red tower is long yet short, and has a dark red appearance. The orange tower stands as a medium
                between the three, quite equal in proportion. Finally, the yellow tower is distinctly very tall but very thin. Through this
                decision, each tower has its own construction type, appeal, and lifestyle but when looking afar at the overall campus, it
                architecturally adheres to each other, within the desert southwest palette of Santa Ana, its context, and an overall
                warmer feeling. The yellow tower is rotated for an ideal sun angle.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src="/photos/THIRD YEAR SPRING - Oasis/Oasis-7.jpg"
              className="rounded-xl shadow-lg object-contain cursor-pointer"
              alt=""
              onClick={() => openImage(`/photos/THIRD YEAR SPRING - Oasis/Oasis-7.jpg`)} />
              <p className="text-center text-lg italic mt-5 text-[#b8b7b7]">*Click Image to expand*</p>
            </div>

          </div>
        </div>


        <br></br>
        <p className="text-lg font-helvetica leading-8 whitespace-pre-line mb-16 text-justify indent-6 tracking-wide">
          The lowest level functions as the service floor as
          well as a public center. The commercial sector lines the street adjacent to the most public aspect of the site, the train
          station. The closer one moves towards the back of the parcel, the more private the spaces become, starting with the
          cafe, then to the gym, and finally resolving to the residential lobby. The orientation of the towers shelter a central space
          that is peaceful and quaint and steps down from the site continuing to reinforce a sheltered space for the users. This
          space allows users to navigate to any area on the site, solidifying the project’s emphasis on user choice. The design of
          the towers is to facilitate unique lifestyles for a variety of individuals that is both comforting and exciting.
          <br></br>
          <br></br>
          <div className="text-center bg-white shadow-md rounded-xl p-6 mt-8 w-fit mx-auto border border-gray-200">
            <strong>Building Data:</strong>
            <br></br>
            Total Building Area: 42,100ft
            <br></br>
            Lot Coverage: 45%
            <br></br>
            Total Units: 32
            <br></br>
            Live/Work Units: 6
            <br></br>
            2 Bedroom Units: 6
            <br></br>
            1 Bedroom Units: 8
            <br></br>
            Studio Units: 12
            <br></br>
          </div>
        </p>

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
