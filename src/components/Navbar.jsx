import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import OrderPopup from './OrderPopup'
import '../styles/navbar.css'

import logo from '../assets/logo1.png'

const navLinks = [
  { label: 'Menu',                  to: '/menu'         },
  { label: 'About',                 to: '/about'        },
  { label: 'Events',                to: '/events'       },
  { label: 'Catering',              to: '/catering'     },
  { label: "Bowl'd Masala Magic",   to: '/masala-magic' },
  { label: 'Franchise Information', to: '/franchise'    },
  { label: 'Fun Fact With BM',      to: '/fun-fact'     },
  { label: 'Locations',             to: '/locations'    },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [popupOpen,  setPopupOpen]  = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const isHome   = location.pathname === '/'

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const solidBg = !isHome || scrolled

  return (
    <>
      <motion.nav
        className={`navbar${solidBg ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <div className="navbar-inner">

            {/* ── Logo ── */}
            <button className="navbar-logo" onClick={() => navigate('/')}>
              <img src={logo} alt="Bowl'd Masala" className="navbar-logo-img" />
            </button>

            {/* ── Desktop Links ── */}
            <ul className="navbar-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* ── Order CTA — opens popup ── */}
            <div className="navbar-cta">
              <button
                className="btn-order"
                onClick={() => setPopupOpen(true)}
              >
                Order Now →
              </button>
            </div>

            {/* ── Hamburger ── */}
            <button
              className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>

          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar-mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="navbar-mobile-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}

                {/* Mobile Order Now — also opens popup */}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <button
                    className="btn-order-mobile"
                    onClick={() => {
                      setMenuOpen(false)
                      setTimeout(() => setPopupOpen(true), 250)
                    }}
                  >
                    Order Now →
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Order Popup ── */}
      <OrderPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  )
}