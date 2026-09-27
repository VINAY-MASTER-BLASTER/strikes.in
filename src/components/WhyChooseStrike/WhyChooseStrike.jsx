import { motion } from "framer-motion";
import { IconGrid, IconCode, IconUsers, IconMic, IconGraduationCap, IconTarget, IconLightning } from "../Icons";
import "./WhyChooseStrike.css";

const reasons = [
  {
    icon: IconGrid,
    title: "Structured Learning",
    desc: "Carefully crafted curriculum designed by industry experts to take you from beginner to job-ready.",
  },
  {
    icon: IconCode,
    title: "Project-Based Approach",
    desc: "Build real-world projects that become part of your portfolio and demonstrate your skills to employers.",
  },
  {
    icon: IconUsers,
    title: "Expert Mentorship",
    desc: "Get guidance from FAANG engineers and industry veterans who know what it takes to succeed.",
  },
  {
    icon: IconMic,
    title: "Mock Interviews",
    desc: "Practice with realistic mock interviews and receive actionable feedback to ace your next interview.",
  },
  {
    icon: IconGraduationCap,
    title: "Certification",
    desc: "Earn industry-recognized certifications that validate your expertise and boost your resume.",
  },
  {
    icon: IconTarget,
    title: "Placement Assistance",
    desc: "Dedicated placement support with 500+ hiring partners to help you land your dream tech job.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function WhyChooseStrike() {
  return (
    <section className="why" id="why">
      <div className="why__inner">
        <motion.span
          className="why__badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <IconLightning size={14} style={{ marginRight: 4 }} /> Why STRIKE?
        </motion.span>
        <motion.h2
          className="why__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          Why Choose STRIKE?
        </motion.h2>
        <motion.p
          className="why__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Everything you need to transform your career in tech — structured, mentored, and placement-guaranteed.
        </motion.p>

        <div className="why__grid">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                className="why__card glow-border"
                key={r.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="why__icon-wrapper">
                  <Icon size={28} />
                </div>
                <h3 className="why__card-title">{r.title}</h3>
                <p className="why__card-desc">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
