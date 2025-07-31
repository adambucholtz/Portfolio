import React from 'react'
import 'flowbite'

const imagePaths = [
  [
    '/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_0.jpg',
    '/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_06.jpg',
    '/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_012.jpg',
  ],
  [
    '/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_07.jpg',
    '/photos/Hero_Background_Portfolio.png',
    '/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_09.jpg',
  ],
  [
    '/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_010.jpg',
    '/photos/Second_Year_1.png',
    '/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_011.jpg',
  ],
  [
    '/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_03.jpg',
    '/photos/arch-pic-1.png',
    '/photos/arch-pic-2.png',
  ],
];

const imageClass =
  'h-full max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-110 hover:shadow-xl transition-all duration-500 ease-in-out';

export const Hero = () => {
  

  return (
    <div id="home" className="bg-primary-theme h-dvh w-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute text-center z-10 max-w-xl p-10">
          <h2 className="font-tinos text-[#333336dd] pb-5 text-lg">Welcome to</h2>
          <h1 className="font-quint text-[#080808] text-6xl lg:text-8xl underline">
            Adam's Portfolio
          </h1>
          <p className="font-tinos pt-10 pb-10 mt-4 text-lg text-[#333336dd] max-w-md">
            Discover my work, interesting projects, and progression over the years.
          </p>
      </div>

      {/* Gallery */}
      <div className="flex w-full items-center justify-between">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagePaths.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {column.map((src, imgIndex) => (
                <div key={imgIndex}>
                  <img src={src} alt="" className={imageClass} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}