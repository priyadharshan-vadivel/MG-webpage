import { useEffect, useMemo, useRef, useState } from "react";
import { FiMessageSquare, FiX, FiSend, FiZap } from "react-icons/fi";
import "./Chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm the Metier Genesis AI Assistant. I can answer questions based on the Website Requirements Document (WRD). How can I help you today?",
      suggestions: [
        "What is the website objective?",
        "Show website sections (sitemap)",
        "What are the offerings?",
        "List in-house solutions",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      setTimeout(scrollToBottom, 100);
    }
  }, [open, messages]);

  const kb = useMemo(
    () => [
      {
        id: "objective",
        keywords: ["objective", "goal", "purpose", "why", "aim"],
        answer:
          "Objective: Position Metier Genesis Global as a globally credible, enterprise-focused organization. Showcase leadership, service offerings, in-house solutions, technology expertise, and international footprint through a modern, intuitive, scalable platform.",
        suggestions: ["Design direction?", "Website sections (architecture)?", "Deliverables?"],
      },
      {
        id: "reference_design",
        keywords: ["reference", "design", "direction", "ux", "ui", "brandbasket", "brandbasketme"],
        answer:
          "Reference: BrandBasket Middle East (brandbasketme.com). Design direction: enterprise-grade, clean and professional, modern UI/UX with strong visual hierarchy, global brand positioning, fully responsive (desktop/tablet/mobile).",
        suggestions: ["Technical requirements?", "SEO and performance?", "Global presence section?"],
      },
      {
        id: "architecture",
        keywords: ["architecture", "navigation", "sitemap", "pages", "sections", "menu", "structure"],
        answer:
          "Website architecture / navigation:\n• About Us (overview, vision/mission, philosophy)\n• Leadership Team (bios, global exposure)\n• Offerings (Brand Strategy, Creations, IT Advisory)\n• In-House Solutions (7 categories)\n• Technology Expertise (Microsoft, SAP, Oracle, AWS)\n• Client References\n• Global Presence (Interactive map)\n• Contact & Engagement",
        suggestions: ["Explain Offerings", "Explain In-house Solutions", "Contact details"],
      },
      {
        id: "about",
        keywords: ["about", "vision", "mission", "values", "ethics", "philosophy", "company overview"],
        answer:
          "About Us section includes:\n• Company overview\n• Vision, mission, values\n• Business philosophy and ethics",
        suggestions: ["Leadership section details?", "Objective of website?", "Design direction?"],
      },
      {
        id: "leadership",
        keywords: ["leadership", "founder", "founders", "executive", "team", "profiles", "bios"],
        answer:
          "Leadership Team section includes:\n• Founder(s) and executive leadership profiles\n• Professional bios (experience, strategic responsibilities)\n• Strong emphasis on global exposure and credibility",
        suggestions: ["Offerings categories?", "Global presence?", "Client references?"],
      },
      {
        id: "offerings",
        keywords: ["offerings", "services", "what do you do", "service offerings", "branding", "digital", "it advisory"],
        answer:
          "Offerings (3 categories):\nA) Brand Strategy & Digital Services (positioning, outreach)\nB) Creations (visual identity, corporate collaterals)\nC) IT Advisory (IT consulting, digital transformation)",
        suggestions: ["List In-house Solutions", "Technology expertise?", "Deliverables?"],
      },
      {
        id: "solutions",
        keywords: ["in-house", "solutions", "products", "proprietary", "ai", "edtech", "travel tech", "retail", "messaging"],
        answer:
          "In-House Solutions:\n• Travel Technology Solutions\n• Enterprise Applications\n• Human Intelligent Solutions (AI-led)\n• Retail Solutions\n• EdTech Solution\n• Global Messaging Services\n\nEach includes: overview, business value, target industries, benefits.",
        suggestions: ["Technology alliances?", "Technical requirements?", "Global presence map?"],
      },
      {
        id: "technology",
        keywords: ["technology", "tech", "expertise", "alliances", "partners", "microsoft", "sap", "oracle", "aws", "google cloud"],
        answer:
          "Technology Expertise section showcases capabilities and alliances:\n• Microsoft\n• SAP\n• Oracle\n• AWS\n• Google Cloud\nIncludes logos, certifications, and partner badges.",
        suggestions: ["SEO/performance requirements?", "Deliverables?", "Client references?"],
      },
      {
        id: "clients",
        keywords: ["clients", "references", "testimonials", "case study", "engagement summaries", "sme", "enterprise"],
        answer:
          "Client References section:\n• Selected enterprise and SME references\n• Industry-wise segmentation\n• Testimonials or engagement summaries",
        suggestions: ["Global presence offices?", "Contact & enquiry forms?", "Offerings?"],
      },
      {
        id: "global",
        keywords: ["global", "presence", "offices", "dubai", "uae", "canada", "south africa", "east africa", "singapore", "india", "map"],
        answer:
          "Global Presence:\n• Head Office: Dubai, UAE\n• Other offices: Canada, South Africa, East Africa, Singapore, India\nInteractive global map is preferred.",
        suggestions: ["Contact & WhatsApp integration?", "Technical requirements?", "Website sections?"],
      },
      {
        id: "contact",
        keywords: ["contact", "enquiry", "forms", "sales", "partnership", "whatsapp", "email", "phone", "numbers"],
        answer:
          "Contact & Engagement:\n• Dedicated enquiry forms (Sales, Partnerships, General)\n• Official email addresses & direct numbers\n• Optional WhatsApp integration",
        suggestions: ["Technical requirements?", "Deliverables?", "Global presence?"],
      },
      {
        id: "technical",
        keywords: ["technical", "functional", "requirements", "seo", "performance", "fast", "secure", "cms", "scalable", "hosting"],
        answer:
          "Technical & Functional Requirements:\n• Enterprise-grade UI/UX\n• SEO-optimized architecture\n• Fast load times & secure hosting\n• CMS-enabled content updates\n• Scalable architecture",
        suggestions: ["Deliverables list?", "Design direction?", "Reference website?"],
      },
      {
        id: "deliverables",
        keywords: ["deliverables", "handover", "deployment", "documentation", "mockups", "cms implementation"],
        answer:
          "Expected Deliverables:\n• UI/UX design mockups\n• Responsive website development\n• CMS implementation\n• Deployment and handover documentation",
        suggestions: ["Technical requirements?", "Website architecture?", "Offerings?"],
      },
    ],
    []
  );

  const defaultSuggestions = useMemo(
    () => [
      "What is the website objective?",
      "Show sitemap",
      "Explain offerings",
      "List solutions",
      "Global presence",
      "Technical requirements",
    ],
    []
  );

  const pickBest = (text) => {
    const t = (text || "").toLowerCase();
    let best = null;
    let bestScore = 0;

    for (const item of kb) {
      let score = 0;
      for (const k of item.keywords) {
        if (t.includes(k)) score += k.length >= 6 ? 3 : 2;
      }
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    }

    if (!best || bestScore === 0) {
      return {
        answer:
          "I can help with: objective, design direction, sitemap, offerings, solutions, tech expertise, clients, global presence, contact, technical requirements, and deliverables.\n\nType any of these or tap a suggestion below.",
        suggestions: defaultSuggestions,
      };
    }

    return { answer: best.answer, suggestions: best.suggestions || defaultSuggestions };
  };

  const sendText = (text) => {
    const t = (text ?? input).trim();
    if (!t) return;

    setMessages((p) => [...p, { type: "user", text: t }]);
    setInput("");

    const { answer, suggestions } = pickBest(t);

    setTimeout(() => {
      setMessages((p) => [...p, { type: "bot", text: answer, suggestions }]);
    }, 450);
  };

  const lastBotSuggestions = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i]?.type === "bot" && Array.isArray(messages[i]?.suggestions)) {
        return messages[i].suggestions;
      }
    }
    return defaultSuggestions;
  }, [messages, defaultSuggestions]);

  return (
    <>
      <div className={`chatbot-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      
      <div className={`chatbot ${open ? "open" : ""}`}>
        <div className="chat-header">
          <div className="chat-head-left">
            <div className="chat-avatar">
              <FiZap className="zap-icon" />
            </div>
            <div className="chat-title">
              <b>Metier Genesis Assistant</b>
              <span>Online • Ready to help</span>
            </div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close">
            <FiX />
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`msg-wrapper ${msg.type}`}>
              {msg.type === "bot" && <div className="bot-avatar-small"><FiZap /></div>}
              <div className="msg-content">
                <div className={`bubble ${msg.type}`}>
                  {msg.text}
                </div>
                {msg.type === "bot" && msg.suggestions?.length > 0 && (
                  <div className="suggest-chips">
                    {msg.suggestions.slice(0, 4).map((s) => (
                      <button key={s} className="chip-btn" onClick={() => sendText(s)}>
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="suggest-bar">
          {lastBotSuggestions.slice(0, 4).map((s) => (
            <button key={s} className="sbarbtn" onClick={() => sendText(s)}>
              {s}
            </button>
          ))}
        </div>

        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendText()}
            />
            <button 
              className="chat-send" 
              onClick={() => sendText()} 
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>

      <button className={`chat-toggle ${open ? "hidden" : ""}`} onClick={() => setOpen(true)} aria-label="Open chat">
        <FiMessageSquare size={24} />
        <span className="badge" />
      </button>
    </>
  );
}