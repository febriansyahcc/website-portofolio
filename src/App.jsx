import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import FloatingCV from './components/FloatingCV'
import ScrollAnimator from './components/ScrollAnimator'

import './styles/animations.css'

function App() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Timeline />
        <Achievements />
        <Contact />
      </main>
      <FloatingCV />
    </>
  )
}

export default App
