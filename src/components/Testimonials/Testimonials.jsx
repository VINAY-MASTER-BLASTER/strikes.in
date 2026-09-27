import { motion } from "framer-motion";
import { IconStar } from "../Icons";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "SDE-2 @ Google",
    outcome: "₹45 LPA",
    text: "STRIKE's DSA program transformed my approach to problem-solving. The structured curriculum and expert mentorship were exactly what I needed to crack my Google interview.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Full-Stack Dev @ Microsoft",
    outcome: "₹38 LPA",
    text: "The project-based learning made all the difference. I built real products during the course, and my STRIKE portfolio directly helped me land my Microsoft offer.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Rohan Gupta",
    role: "ML Engineer @ Amazon",
    outcome: "₹52 LPA",
    text: "The Gen AI track was cutting-edge. I went from zero AI experience to deploying production ML models. STRIKE's mentors are truly world-class.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Sneha Rao",
    role: "Frontend Dev @ Meta",
    outcome: "₹42 LPA",
    text: "I was stuck in a service-based company. STRIKE's Web Dev program helped me master React and system design, landing me a dream role at Meta.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Backend Engineer @ Uber",
    outcome: "₹50 LPA",
    text: "The system design mock interviews were a game-changer. The FAANG mentors pinpointed exactly where I was lacking and helped me improve fast.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Data Scientist @ Netflix",
    outcome: "₹48 LPA",
    text: "STRIKE doesn't just teach code, they teach engineering. The placement assistance was phenomenal, helping me negotiate multiple competing offers.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80",
    rating: 5,
  },
];

// Duplicate the array to create a seamless infinite marquee
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <motion.span
          className="testimonials__badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <IconStar size={14} style={{ marginRight: 4 }} /> Success Stories
        </motion.span>
        <motion.h2
          className="testimonials__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          Real Results from Real Learners
        </motion.h2>

        <div className="testimonials__marquee-container">
          <div className="testimonials__marquee">
            {duplicatedTestimonials.map((t, i) => (
              <div key={i} className="testimonials__card glass">
                <div className="testimonials__stars">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <IconStar key={idx} size={18} style={{ display: 'inline-block' }} />
                  ))}
                </div>
                <p className="testimonials__text">"{t.text}"</p>
                <div className="testimonials__author">
                  <img
                    className="testimonials__avatar"
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                  />
                  <div className="testimonials__author-info">
                    <div className="testimonials__name">{t.name}</div>
                    <div className="testimonials__role">{t.role}</div>
                    <div className="testimonials__outcome">
                      <span className="testimonials__outcome-badge">{t.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
