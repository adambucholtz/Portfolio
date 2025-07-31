import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"  
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { First_Project_oasis } from "./components/projects-folder/First_Project_oasis"

function App() {
  
  return (
    <main className= "relative min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <First_Project_oasis />
      <Contact />
    </main>
  )
}

export default App
