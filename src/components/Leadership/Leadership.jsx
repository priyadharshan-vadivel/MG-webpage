import "./Leadership.css";
import { motion } from "framer-motion";


const leaders = [
  { name: "Ajay", role: "Director", image: "P6.png" },
  { name: "Satyajith", role: "Director", image: "P1.jpg" },
  { name: "Charu Nayan Pal", role: "Director", image: "P15.png" },
  // { name: "Subal", role: "Director Travel Tech", image: "P8.png" },
  { name: "Prabhu", role: "Director CX", image: "P7.png" },
  // { name: "R Thakur", role: "Director Digital", image: "P8.png" },
  { name: "Sunil Kumar U", role: "Director Infrastructure", image: "P9.png" },
  { name: "Vinu Jacob", role: "Director Canada", image: "P11.png" },
  { name: "Gavin Wilcox", role: "Director South Africa", image: "P16.png" },
  { name: "Nur A", role: "Director West Africa", image: "P13.png" },
  { name: "Jacob Kurian", role: "Consultant", image: "P14.png" },
  { name: "Naved M", role: "Director Outreach", image: "P5.png" },
  { name: "Priyadharshan Vadivel", role: "Growth Partner", image: "Priyan.png" },
  { name: "Jejo J", role: "Growth Partner", image: "jejo.png" },
];

const wrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardFade = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Leadership() {
  return (
    <section id="presence" className="leadSection">
      <div className="leadBg" aria-hidden="true">
        <span className="leadGlow g1" />
        <span className="leadGlow g2" />
        <span className="leadNoise" />
      </div>

      <div className="container leadWrap">
        <motion.div
          className="leadHeader"
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="leadKicker">
            <span className="leadDot" />
            Global Presence & Leadership
          </span>

          <h2 className="leadH2">Global footprint. Strong board. Clear execution.</h2>
          <p className="leadP">
            Leadership built for delivery, and presence designed for consistent outcomes.
          </p>
        </motion.div>

        <div className="leadGrid">
          {/* Presence Card */}
          <motion.div
            className="leadCard top-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="leadTitle">Our Presence</div>
            <div className="leadBig">UAE • Canada • India • South Africa</div>
            <div className="leadDesc">
              Local market understanding with global delivery standards. One team, multiple
              regions, consistent outcomes.
            </div>

            <div className="leadBadges">
              <span className="leadBadge">Strategy</span>
              <span className="leadBadge">Implementation</span>
              <span className="leadBadge">Optimization</span>
            </div>
          </motion.div>

          {/* Leadership Profiles */}
          <motion.div
            className="leadCard full-width"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="leadTitle">Leadership Board</div>

            <motion.div className="leadProfilesGrid" variants={wrap}>
              {leaders.map((person, idx) => (
                <motion.div key={idx} className="profileCard" variants={cardFade}>
                  <img src={person.image} alt={person.name} className="profileImg" />
                  <div className="profileInfo">
                    <div className="profileName">{person.name}</div>
                    <div className="profileRole">{person.role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div id="contact" className="anchor" />

        <motion.div
          className="contactCard"
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contactLeft">
            <div className="contactT">Ready to scale?</div>
            <div className="contactP">
              Share your goal. We will map the quickest path from idea to impact.
            </div>
          </div>

          <div className="contactRight">
            <div className="contactRight">
  <a 
    className="btn" 
    href="https://wa.me/971505140924" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Book a quick call
  </a>

  <a 
    className="btnGhost" 
    href="https://wa.me/971505140924" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    See solutions
  </a>
</div>
          </div>

          <span className="contactGlow" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}