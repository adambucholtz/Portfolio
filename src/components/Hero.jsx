import React from 'react'
import 'flowbite'

export const Hero = () => {
  

  return (
    <div id="home" className="bg-primary-theme h-dvh w-screen flex-center">
      <div className="flex w-full max-w-7xl items-center justify-between">
        
        {/* Left: Hook Text */}
        <div className="flex-1 p-20 z-10">
          <h2 class="font-tinos text-[#383839dd] pb-5 text-lg">Welcome to</h2>
          <h1 className="font-quint text-text-primary text-6xl lg:text-8xl">
            My Portfolio
          </h1>
          <p className="font-tinos pt-10 pb-10 mt-4 text-lg text-[#383839dd] max-w-md">
            Discover my work, interesting projects, and progression over the years.
          </p>
          <div class="flex-1 pt-15">
            <a type="button" href="#about" class="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
            font-tinos rounded-lg text-lg px-5 py-2.5 text-center me-4 mb-4">Get Started<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
        </div>

        {/* Carosel */}
        <div className="flex-1 flex justify-center pr-14 border-inherit">
          <div id="default-carousel" class="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
             
              <div class="duration-[1s] ease-in-out" data-carousel-item="active">
                <img src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_03.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Hello"/>
              </div>
              
              <div class="hidden duration-[1s] ease-in-out" data-carousel-item>
                <img src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_04.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              
              <div class="hidden duration-[1s] ease-in-out" data-carousel-item>
                  <img src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_05.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>

              <div class="hidden duration-[1s] ease-in-out" data-carousel-item>
                  <img src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_07.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>

              <div class="hidden duration-[1s] ease-in-out" data-carousel-item>
                  <img src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_08.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
            </div>
            { /* Slider controls Commented Out 
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
            */}
          </div>
        </div>
        {/* Background picture */}
        <img src="photos/Second_Year_1.png" class="absolute left-1/2 h-[700px] w-[1000px]"></img>
      </div>
    </div>
  )
}