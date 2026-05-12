import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  ShoppingBag, ArrowRight, Flame, Leaf, Star, Sparkles,
  UtensilsCrossed, Coffee, IceCream, Soup, Sandwich,
  CheckCircle, Clock, Zap, Heart
} from 'lucide-react'
import '../styles/MenuPage.css'

// ── Menu Data ─────────────────────────────────────────────────
const menuData = {
  Appetizers: [
    { id: 1,  name: 'Samosa Chaat',           desc: 'Crispy samosas topped with tamarind chutney, yogurt & spices', price: '$8.99',  badge: 'Veg',        badgeType: 'veg',  img: '/src/assets/dish13.jpg' },
    { id: 2,  name: 'Masala Fries',            desc: 'Crispy fries tossed with our secret masala blend',             price: '$6.99',  badge: 'Veg',        badgeType: 'veg',  img: '/src/assets/dish7.jpeg' },
    { id: 3,  name: 'Vegetable Samosa',         desc: 'Crispy golden pastry pockets filled with a flavorful mix of spiced vegetables in every bite.',          price: '$10.99', badge: 'veg',        badgeType: 'veg',  img: '/src/assets/dish12.jpg' },
    { id: 4,  name: 'Masala Chai',             desc: 'Spiced Indian tea with ginger, cardamom & cinnamon',           price: '$3.99',  badge: 'Veg',        badgeType: 'veg',  img: '/src/assets/dish14.png' },
  ],
  Bowls: [
    { id: 5,  name: 'Chicken Tikka Bowl',      desc: 'Tender chicken tikka on fragrant basmati rice with raita',     price: '$13.99', badge: 'Best Seller', badgeType: 'best', img: '/src/assets/dish8.jpg' },
    { id: 6,  name: 'Masala Aloo Bowl',        desc: 'Spiced potatoes in a rich tomato masala over basmati rice',    price: '$11.99', badge: 'Veg',        badgeType: 'veg',  img: '/src/assets/dish9.jpg' },
    { id: 7,  name: 'Vegetable Bowl',          desc: 'Seasonal vegetables in a fragrant curry sauce with rice',      price: '$11.49', badge: 'Veg',        badgeType: 'veg',  img: '/src/assets/dish6.jpeg' },
    { id: 8,  name: 'Spicy Keema Bowl',        desc: 'Minced meat slow-cooked with aromatic spices over rice',       price: '$13.49', badge: 'Spicy',      badgeType: 'hot',  img: '/src/assets/dish11.jpg' },
  ],
  Rolls: [
    { id: 9,  name: 'Cilantro Chicken Roll',   desc: 'Juicy chicken with cilantro, onions & green chutney',          price: '$11.99', badge: 'Popular',    badgeType: 'best', img: '/src/assets/dish18.jpg' },
    { id: 10, name: 'Paneer Tikka Roll',       desc: 'Smoky paneer with pickled onions in a flaky paratha',          price: '$10.99', badge: 'Veg',        badgeType: 'veg',  img: '/src/assets/dish2.jpeg' },
    { id: 11, name: 'Egg Tandoori Paneer Roll',desc: 'Tandoori paneer in egg-dipped paratha with mint sauce',        price: '$11.49', badge: 'Chef Pick',  badgeType: 'chef', img: '/src/assets/dish15.jpeg' },
    { id: 12, name: "Plant-Based Chick'n Roll",desc: "Our plant-based kati roll — bold and delicious",               price: '$12.49', badge: 'Vegan',      badgeType: 'veg',  img: '/src/assets/dish16.jpeg' },
    { id: 13, name: 'Spicy Keema Egg Roll',    desc: 'Spiced minced meat wrapped in a crispy egg roll',              price: '$11.99', badge: 'Spicy',      badgeType: 'hot',  img: '/src/assets/dish17.jpeg' },
  ],
  Desserts: [
    { id: 14, name: 'Gulab Jamun',             desc: 'Soft dumplings soaked in rose-flavored sugar syrup',           price: '$4.99',  badge: 'Sweet',      badgeType: 'sweet', img: '/src/assets/dish3.jpg' },
  ],
  Drinks: [
    { id: 15, name: 'Masala Chai',             desc: 'Classic Indian spiced tea',                                    price: '$3.99',  badge: 'Hot',        badgeType: 'hot',  img: '/src/assets/dish14.png' },
    { id: 16, name: 'Mango Lassi',             desc: 'Creamy yogurt drink blended with sweet Alphonso mango',        price: '$4.99',  badge: 'Cold',       badgeType: 'veg',  img: '/src/assets/dish5.jpeg'}
  ],
}

// ── Tab config — Lucide icons only ───────────────────────────
const tabs = [
  { key: 'Appetizers', Icon: UtensilsCrossed, count: 4 },
  { key: 'Bowls',      Icon: Soup,            count: 4 },
  { key: 'Rolls',      Icon: Sandwich,        count: 5 },
  { key: 'Desserts',   Icon: IceCream,        count: 1 },
  { key: 'Drinks',     Icon: Coffee,          count: 2 },
]

