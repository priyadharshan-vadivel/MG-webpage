import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logos/logos.png";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "About MG",
      id: "about",
      children: [
        { name: "Our Story", link: "story" },
        { name: "Core Pillars", link: "pillars" },
        { name: "Leadership", link: "leadership" },
      ],
    },
    {
      label: "Solutions",
      id: "solutions",
      children: [
        { name: "Public Sector & Enterprise", link: "public-sector" },
        { 
          name: "TravelTech", 
          link: "https://metiergenesis.com", 
          isExternal: true 
        },
        { name: "Media & Digital Agency", link: "media-agency" },
        { name: "Hospitality", link: "hospitality" },
        { name: "Healthcare", link: "healthcare" },
        { name: "EdTech", link: "edtech" },
        { name: "Telecom", link: "telecom" },
        { name: "BFSI", link: "bfsi" },
        { name: "PropTech", link: "proptech" },
      ],
    },
  ];

  return (
    <header className={`nav-main ${isScrolled ? "sticky-active" : ""}`}>
      <div className="nav-wrapper">
        {/* Logo */}
        <div className="nav-left">
          <a href="/">
            <img src={logo} alt="Metier Genesis FZC LLC" className="nav-logo-large" />
          </a>
        </div>

        {/* Navigation Middle Pill (Desktop) */}
        <nav className="nav-center">
          <div className="nav-pill">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="dropdown-container"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`nav-pill-item ${activeDropdown === item.id ? "active" : ""}`}>
                  {item.label} <FiChevronDown className={`chevron ${activeDropdown === item.id ? "rotate" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="pill-dropdown-menu"
                    >
                      {item.children.map((child) => (
                        <a 
                          key={child.name} 
                          href={child.isExternal ? child.link : `#${child.link}`} 
                          className="dropdown-link"
                          target={child.isExternal ? "_blank" : "_self"}
                          rel={child.isExternal ? "noopener noreferrer" : ""}
                        >
                          {child.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <a href="#presence" className="nav-pill-item">Presence</a>
            <a href="#partners" className="nav-pill-item">Partners</a>
          </div>
        </nav>

        {/* Action Button */}
        <div className="nav-right">
          <a 
  href="https://wa.me/971505140924" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn-primary">Get in Touch</button>
</a>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
          >
            <div className="mobile-content">
               <div className="mobile-header">
                 <img src={logo} alt="Logo" className="nav-logo-large" />
                 <FiX className="close-icon" onClick={() => setMobileOpen(false)} />
               </div>
               
               {/* Mobile Navigation Links */}
               <div className="mobile-links">
                  {navItems.map((item) => (
                    <div key={item.id} className="mobile-group">
                      <span className="mobile-label">{item.label}</span>
                      {item.children.map((child) => (
                        <a 
                          key={child.name} 
                          href={child.isExternal ? child.link : `#${child.link}`}
                          onClick={() => setMobileOpen(false)}
                          target={child.isExternal ? "_blank" : "_self"}
                          rel={child.isExternal ? "noopener noreferrer" : ""}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  ))}
                  <a href="#presence" onClick={() => setMobileOpen(false)}>Presence</a>
                  <a href="#partners" onClick={() => setMobileOpen(false)}>Partners</a>
               </div>

              <a 
  href="https://wa.me/971505140924" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn-primary full-width">Get in Touch</button>
</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}