import React, { useState } from 'react'
import 'flowbite'

const prefix = import.meta.env.BASE_URL;

const imagePaths = [
  [
    `${prefix}photos/THIRD YEAR SPRING - Oasis/Oasis-1.jpg`,
    `${prefix}photos/SPRING SECOND YEAR - Shift/Shift-Render-Lobby.png`,
    `${prefix}photos/SPRING SECOND YEAR - Shift/Shift-Render-1.png`,
  ],
  [
    `${prefix}photos/SPRING SECOND YEAR - Shift/Shift-Render-2.png`,
    `${prefix}photos/FALL SECOND YEAR/Leimert-1.png`,
    `${prefix}photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-1.jpeg`,
  ],
  [
    `${prefix}photos/THIRD YEAR SPRING - Oasis/Oasis-5.jpg`,
    `${prefix}photos/FALL SECOND YEAR/Leimert-2.png`,
    `${prefix}photos/SPRING SECOND YEAR - Shift/Shift-1.png`,
  ],
  [
    `${prefix}photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-Model-1.png`,
    `${prefix}photos/FALL SECOND YEAR/Leimert-3.png`,
    `${prefix}photos/FALL SECOND YEAR/Leimert-4.png`,
  ],
];

const imageClass =
  'h-full max-w-full rounded-lg opacity-80 hover:opacity-100 hover:scale-110 hover:shadow-xl transition-all duration-500 ease-in-out';

export const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="home" className="bg-[#cecbc4] h-dvh w-screen flex items-center justify-center relative overflow-hidden">
      <img className="absolute z-10 h-[700px] w-[700px] -left-28 -bottom-36" src="/photos/LOGO.png" alt="" />
      <h1 className="font-sans absolute z-10 left-1/3 bottom-40 text-3xl">Selected works over the years.</h1>

      {/* Gallery */}
      <div className="flex w-full h-full object-contain items-center justify-between">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagePaths.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {column.map((src, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    src={src}
                    alt=""
                    className={imageClass + ' cursor-pointer'}
                    onClick={() => openImage(src)}
                  />
                </div>
              ))}
            </div>
          ))}
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
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl transition-transform duration-300 transform scale-100"
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
  );
};