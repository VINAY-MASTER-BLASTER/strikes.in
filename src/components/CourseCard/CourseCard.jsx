import { motion } from "framer-motion";
import { IconStar, IconStarOutline } from "../Icons";
import "./CourseCard.css";

function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

export default function CourseCard({ course, index, onEnroll }) {
  const { title, blurb, image, originalPrice, price, validity, tags, rating, students } = course;
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <motion.div
      className="course-card glow-border"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="course-card__image image-card">
        <img src={image} alt={title} loading="lazy" />
        <div className="course-card__discount-badge">{discount}% OFF</div>
        <div className="course-card__validity-badge">{validity}</div>
      </div>

      <div className="course-card__body">
        {/* Rating & students */}
        <div className="course-card__meta">
          <div className="course-card__rating">
            <span className="course-card__stars" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                i < Math.floor(rating) 
                  ? <IconStar key={i} size={14} /> 
                  : <IconStarOutline key={i} size={14} />
              ))}
            </span>
            <span className="course-card__rating-num">{rating}</span>
          </div>
          <span className="course-card__students">{students} students</span>
        </div>

        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__blurb">{blurb}</p>

        {/* Tags */}
        <div className="course-card__tags">
          {tags.map((tag) => (
            <span className="course-card__tag" key={tag}>{tag}</span>
          ))}
        </div>

        {/* Price block */}
        <div className="course-card__price-block">
          <div className="course-card__prices">
            <span className="course-card__current-price">₹{formatPrice(price)}</span>
            <span className="course-card__original-price">₹{formatPrice(originalPrice)}</span>
          </div>
          <div className="course-card__savings">
            You save ₹{formatPrice(originalPrice - price)}
          </div>
        </div>

        <button className="course-card__cta btn-shimmer" onClick={() => onEnroll(course)}>
          Enroll Now
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
