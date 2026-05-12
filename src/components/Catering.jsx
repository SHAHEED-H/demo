import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight, Phone, Building2, Heart,
  Cake, Coffee, Star, CheckCircle2
} from 'lucide-react'
import '../styles/Catering.css'
import catringing from '../assets/catring.jpeg'

// ── Replace with your actual catering image ──
const CATERING_IMG = catringing

const highlights = [
  { icon: Building2, label: 'Corporate Events'       },
  { icon: Heart,     label: 'Wedding Parties'        },
  { icon: Cake,      label: 'Birthday Celebrations'  },
  { icon: Coffee,    label: 'Office Lunches'         },
]

const perks = [
  'Customizable menus for any budget',
  'On-time delivery & professional setup',
  'Veg, vegan & gluten-free options',
  'Dedicated event coordinator',
]

export default function Catering() {
  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const textRef    = useRef(null)

  // once: false → re-animates every scroll
  const textInView = useInView(textRef, { once: false, margin: '-80px' })
  const imgInView  = useInView(imgRef,  { once: false, margin: '-80px' })

  return (
    <section className="cat-section" id="catering" ref={sectionRef}>
      <div className="cat-container">
        <div className="cat-wrapper">

          {/* ── Image side ── */}
          <div className="cat-img-side" ref={imgRef}>

            {/* Main image */}
            <motion.div
              className="cat-img-main"
              initial={{ opacity: 0, x: -50, scale: 0.93 }}
              animate={imgInView
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: -50, scale: 0.93 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={CATERING_IMG} alt="Catering spread" />
              {/* Shine overlay on hover */}
              <div className="cat-img-shine" />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              className="cat-stat-card"
              initial={{ opacity: 0, y: 30, scale: 0.88 }}
              animate={imgInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 30, scale: 0.88 }}
              transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Star size={16} className="cat-stat-star" fill="currentColor" />
              <div>
                <div className="cat-stat-val">500+</div>
                <div className="cat-stat-lbl">Events Catered</div>
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div className="cat-deco-ring" />
          </div>

          {/* ── Content side ── */}
          <div className="cat-content" ref={textRef}>

            {/* Eyebrow */}
            <motion.div
              className="cat-eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Catering & Events
            </motion.div>

            {/* Title */}
            <motion.h2
              className="cat-title"
              initial={{ opacity: 0, y: 24 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.65, delay: 0.18 }}
            >
              Convenient Catering,{' '}
              <em>Memorable Moments</em>
            </motion.h2>

            {/* Divider */}
            <motion.div
              className="cat-divider"
              initial={{ scaleX: 0 }}
              animate={textInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Description */}
            <motion.p
              className="cat-desc"
              initial={{ opacity: 0, y: 16 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              Our catering services deliver exceptional flavour without
              compromising on quality — making every gathering unforgettable,
              whatever your budget.
            </motion.p>

            {/* Highlight chips with icons */}
            <motion.div
              className="cat-chips"
              initial={{ opacity: 0, y: 16 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              {highlights.map(({ icon: Icon, label }) => (
                <div className="cat-chip" key={label}>
                  <Icon size={14} className="cat-chip-icon" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Perks list */}
            <motion.ul
              className="cat-perks"
              initial={{ opacity: 0, y: 14 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {perks.map((perk) => (
                <li key={perk} className="cat-perk">
                  <CheckCircle2 size={14} className="cat-perk-icon" />
                  <span>{perk}</span>
                </li>
              ))}
            </motion.ul>

            {/* Buttons */}
            <motion.div
              className="cat-btns"
              initial={{ opacity: 0, y: 14 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.55, delay: 0.58 }}
            >
              <a
                href="https://bowldmasala.com/catering"
                target="_blank"
                rel="noreferrer"
                className="cat-btn-primary"
              >
                View Packages <ArrowRight size={15} />
              </a>
              <a href="tel:+19292612124" className="cat-btn-secondary">
                <Phone size={14} />
                (929) 261-2124
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}