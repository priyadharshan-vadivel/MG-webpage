import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Pillars from "./components/Pillars/Pillars";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import Services from "./components/Services/Services";
import InHouse from "./components/InHouse/InHouse";
import Verticals from "./components/Verticals/Verticals";
import Leadership from "./components/Leadership/Leadership";
import LogosStrip from "./components/LogosStrip/LogosStrip";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";
import CursorGlow from "./components/CursorGlow/CursorGlow";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Ecosystem />
        <Services />
        <InHouse />
        <Verticals />
        <Leadership />
        <LogosStrip />
        <Chatbot />
        <CursorGlow />
      </main>
      <Footer />
    </div>
  );
}
