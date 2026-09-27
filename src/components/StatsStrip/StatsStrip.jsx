import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { useEffect, useState } from "react";
import { IconGraduationCap, IconStar, IconTrendingUp } from "../Icons";
import "./StatsStrip.css";

const stats = [
  { end: 50, suffix: "K+", label: "Active Learners", Icon: IconGraduationCap, color: "var(--color-primary-light)" },
  { end: 99.9, suffix: "%", label: "Satisfaction Rate", Icon: IconStar, color: "var(--color-warning)" },
  { end: 2, suffix: " Cr", label: "Highest Salary Jump", Icon: IconTrendingUp, prefix: "₹", color: "var(--color-success)" },
];

function AnimatedNumber({ end, suffix = "", prefix = "", inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Number(start.toFixed(1)));
    }, 20);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span>{prefix}{count === Math.floor(count) ? Math.floor(count) : count}{suffix}</span>;
}

export default function StatsStrip() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        {stats.map((stat, i) => (
          <motion.div
            className="stats__card glass"
            key={stat.label}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="stats__icon" style={{ color: stat.color }}>
              <stat.Icon size={28} />
            </span>
            <span className="stats__number">
              <AnimatedNumber end={stat.end} suffix={stat.suffix} prefix={stat.prefix || ""} inView={inView} />
            </span>
            <span className="stats__label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
