import React from 'react'

const projectData = [
  {
    title: "The Oasis",
    description:
      "When you think about the Oasis, it evokes strong feelings of...",
    image: "/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_012.jpg",
    link: "#First_Project_oasis",
  },
  {
    title: "Project #2",
    description:
      "Project 2 description...",
    image: "/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_010.jpg",
    link: "#",
  },
  {
    title: "Project #3",
    description:
      "Project 3 description...",
    image: "/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_09.jpg",
    link: "#",
  },
  {
    title: "Project #4",
    description:
      "Project 4 description...",
    image: "/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_09.jpg",
    link: "#",
  },
  {
    title: "Project #5",
    description:
      "Project 5 description...",
    image: "/photos/2025S_ARC3021A_02_Lords_Bucholtz_Adam_M2_09.jpg",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="relative min-h-screen w-screen bg-primary-theme px-4 py-16">
      <h2 className="font-quint text-text-primary text-center text-6xl lg:text-8xl">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="max-w-sm bg-[#0e3249] border border-[#d6c7a1] rounded-lg shadow-md transition-transform hover:scale-[1.02]"
          >
            <a href={project.link}>
              <img className="rounded-t-lg w-full h-48 object-cover" src={project.image} alt={project.title} />
            </a>
            <div className="p-5">
              <a href={project.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-flex items-center px-4 py-1.5 text-sm font-medium bg-[#e7cd9d] text-[#6b4f3b] rounded-full hover:bg-[#dbc6ac] transition-colors"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
