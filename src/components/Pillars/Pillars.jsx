import "./Pillars.css";
import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiLayers } from "react-icons/fi";

const items = [
  {
    icon: <FiTrendingUp />,
    title: "Our Vision",
    desc: "Driving sustainable organizational growth through responsible resource management and expert digital implementation.",
  },
  {
    icon: <FiTarget />,
    title: "Our Mission",
    desc: "Delivering innovative, scalable, and affordable solutions that protect natural ecosystems and support global climate goals.",
  },
  {
    icon: <FiLayers />,
    title: "Our Why",
    desc: "We bridge the gap between complex technology and SME success with tailored, end-to-end proprietary solutions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export default function Pillars() {
  return (
    <section id="pillars" className="pillarsSection">
      {/* Background Ambience */}
      <div className="pillarsBg">
        <div className="pillarsGlow g1" />
        <div className="pillarsGlow g2" />
      </div>

      <div className="container pillarsContainer">
        <motion.div
          className="pillarsHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="pillarsKicker">
            <span className="pillarsDot" />
            Strategic Foundations
          </div>
          <h2 className="pillarsH2">
            Clear direction. <span className="pillarsH2Grad">Strong delivery.</span>
          </h2>
        </motion.div>

        <motion.div
          className="pillarsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item) => (
            <motion.div key={item.title} className="pillarCard" variants={cardVariants}>
              <div className="pillarCardInner">
                <div className="pillarIconWrap">
                  {item.icon}
                </div>

                <h3 className="pillarTitle">{item.title}</h3>
                <p className="pillarDesc">{item.desc}</p>

                <div className="pillarFooter">
                  <button className="pillarActionBtn">
                    Learn More
                    <div className="pillarBtnLine" />
                  </button>
                </div>
              </div>
              {/* Subtle hover border */}
              <div className="pillarBorderGlow" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}