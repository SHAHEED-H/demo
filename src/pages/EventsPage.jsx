import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Calendar,
  Clock,
  ChevronRight,
} from 'lucide-react'

import '../styles/EventsPage.css'

/* EVENT IMAGES */

import img1 from '/Mothers Day.jpg'
import img2 from '/Memorial Day.jpg'
import img3 from '/National Egg Day.jpg'
import img4 from '/National Egg Roll Day.jpg'
import img5 from '/Fathers Day.jpg'
import img6 from '/4th of July.jpg'
import img7 from '/National French Fry Day.jpg'
import img8 from '/National Chicken Wing Day.jpg'

/* EVENTS */

const upcomingEvents = [
  {
    id: 1,
    title: "Mother's Day",
    image: img1,
    date: "Sunday, May 10th",
    hours: "11:00 AM – 07:00 PM",
    desc: "Join us on Mother's Day and treat your mom to a delicious meal!",
    badge: 'This Sunday',
  },

  {
    id: 2,
    title: 'Memorial Day',
    image: img2,
    date: 'Monday, May 25th',
    hours: '11:00 AM – 09:00 PM',
    desc: 'Come celebrate the long weekend with us!',
    badge: 'Coming Soon',
  },

  {
    id: 3,
    title: 'National Egg Day',
    image: img3,
    date: 'Wednesday, June 3rd',
    hours: '11:00 AM – 09:00 PM',
    desc: 'Join us for National Egg Day.',
    badge: 'June',
  },

  {
    id: 4,
    title: 'National Egg Roll Day',
    image: img4,
    date: 'Wednesday, June 10th',
    hours: '11:00 AM – 09:00 PM',
    desc: 'Celebrate Egg Roll Day with us.',
    badge: 'June',
  },

  {
    id: 5,
    title: "Father's Day",
    image: img5,
    date: 'Sunday, June 21st',
    hours: '11:00 AM – 07:00 PM',
    desc: "Treat your dad and celebrate together.",
    badge: 'June',
  },

  {
    id: 6,
    title: '4th of July',
    image: img6,
    date: 'Saturday, July 4th',
    hours: '11:00 AM – 10:00 PM',
    desc: 'Celebrate Independence Day with us!',
    badge: 'July',
  },

  {
    id: 7,
    title: 'National French Fry Day',
    image: img7,
    date: 'Friday, July 10th',
    hours: '11:00 AM – 10:00 PM',
    desc: 'Enjoy our famous Masala Fries!',
    badge: 'July',
  },

  {
    id: 8,
    title: 'National Chicken Wing Day',
    image: img8,
    date: 'Wednesday, July 29th',
    hours: '11:00 AM – 09:00 PM',
    desc: 'Come grab some wings — masala style!',
    badge: 'July',
  },
]

function EventCard({ event, index }) {

  const ref = useRef(null)

  const inView = useInView(ref, {
    once: false,
    margin: '-50px',
  })

  return (
    <motion.div
      ref={ref}
      className="ev-flip-card"
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 30,
              scale: 0.96,
            }
      }
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
      }}
    >
      <div className="ev-flip-inner">

        {/* FRONT */}

        <div className="ev-flip-front">

          <div className="ev-front-image">
            <img src={event.image} alt={event.title} />
          </div>

          <div className="ev-front-bottom">

            <h3>{event.title}</h3>

            <span>{event.badge}</span>

          </div>
        </div>

        {/* BACK */}

        <div className="ev-flip-back">

          <h3>{event.title}</h3>

          <div className="ev-back-meta">

            <div>
              <Calendar size={13} />
              <span>{event.date}</span>
            </div>

            <div>
              <Clock size={13} />
              <span>{event.hours}</span>
            </div>
          </div>

          <p>{event.desc}</p>

          <a
            href="https://ordering-bowldmasala.com/home"
            target="_blank"
            rel="noreferrer"
          >
            Order Ahead
            <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function EventsPage() {

  return (
    <>
      {/* HERO */}

      <section className="ev-banner">

        <div className="ev-banner-overlay" />

        <div className="ev-banner-container">

          <motion.p
            className="ev-banner-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Events & Celebrations
          </motion.p>

          <motion.h1
            className="ev-banner-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            Join Us for Every <em>Special Occasion</em>
          </motion.h1>

          <motion.p
            className="ev-banner-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            From national food holidays to family celebrations —
            Bowl'd Masala is the perfect place to gather,
            eat, and make memories.
          </motion.p>
        </div>

        <div className="ev-banner-wave">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
              fill="#fdf8f2"
            />
          </svg>
        </div>
      </section>

      {/* EVENTS */}

      <section className="ev-events-section">

        <div className="ev-container">

          <div className="ev-section-header">

            <p className="ev-eyebrow">
              What's Coming Up
            </p>

            <h2 className="ev-section-title">
              Upcoming <em>Events</em>
            </h2>

            <p className="ev-section-sub">
              Mark your calendar — these are the events
              you won't want to miss.
            </p>
          </div>

          <div className="ev-grid">

            {upcomingEvents.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}