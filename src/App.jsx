import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import RoboticsPage from './pages/RoboticsPage.jsx'
import GISPage from './pages/GISPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const THEME_KEY = 'yi-theme'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const location = useLocation()

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'light' || saved === 'dark') setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.1 })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout theme={theme} onToggleTheme={toggleTheme} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          <Route path="/gis" element={<GISPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
