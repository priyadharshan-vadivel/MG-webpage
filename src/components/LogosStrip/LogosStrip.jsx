import "./LogosStrip.css";
import { motion } from "framer-motion";

const collaborations = [
  "SAP",
  "Oracle",
  "Microsoft",
  "Salesforce",
  "Meta",
  "Sabre",
  "Amadeus",
  "Travelport",
  "Mobilgi",
  "Realm9",
  "Pinnacle Teleservices",
  "Durjeya Nexa",
];

const logoFiles = {
  SAP: "sap.png",
  Oracle: "oracle.png",
  Microsoft: "microsoft.png",
  Salesforce: "salesforce.png",
  Meta: "meta.png",
  Sabre: "sabre.png",
  Amadeus: "amadeus.png",
  Travelport: "travelport.png",
  Mobilgi: "mobilgi.png",
  Realm9: "realm9.png",
  "Pinnacle Teleservices": "pinnacle-teleservices.png",
  "Durjeya Nexa": "durjeya-nexa.png",
};

function getLogoSrc(name) {
  const file = logoFiles[name];
  if (!file) return null;
  try {
    return new URL(`../../assets/logos/${file}`, import.meta.url).href;
  } catch (err) {
    return null;
  }
}

// Group logos into 3 separate orbital rings
const orbit1 = collaborations.slice(0, 3); // 3 items (Inner)
const orbit2 = collaborations.slice(3, 7); // 4 items (Middle)
const orbit3 = collaborations.slice(7, 12); // 5 items (Outer)

function OrbitRing({ items, ringSize, animationClass }) {
  const radius = ringSize / 2;
  return (
    <div
      className={`orbitRing ${animationClass}`}
      style={{ width: ringSize, height: ringSize }}
    >
      {items.map((name, index) => {
        // Calculate the exact polar coordinates for each logo
        const angle = (360 / items.length) * index;
        const rad = ((angle - 90) * Math.PI) / 180; // -90 starts items at the top
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        const src = getLogoSrc(name);

        return (
          <div
            key={name}
            className="orbitItemWrapper"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            {/* The box itself counter-rotates to stay upright */}
            <div className="orbitLogoBox">
              {src ? (
                <img
                  className="logoImg"
                  src={src}
                  alt={`${name} logo`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                className="logoFallback"
                style={{ display: src ? "none" : "flex" }}
              >
                {name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function LogosStrip() {
  return (
    <section className="logosSection">
      {/* Background Glows */}
      <div className="logosBg" aria-hidden="true">
        <div className="logosGlow g1" />
        <div className="logosGlow g2" />
      </div>

      <div className="solarSystemContainer">
        {/* We use a scale wrapper so the entire solar system elegantly shrinks on mobile without breaking the math */}
        <div className="solarSystemScale">
          
          {/* Center "Sun" Content */}
          <motion.div
            className="solarCenter"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="logosKicker">
              <span className="logosDot" />
              Partnerships
            </div>
            <h2 className="logosH2">Credibility that closes deals</h2>
            {/* <p className="logosP">
              Logos that signal trust, delivery capability, and enterprise-grade collaborations.
            </p> */}
          </motion.div>

          {/* The Orbits */}
          <OrbitRing items={orbit1} ringSize={540} animationClass="spin-normal" />
          <OrbitRing items={orbit2} ringSize={760} animationClass="spin-reverse" />
          <OrbitRing items={orbit3} ringSize={980} animationClass="spin-slow" />
        
        </div>
      </div>
    </section>
  );
}