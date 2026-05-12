import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import '../styles/VideoCarousel.css'

const slides = [
  { id: 1, src: '/vid6.mp4',  poster: 'src/assets/catring.jpeg', title: 'Catering Events', sub: 'We Come to You'   },
  { id: 2, src: '/vid2.mp4',  poster: 'src/assets/bestbnn.jpg', title: 'Masala Magic',         sub: 'Behind the Scenes'   },
  { id: 3, src: '/vid3.mp4',  poster: 'src/assets/dish15.jpeg', title: 'Kati Rolls',       sub: 'Freshly Wrapped' },
  { id: 4, src: '/vid4.mp4',  poster: '/dish13.jpg', title: 'Samosa Chaat',       sub: 'Street Food Vibes' },
  { id: 5, src: '/vid1.mp4',  poster: '/dish8.jpg', title: 'Chicken Tikka Bowl',    sub: 'Our Best Seller'    },
]

const TOTAL  = slides.length
const SLOTS  = [-2, -1, 0, 1, 2]
const SLOT_STYLE = {
  '-2': { scale: 0.72, opacity: 0.38, zIndex: 1, x: '-210%' },
  '-1': { scale: 0.86, opacity: 0.65, zIndex: 2, x: '-115%' },
   '0': { scale: 1.00, opacity: 1.00, zIndex: 5, x:    '0%' },
   '1': { scale: 0.86, opacity: 0.65, zIndex: 2, x:  '115%' },
   '2': { scale: 0.72, opacity: 0.38, zIndex: 1, x:  '210%' },
}

// ── Progress bar ──────────────────────────────────────────────
function ProgressBar({ videoEl }) {
  const [pct, setPct] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    const tick = () => {
      if (videoEl?.duration) {
        setPct((videoEl.currentTime / videoEl.duration) * 100)
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [videoEl])

  return (
    <div className="vc-progress">
      <div className="vc-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────
export default function VideoCarousel() {
  const [active, setActive] = useState(0)

  // Use a ref for active so callbacks always see latest value
  const activeRef   = useRef(0)
  const videoRefs   = useRef({})
  const playTimerRef = useRef(null)

  // Keep ref in sync with state
  useEffect(() => {
    activeRef.current = active
  }, [active])

  // ── Navigate ──────────────────────────────────────────────
  const goTo = useCallback((next) => {
    const idx = ((next % TOTAL) + TOTAL) % TOTAL
    setActive(idx)
    activeRef.current = idx
  }, [])

  const prev = useCallback(() => goTo(activeRef.current - 1), [goTo])
  const next = useCallback(() => goTo(activeRef.current + 1), [goTo])

  // ── Play center video, pause all others ───────────────────
  // Small delay so spring animation finishes before play()
  useEffect(() => {
    // Clear any pending play timer
    if (playTimerRef.current) clearTimeout(playTimerRef.current)

    // Immediately pause all non-center videos
    Object.entries(videoRefs.current).forEach(([i, vid]) => {
      if (!vid) return
      if (Number(i) !== active) {
        vid.pause()
        vid.currentTime = 0
      }
    })

    // Delay center video play slightly so transition completes
    playTimerRef.current = setTimeout(() => {
      const vid = videoRefs.current[active]
      if (!vid) return
      vid.currentTime = 0

      const playPromise = vid.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked — retry once after user interaction
          const retry = () => {
            vid.play().catch(() => {})
            document.removeEventListener('click', retry)
            document.removeEventListener('touchstart', retry)
          }
          document.addEventListener('click', retry, { once: true })
          document.addEventListener('touchstart', retry, { once: true })
        })
      }
    }, 350) // wait for spring animation

    return () => clearTimeout(playTimerRef.current)
  }, [active])

  // ── Auto-advance when center video ends — TRUE LOOP ────────
  const onEnded = useCallback(() => {
    goTo(activeRef.current + 1) // wraps 4 → 0 automatically
  }, [goTo])

  // ── Keyboard navigation ────────────────────────────────────
  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [prev, next])

  return (
    <section className="vc-section">

      {/* Header */}
      <motion.div
        className="vc-header"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="vc-eyebrow">Watch &amp; Taste</p>
        <h2 className="vc-title">See Our <em>Food in Action</em></h2>
      </motion.div>

      {/* Stage */}
      <div className="vc-stage-wrap">
        <button className="vc-nav vc-nav--prev" onClick={prev} aria-label="Previous">
          <ChevronLeft size={20} />
        </button>

        <div className="vc-stage">
          {SLOTS.map((offset) => {
            const idx      = ((active + offset) % TOTAL + TOTAL) % TOTAL
            const slide    = slides[idx]
            const isCenter = offset === 0
            const st       = SLOT_STYLE[String(offset)]

            return (
              <motion.div
                key={`slot-${offset}`}   /* stable key = slot, not idx */
                className={`vc-card${isCenter ? ' vc-card--active' : ''}`}
                animate={{
                  x:       st.x,
                  scale:   st.scale,
                  opacity: st.opacity,
                  zIndex:  st.zIndex,
                  rotateY: isCenter ? 0 : offset * 6,
                }}
                transition={{ type: 'spring', stiffness: 240, damping: 28, mass: 0.9 }}
                onClick={() => !isCenter && goTo(idx)}
                style={{ cursor: isCenter ? 'default' : 'pointer' }}
              >
                {/* Thumbnail — always visible */}
                <img
                  src={slide.poster}
                  alt={slide.title}
                  className="vc-thumb"
                  draggable={false}
                />

                {/* Video — fades in only when center */}
                <video
                  ref={(el) => { videoRefs.current[idx] = el }}
                  src={slide.src}
                  muted
                  playsInline
                  preload="auto"
                  loop={false}
                  onEnded={isCenter ? onEnded : undefined}
                  className={`vc-video${isCenter ? ' vc-video--visible' : ''}`}
                />

                {/* Side overlay */}
                {!isCenter && (
                  <div className="vc-side-overlay">
                    <div className="vc-play-btn">
                      <Play size={18} fill="white" color="white" />
                    </div>
                  </div>
                )}

                {/* Progress bar — center only */}
                {isCenter && (
                  <ProgressBar videoEl={videoRefs.current[idx]} />
                )}

                {/* Info pill — center only */}
                {isCenter && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`info-${idx}`}
                      className="vc-info"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, delay: 0.25 }}
                    >
                      <span className="vc-info-sub">{slide.sub}</span>
                      <span className="vc-info-title">{slide.title}</span>
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Active glow */}
                {isCenter && <div className="vc-glow" />}
              </motion.div>
            )
          })}
        </div>

        <button className="vc-nav vc-nav--next" onClick={next} aria-label="Next">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="vc-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`vc-dot${i === active ? ' vc-dot--on' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

    </section>
  )
}