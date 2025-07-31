import React from 'react'
import 'flowbite'

export const Hero = () => {
  

  return (
    <div id="home" className="bg-primary-theme h-dvh w-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute text-center z-10 max-w-xl p-10">
          <h2 className="font-tinos text-[#333336dd] pb-5 text-lg font-bold">Welcome to</h2>
          <h1 className="font-quint text-[#080808] text-6xl lg:text-8xl underline">
            Adam's Portfolio
          </h1>
          <p className="font-tinos pt-10 pb-10 mt-4 text-lg text-[#333336dd] max-w-md font-bold">
            Discover my work, interesting projects, and progression over the years.
          </p>
      </div>

      {/* Gallery */}
      <div className="flex w-full items-center justify-between">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_0.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_06.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_012.jpg" alt=""/>
              </div>
          </div>
          <div class="grid gap-4">
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_07.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/Hero_Background_Portfolio.png" alt=""/>
              </div>
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_09.jpg" alt=""/>
              </div>
          </div>
          <div class="grid gap-4">
              <div>
                 <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_010.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/Second_Year_1.png" alt=""/>
              </div>
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_011.jpg" alt=""/>
              </div>
          </div>
          <div class="grid gap-4">
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_03.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/arch-pic-1.png" alt=""/>
              </div>
              <div>
                  <img class="h-fit max-w-full rounded-lg opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out" 
                  src="/photos/arch-pic-2.png" alt=""/>
              </div>
          </div>
      </div>
      </div>
    </div>
  )
}