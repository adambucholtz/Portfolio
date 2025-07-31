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
        </div>
        {/* Background picture */}
        <img src="photos/Second_Year_1.png" className="absolute right-14 h-[700px] w-[900px] object-contain"></img>
      </div>
    </div>
  )
}