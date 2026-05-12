import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import '../styles/BestSellers.css'

const items = [
  {
    id: 1,
    name: 'Chicken Tikka Bowl',
    tag: 'Best Seller',
    desc: 'Basmati rice, tikka chicken, raita & green chutney',
    price: '$13.99',
    img: '/dish8.jpg',
    align: 'right',
    accent: '#e8892b',
  },
  {
    id: 2,
    name: 'Cilantro Chicken Roll',
    tag: 'Popular',
    desc: 'Egg paratha, tandoori chicken, cilantro & spicy chutney',
    price: '$11.99',
    img: '/dish18.jpg',
    align: 'left',
    accent: '#c45e3a',
  },
  {
    id: 3,
    name: 'Samosa Chaat',
    tag: 'Veg',
    desc: 'Crispy samosa, tamarind chutney & chaat masala',
    price: '$8.99',
    img: '/dish13.jpg',
    align: 'right',
    accent: '#3a9e5a',
  },
  {
    id: 4,
    name: 'Gulab Jamun',
    tag: 'Sweet',
    desc: 'Milk dumplings in rose cardamom sugar syrup',
    price: '$4.99',
    img: '/dish3.jpg',
    align: 'left',
    accent: '#b05090',
  },
]

function DishRow({ item, index }) {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: false,
    margin: '-80px',
  })

  const isLeft = item.align === 'left'

  return (
    <div
      ref={ref}
      className={`bm-row ${isLeft ? 'bm-row--left' : 'bm-row--right'}`}
    >
      {/* IMAGE */}
      <motion.div
        className="bm-img-side"
        initial={{
          opacity: 0,
          x: isLeft ? 50 : -50,
          scale: 0.92,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                x: isLeft ? 50 : -50,
                scale: 0.92,
              }
        }
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          className="bm-img-glow"
          style={{
            background: `radial-gradient(circle, ${item.accent}22 0%, transparent 70%)`,
          }}
        />

        <div className="bm-img-frame">
          <img
            src={item.img}
            alt={item.name}
            className="bm-dish-img"
          />
        </div>

        <motion.div
          className="bm-price-bubble"
          style={{ background: item.accent }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{
            delay: 0.35,
            type: 'spring',
            stiffness: 180,
          }}
        >
          {item.price}
        </motion.div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="bm-text-side"
        initial={{
          opacity: 0,
          x: isLeft ? -40 : 40,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: isLeft ? -40 : 40,
              }
        }
        transition={{
          duration: 0.65,
          delay: 0.1,
        }}
      >
        <div
          className="bm-number"
          style={{ color: item.accent }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        <div
          className="bm-tag"
          style={{
            color: item.accent,
            borderColor: item.accent,
          }}
        >
          {item.tag}
        </div>

        <h3 className="bm-dish-name">
          {item.name}
        </h3>

        <motion.div
          className="bm-underline"
          style={{
            background: item.accent,
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.25,
          }}
        />

        <p className="bm-dish-desc">
          {item.desc}
        </p>

        <a
          href="https://ordering-bowldmasala.com/home"
          target="_blank"
          rel="noreferrer"
          className="bm-order-link"
          style={{ color: item.accent }}
        >
          Order Now <ArrowRight size={13} />
        </a>
      </motion.div>
    </div>
  )
}

export default function BestSellers() {
  return (
    <section
      className="bm-section"
      id="bestsellers"
    >
      <div className="bm-grain" />

      <div className="bm-inner">

        {/* HEADER */}
        <motion.div
          className="bm-header"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <div className="bm-eyebrow">
            Fan Favourites
          </div>

          <h2 className="bm-title">
            Our Best <em>Sellers</em>
          </h2>

          <p className="bm-subtitle">
            Freshly made with authentic flavours
          </p>
        </motion.div>

        {/* ROWS */}
        <div className="bm-rows">
          {items.map((item, i) => (
            <DishRow
              key={item.id}
              item={item}
              index={i}
            />
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          className="bm-footer"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="bm-footer-btns">

            <a
              href="/menu"
              className="bm-btn-ghost"
            >
              View Menu
            </a>

            <a
              href="https://ordering-bowldmasala.com/home"
              target="_blank"
              rel="noreferrer"
              className="bm-btn-fill"
            >
              Order Online
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  )
}