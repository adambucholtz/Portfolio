import React from 'react'

export const About = () => {
  return (
    <div id="about" class="min-h-screen w-screen px-4 py-10 bg-gray-100">
      {/** Header */}
      <div class="flex-center pt-[60px] pb-12">
        <h1 class="font-quint text-text-primary text-8xl underline">About Me</h1> 
      </div>
      {/**Content */}
      <div class="flex-center flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        {/**Left side */}
        <div>
          <img src="/photos/adam-portrait.jpg" alt="..." class="w-[480px] h-[640px] object-cover rounded-md shadow-lg"></img>
        </div>
        {/**Right Side */}
        <div class="w-full max-w-md text-lg leading-relaxed text-gray-700">
          <h1 class="">
            Born and raised on the central coast, I, Adam Henry Bucholtz, am currently a student attending California 
            Polytechnic University Pomona pursuing a Bachelors of Architecture. I look forward to working on design that 
            emphasizes the needs of the public and the communities he serves as well as 
            unconventional applications of architecture.
            <br />
            <br />
            Through my studies, I have also developed an 
            affinity for materiality, texture, detail, and construction. 
            In my personal life, I enjoys spending time with my family of 6, running a 5k, 
            and pursuing fluency in Spanish. 
          </h1>
        </div>
      </div>
    </div>
  )
}
