import { useEffect, useRef } from "react";
import "./CursorGlow.css";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    const click = () => {
      glow.classList.add("cursorPulse");
      setTimeout(() => glow.classList.remove("cursorPulse"), 400);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);

  return <div ref={glowRef} className="cursorGlow" />;
}