// ── Feature pills — Lucide icons only ────────────────────────
const features = [
  { Icon: Leaf,         label: 'Fresh Daily'        },
  { Icon: Zap,          label: 'Made to Order'      },
  { Icon: Heart,        label: 'House-Made Sauces'  },
  { Icon: CheckCircle,  label: 'Veg & Non-Veg'      },
]

// ── Badge map ─────────────────────────────────────────────────
const badgeMap = {
  veg:   { bg: '#e8f5ee', color: '#3a9e5a', Icon: Leaf     },
  hot:   { bg: '#fef0e6', color: '#e8892b', Icon: Flame    },
  best:  { bg: '#fff4e6', color: '#c97018', Icon: Star     },
  chef:  { bg: '#f0eeff', color: '#7c5cbf', Icon: Sparkles },
  sweet: { bg: '#fce8f4', color: '#b05090', Icon: Heart    },
}

// ── Animation variants ────────────────────────────────────────
const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardV = {
  hidden:  { opacity: 0, y: 32, scale: 0.94 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: [0.22,1,0.36,1] } },
}

// ── Dish Card ─────────────────────────────────────────────────
function DishCard({ dish }) {
  const b = badgeMap[dish.badgeType] || badgeMap.hot
  const BadgeIcon = b.Icon
  return (
    <motion.div className="mp-card" variants={cardV} whileHover={{ y: -6 }}>
      <div className="mp-card-img-wrap">
        <img src={dish.img} alt={dish.name} loading="lazy" className="mp-card-img" />
        {dish.badge && (
          <span className="mp-badge" style={{ background: b.bg, color: b.color }}>
            <BadgeIcon size={10} />
            {dish.badge}
          </span>
        )}
      </div>
      <div className="mp-card-body">
        <h3 className="mp-card-name">{dish.name}</h3>
        <p className="mp-card-desc">{dish.desc}</p>
        <div className="mp-card-footer">
          <span className="mp-card-price">{dish.price}</span>
          <motion.a
            href="https://ordering-bowldmasala.com/home"
            target="_blank"
            rel="noreferrer"
            className="mp-add-btn"
            whileTap={{ scale: 0.9 }}
            title="Order this dish"
          >
            <ShoppingBag size={14} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page Hero ─────────────────────────────────────────────────
function PageHero() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section className="mp-hero" ref={ref}>
      <div className="mp-hero-blob mp-hero-blob--1" />
      <div className="mp-hero-blob mp-hero-blob--2" />
      <div className="mp-container">

        <motion.p
          className="mp-hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          Our Menu
        </motion.p>

        <motion.h1
          className="mp-hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Crafted with <em>Love &amp; Spice</em>
        </motion.h1>

        <motion.p
          className="mp-hero-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          Every dish is made fresh to order. Bold flavors, quality ingredients,
          Indian street food at its finest.
        </motion.p>

        {/* Feature pills — icons only */}
        <motion.div
          className="mp-hero-pills"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          {features.map(({ Icon, label }) => (
            <span key={label} className="mp-hero-pill">
              <Icon size={12} className="mp-hero-pill-icon" />
              {label}
            </span>
          ))}
        </motion.div>

      </div>
      <div className="mp-hero-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fdf8f2" />
        </svg>
      </div>
    </section>
  )
}

// ── Main Export ───────────────────────────────────────────────
export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('Bowls')
  const dishes = menuData[activeTab] || []

  return (
    <>
      <PageHero />

      <section className="mp-body">
        <div className="mp-container">

          {/* Tabs — icons only */}
          <motion.div
            className="mp-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {tabs.map(({ key, Icon, count }) => (
              <button
                key={key}
                className={`mp-tab${activeTab === key ? ' mp-tab--active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <Icon size={15} className="mp-tab-icon" />
                <span className="mp-tab-label">{key}</span>
                <span className="mp-tab-count">{count}</span>
              </button>
            ))}
          </motion.div>

          {/* Section label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`lbl-${activeTab}`}
              className="mp-section-label"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.3 }}
            >
              <span className="mp-section-line" />
              <span>{activeTab}</span>
              <span className="mp-section-count">
                {menuData[activeTab]?.length} items
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="mp-grid"
              variants={container}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Order CTA */}
          <motion.div
            className="mp-order-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mp-order-cta-inner">
              <div>
                <p className="mp-order-cta-title">Ready to Order?</p>
                <p className="mp-order-cta-sub">Skip the wait — order online for pickup or delivery.</p>
              </div>
              <a
                href="https://ordering-bowldmasala.com/home"
                target="_blank"
                rel="noreferrer"
                className="mp-order-btn"
              >
                Order Online Now <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}