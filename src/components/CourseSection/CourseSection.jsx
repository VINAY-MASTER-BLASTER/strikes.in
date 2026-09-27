import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "../../data/courses";
import CourseCard from "../CourseCard/CourseCard";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
import "./CourseSection.css";

export default function CourseSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = (course) => setSelectedCourse(course);
  const closeModal = () => setSelectedCourse(null);

  return (
    <section className="courses" id="courses">
      <div className="courses__inner">
        <motion.span
          className="courses__badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Career Paths
        </motion.span>
        <motion.h2
          className="courses__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          Explore Our Programs
        </motion.h2>
        <motion.p
          className="courses__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Industry-aligned career tracks with transparent pricing — designed to get you hired at top tech companies.
        </motion.p>

        <div className="courses__grid">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} onEnroll={handleEnroll} />
          ))}
        </div>
      </div>

      {selectedCourse && (
        <CheckoutModal course={selectedCourse} onClose={closeModal} />
      )}
    </section>
  );
}
