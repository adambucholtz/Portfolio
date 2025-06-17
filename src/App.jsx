import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"  
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Firstp } from "./components/projects-folder/Firstp"

function App() {
  
  return (
    <main className= "relative min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Firstp />
    </main>
  )
}

export default App
