import React, { useEffect, useRef, useState } from "react";
import './header.css';

export const Header = () => {
  // ✅ Taglines for typewriter effect
  const taglines = useRef([
    "From Cast to Craft — The Future of Building.",
    "Engineering Elegance in Every Cast.",
    "Forming Foundations for Better Living.",
    "Where Every Structure Begins with a Perfect Cast.",
    "That is Archicast"
  ]);

  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const charIndexRef = useRef(0);

  // ✅ Typing effect loop
  useEffect(() => {
    const type = () => {
      const current = taglines.current[indexRef.current];
      let updatedText;

      if (isDeletingRef.current) {
        updatedText = current.substring(0, charIndexRef.current - 1);
        charIndexRef.current -= 1;
      } else {
        updatedText = current.substring(0, charIndexRef.current + 1);
        charIndexRef.current += 1;
      }

      setDisplayedText(updatedText);

      let delay = isDeletingRef.current ? 40 : 90;

      if (!isDeletingRef.current && updatedText === current) {
        delay = 1500;
        isDeletingRef.current = true;
      }

      if (isDeletingRef.current && updatedText === '') {
        isDeletingRef.current = false;
        indexRef.current = (indexRef.current + 1) % taglines.current.length;
        delay = 500;
      }

      setTimeout(type, delay);
    };

    const initialDelay = setTimeout(type, 500);
    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <header id="header">
      {/* ✅ Foreground Content */}
      <div className="intro">
        <div className="intro-text">
          <h1 className="brand-title">
            <span className="archi">ARCHI</span>
            <span className="cast">CAST</span>
          </h1>

          <div className="typewriter-container">
            <span>{displayedText}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
