import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import SeriesSection from './components/SeriesSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import LoadingScreen from './components/LoadingScreen'

// A small helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Overlay Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main App Content fades in after loading finishes */}
      <main 
        className="min-h-screen bg-black select-none pointer-events-auto"
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-out' }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<SeriesSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App
