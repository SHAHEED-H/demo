import { motion } from 'framer-motion'
import {
  Flame,
  Globe2,
  Leaf,
  Beef,
  Sparkles,
  MapPinned,
  Soup,
  Wheat,
} from 'lucide-react'

import '../styles/FunFactPage.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const regions = [
  {
    title: 'Punjab',
    vibe: 'Big flavors. Bigger energy.',
    text: 'Rich comforting food, legendary lassi culture, buttery curries, and bold hospitality inspired this flavor profile.',
    genz: 'Comfort food, but unbothered.',
    Icon: Beef,
  },
  {
    title: 'Uttar Pradesh',
    vibe: 'Street food royalty.',
    text: 'Home of Nawabi cuisine, kebabs, and melt-in-your-mouth spice craftsmanship built for unforgettable flavor.',
    genz: 'Melt-in-your-mouth, zero drama.',
    Icon: Flame,
  },
  {
    title: 'Andhra Pradesh',
    vibe: 'India’s spice capital.',
    text: 'Fiery chilies balanced with nourishing lentils and layered masalas create serious flavor depth.',
    genz: 'This bowl chose violence.',
    Icon: Flame,
  },
  {
    title: 'Tamil Nadu',
    vibe: 'Fuel for legends.',
    text: 'Light, fermented, energizing meals inspired by dosa culture and deeply rooted South Indian traditions.',
    genz: 'Gym-friendly. Life-approved.',
    Icon: Wheat,
  },
  {
    title: 'Goa',
    vibe: 'Coastal flavor swagger.',
    text: 'Tangy spices, seafood influence, tropical ingredients, and Portuguese-inspired flavor combinations.',
    genz: 'Vacation flavors unlocked.',
    Icon: Sparkles,
  },
  {
    title: 'Gujarat',
    vibe: 'Sweet, savory, smart.',
    text: 'Balanced flavor combinations and timeless cooking traditions that blend texture and spice beautifully.',
    genz: 'Flavor math done right.',
    Icon: Soup,
  },
]

export default function FunFactPage() {
  return (
    <>
      {/* HERO */}

      <section className="ff-hero">
        <div className="ff-overlay" />

        <div className="ff-container">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="ff-eyebrow">
              Flavor Stories Around The World
            </div>

            <h1 className="ff-title">
              A Global <em>Flavor Journey</em>
            </h1>

            <p className="ff-sub">
              Bowl’d Masala takes inspiration from iconic street foods,
              spice cultures, and regional traditions across India and beyond.
            </p>

            <div className="ff-pills">
              <span className="ff-pill">
                <Globe2 size={14} />
                Globally Inspired
              </span>

              <span className="ff-pill">
                <Flame size={14} />
                Bold Indian Flavor
              </span>

              <span className="ff-pill">
                <Leaf size={14} />
                Modern Street Food
              </span>
            </div>
          </motion.div>
        </div>

        <div className="ff-wave">
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

      {/* INTRO */}

      <section className="ff-intro">
        <div className="ff-container ff-intro-grid">

          <motion.div {...fadeUp(0.1)}>
            <span className="ff-label">
              Not Just One Flavor
            </span>

            <h2 className="ff-heading">
              Every Region Has Its <em>Own Personality</em>
            </h2>

            <p className="ff-text">
              India isn’t one cuisine. It’s hundreds of flavor stories shaped
              by geography, culture, spice traditions, and street food history.
            </p>

            <p className="ff-text">
              Bowl’d Masala transforms those inspirations into modern bowls,
              wraps, and rolls built for today’s generation.
            </p>
          </motion.div>

          {/* NEW MAP CARD */}

          <motion.div className="ff-quote-card" {...fadeUp(0.2)}>

            <div className="ff-map-overlay" />

            <div className="ff-quote-content">

              <div className="ff-quote-icon">
                <MapPinned size={30} />
              </div>

              <h3>
                Every Bowl Is A <em>Passport To Flavor</em>
              </h3>

              <p>
                Inspired by kitchens from Punjab to Singapore —
                crafted for modern food lovers everywhere.
              </p>

              <div className="ff-quote-tags">
                <span>India</span>
                <span>Pakistan</span>
                <span>Malaysia</span>
                <span>Sri Lanka</span>
                <span>Singapore</span>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* REGIONS */}

      <section className="ff-regions">
        <div className="ff-container">

          <motion.div className="ff-center" {...fadeUp(0)}>
            <span className="ff-label">
              Regional Inspirations
            </span>

            <h2 className="ff-heading center">
              Flavor Stories With A <em>Bowl’d Twist</em>
            </h2>
          </motion.div>

          <div className="ff-grid">
            {regions.map((item, i) => {
              const Icon = item.Icon

              return (
                <motion.div
                  key={item.title}
                  className="ff-card"
                  {...fadeUp(i * 0.05)}
                >
                  <div className="ff-card-top">

                    <div className="ff-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{item.title}</h3>

                  </div>

                  <h4>{item.vibe}</h4>

                  <p>{item.text}</p>

                  <div className="ff-genz">
                    {item.genz}
                  </div>

                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* PROMISE */}

      <section className="ff-promise">
        <div className="ff-container">

          <motion.div className="ff-promise-box" {...fadeUp(0)}>

            <span className="ff-label">
              The Bowl'd Masala Promise
            </span>

            <h2>
              Big Flavor. Balanced Nutrition. <em>No Borders.</em>
            </h2>

            <div className="ff-promise-grid">

              <div className="ff-promise-item">
                <Leaf size={18} />
                Veg & Vegan Friendly
              </div>

              <div className="ff-promise-item">
                <Beef size={18} />
                Protein Forward
              </div>

              <div className="ff-promise-item">
                <Flame size={18} />
                Bold Flavor Profiles
              </div>

              <div className="ff-promise-item">
                <Globe2 size={18} />
                Globally Inspired
              </div>

            </div>

          </motion.div>

        </div>
      </section>
    </>
  )
}