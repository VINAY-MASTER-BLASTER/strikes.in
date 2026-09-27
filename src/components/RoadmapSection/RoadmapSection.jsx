import { useState } from "react";
import { motion } from "framer-motion";
import { curriculum } from "../../data/curriculum";
import { useInView } from "../../hooks/useInView";
import { IconBuilding, IconGrid, IconCode, IconMic, IconTarget } from "../Icons";
import "./RoadmapSection.css";

const iconMap = {
  building: IconBuilding,
  grid: IconGrid,
  code: IconCode,
  mic: IconMic,
  target: IconTarget,
};

const nodeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function RoadmapSection() {
  const [activeNode, setActiveNode] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="roadmap" id="roadmap" ref={ref}>
      <div className="roadmap__inner">
        <motion.span
          className="roadmap__badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Curriculum
        </motion.span>
        <motion.h2
          className="roadmap__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Journey to Success
        </motion.h2>
        <motion.p
          className="roadmap__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A structured, step-by-step curriculum that transforms beginners into industry-ready professionals.
        </motion.p>

        <div className="roadmap__stepper">
          {/* Connector line */}
          <div className="roadmap__line-track" aria-hidden="true">
            <div className={`roadmap__line-fill ${inView ? "roadmap__line-fill--active" : ""}`}></div>
          </div>

          {/* Nodes */}
          <div className="roadmap__nodes">
            {curriculum.map((mod, i) => (
              <motion.div
                className="roadmap__node-wrapper"
                key={mod.id}
                custom={i}
                variants={nodeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <button
                  className={`roadmap__node ${activeNode === mod.id ? "roadmap__node--active" : ""}`}
                  onClick={() => setActiveNode(activeNode === mod.id ? null : mod.id)}
                  aria-expanded={activeNode === mod.id}
                  aria-label={`Module ${i + 1}: ${mod.title}`}
                >
                  <span className="roadmap__node-icon">
                    {(() => {
                      const Icon = iconMap[mod.iconKey];
                      return Icon ? <Icon size={24} /> : null;
                    })()}
                  </span>
                  <span className="roadmap__node-number">Module {i + 1}</span>
                  <span className="roadmap__node-title">{mod.title}</span>
                </button>

                {/* Expanded detail card */}
                {activeNode === mod.id && (
                  <motion.div
                    className="roadmap__detail"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    role="region"
                    aria-label={`${mod.title} details`}
                  >
                    <div className="roadmap__detail-header">
                      <span className="roadmap__detail-icon">
                        {(() => {
                          const Icon = iconMap[mod.iconKey];
                          return Icon ? <Icon size={24} /> : null;
                        })()}
                      </span>
                      <div>
                        <h4 className="roadmap__detail-title">{mod.title}</h4>
                        <span className="roadmap__detail-duration">{mod.duration}</span>
                      </div>
                    </div>
                    <p className="roadmap__detail-desc">{mod.desc}</p>
                    <ul className="roadmap__detail-topics">
                      {mod.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
