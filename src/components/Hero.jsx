import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import '../styles/hero.css'

// ── INSTRUCTIONS ──────────────────────────────────────────────
// 1. Add your video file at: src/assets/hero-video.mp4
// 2. Your banner.png is already used as the poster/fallback
// ─────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">

      {/* ── Video Background ── */}
      <div className="hero-video-fallback" />
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/banner.png"
      >
        <source src="/video_preview_h264.mp4"/>
        <source src="/hero-video.webm" type="video/webm" />
      </video>
      <div className="hero-overlay" />

      {/* ── Content ── */}
      <div className="hero-body container">

        <motion.div className="hero-eyebrow" {...fadeUp(0.1)}>
          Indian Street Food
        </motion.div>

        <motion.h1 className="hero-headline" {...fadeUp(0.22)}>
          Real Food.<br />
          Bold <em>Flavors.</em><br />
          Made For You.
        </motion.h1>

        <motion.p className="hero-tagline" {...fadeUp(0.36)}>
          From protein-packed bowls to crave-worthy kati rolls —
          Bowl'd Masala brings the streets of India to your plate.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.48)}>
          <a
            href="https://ordering-bowldmasala.com/home"
            target="_blank"
            rel="noreferrer"
            className="btn-hero-cta"
          >
            Order Now <ArrowRight size={16} />
          </a>
          <a
            href="#menu"
            className="btn-hero-ghost"
            onClick={(e) => { e.preventDefault(); scrollTo('#menu') }}
          >
            Explore Menu
          </a>
        </motion.div>

      </div>

      {/* ── Stats Bar ── */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {[
          { val: '4.8★', lbl: 'Google Rating' },
          { val: '500+', lbl: 'Happy Customers' },
          { val: '20+',  lbl: 'Menu Items' },
          { val: '100%', lbl: 'Fresh Daily' },
        ].map((s) => (
          <div className="hero-stat" key={s.lbl}>
            <div className="hero-stat-val">{s.val}</div>
            <div className="hero-stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </motion.div>

      {/* ── Scroll Cue ── */}
      <motion.div
        className="hero-scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => scrollTo('#menu')}
      >
        <ChevronDown size={22} />
      </motion.div>

    </section>
  )
}