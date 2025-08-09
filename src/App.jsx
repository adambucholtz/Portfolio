import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"  
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Project_oasis } from "./components/projects-folder/Project_oasis"
import { Project_fan_bridge } from "./components/projects-folder/Project_fan_bridge"
import { Project_leimert } from "./components/projects-folder/Project_leimert"
import { Project_shift } from "./components/projects-folder/Project_shift"
import { Project_network } from "./components/projects-folder/Project_network"

function App() {
  
  return (
    <main className= "relative min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Project_fan_bridge />
      <Project_network />
      <Project_shift />
      <Project_leimert />
      <Project_oasis />
      <Contact />
    </main>
  )
}

export default App
