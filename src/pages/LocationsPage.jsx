import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Clock3,
  Navigation,
  ArrowRight,
} from 'lucide-react'

import '../styles/LocationsPage.css'

const locations = [
  {
    id: 1,
    city: 'PHILADELPHIA',
    address: 'Gather Food Hall, Philadelphia, PA',
    timing: '10:00 AM - 10:00 PM',

    icon:
      '/PHILADELPHIA.jpg',

    images: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
    ],
  },

  {
    id: 2,
    city: 'WILMINGTON',
    address: 'Chancery Market, Wilmington, DE',
    timing: '11:00 AM - 11:00 PM',

    icon:
      '/WILMINGTON.jpg',

    images: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop',
    ],
  },

  {
    id: 3,
    city: 'HOUSTON',
    address: 'Lyric Market, Houston, TX',
    timing: '10:00 AM - 11:00 PM',

    icon:
      '/HOUSTON.jpg',

    images: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=1400&auto=format&fit=crop',
    ],
  },

  {
    id: 4,
    city: 'DENVER',
    address: 'Junction Food & Drink, Denver, CO',
    timing: '11:00 AM - 10:00 PM',

    icon:
      '/DENVER.jpg',

    images: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop',
    ],
  },

  {
    id: 5,
    city: 'RICHMOND',
    address: 'Richmond, TX',
    timing: '10:00 AM - 10:00 PM',

    icon:
      '/RICHMOND.jpg',

    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1400&auto=format&fit=crop',
    ],
  },

  {
    id: 6,
    city: 'ARLINGTON',
    address: 'Arlington, TX',
    timing: '11:00 AM - 11:00 PM',

    icon:
      '/ARLINGTON.jpg',

    images: [
      'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop',
    ],
  },
]

export default function LocationsPage() {
  const [active, setActive] = useState(locations[0])
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) =>
        prev === active.images.length - 1 ? 0 : prev + 1
      )
    }, 3500)

    return () => clearInterval(interval)
  }, [active])

  const handleLocation = (item) => {
    setActive(item)
    setSlide(0)
  }

  return (
    <>
      {/* HERO */}

      <section className="loc-hero">

        <div className="loc-hero-overlay" />

        <div className="loc-container">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >

            <div className="loc-eyebrow">
              Bowl'd Masala Across The U.S.
            </div>

            <h1 className="loc-hero-title">
              Find Your <em>Nearest Bowl</em>
            </h1>

            <p className="loc-hero-sub">
              Discover authentic Indian street food experiences,
              bold flavors, and unforgettable bowls near you.
            </p>

          </motion.div>

        </div>

        <div className="loc-wave">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
              fill="#fdf8f2"
            />
          </svg>
        </div>

      </section>

      {/* MAIN */}

      <section className="loc-page">

        <div className="loc-container">

          {/* LOCATION PILLS */}

          <motion.div
            className="loc-selector-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >

            {locations.map((item) => (

              <button
                key={item.id}
                className={`loc-city-card ${
                  active.id === item.id ? 'active' : ''
                }`}
                onClick={() => handleLocation(item)}
              >

                <div className="loc-city-icon">

                  <img
                    src={item.icon}
                    alt={item.city}
                  />

                </div>

                <div className="loc-city-name">
                  {item.city}
                </div>

              </button>

            ))}

          </motion.div>

          {/* DETAILS */}

          <AnimatePresence mode="wait">

            <motion.div
              key={active.id}
              className="loc-details"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >

              {/* IMAGE */}

              <div className="loc-image-wrap">

                <AnimatePresence mode="wait">

                  <motion.img
                    key={slide}
                    src={active.images[slide]}
                    alt={active.city}
                    className="loc-main-image"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />

                </AnimatePresence>

              </div>

              {/* CONTENT */}

              <div className="loc-content">

                <span className="loc-label">
                  Bowl'd Masala
                </span>

                <h2>
                  {active.city}
                </h2>

                <div className="loc-info">

                  <div className="loc-info-item">
                    <MapPin size={18} />
                    <span>{active.address}</span>
                  </div>

                  <div className="loc-info-item">
                    <Clock3 size={18} />
                    <span>{active.timing}</span>
                  </div>

                </div>

                <p>
                  Experience handcrafted Indian street food with
                  vibrant spices, fresh ingredients, and modern
                  fast-casual dining.
                </p>

                <div className="loc-actions">

                  <a
                    href="https://ordering-bowldmasala.com/home"
                    target="_blank"
                    rel="noreferrer"
                    className="loc-primary-btn"
                  >
                    Order Now
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="loc-secondary-btn"
                  >
                    <Navigation size={16} />
                    Directions
                  </a>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>
    </>
  )
}