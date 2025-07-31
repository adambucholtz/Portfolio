import React from 'react'
import 'flowbite'

export const Hero = () => {
  

  return (
    <div id="home" className="bg-primary-theme h-dvh w-screen flex items-center justify-center relative overflow-hidden">
      <div className="flex w-full items-center justify-between">
        
        {/* Left: Hook Text */}
        <div className="absolute text-center z-10 max-w-xl p-10 left-28">
          <h2 className="font-tinos text-[#383839dd] pb-5 text-lg">Welcome to</h2>
          <h1 className="font-quint text-text-primary text-6xl lg:text-8xl">
            My Portfolio
          </h1>
          <p className="font-tinos pt-10 pb-10 mt-4 text-lg text-[#383839dd] max-w-md">
            Discover my work, interesting projects, and progression over the years.
          </p>
          <div className="flex-1 pt-15">
            <a type="button" href="#about" class="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
            font-tinos rounded-lg text-lg px-5 py-2.5 text-center me-4 mb-4">Get Started<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
        </div>
        {/* Background picture */}
        <img src="photos/Second_Year_1.png" className="absolute right-14 h-[700px] w-[900px] object-contain"></img>
      </div>
    </div>
  )
}