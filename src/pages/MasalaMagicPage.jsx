import { motion } from 'framer-motion'
import {
  Flame,
  Leaf,
  ChefHat,
  Sparkles,
  Droplets,
  CookingPot,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react'
import '../styles/MasalaMagic.css'

const tips = [
  {
    Icon: ChefHat,
    title: 'Fresh Ginger Garlic Base',
    text: 'Every curry starts with freshly crushed ginger and garlic for deeper aroma and authentic flavor.',
  },
  {
    Icon: Flame,
    title: 'Hot Oil Unlocks Flavor',
    text: 'Whole spices bloom only in properly heated oil. That sizzling aroma is where the magic begins.',
  },
  {
    Icon: CookingPot,
    title: 'Slow-Cooked Onion Masala',
    text: 'Golden onions build richness, sweetness, and the comforting taste found in every Bowl’d Masala dish.',
  },
  {
    Icon: Droplets,
    title: 'Balanced Spice & Salt',
    text: 'Bold doesn’t mean overpowering. Every spice is layered carefully for smooth, addictive flavor.',
  },
  {
    Icon: Sparkles,
    title: 'Fresh Tomato Gravies',
    text: 'Rich tomatoes bring balance, body, and the signature silky texture in our curries and bowls.',
  },
  {
    Icon: Leaf,
    title: 'Fresh Herb Finish',
    text: 'Cilantro and herbs are added last to keep every bowl vibrant, aromatic, and fresh.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export default function MasalaMagicPage() {
  return (
    <>
      {/* HERO */}
      <section className="mm-hero">
        <div className="mm-overlay" />

        <div className="mm-container">
          <motion.p
            className="mm-eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Behind The Flavor
          </motion.p>

          <motion.h1
            className="mm-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Bowl'd Masala <em>Kitchen Secrets</em>
          </motion.h1>

          <motion.p
            className="mm-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            The small details behind every unforgettable bowl, roll, and curry.
            Fresh ingredients. Bold spices. Real Indian flavor.
          </motion.p>

          <motion.div
            className="mm-pills"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <span className="mm-pill">
              <ChefHat size={14} />
              Crafted Daily
            </span>

            <span className="mm-pill">
              <Flame size={14} />
              Authentic Flavor
            </span>

            <span className="mm-pill">
              <Leaf size={14} />
              Fresh Ingredients
            </span>
          </motion.div>
        </div>

        <div className="mm-wave">
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

      {/* STORY SECTION */}
      <section className="mm-story">
        <div className="mm-container mm-story-grid">
          <motion.div {...fadeUp(0.1)}>
            <span className="mm-label">Our Philosophy</span>

            <h2 className="mm-heading">
              Flavor That Feels <em>Handcrafted</em>
            </h2>

            <p className="mm-text">
              At Bowl’d Masala, we believe unforgettable food comes from small
              details done right — fresh spice tempering, slow-cooked masalas,
              balanced heat, and ingredients prepared daily.
            </p>

            <p className="mm-text">
              Every bowl is inspired by authentic Indian street food culture,
              designed to feel bold, comforting, and crave-worthy from the very
              first bite.
            </p>
          </motion.div>

          <motion.div className="mm-img-wrap" {...fadeUp(0.2)}>
            <img
              src="/src/assets/dish10.jpeg"
              alt="Bowl'd Masala"
            />
          </motion.div>
        </div>
      </section>

      {/* TIPS */}
      <section className="mm-tips">
        <div className="mm-container">
          <motion.div
            className="mm-center"
            {...fadeUp(0)}
          >
            <span className="mm-label">Kitchen Secrets</span>

            <h2 className="mm-heading center">
              What Makes Every Bite <em>Irresistible</em>
            </h2>
          </motion.div>

          <div className="mm-grid">
            {tips.map((tip, i) => {
              const Icon = tip.Icon

              return (
                <motion.div
                  key={tip.title}
                  className="mm-card"
                  {...fadeUp(i * 0.08)}
                >
                  <div className="mm-card-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{tip.title}</h3>

                  <p>{tip.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mm-cta-wrap">
        <div className="mm-container">
          <motion.div className="mm-cta" {...fadeUp(0)}>
            <div>
              <h2>
                Taste The <em>Difference</em>
              </h2>

              <p>
                Fresh spices, handcrafted masalas, and authentic Indian flavor
                in every bite.
              </p>
            </div>

            <a
              href="https://ordering-bowldmasala.com/home"
              target="_blank"
              rel="noreferrer"
              className="mm-btn"
            >
              <ShoppingBag size={18} />
              Order Now
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}