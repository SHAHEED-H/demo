import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  User, Phone, Mail, Building2, Users, Calendar,
  Clock, Sparkles, UtensilsCrossed, DollarSign,
  MessageSquare, Search, CheckCircle, Send, Leaf, Package, Headphones
} from 'lucide-react'
import '../styles/CateringPage.css'

const guestOptions = ['10 People','15 People','20 People','25 People','30 People',
  '40 People','50 People','75 People','100 People','150 People','200+ People']

const timeOptions = ['11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM',
  '1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM',
  '5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM']

const occasionOptions = ['Birthday Party','Corporate Event','Wedding / Reception',
  'Engagement Party','Holiday Celebration','Graduation Party','Office Lunch',
  'Community Event','Other']

const cateringTypes = ['Drop-off Catering','Full-Service Catering',
  'Buffet Setup','Live Station','Pick-Up Order','Custom Package']

const hearAboutOptions = ['Google','Instagram','Facebook',
  'Word of Mouth','Yelp','A Friend','Other']

const perks = [
  { Icon: Leaf,            text: 'Fresh, made-to-order dishes'       },
  { Icon: UtensilsCrossed, text: 'Customizable menu for any event'   },
  { Icon: Users,           text: 'Veg, vegan & gluten-free options'  },
  { Icon: Package,         text: 'Equipment & disposables included'  },
  { Icon: Headphones,      text: 'Dedicated event coordinator'       },
  { Icon: CheckCircle,     text: 'On-time professional setup'        },
]

function useFade(margin = '-50px') {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin })
  return [ref, inView]
}

