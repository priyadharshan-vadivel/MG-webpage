import "./InHouse.css";
import { motion } from "framer-motion";

const items = [
  "Travel Technology Solutions",
  "Enterprise Applications",
  "Human Intelligent Solutions (AI-led, data-driven)",
  "Retail Solutions for Business Process Re-engineering",
  "EdTech Solutions",
  "Global messaging and business communication",
];

// Parent variant to control the staggering of the list items
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// Child variant for individual cards
const cardFade = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function InHouse() {
  return (
    <section className="ihSection">
      <div className="container">
        
        {/* Header Section */}
        <motion.div 
          className="ihHeader"
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="ihKicker">
            <span className="ihDot" />
            In-House Solutions
          </span>
          <h2 className="ihH2">Proprietary products built for speed and scale</h2>
        </motion.div>

        {/* Main Content Wrapper */}
        <motion.div 
          className="ihWrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left Side: Text & CTA */}
          <div className="ihLeft">
            <div className="ihTitle">Built once. Used everywhere.</div>
            <div className="ihDesc">
              Our in-house platforms reduce cost, accelerate timelines, and boost operational control.
              Ideal for SMEs and diversified groups that demand predictable, scalable growth.
            </div>
            <a className="ihBtn" href="#contact">
              Request a demo
            </a>
          </div>

          {/* Right Side: Grid of Solutions */}
          <motion.div 
            className="ihRight"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {items.map((text, i) => (
              <motion.div key={i} className="ihItem" variants={cardFade}>
                <div className="ihItemIcon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ihItemText">{text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Background Decorative Glow */}
          <div className="ihWrapGlow" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}