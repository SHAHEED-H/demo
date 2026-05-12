import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  BadgeDollarSign,
  Handshake,
  MapPinned,
  Store,
  ChefHat,
  Rocket,
  Phone,
  Mail,
} from 'lucide-react'

import '../styles/Franchise.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const highlights = [
  {
    Icon: Handshake,
    title: 'Owner Operator Focus',
    text: 'We partner with passionate operators who care deeply about hospitality and customer experience.',
  },
  {
    Icon: BadgeDollarSign,
    title: 'Flexible Investment Models',
    text: 'Food halls, food courts, and stand-alone locations designed for scalable growth.',
  },
  {
    Icon: ChefHat,
    title: 'Full Operational Support',
    text: 'Training, onboarding, recipes, operations, marketing, and launch support included.',
  },
  {
    Icon: Rocket,
    title: 'Fast Growing Category',
    text: 'Indian street food is one of the fastest growing food segments across the U.S.',
  },
]

const markets = [
  'Tysons, VA',
  'Tampa, FL',
  'Los Angeles, CA',
  'Las Vegas, NV',
  'Austin, TX',
  'Atlanta, GA',
  'Seattle, WA',
  'Boston, MA',
  'Tempe, AZ',
  'Princeton, NJ',
]

const locations = [
  'Houston, TX',
  'Wilmington, DE',
  'Philadelphia, PA',
  'Denver, CO',
  'Richmond, TX',
  'Charlotte, NC',
]

export default function FranchisePage() {
  return (
    <>
      {/* HERO */}

      <section className="fr-hero">
        <div className="fr-overlay" />

        <div className="fr-container">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="fr-eyebrow">
              Franchise Opportunity
            </div>

            <h1 className="fr-title">
              Own a <em>Bowl'd Masala</em>
            </h1>

            <p className="fr-sub">
              Bring bold Indian street food to your city with a fast-growing
              brand built for modern dining experiences.
            </p>

            <div className="fr-hero-btns">
              <a href="#inquiry" className="fr-btn-primary">
                Start Inquiry
                <ArrowRight size={17} />
              </a>

              <a href="tel:+19292612124" className="fr-btn-secondary">
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="fr-wave">
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

      <section className="fr-intro">
        <div className="fr-container fr-intro-grid">
          <motion.div {...fadeUp(0.1)}>
            <span className="fr-label">Why Bowl'd Masala</span>

            <h2 className="fr-heading">
              Built for <em>Modern Expansion</em>
            </h2>

            <p className="fr-text">
              Bowl’d Masala combines authentic Indian street food with a modern,
              scalable fast-casual business model.
            </p>

            <p className="fr-text">
              From food halls to stand-alone locations, we help franchise
              partners build profitable restaurants with operational simplicity
              and strong brand identity.
            </p>
          </motion.div>

          <motion.div className="fr-stat-card" {...fadeUp(0.2)}>
            <div className="fr-stat">
              <h3>$50K+</h3>
              <p>Starting Investment</p>
            </div>

            <div className="fr-divider" />

            <div className="fr-stat">
              <h3>$100K</h3>
              <p>Minimum Net Worth</p>
            </div>

            <div className="fr-divider" />

            <div className="fr-stat">
              <h3>20+</h3>
              <p>Target Expansion Markets</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="fr-features">
        <div className="fr-container">
          <motion.div className="fr-center" {...fadeUp(0)}>
            <span className="fr-label">Partnership Benefits</span>

            <h2 className="fr-heading center">
              Franchise Support That <em>Actually Helps</em>
            </h2>
          </motion.div>

          <div className="fr-grid">
            {highlights.map((item, i) => {
              const Icon = item.Icon

              return (
                <motion.div
                  key={item.title}
                  className="fr-card"
                  {...fadeUp(i * 0.08)}
                >
                  <div className="fr-card-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}

      <section className="fr-investment">
        <div className="fr-container">
          <motion.div className="fr-center" {...fadeUp(0)}>
            <span className="fr-label">Investment Models</span>

            <h2 className="fr-heading center">
              Choose Your <em>Growth Format</em>
            </h2>
          </motion.div>

          <div className="fr-invest-grid">
            <motion.div className="fr-invest-card" {...fadeUp(0.1)}>
              <Store size={28} />

              <h3>Food Hall</h3>

              <h4>$50K – $80K</h4>

              <p>
                Ideal for high-footfall urban concepts with lower startup costs.
              </p>
            </motion.div>

            <motion.div className="fr-invest-card active" {...fadeUp(0.2)}>
              <Building2 size={28} />

              <h3>Food Court</h3>

              <h4>$100K – $175K</h4>

              <p>
                Perfect for malls and mixed-use commercial developments.
              </p>
            </motion.div>

            <motion.div className="fr-invest-card" {...fadeUp(0.3)}>
              <MapPinned size={28} />

              <h3>Stand Alone</h3>

              <h4>$200K – $350K</h4>

              <p>
                Full-scale Bowl’d Masala experience with maximum market presence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}

      <section className="fr-locations">
        <div className="fr-container fr-locations-grid">

          <motion.div className="fr-location-box" {...fadeUp(0.1)}>
            <span className="fr-label">Current Locations</span>

            <h3>Growing Across The U.S.</h3>

            <div className="fr-tags">
              {locations.map((loc) => (
                <span key={loc}>{loc}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="fr-location-box" {...fadeUp(0.2)}>
            <span className="fr-label">Available Markets</span>

            <h3>Expansion Opportunities</h3>

            <div className="fr-tags">
              {markets.map((loc) => (
                <span key={loc}>{loc}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}

      <section className="fr-cta-wrap" id="inquiry">
        <div className="fr-container">
          <motion.div className="fr-cta" {...fadeUp(0)}>
            <div>
              <h2>
                Ready To Build With <em>Bowl'd Masala?</em>
              </h2>

              <p>
                Start your franchise journey today and bring authentic Indian
                street food to your market.
              </p>
            </div>

            <div className="fr-cta-btns">
              <a href="mailto:Pankaj@bowldmasala.com" className="fr-btn-primary">
                <Mail size={17} />
                Email Us
              </a>

              <a href="tel:+19292612124" className="fr-btn-secondary">
                <Phone size={17} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}