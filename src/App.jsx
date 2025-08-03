import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"  
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Project_oasis } from "./components/projects-folder/Project_oasis"

function App() {
  
  return (
    <main className= "relative min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Project_oasis />
      <Contact />
    </main>
  )
}

export default App
