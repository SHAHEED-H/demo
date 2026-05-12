import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react'
import '../styles/Branches.css'

// ── Branch Data ───────────────────────────────────────────────
// Update with your actual branch details
const branches = [
  {
    id: 1,
    name: 'Philadelphia',
    city: 'Philadelphia',
    address: ' 3025 Market Street, , PA 19104',
    hours: 'Mon–Sat: 11am – 9Philadelphiapm',
    img: '/branch1.jpeg',
    slug: 'memorial-city',
  },
  {
    id: 2,
    name: 'Wilmington',
    city: 'Wilmington',
    address: ' 1313 N Market St, Wilmington, DE 19801',
    hours: 'Mon–Sat: 10am – 9pm',
    img: '/branch2.jpeg',
    slug: 'katy-mills',
  },
  {
    id: 3,
    name: 'Lyric Market',
    city: 'Houston',
    address: 'Lyric Market, 411 Smith Street, Houston, TX 77002',
    hours: 'Mon–Sat: 11am – 9pm',
    img: '/branch3.jpeg',
    slug: 'woodlands',
  },
  {
    id: 4,
    name: 'Denver',
    city: 'Denver',
    address: ' 2000 S Colorado Blvd, Building 4 (Junction Food & Drink), Denver, CO 80222',
    hours: 'Mon–Sat: 11am – 8pm',
    img: '/branch4.jpeg',
    slug: 'sugar-land',
  },
  {
    id: 5,
    name: 'Richmond',
    city: 'Richmond',
    address: ' 4828 Waterview Town Center Dr STE 800, Richmond, TX 77407',
    hours: 'Mon–Sat: 11am – 9pm',
    img: '/branch5.jpeg',
    slug: 'pearland',
  },
  {
    id: 6,
    name: 'Memorial Mall',
    city: 'Houston',
    address: '303 Memorial City Mall Suite 395H, Houston, TX 77024',
    hours: 'Mon–Sat: 11am – 9pm',
    img: '/branch6.jpeg',
    slug: 'baybrook',
  },
  {
    id: 7,
    name: 'Arlington',
    city: 'Arlington',
    address: ' 1100 S Hayes St, Arlington, VA 22202',
    hours: 'Mon–Sat: 11am – 9pm',
    img: '/branch7.jpeg',
    slug: 'uptown-park',
  },
  {
    id: 8,
    name: 'Pennsylvania',
    city: 'Pennsylvania',
    address: ' 160 N Gulph Rd King of Prussia, Pennsylvania',
    hours: 'Opening Soon',
    img: '/branch8.jpeg',
    slug: 'greenspoint',
  },
]

// ── Single Card ───────────────────────────────────────────────
function BranchCard({ branch, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })
  const nav    = useNavigate()
  const isOpen = branch.status === 'Open'

  return (
    <motion.div
      ref={ref}
      className={`br-card${!isOpen ? ' br-card--soon' : ''}`}
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      animate={inView
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 36, scale: 0.96 }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => nav(`/locations/${branch.slug}`)}
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="br-card-img">
        <img
          src={branch.img}
          alt={branch.name}
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        {/* Placeholder when no image */}
        <div className="br-card-img-placeholder">
          <MapPin size={28} />
        </div>
        {/* Gradient overlay */}
        <div className="br-card-img-overlay" />

      </div>

      {/* Body */}
      <div className="br-card-body">
        <div className="br-card-top">
          <div>
            <h3 className="br-name">{branch.name}</h3>
            <div className="br-city">
              <MapPin size={12} />
              {branch.city}
            </div>
          </div>
          <div className="br-arrow">
            <ArrowRight size={16} />
          </div>
        </div>

        <p className="br-address">{branch.address}</p>

        <div className="br-hours">
          <Clock size={12} />
          {branch.hours}
        </div>
      </div>
    </motion.div>
  )
}

// ── Header ────────────────────────────────────────────────────
function Header() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="br-header"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="br-eyebrow">Our Locations</p>
      <h2 className="br-title">
        Find Us <em>Near You</em>
      </h2>
      <p className="br-subtitle">
        8 locations across Texas — with more opening soon.
        Click any branch to explore hours, directions and more.
      </p>
    </motion.div>
  )
}

// ── Main Export ───────────────────────────────────────────────
export default function Branches() {
  const nav        = useNavigate()
  const footerRef  = useRef(null)
  const footerView = useInView(footerRef, { once: false, margin: '-40px' })

  return (
    <section className="br-section" id="locations">
      <div className="br-container">

        <Header />

        {/* Grid */}
        <div className="br-grid">
          {branches.map((b, i) => (
            <BranchCard key={b.id} branch={b} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          ref={footerRef}
          className="br-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={footerView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <button
            className="br-all-btn"
            onClick={() => nav('/locations')}
          >
            <ExternalLink size={15} />
            View All Locations
          </button>
        </motion.div>

      </div>
    </section>
  )
}