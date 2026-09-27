import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconRocket, IconChevronRight } from "../Icons";
import "./Hero.css";

const heroCards = [
  { image: "/images/hero/career.jpg", title: "Career Focused", desc: "100% Job-Ready Skills", stat: "95%" },
  { image: "/images/hero/projects.jpg", title: "Live Projects", desc: "Real Industry Experience", stat: "50+" },
  { image: "/images/hero/mentors.jpg", title: "Expert Mentors", desc: "FAANG Engineers", stat: "1:1" },
];

const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Uber", "Flipkart",
  "Adobe", "Spotify", "Airbnb", "Tesla", "Intel", "Salesforce"
];
const duplicatedCompanies = [...companies, ...companies];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 106, 255, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas className="hero__particles" ref={canvasRef} aria-hidden="true" />
      <div className="hero__gradient-orb hero__gradient-orb--1" aria-hidden="true" />
      <div className="hero__gradient-orb hero__gradient-orb--2" aria-hidden="true" />
      <div className="hero__gradient-orb hero__gradient-orb--3" aria-hidden="true" />

      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__badge section-badge" style={{ background: "rgba(124,106,255,0.1)", border: "1px solid rgba(124,106,255,0.2)", color: "var(--color-primary-light)" }}>
            <span className="hero__badge-dot" aria-hidden="true" />
            <IconRocket size={14} className="hero__badge-icon" />
            #1 EdTech for Career Transformation
          </div>

          <h1 className="hero__title">
            Master Tech.
            <br />
            <span className="hero__title-gradient">Land Dream Jobs.</span>
          </h1>

          <p className="hero__subtitle">
            Project-based learning, expert mentorship from FAANG engineers, and guaranteed
            placement assistance. Join 50,000+ learners transforming their careers.
          </p>

          <div className="hero__actions">
            <a href="#courses" className="hero__cta-primary btn-shimmer">
              Start Learning — Free Trial
              <IconChevronRight size={16} />
            </a>
            <a href="#roadmap" className="hero__cta-secondary">
              View Curriculum →
            </a>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-label">Our alumni work at</span>
            <div className="hero__trust-logos-container">
              <div className="hero__trust-logos">
                {duplicatedCompanies.map((c, i) => (
                  <span key={i} className="hero__trust-company">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__cards"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {heroCards.map((card) => (
            <motion.div className="hero__card glow-border" key={card.title} variants={itemVariants}>
              <div className="hero__card-image image-card">
                <img src={card.image} alt={card.title} loading="eager" />
              </div>
              <div className="hero__card-content">
                <span className="hero__card-stat">{card.stat}</span>
                <h3 className="hero__card-title">{card.title}</h3>
                <p className="hero__card-desc">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
