import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Leaf,
  Flame,
  Droplets,
  Sparkles,
} from 'lucide-react'

import '../styles/about.css'

import img1 from '/aboutsec.jpg'
import img2 from '/dish11.jpg'
import img4 from '/dish1.jpeg'

const features = [
  { Icon: Leaf, text: 'Fresh ingredients daily' },
  { Icon: Flame, text: 'Made to order every time' },
  { Icon: Droplets, text: 'House-made chutneys & sauces' },
]

const imgMotion = [
  { x: -60, y: -40, rotate: -6, delay: 0 },
  { x: 60, y: -40, rotate: 6, delay: 0.12 },
  { x: 60, y: 40, rotate: 5, delay: 0.22 },
]

export default function About() {
  const contentRef = useRef(null)
  const galleryRef = useRef(null)

  const galleryInView = useInView(galleryRef, {
    once: false,
    margin: '-80px',
  })

  const contentInView = useInView(contentRef, {
    once: false,
    margin: '-80px',
  })

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-wrapper">

          {/* ───────────────── GALLERY ───────────────── */}

          <div className="about-gallery" ref={galleryRef}>

            {/* Decorative icon — top left */}

            <motion.div
              className="about-deco about-deco--tl"
              animate={
                galleryInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0.6, rotate: -15 }
              }
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
            >
              <Leaf size={26} />
            </motion.div>

            {/* Decorative icon — bottom right */}

            <motion.div
              className="about-deco about-deco--br"
              animate={
                galleryInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0.6, rotate: 15 }
              }
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
            >
              <Sparkles size={20} />
            </motion.div>

            {/* 3 IMAGES */}

            {[img1, img2, img4].map((src, i) => (
              <motion.div
                key={i}
                className={`g-img g-img--${i + 1}`}
                initial={{
                  opacity: 0,
                  x: imgMotion[i].x,
                  y: imgMotion[i].y,
                  rotate: imgMotion[i].rotate,
                  scale: 0.85,
                }}
                animate={
                  galleryInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        x: imgMotion[i].x,
                        y: imgMotion[i].y,
                        rotate: imgMotion[i].rotate,
                        scale: 0.85,
                      }
                }
                transition={{
                  duration: 0.85,
                  delay: imgMotion[i].delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.04,
                  zIndex: 10,
                }}
              >
                <img
                  src={src}
                  alt={`Bowl'd Masala dish ${i + 1}`}
                />
              </motion.div>
            ))}
          </div>

          {/* ───────────────── CONTENT ───────────────── */}

          <motion.div
            className="about-content"
            ref={contentRef}
            initial={{ opacity: 0, x: 60 }}
            animate={
              contentInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 60 }
            }
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Eyebrow */}

            <motion.span
              className="about-eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={
                contentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 14 }
              }
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
            >
              About Our Restaurant
            </motion.span>

            {/* Title */}

            <motion.h2
              className="about-title"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.7,
                delay: 0.42,
              }}
            >
              We Are <em>Bowl'd Masala</em>
            </motion.h2>

            {/* Divider */}

            <motion.div
              className="about-divider"
              initial={{ scaleX: 0 }}
              animate={
                contentInView
                  ? { scaleX: 1 }
                  : { scaleX: 0 }
              }
              transition={{
                duration: 0.6,
                delay: 0.52,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Description */}

            <motion.p
              className="about-desc"
              initial={{ opacity: 0, y: 16 }}
              animate={
                contentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{
                duration: 0.6,
                delay: 0.58,
              }}
            >
              A <strong>Wala</strong> is someone who performs
              a task with pride. At Bowl'd Masala, we're your
              <em> Kati Roll Wala</em> — crafting every bowl
              and roll with fresh ingredients, bold spices,
              and a whole lot of love.
            </motion.p>

            {/* Features */}

            <motion.ul
              className="about-features"
              initial={{ opacity: 0, y: 16 }}
              animate={
                contentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{
                duration: 0.6,
                delay: 0.66,
              }}
            >
              {features.map(({ Icon, text }) => (
                <li key={text} className="about-feature">
                  <span className="about-feature-icon">
                    <Icon size={15} />
                  </span>

                  <span className="about-feature-text">
                    {text}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Buttons */}

            <motion.div
              className="about-btns"
              initial={{ opacity: 0, y: 14 }}
              animate={
                contentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 14 }
              }
              transition={{
                duration: 0.6,
                delay: 0.74,
              }}
            >
              <a
                href="/about"
                className="about-btn-primary"
              >
                Our Story
                <ArrowRight size={14} />
              </a>

              <a
                href="https://ordering-bowldmasala.com/home"
                target="_blank"
                rel="noreferrer"
                className="about-btn-secondary"
              >
                Order Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}