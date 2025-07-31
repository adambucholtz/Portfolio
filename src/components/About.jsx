import React from 'react'

export const About = () => {
  return (
    <div id="about" class="min-h-screen w-screen px-4 py-10 bg-gray-100">
      {/** Header */}
      <div class="flex-center pt-[60px] pb-12">
        <h1 class="font-quint text-text-primary text-8xl underline">About</h1> 
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
          {/* Software Proficiency */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Software Proficiency</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Rhino",
                "Revit",
                "Illustrator",
                "Photoshop",
                "InDesign",
                "Vray",
                "Enscape",
                "Twinmotion",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Skillset */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skillset</h2>
            <ul className="space-y-2">
              {[
                "Architectural Design",
                "Design Development",
                "Construction Documents",
                "Representation and Rendering",
              ].map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-gray-700 text-base"
                >
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}
