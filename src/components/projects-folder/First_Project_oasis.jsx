import React from 'react'

export const First_Project_oasis = () => {
  return (
    <section id="First_Project_oasis" className="w-screen bg-[#fdfaf5] text-[#1e1e1e] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-10 text-center">The Oasis</h2>

        {/* Main Description */}
        <p className="text-lg leading-relaxed whitespace-pre-line mb-10">
          When you think of an <strong>oasis</strong>, it evokes strong feelings of ease, desire, and having your needs met. Not only does the
          project focus on accommodating the needs of one specific demographic but a collective of a diverse demographic, first
          time dwelling owners in the rise of increasing housing instability. The project aims to satisfy the varying needs for all
          of these users in what many consider a very prescriptive area of architecture, housing. One of the common themes that
          drove the project forward was individuality and uniqueness. These themes, supported by giving users agency, helped
          inform the decisions that developed the project. It became a conversation about how it is possible to maximize the
          differences within the project, while still maintaining a collective look.
          <br></br>
          <br></br>
          Architecturally, the project was developed from three separate and distinct massings that share a universal ideal. The
          towers vary in height, size, and lifestyle. The earthy red short yet long tower, adjacent to the train station houses the
          live work units. The red tower is long yet short, and has a dark red appearance. The orange tower stands as a medium
          between the three, quite equal in proportion. Finally, the yellow tower is distinctly very tall but very thin. Through this
          decision, each tower has its own construction type, appeal, and lifestyle but when looking afar at the overall campus, it
          architecturally adheres to each other, within the desert southwest palette of Santa Ana, its context, and an overall
          warmer feeling. The yellow tower is rotated for an ideal sun angle. The lowest level functions as the service floor as
          well as a public center. The commercial sector lines the street adjacent to the most public aspect of the site, the train
          station. The closer one moves towards the back of the parcel, the more private the spaces become, starting with the
          cafe, then to the gym, and finally resolving to the residential lobby. The orientation of the towers shelter a central space
          that is peaceful and quaint and steps down from the site continuing to reinforce a sheltered space for the users. This
          space allows users to navigate to any area on the site, solidifying the project’s emphasis on user choice. The design of
          the towers is to facilitate unique lifestyles for a variety of individuals that is both comforting and exciting.
          <br></br>
          <br></br>
          <div className="text-center">
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

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <img
            src="/photos/THIRD YEAR SPRING - Oasis/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_012.jpg"
            alt="Exterior View from Degnan Boulevard"
            className="rounded-lg shadow-md w-full object-cover"
          />
          <img
            src="/photos/THIRD YEAR SPRING - Oasis/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_010.jpg"
            alt="Community Musical Showcase Room"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <img
            src="/photos/THIRD YEAR SPRING - Oasis/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_09.jpg"
            alt="Interior Circulation and Gallery"
            className="rounded-lg shadow-md w-full object-cover"
          />
          <img
            src="/photos/THIRD YEAR SPRING - Oasis/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_011.jpg"
            alt="Axonometric Section"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Optional: Add more description or image sets here */}
      </div>
    </section>
  )
}
