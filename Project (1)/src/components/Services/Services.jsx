import "./Services.css";
import { motion } from "framer-motion";
import { FiCheck, FiArrowUpRight } from "react-icons/fi";

const blocks = [
  {
    title: "Brand Strategy & Digital Services",
    items: [
      "Brand positioning and strategy",
      "Digital outreach and engagement solutions",
      "Executive and corporate branding",
    ],
    tag: "Growth"
  },
  {
    title: "Creative Solutions",
    items: [
      "Visual identity and brand design",
      "Corporate collaterals",
      "Digital and creative assets",
    ],
    tag: "Design"
  },
  {
    title: "IT Advisory",
    items: [
      "IT consulting and advisory services",
      "Digital transformation strategy",
      "Enterprise IT optimization and roadmap",
    ],
    tag: "Scale"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="svcSection">
      {/* Dynamic Background */}
      <div className="svcBg">
        <div className="svcGlow g1" />
        <div className="svcGlow g2" />
        <div className="svcLines" />
      </div>

      <div className="container svcContainer">
        <motion.div
          className="svcHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="svcKicker">
            <span className="svcDot" />
            Core Expertise
          </div>
          <h2 className="svcH2">
            Marketing-ready brand. <br />
            <span className="svcH2Grad">Business-ready technology.</span>
          </h2>
          <p className="svcLead">
            We bridge the gap between creative storytelling and technical execution to drive measurable revenue.
          </p>
        </motion.div>

        <motion.div
          className="svcGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blocks.map((block) => (
            <motion.div key={block.title} className="svcCard" variants={cardVariants}>
              <div className="svcCardInner">
                <div className="svcCardTop">
                  <span className="svcCardTag">{block.tag}</span>
                  <FiArrowUpRight className="svcArrow" />
                </div>
                
                <h3 className="svcTitle">{block.title}</h3>

                <ul className="svcList">
                  {block.items.map((text) => (
                    <li key={text}>
                      <FiCheck className="svcCheck" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="svcFooter">
                  <div className="svcFooterText">Predictable outcomes</div>
                  <div className="svcFooterLine" />
                </div>
              </div>
              {/* Animated hover border */}
              <div className="svcCardBorder" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}