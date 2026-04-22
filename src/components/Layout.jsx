import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout({ theme, onToggleTheme }) {
  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
