import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Phone, Mail, MapPin,
  Link, MessageCircle, Video,
  ArrowRight, ArrowUpRight, ChevronRight
} from 'lucide-react'
import logo from '../assets/logo1.png'   // ← update if your logo has a different filename
import '../styles/footer.css'

const quickLinks = [
  { label: 'Our Menu',       href: '/menu'      },
  { label: 'About Us',       href: '/about'     },
  { label: 'Catering',       href: '/catering'  },
  { label: 'Events',         href: '/events'    },
  { label: 'Franchise Info', href: '/franchise' },
  { label: 'Locations',      href: '/locations' },
]

const orderLinks = [
  { label: 'Order Online',        href: 'https://ordering-bowldmasala.com/home', external: true  },
  { label: 'Drink Menu',          href: 'https://bowldmasala.com/drink-menu',    external: true  },
  { label: 'Catering Packages',   href: '/catering',                             external: false },
  { label: "Bowl'd Masala Magic", href: '/masala-magic',                         external: false },
  { label: 'Fun Fact With BM',    href: '/fun-fact',                             external: false },
]

const socials = [
  { href: 'https://www.instagram.com/bowldmasala',    Icon: Link,          label: 'Instagram' },
  { href: 'https://www.facebook.com/639108012623200', Icon: MessageCircle, label: 'Facebook'  },
  { href: '#',                                         Icon: Video,         label: 'YouTube'   },
]

function FadeCol({ children, delay = 0 }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Footer() {
  const navigate = useNavigate()

  const handleLink = (e, href, external) => {
    if (external) return
    e.preventDefault()
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(href)
      window.scrollTo(0, 0)
    }
  }

  return (
    <footer className="ft-footer" id="footer">

      {/* Saffron accent bar */}
      <div className="ft-accent-bar" />

      {/* Main body */}
      <div className="ft-body">
        <div className="ft-container">
          <div className="ft-grid">

            {/* ── Col 1: Brand ── */}
            <FadeCol delay={0}>
              <div className="ft-brand">

                {/* Logo image */}
                <div
                  className="ft-logo"
                  onClick={() => { navigate('/'); window.scrollTo(0, 0) }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
                >
                  <img src={logo} alt="Bowl'd Masala" className="ft-logo-img" />
                </div>

                <p className="ft-tagline">
                  Fast. Fresh. Flavorful. Bold Indian street food
                  crafted with love — one bowl at a time.
                </p>

                {/* Socials */}
                <div className="ft-socials">
                  {socials.map(({ href, Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="ft-social"
                      aria-label={label}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>

                {/* Order CTA */}
                <a
                  href="https://ordering-bowldmasala.com/home"
                  target="_blank"
                  rel="noreferrer"
                  className="ft-order-btn"
                >
                  Order Now <ArrowRight size={14} />
                </a>
              </div>
            </FadeCol>

            {/* ── Col 2: Quick Links ── */}
            <FadeCol delay={0.1}>
              <div className="ft-col">
                <h4 className="ft-col-title">Quick Links</h4>
                <ul className="ft-list">
                  {quickLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="ft-link"
                        onClick={(e) => handleLink(e, l.href, false)}
                      >
                        <ChevronRight size={13} className="ft-link-icon" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeCol>

            {/* ── Col 3: Order & More ── */}
            <FadeCol delay={0.18}>
              <div className="ft-col">
                <h4 className="ft-col-title">Order &amp; More</h4>
                <ul className="ft-list">
                  {orderLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="ft-link"
                        target={l.external ? '_blank' : undefined}
                        rel={l.external ? 'noreferrer' : undefined}
                        onClick={(e) => handleLink(e, l.href, l.external)}
                      >
                        <ChevronRight size={13} className="ft-link-icon" />
                        {l.label}
                        {l.external && <ArrowUpRight size={11} className="ft-ext-icon" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeCol>

            {/* ── Col 4: Contact ── */}
            <FadeCol delay={0.26}>
              <div className="ft-col">
                <h4 className="ft-col-title">Get In Touch</h4>

                <div className="ft-contact-list">
                  <a href="tel:+19292612124" className="ft-contact-item">
                    <div className="ft-contact-icon"><Phone size={13} /></div>
                    <div>
                      <span className="ft-contact-label">Phone</span>
                      <span className="ft-contact-val">(929) 261-2124</span>
                    </div>
                  </a>

                  <a href="mailto:Pankaj@bowldmasala.com" className="ft-contact-item">
                    <div className="ft-contact-icon"><Mail size={13} /></div>
                    <div>
                      <span className="ft-contact-label">Email</span>
                      <span className="ft-contact-val">Pankaj@bowldmasala.com</span>
                    </div>
                  </a>

                  <div className="ft-contact-item">
                    <div className="ft-contact-icon"><MapPin size={13} /></div>
                    <div>
                      <span className="ft-contact-label">Flagship Location</span>
                      <span className="ft-contact-val">
                        Memorial City Mall<br />Houston, TX 77024
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ft-hours">
                  <span className="ft-hours-dot" />
                  <span>Open Mon–Sat: 11am – 9pm</span>
                </div>
              </div>
            </FadeCol>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft-bottom">
        <div className="ft-container ft-bottom-inner">
          <p className="ft-copy">
            © {new Date().getFullYear()} Bowl'd Masala. All rights reserved.
          </p>
          <ul className="ft-legal">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li>
              <a href="https://bowldmasala.com/accessibility-page-01" target="_blank" rel="noreferrer">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  )
}