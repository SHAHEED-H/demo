import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { X, MapPin, ArrowRight, ExternalLink, Navigation } from 'lucide-react'
import '../styles/OrderPopup.css'

const locations = [
  { id: 1, name: 'Memorial City Mall',  city: 'Houston, TX',      address: '303 Memorial City Mall, Suite 395H',  status: 'Open',        slug: 'memorial-city', orderUrl: 'https://ordering-bowldmasala.com/home' },
  { id: 2, name: 'Katy Mills',          city: 'Katy, TX',         address: '5000 Katy Mills Cir, Suite 420',      status: 'Open',        slug: 'katy-mills',    orderUrl: 'https://ordering-bowldmasala.com/home' },
  { id: 3, name: 'The Woodlands',       city: 'Woodlands, TX',    address: '1201 Lake Woodlands Dr, Suite 2',     status: 'Open',        slug: 'woodlands',     orderUrl: 'https://ordering-bowldmasala.com/home' },
  { id: 4, name: 'Sugar Land',          city: 'Sugar Land, TX',   address: '16535 Southwest Fwy, Suite 104',      status: 'Open',        slug: 'sugar-land',    orderUrl: 'https://ordering-bowldmasala.com/home' },
  { id: 5, name: 'Pearland Town Center',city: 'Pearland, TX',     address: '11200 Broadway St, Suite 310',        status: 'Open',        slug: 'pearland',      orderUrl: 'https://ordering-bowldmasala.com/home' },
  { id: 6, name: 'Baybrook Mall',       city: 'Friendswood, TX',  address: '1000 W Bay Area Blvd, Suite 220',     status: 'Open',        slug: 'baybrook',      orderUrl: 'https://ordering-bowldmasala.com/home' },
  { id: 7, name: 'Uptown Park',         city: 'Houston, TX',      address: '1980 Post Oak Blvd, Suite 1750',      status: 'Coming Soon', slug: 'uptown-park',   orderUrl: null },
  { id: 8, name: 'Greenspoint Mall',    city: 'Houston, TX',      address: '12300 North Fwy, Suite 508',          status: 'Coming Soon', slug: 'greenspoint',   orderUrl: null },
]

export default function OrderPopup({ isOpen, onClose }) {
  const navigate = useNavigate()

  // Escape key
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [isOpen, onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSelect = (loc) => {
    onClose()
    if (loc.orderUrl) {
      window.open(loc.orderUrl, '_blank', 'noreferrer')
    } else {
      navigate(`/locations/${loc.slug}`)
    }
  }

  const open = locations.filter(l => l.status === 'Open')
  const soon = locations.filter(l => l.status === 'Coming Soon')

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Portal-style fixed layer ── */
        <div className="op-root">

          {/* Backdrop */}
          <motion.div
            className="op-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          />

          {/* Modal — fixed to viewport center */}
          <motion.div
            className="op-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Select your location to order"
            initial={{ opacity: 0, scale: 0.92, y: 28 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.94, y: 20  }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >

            {/* ── Header ── */}
            <div className="op-header">
              <div className="op-header-left">
                <div className="op-header-icon">
                  <Navigation size={18} />
                </div>
                <div>
                  <p className="op-eyebrow">Choose Your Location</p>
                  <h2 className="op-title">Where would you like to order from?</h2>
                </div>
              </div>
              <button className="op-close" onClick={onClose} aria-label="Close">
                <X size={16} />
              </button>
            </div>

            {/* ── Scrollable list ── */}
            <div className="op-body">

              {/* Open locations */}
              <p className="op-group-label">
                <span className="op-group-dot op-group-dot--open" />
                Now Open
              </p>
              <div className="op-list">
                {open.map((loc, i) => (
                  <motion.button
                    key={loc.id}
                    className="op-row"
                    onClick={() => handleSelect(loc)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="op-row-icon">
                      <MapPin size={15} />
                    </div>
                    <div className="op-row-info">
                      <span className="op-row-name">{loc.name}</span>
                      <span className="op-row-city">{loc.city}</span>
                      <span className="op-row-addr">{loc.address}</span>
                    </div>
                    <div className="op-row-action">
                      <span className="op-open-badge">
                        <span className="op-dot" />
                        Open
                      </span>
                      <div className="op-row-arrow">
                        <ExternalLink size={13} />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Coming soon locations */}
              <p className="op-group-label op-group-label--soon">
                <span className="op-group-dot op-group-dot--soon" />
                Coming Soon
              </p>
              <div className="op-list">
                {soon.map((loc, i) => (
                  <div key={loc.id} className="op-row op-row--soon">
                    <div className="op-row-icon op-row-icon--soon">
                      <MapPin size={15} />
                    </div>
                    <div className="op-row-info">
                      <span className="op-row-name">{loc.name}</span>
                      <span className="op-row-city">{loc.city}</span>
                      <span className="op-row-addr">{loc.address}</span>
                    </div>
                    <div className="op-row-action">
                      <span className="op-soon-badge">Soon</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Footer ── */}
            <div className="op-footer">
              <p className="op-footer-text">8 locations · More opening soon across Texas</p>
              <button
                className="op-view-all"
                onClick={() => { onClose(); navigate('/locations') }}
              >
                View All Locations <ArrowRight size={13} />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}