function Field({ label, required, icon: Icon, children }) {
  return (
    <div className="cf-field">
      <label className="cf-label">
        {Icon && <Icon size={13} className="cf-label-icon" />}
        {label}
        {required && <span className="cf-req">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function CateringPage() {
  const [form, setForm] = useState({
    name:'', phone:'', email:'', company:'',
    guests:'10 People', date:'', time:'11:00 AM',
    occasion:'', cateringType:'', budget:'20',
    description:'', hearAbout:'', marketing: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) =>
    setForm(p => ({ ...p, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const [leftRef,  leftView]  = useFade('-40px')
  const [formRef,  formView]  = useFade('-40px')

  return (
    <>
      {/* ══ BANNER ══ */}
      <section className="cp-banner">
        <div className="cp-overlay" />
        <div className="cp-banner-inner">
          <motion.p className="cp-eyebrow"
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.55 }}
          >Catering Services</motion.p>
          <motion.h1 className="cp-banner-title"
            initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:0.1 }}
          >
            Convenient Catering,<br /><em>Memorable Moments</em>
          </motion.h1>
          <motion.p className="cp-banner-sub"
            initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.2 }}
          >
            Fill out the form and we'll get back to you within 24 hours.
            Please specify your location: Houston · Delaware · Silver Spring · Orlando
          </motion.p>
        </div>
        <div className="cp-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fdf8f2" />
          </svg>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <section className="cp-body">
        <div className="cp-container">
          <div className="cp-layout">

            {/* LEFT — info */}
            <motion.aside
              className="cp-aside"
              ref={leftRef}
              initial={{ opacity:0, x:-30 }}
              animate={leftView ? { opacity:1, x:0 } : { opacity:0, x:-30 }}
              transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
            >
              <p className="cp-aside-eyebrow">What's included</p>
              <h2 className="cp-aside-title">Bold Flavors,<br /><em>Every Event</em></h2>
              <p className="cp-aside-body">
                From intimate office lunches to large wedding receptions —
                Bowl'd Masala brings authentic Indian street food to your celebration.
              </p>

              <ul className="cp-perks">
                {perks.map(({ Icon, text }, i) => (
                  <motion.li key={text} className="cp-perk"
                    initial={{ opacity:0, x:-18 }}
                    animate={leftView ? { opacity:1, x:0 } : { opacity:0, x:-18 }}
                    transition={{ duration:0.4, delay: 0.1 + i*0.08 }}
                  >
                    <div className="cp-perk-icon"><Icon size={14} /></div>
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="cp-contact-box">
                <p className="cp-contact-title">Prefer to call?</p>
                <a href="tel:+19292612124" className="cp-contact-link">
                  <Phone size={15} /> (929) 261-2124
                </a>
                <a href="mailto:Pankaj@bowldmasala.com" className="cp-contact-link cp-contact-link--sm">
                  <Mail size={13} /> Pankaj@bowldmasala.com
                </a>
              </div>
            </motion.aside>

            {/* RIGHT — form */}
            <motion.div
              className="cp-form-card"
              ref={formRef}
              initial={{ opacity:0, y:40 }}
              animate={formView ? { opacity:1, y:0 } : { opacity:0, y:40 }}
              transition={{ duration:0.85, ease:[0.22,1,0.36,1] }}
            >
              {submitted ? (
                <div className="cp-success">
                  <div className="cp-success-icon"><CheckCircle size={40} /></div>
                  <h3>Request Sent!</h3>
                  <p>We'll get back to you within 24 hours to confirm your catering details.</p>
                  <button className="cp-submit" onClick={() => setSubmitted(false)}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} noValidate>

                  <div className="cp-form-head">
                    <h3 className="cp-form-title">Book Your Catering</h3>
                    <p className="cp-form-note"><span className="cf-req">*</span> required fields</p>
                  </div>

                  <div className="cf-grid">
                    <Field label="Full Name" required icon={User}>
                      <input className="cf-input" type="text"
                        placeholder="e.g. Nina Simone"
                        value={form.name} onChange={set('name')} required />
                    </Field>

                    <Field label="Phone" required icon={Phone}>
                      <input className="cf-input" type="tel"
                        placeholder="e.g. (123) 456-7890"
                        value={form.phone} onChange={set('phone')} required />
                    </Field>

                    <Field label="Email" required icon={Mail}>
                      <input className="cf-input" type="email"
                        placeholder="e.g. you@email.com"
                        value={form.email} onChange={set('email')} required />
                    </Field>

                    <Field label="Company" icon={Building2}>
                      <input className="cf-input" type="text"
                        placeholder="Name of your business..."
                        value={form.company} onChange={set('company')} />
                    </Field>

                    <Field label="Number of Guests" required icon={Users}>
                      <select className="cf-select" value={form.guests} onChange={set('guests')} required>
                        {guestOptions.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </Field>

                    <Field label="Preferred Date" required icon={Calendar}>
                      <input className="cf-input" type="date"
                        value={form.date} onChange={set('date')} required />
                    </Field>

                    <Field label="Preferred Time" required icon={Clock}>
                      <select className="cf-select" value={form.time} onChange={set('time')} required>
                        {timeOptions.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </Field>

                    <Field label="Budget per Person ($)" icon={DollarSign}>
                      <input className="cf-input" type="number"
                        placeholder="20" min="10"
                        value={form.budget} onChange={set('budget')} />
                    </Field>

                    <Field label="Select Occasion" required icon={Sparkles}>
                      <select className="cf-select" value={form.occasion} onChange={set('occasion')} required>
                        <option value="">Choose occasion...</option>
                        {occasionOptions.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </Field>

                    <Field label="Type of Catering Service" required icon={UtensilsCrossed}>
                      <select className="cf-select" value={form.cateringType} onChange={set('cateringType')} required>
                        <option value="">Choose type...</option>
                        {cateringTypes.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                  </div>

                  {/* Full-width fields */}
                  <Field label="Description / Special Requests" icon={MessageSquare}>
                    <textarea className="cf-textarea" rows={4}
                      placeholder="Any special requests, dietary needs, or event details... Please also mention your preferred location: Houston / Delaware / Silver Spring / Orlando"
                      value={form.description} onChange={set('description')} />
                  </Field>

                  <Field label="How did you hear about us?" icon={Search}>
                    <select className="cf-select" value={form.hearAbout} onChange={set('hearAbout')}>
                      <option value="">Select an option...</option>
                      {hearAboutOptions.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </Field>

                  {/* Marketing consent */}
                  <label className="cf-consent">
                    <input type="checkbox" className="cf-checkbox"
                      checked={form.marketing} onChange={set('marketing')} />
                    <span className="cf-consent-text">
                      I agree to receive marketing text messages from Bowl'd Masala about specials,
                      events, and exclusive offers. My consent is not required to make a reservation.
                      Message &amp; data rates may apply. Reply STOP to cancel, HELP for help.{' '}
                      <a href="#" className="cf-consent-link">Privacy Policy &amp; Terms</a>
                    </span>
                  </label>

                  <motion.button
                    type="submit"
                    className="cp-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Send size={16} />
                    Send Catering Request
                  </motion.button>

                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}