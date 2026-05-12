import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "../styles/testimonials.css";

const reviews = [
  {
    name: "Sarah Thompson",
    role: "Project Manager",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "This AI product has transformed the way I manage my daily tasks. It's intuitive, fast, and incredibly accurate!",
  },

  {
    name: "Michael Chen",
    role: "Software Developer",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I was skeptical at first, but this AI tool saved me hours of work. The automation features are a game-changer.",
  },

  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The AI’s ability to analyze data and provide insights is unmatched. It’s like having a personal assistant 24/7.",
  },

  {
    name: "David Patel",
    role: "IT Consultant",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "I've never seen an AI product this user-friendly. It integrated seamlessly into my workflow from day one.",
  },

  {
    name: "Olivia Harper",
    role: "Marketing Specialist",
    image:
      "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "This AI has boosted my productivity tenfold. The predictive features are spot-on and so helpful!",
  },

  {
    name: "James Carter",
    role: "Operations Manager",
    image:
      "https://randomuser.me/api/portraits/men/18.jpg",
    review:
      "The customer support paired with this AI product is phenomenal. It delivers results every single day.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">

      {/* Background Glow */}
      <div className="testimonial-glow"></div>

      <div className="testimonial-header">
        <span>TESTIMONIALS</span>
        <h2>What People Say</h2>
      </div>

      {/* MOVING WRAPPER */}
      <div className="testimonial-slider">

        <motion.div
          className="testimonial-track"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div className="testimonial-card" key={index}>

              {/* STARS */}
              <div className="testimonial-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="white"
                    stroke="white"
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="testimonial-text">
                "{item.review}"
              </p>

              {/* USER */}
              <div className="testimonial-user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}