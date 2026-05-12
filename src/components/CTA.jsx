import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react'
import '../styles/CTA.css'


export default function CTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })

  return (
    <section className="cta-section" id="cta" ref={ref}>

      {/* Radial glow blobs */}
      <div className="cta-blob cta-blob--left"  />
      <div className="cta-blob cta-blob--right" />

      <div className="cta-container">

        {/* ── Top label ── */}
        <motion.p
          className="cta-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55 }}
        >
          Fresh. Bold. Delivered.
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          className="cta-headline"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Hungry Right Now?
          <em> Order Online</em>
          <br />or Visit Us Today.
        </motion.h2>

        {/* ── Sub text ── */}
        <motion.p
          className="cta-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          Every bowl and roll is made fresh the moment you order.
          Bold Indian street food — just a click away.
        </motion.p>

        {/* ── Buttons ── */}
        <motion.div
          className="cta-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <motion.a
            href="https://ordering-bowldmasala.com/home"
            target="_blank"
            rel="noreferrer"
            className="cta-btn cta-btn--primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Order Online <ArrowRight size={16} />
          </motion.a>

          <motion.a
            href="/menu"
            className="cta-btn cta-btn--ghost"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Menu
          </motion.a>

          <motion.a
            href="tel:+19292612124"
            className="cta-btn cta-btn--outline"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={14} /> Call Us
          </motion.a>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          className="cta-divider"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        />

      </div>
    </section>
  )
}