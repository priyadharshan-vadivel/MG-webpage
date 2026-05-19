import "./WhyUs.css";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <main className="whyusPage">
      <section className="whyusHero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="whyusTitle"
          >
            Why Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="whyusSub"
          >
            Simple strategy. Strong systems. Real results.
          </motion.p>

          <div className="whyusGrid">
            {[
              ["Clarity-led Strategy", "Clear goals, practical roadmap, measurable outcomes."],
              ["Execution Engine", "Fast delivery with strong operating discipline."],
              ["Ecosystem Advantage", "Partners + capabilities that accelerate growth."],
              ["Trust & Governance", "Transparent processes and long-term value."],
              ["Global Presence", "Cross-market execution with local relevance."],
              ["Innovation First", "Modern tech + scalable systems for growth."],
            ].map(([t, d]) => (
              <motion.article
                key={t}
                className="whyusCard"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>{t}</h3>
                <p>{d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}