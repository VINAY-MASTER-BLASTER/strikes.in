import { motion } from "framer-motion";
import { IconLightning, IconArrowRight, IconTwitterX, IconLinkedIn, IconYouTube, IconInstagram } from "../Icons";
import "./Footer.css";

const programLinks = ["DSA Mastery", "Web Development", "Generative AI", "System Design", "Cloud & DevOps"];
const companyLinks = ["About Us", "Careers", "Blog", "Contact"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Refund Policy"];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* CTA banner */}
      <motion.div
        className="footer__cta-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer__cta-content">
          <h3 className="footer__cta-title">Ready to Transform Your Career?</h3>
          <p className="footer__cta-text">
            Join 50,000+ learners who've accelerated their tech careers with STRIKE.
          </p>
        </div>
        <a href="#courses" className="footer__cta-button btn-shimmer">
          Get Started Today <IconArrowRight size={16} />
        </a>
      </motion.div>

      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__logo">
            <IconLightning size={22} className="footer__logo-icon" />
            <span className="footer__logo-text">STRIKE</span>
          </div>
          <p className="footer__desc">
            Empowering the next generation of tech professionals with world-class education, expert mentorship, and guaranteed placement support.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Twitter/X"><IconTwitterX size={16} /></a>
            <a href="#" className="footer__social" aria-label="LinkedIn"><IconLinkedIn size={16} /></a>
            <a href="#" className="footer__social" aria-label="YouTube"><IconYouTube size={16} /></a>
            <a href="#" className="footer__social" aria-label="Instagram"><IconInstagram size={16} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Programs</h4>
          {programLinks.map((link) => (
            <a href="#courses" className="footer__link" key={link}>{link}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          {companyLinks.map((link) => (
            <a href="#" className="footer__link" key={link}>{link}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Legal</h4>
          {legalLinks.map((link) => (
            <a href="#" className="footer__link" key={link}>{link}</a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} STRIKE. All rights reserved.</p>
        <p className="footer__tagline">Built with ❤️ for aspiring engineers</p>
      </div>
    </footer>
  );
}
