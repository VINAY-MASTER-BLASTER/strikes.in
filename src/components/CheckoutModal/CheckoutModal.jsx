import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconClose } from "../Icons";
import "./CheckoutModal.css";

export default function CheckoutModal({ course, onClose }) {
  const [step, setStep] = useState("form");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleCheckout = (e) => {
    e.preventDefault();
    setStep("processing");
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  return (
    <div className="checkout-modal__overlay" onClick={onClose}>
      <motion.div
        className="checkout-modal__content glass"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="checkout-modal__close" onClick={onClose}>
          <IconClose size={24} />
        </button>

        {step === "form" && (
          <motion.div 
            className="checkout-modal__form-step"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            <h3 className="checkout-modal__title">Complete Enrollment</h3>
            <div className="checkout-modal__summary">
              <div className="checkout-modal__summary-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="checkout-modal__summary-details">
                <h4>{course.title}</h4>
                <div className="checkout-modal__price">₹{new Intl.NumberFormat("en-IN").format(course.price)}</div>
              </div>
            </div>

            <form onSubmit={handleCheckout} className="checkout-modal__form">
              <div className="checkout-modal__input-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="checkout-modal__input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="checkout-modal__input-group">
                <label>Card Details</label>
                <input type="text" placeholder="4242 4242 4242 4242" required pattern="[\d\s]{16,19}" maxLength="19" />
                <div className="checkout-modal__row">
                  <input type="text" placeholder="MM/YY" required pattern="\d{2}/\d{2}" maxLength="5" style={{ flex: 1 }} />
                  <input type="text" placeholder="CVC" required pattern="\d{3,4}" maxLength="4" style={{ flex: 1 }} />
                </div>
              </div>

              <button type="submit" className="checkout-modal__submit btn-shimmer">
                Pay Securely & Enroll
              </button>
            </form>
          </motion.div>
        )}

        {step === "processing" && (
          <motion.div 
            className="checkout-modal__processing"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            <div className="checkout-modal__spinner"></div>
            <p>Processing your payment securely...</p>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div 
            className="checkout-modal__success"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            <div className="checkout-modal__success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="checkout-modal__success-title">Welcome to STRIKE!</h3>
            <p className="checkout-modal__success-desc">
              Your payment of ₹{new Intl.NumberFormat("en-IN").format(course.price)} was successful. 
              You now have full access to {course.title}.
            </p>
            <button className="checkout-modal__submit" onClick={onClose}>
              Go to Dashboard
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
