import "./Hero.css";
import { motion } from "framer-motion";
import { FiArrowRight, FiZap, FiShield, FiGlobe } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="heroGlow" aria-hidden="true" />
      <div className="heroLines" aria-hidden="true" />

      <div className="container heroInner">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div className="heroTag" variants={itemVariants}>
            <span className="dot" />
            <span className="tagText">METIER GENESIS</span>
          </motion.div>

          <motion.h1 className="heroTitle" variants={itemVariants}>
            Empowering <span className="textGrad">Vision.</span><br />
            Engineering <span className="textGrad">Transformation.</span>
          </motion.h1>

          <motion.p className="heroDesc" variants={itemVariants}>
            Strategic base with global delivery. We build consulting and digital
            solutions that are scalable, secure, and business-ready.
          </motion.p>

          <motion.div className="heroBtns" variants={itemVariants}>
            <button className="btnPrimary" onClick={() => go("contact")}>
              Get Started <FiArrowRight className="arrow" />
            </button>

            <button className="btnOutline" onClick={() => go("ecosystem")}>
              View Solutions
            </button>
          </motion.div>

          <motion.div className="heroFeatures" variants={itemVariants}>
            <div className="feature">
              <div className="fIcon"><FiZap /></div>
              <div className="fContent">
                <div className="fTitle">Fast Execution</div>
                <div className="fSub">Agile expert-led delivery</div>
              </div>
            </div>

            <div className="feature">
              <div className="fIcon"><FiShield /></div>
              <div className="fContent">
                <div className="fTitle">Secure by Design</div>
                <div className="fSub">Reliable, scalable systems</div>
              </div>
            </div>

            <div className="feature">
              <div className="fIcon"><FiGlobe /></div>
              <div className="fContent">
                <div className="fTitle">Global Presence</div>
                <div className="fSub">UAE • India • Canada • SA</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}