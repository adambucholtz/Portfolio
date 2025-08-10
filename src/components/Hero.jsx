import React, { useState, useEffect } from 'react'
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
    `${prefix}photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-Model-1.png`,
  ],
  [
    `${prefix}/photos/EyeCandy2.png`,
    `${prefix}photos/FALL SECOND YEAR/Leimert-2.png`,
    `${prefix}photos/FALL THIRD YEAR - Fan-Bridge/Fan-Bridge-1.jpeg`,
  ],
  [
    `${prefix}photos/SPRING SECOND YEAR - Shift/Shift-1.png`,
    `${prefix}/photos/EyeCandy3.png`,
    `${prefix}/photos/ext. pavillion 2.jpg`,
  ],
];

const imageClass =
  'h-full max-w-full rounded-lg opacity-90 hover:opacity-100 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out';

export const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowLogo(true);      
    }, 3000); // display title for 3.5s

    const timeout2 = setTimeout(() => {
      setShowGallery(true);
    }, 3200); // small delay after fade out

    const timeout3 = setTimeout(() => {
      setShowTitle(true);
    }, 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="home" className="bg-[#e4dcc7] h-dvh w-screen flex items-center justify-center relative overflow-hidden">

      {/**Text */}
      {showTitle && (<h1 className="font-helvetica text-[#000000] absolute z-10 text-2xl md:text-3xl text-center px-4 animate-fadeOut">Selected works over the years.</h1>)}

      {/** LOGO */}
      {showLogo && (<img className="absolute z-10 w-64 h-64 md:w-[450px] md:h-[450px] md:-left-20 md:-bottom-24 bottom-10 opacity-10 pointer-events-none animate-fadeInRight"
        src={`${prefix}/photos/LOGO.png`} alt="" />)}

      {/* Gallery */}
      {showGallery && (
        <div className="flex w-full h-full object-contain items-center justify-center overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-fadeInUp">
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
        </div>)}

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
