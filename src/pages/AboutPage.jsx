import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Leaf, Zap, Award, Users, ShieldCheck, Clock } from 'lucide-react'
import '../styles/Aboutpg.css'

import img1 from '/dish1.jpeg'
import img2 from '/dish2.jpeg'
import img3 from '/dish4.jpeg'

const stats = [
  { value: '8+',   label: 'Locations'       },
  { value: '500+', label: 'Happy Customers' },
  { value: '20+',  label: 'Menu Items'      },
  { value: '4.8★', label: 'Google Rating'   },
]

const values = [
  { Icon: Leaf,        title: 'Fresh Daily',        desc: 'Every ingredient sourced and prepped fresh — no shortcuts, ever.'        },
  { Icon: Zap,         title: 'Made to Order',       desc: 'Every bowl and roll cooked the moment you order it.'                    },
  { Icon: ShieldCheck, title: 'Real Ingredients',    desc: 'No artificial flavors — just honest spices and quality produce.'        },
  { Icon: Award,       title: 'Authentic Flavors',   desc: 'Rooted in Kolkata street food culture, perfected for you.'              },
  { Icon: Users,       title: 'Our Walas',           desc: 'Our staff are our stars — diverse, proud and passionate.'               },
  { Icon: Clock,       title: 'Always Consistent',   desc: 'Same bold flavors, every single visit, every single location.'          },
]

function useFade(margin = '-80px') {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin })
  return [ref, inView]
}

export default function About() {
  const [statRef,    statView]    = useFade('-40px')
  const [imgRef,     imgView]     = useFade('-60px')
  const [contentRef, contentView] = useFade('-60px')
  const [valRef,     valView]     = useFade('-40px')

  return (
    <section className="ab-section" id="about">

      {/* ── 1. STATEMENT BAND with banner image ── */}
      <div className="ab-statement-band">
        <div className="ab-container">
          <motion.div
            className="ab-statement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="ab-eyebrow">Our Story</p>
            <h2 className="ab-statement-title">
              A <em>Wala</em> is Someone<br />
              Who Takes Pride in<br />
              What They Do.
            </h2>
            <p className="ab-statement-sub">
              At Bowl'd Masala, we're your <strong>Kati Roll Wala</strong> — crafting
              every bowl and roll with care, bold spices, and a whole lot of love.
            </p>
          </motion.div>
        </div>

        {/* ── Wave curve ── */}
        <div className="ab-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#e8892b" />
          </svg>
        </div>
      </div>

      {/* ── 2. STATS ROW ── */}
      <div className="ab-stats-row" ref={statRef}>
        <div className="ab-container">
          <div className="ab-stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="ab-stat"
                initial={{ opacity: 0, y: 24 }}
                animate={statView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <span className="ab-stat-val">{s.value}</span>
                <span className="ab-stat-lbl">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. SPLIT — Images + Content ── */}
      <div className="ab-split">
        <div className="ab-container">
          <div className="ab-split-inner">

            <div className="ab-images" ref={imgRef}>
              <motion.div
                className="ab-img ab-img--main"
                initial={{ opacity: 0, x: -50, scale: 0.93 }}
                animate={imgView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.93 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={img1} alt="Bowl'd Masala signature dish" />
                <div className="ab-img-tag">
                  <Leaf size={12} />
                  Fresh Every Day
                </div>
              </motion.div>

              <motion.div
                className="ab-img ab-img--secondary"
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={imgView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 40, y: 40 }}
                transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03 }}
              >
                <img src={img2} alt="Bowl'd Masala kati roll" />
              </motion.div>

              <motion.div
                className="ab-img ab-img--accent"
                initial={{ opacity: 0, y: 50, scale: 0.88 }}
                animate={imgView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.88 }}
                transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04 }}
              >
                <img src={img3} alt="Bowl'd Masala fresh ingredients" />
              </motion.div>

              <motion.div
                className="ab-year-badge"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={imgView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.55, delay: 0.42, type: 'spring', stiffness: 200 }}
              >
                <span className="ab-year-val">Est.</span>
                <span className="ab-year-num">2022</span>
              </motion.div>
            </div>

            <div className="ab-content" ref={contentRef}>
              <motion.p
                className="ab-content-eyebrow"
                initial={{ opacity: 0, y: 14 }}
                animate={contentView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                Why We Exist
              </motion.p>

              <motion.h3
                className="ab-content-title"
                initial={{ opacity: 0, y: 22 }}
                animate={contentView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                transition={{ duration: 0.65, delay: 0.12 }}
              >
                Indian Street Food —<br /><em>Reinvented for You</em>
              </motion.h3>

              <motion.div
                className="ab-content-line"
                initial={{ scaleX: 0 }}
                animate={contentView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
              />

              <motion.p
                className="ab-content-body"
                initial={{ opacity: 0, y: 16 }}
                animate={contentView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 0.28 }}
              >
                We started with one mission — bring the vibrant, bold flavors of
                Kolkata's streets to modern life. Fast food doesn't have to mean
                bad food. Every dish at Bowl'd Masala is made fresh, made with
                heart, and made for you.
              </motion.p>

              <motion.p
                className="ab-content-body"
                initial={{ opacity: 0, y: 14 }}
                animate={contentView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.6, delay: 0.36 }}
              >
                Our staff — our <strong>Walas</strong> — are the soul of our restaurants.
                Diverse, passionate people who take pride in every bowl they craft
                and every roll they wrap.
              </motion.p>

              <motion.div
                className="ab-content-btns"
                initial={{ opacity: 0, y: 14 }}
                animate={contentView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.55, delay: 0.44 }}
              >
                <a href="/about" className="ab-btn-primary">
                  Read Our Full Story <ArrowRight size={14} />
                </a>
                <a
                  href="https://ordering-bowldmasala.com/home"
                  target="_blank"
                  rel="noreferrer"
                  className="ab-btn-ghost"
                >
                  Order Now
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 4. VALUES GRID ── */}
      <div className="ab-values" ref={valRef}>
        <div className="ab-container">
          <motion.div
            className="ab-values-header"
            initial={{ opacity: 0, y: 24 }}
            animate={valView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.65 }}
          >
            <p className="ab-eyebrow">What We Stand For</p>
            <h3 className="ab-values-title">Food with <em>Purpose</em></h3>
          </motion.div>

          <div className="ab-values-grid">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="ab-value-card"
                initial={{ opacity: 0, y: 28, scale: 0.95 }}
                animate={valView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
              >
                <div className="ab-value-icon"><Icon size={18} /></div>
                <h4 className="ab-value-title">{title}</h4>
                <p className="ab-value-desc">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}