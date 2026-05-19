import "./About.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function About() {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutBg">
        <div className="aboutGlow" />
        <div className="aboutNoise" />
      </div>

      <div className="container aboutGrid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="aboutKicker">
            <span className="aboutDot" />
            About Us
          </span>

          <h2 className="aboutTitle">
            The strategic bridge between <br />
            <span className="titleGrad">ambition and execution</span>
          </h2>

          <p className="aboutText">
            Metier Genesis Global is a premier strategic consultancy and
            technology integrator. We bridge ambitious leadership with
            operational execution, delivering agile and measurable growth.
          </p>

          <div className="aboutNoteGlass">
            <div className="noteTitle">How we work</div>
            <div className="noteText">
              We move beyond technology adoption to measurable business impact,
              ensuring every transformation remains fiscally sustainable and
              strategically superior.
            </div>
          </div>
        </motion.div>

        <motion.div
          className="aboutRightGlass"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="glassBox" variants={fadeUp}>
            <div className="glassKey">Headquarters</div>
            <div className="glassValue">United Arab Emirates</div>
          </motion.div>

          <motion.div className="glassBox" variants={fadeUp}>
            <div className="glassKey">Focus</div>
            <div className="glassValue">SME Growth • Digital Transformation</div>
          </motion.div>

          <motion.div className="glassBox" variants={fadeUp}>
            <div className="glassKey">Promise</div>
            <div className="glassValue">
              Simple strategy. Strong systems. Real results.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}