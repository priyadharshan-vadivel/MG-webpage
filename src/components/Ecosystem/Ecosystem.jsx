import "./Ecosystem.css";
import { motion } from "framer-motion";
import { FiCpu, FiMessageSquare, FiBookOpen, FiMap, FiSettings, FiGrid } from "react-icons/fi";

const solutions = [
  { 
    icon: <FiGrid />, 
    title: "CX Solutioning", 
    desc: "Comprehensive CX, strategy, and digital transformation.",
    meta: ["CX Strategy", "Digital Transformation", "Scalability"]
  },
  { 
    icon: <FiBookOpen />, 
    title: "EdTech", 
    desc: "Scaling high-stack, secure, digitized examination environments.",
    meta: ["High-Stack Security", "Digitized Exams", "Proctoring"]
  },
  { 
    icon: <FiMessageSquare />, 
    title: "Unified Communication", 
    desc: "Official Meta partner for automated communication in Public & Enterprise.",
    meta: ["Meta Partner", "WhatsApp API", "Automated Flows"]
  },
  {
    icon: <FiCpu />,
    title: "CyberSecurity",
    desc: "AI-powered threat interception and prevention for enterprise endpoints.",
    meta: ["Enterprise Security", "Threat Detection", "SOC Integration"]
  },
  { 
    icon: <FiMap />, 
    title: "TravelTech", 
    desc: "One-stop platform with automated engagement and seamless integration.",
    meta: ["B2B / B2C", "CRM Integration", "Smart Booking"]
  },
  { 
    icon: <FiSettings />, 
    title: "B2B Outreach", 
    desc: "Guaranteed pipelines and high-intent buyer conversations for SMEs.",
    meta: ["Lead Generation", "Pipeline Growth", "High-Intent Buyers"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="ecoSection">
      <div className="container">
        <motion.div 
          className="ecoHeader"
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="ecoKicker">
            <span className="ecoDot" />
            The MG Ecosystem
          </span>
          <h2 className="ecoH2">Six offerings. One outcome: sustainable growth.</h2>
          <p className="ecoLead">
            Clean strategy, strong implementation, and scalable systems designed for SME success.
          </p>
        </motion.div>

        <motion.div 
          className="ecoGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutions.map((s) => (
            <motion.div key={s.title} className="ecoCard" variants={cardVariants}>
              <div className="ecoCardContent">
                <div className="ecoIcon">{s.icon}</div>
                <h3 className="ecoTitle">{s.title}</h3>
                <p className="ecoDesc">{s.desc}</p>
              </div>

              <div className="ecoCardFooter">
                <div className="ecoLine" />
                <div className="ecoMeta">
                  {s.meta.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="ecoCardGlow" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}