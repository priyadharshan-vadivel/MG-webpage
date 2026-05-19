import "./Footer.css";
import { motion } from "framer-motion";
import logo from "../../assets/logos/logo.png";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="container footerGrid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="footBrand" variants={fadeUp}>
          <div className="footMark">
            <img src={logo} alt="Metier Genesis Logo" className="footLogo" />
          </div>
          <div>
            <div className="footTitle">Metier Genesis</div>
            <div className="footSub">
              Empowering Vision. Engineering Transformation. Scaling Excellence.
            </div>
          </div>
        </motion.div>

        <div className="footCols">
          <motion.div className="footCol" variants={fadeUp}>
            <div className="footHead">Company</div>
            <a href="#about">About</a>
            <a href="#pillars">Pillars</a>
            <a href="#presence">Presence</a>
          </motion.div>

          <motion.div className="footCol" variants={fadeUp}>
            <div className="footHead">Solutions</div>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="container footBottom"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="footCopyright">
          © 2026 Metier Genesis | Head Office → UAE • Innovation Center → India
        </div>
        <div className="footMini">UAE • Canada • India • South Africa</div>
      </motion.div>

      <span className="footGlow g1" aria-hidden="true" />
      <span className="footGlow g2" aria-hidden="true" />
    </footer>
  );
}