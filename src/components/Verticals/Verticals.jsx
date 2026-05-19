import "./Verticals.css";
import { motion } from "framer-motion";

const sectors = [
  {
    title: "Public Sector & Enterprise",
    desc: "Powering Growth through Unified Communication Solutions.",
    tags: ["OmniChannel", "Secure", "Intelligent"],
  },
  {
    title: "Travel & Tourism",
    desc: "Modern Travel combines Seamless Digital Experience.",
    tags: ["B2B", "B2C", "CBT", "TravelCRM"],
  },
  {
    title: "Media & Digital Agency",
    desc: "We blend human creativity with AI-powered analytics to deliver hyper-personalised campaigns.",
    tags: ["Innovate", "Automate", "Dominate"],
  },
  {
    title: "Hospitality",
    desc: "Curating moments, crafting memories & bridging the gap between high-tech efficiency and high-touch service.",
    tags: ["Regenerative", "Hyper-contextual"],
  },
  {
    title: "Healthcare",
    desc: "Building a connected ecosystem where data flows seamlessly between patients, providers, and payers.",
    tags: ["Ambient Intelligence", "Agentic Care"],
  },
  {
    title: "Education",
    desc: "Next-gen exam technology with secure and scalable testing platforms.",
    tags: ["ResilientAI", "Digital Testing"],
  },
  {
    title: "Telecom",
    desc: "AI-native autonomous systems managing networks, predicting failures, and improving customer experience.",
    tags: ["Cognitive Orchestration", "Edge Computing"],
  },
  {
    title: "BFSI",
    desc: "Agentic AI systems that autonomously execute complex financial workflows under strict regulatory guardrails.",
    tags: ["Embedded Finance", "Digital Sovereignty"],
  },
  {
    title: "Property Developers",
    desc: "AI-driven automation, customer & broker experience, and digital transformation consulting.",
    tags: ["Habyatat", "QuantumTech", "Property Mavericks"],
  },
  {
    title: "CyberSecurity",
    desc: "AI-powered threat interception and prevention for enterprise endpoints.",
    tags: ["Enterprise Security", "Threat Detection", "SOC Integration"],
  },
];

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Verticals() {
  return (
    <section className="verticalsSection">
      <div className="verticalsBg" aria-hidden="true">
        <span className="verticalsGlow g1" />
        <span className="verticalsGlow g2" />
        <span className="verticalsGlow g3" />
        <span className="verticalsNoise" />
      </div>

      <div className="container verticalsContainer">
        <motion.div
          className="verticalsHeader"
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="verticalsKicker">
            <span className="verticalsDot" />
            Global Verticals
          </span>

          <h2 className="verticalsH2">
            Built for <span className="verticalsH2Grad">real industries</span>, not just dashboards
          </h2>

          <p className="verticalsLead">
            Strong coverage across major sectors, designed for scale, precision, and delivery.
          </p>
        </motion.div>

        <motion.div
          className="vertGrid"
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {sectors.map((sector) => (
            <motion.div key={sector.title} className="vertCard" variants={item}>
              <div className="vertCardContent">
                <h3 className="vertTitle">{sector.title}</h3>
                <p className="vertDesc">{sector.desc}</p>
                
                <div className="vertTags">
                  {sector.tags.map((tag) => (
                    <span key={tag} className="vertTag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="vertCardShine" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}