"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./loader.css";

export default function Loader({ onFinish }) {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = Array.from(
      svgRef.current.querySelectorAll("path, line, polyline, rect, circle")
    );

    // Prepare paths for drawing
    paths.forEach((p) => {
      try {
        const len = p.getTotalLength?.() || 250;
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
      } catch {}
    });

    const tl = gsap.timeline();

    // Draw lines
    tl.to(
      paths,
      {
        strokeDashoffset: 0,
        duration: 4.5,
        stagger: 0.02,
        ease: "power2.out",
      },
      0
    );

    // Counter
    const counter = { v: 0 };
    tl.to(
      counter,
      {
        v: 100,
        duration: 4.5,
        ease: "linear",
        onUpdate: () => setPercent(Math.round(counter.v)),
      },
      0
    );

    // Fade-out
    tl.to(
      wrapperRef.current,
      {
        opacity: 0,
        duration: 0.8,
        pointerEvents: "none",
        ease: "power2.out",
        onComplete: () => onFinish && onFinish(),
      },
      4.8
    );
  }, [onFinish]);

  return (
    <div className="loader-wrapper" ref={wrapperRef}>
      <img src="/images/logo_01.jpg" alt="Logo" className="loader-logo" />

      <div className="loader-stage">
        <svg
          ref={svgRef}
          className="loader-svg"
          viewBox="0 0 1500 900"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* -------------------------------------------------- */}
          {/* TOP ROOM OUTLINE & CEILING STRUCTURE */}
          {/* -------------------------------------------------- */}

          <rect x="80" y="80" width="1340" height="680" stroke="#8aa6c4" strokeWidth="2" fill="none" />

          <polyline
            points="80,80 760,40 1420,80"
            stroke="#8aa6c4"
            strokeWidth="2"
            fill="none"
          />

          {/* Ceiling beam details */}
          <line x1="200" y1="110" x2="1320" y2="110" stroke="#8aa6c4" strokeWidth="2" />
          <line x1="200" y1="150" x2="1320" y2="150" stroke="#8aa6c4" strokeWidth="1.4" />
          <line x1="200" y1="190" x2="1320" y2="190" stroke="#8aa6c4" strokeWidth="1.4" />


          {/* -------------------------------------------------- */}
          {/* LEFT WALL PANELS */}
          {/* -------------------------------------------------- */}

          <rect x="130" y="260" width="160" height="320" stroke="#8aa6c4" strokeWidth="2" fill="none" />
          <line x1="185" y1="260" x2="185" y2="580" stroke="#8aa6c4" strokeWidth="2" />
          <line x1="240" y1="260" x2="240" y2="580" stroke="#8aa6c4" strokeWidth="2" />

          {/* Left-side wall console */}
          <rect x="310" y="300" width="140" height="120" stroke="#8aa6c4" strokeWidth="2" fill="none" />
          <line x1="310" y1="340" x2="450" y2="340" stroke="#8aa6c4" strokeWidth="2" />


          {/* -------------------------------------------------- */}
          {/* OVERHEAD SURGICAL LIGHT SYSTEM */}
          {/* -------------------------------------------------- */}

          <line x1="760" y1="150" x2="760" y2="260" stroke="#8aa6c4" strokeWidth="2" />
          <circle cx="760" cy="300" r="55" stroke="#8aa6c4" strokeWidth="2" fill="none" />

          <line x1="900" y1="150" x2="900" y2="260" stroke="#8aa6c4" strokeWidth="2" />
          <circle cx="900" cy="300" r="38" stroke="#8aa6c4" strokeWidth="2" fill="none" />

          {/* Second light head */}
          <line x1="840" y1="260" x2="840" y2="330" stroke="#8aa6c4" strokeWidth="2" />
          <circle cx="840" cy="355" r="20" stroke="#8aa6c4" strokeWidth="2" fill="none" />


          {/* -------------------------------------------------- */}
          {/* OT TABLE (More detailed) */}
          {/* -------------------------------------------------- */}

          {/* Table top */}
          <rect x="600" y="430" width="320" height="90" rx="10" stroke="#8aa6c4" strokeWidth="2" fill="none" />

          {/* Table center lift */}
          <rect x="690" y="520" width="140" height="65" stroke="#8aa6c4" strokeWidth="2" fill="none" />
          <circle cx="720" cy="600" r="12" stroke="#8aa6c4" strokeWidth="2" fill="none" />
          <circle cx="800" cy="600" r="12" stroke="#8aa6c4" strokeWidth="2" fill="none" />


          {/* -------------------------------------------------- */}
          {/* RIGHT WALL AREA */}
          {/* -------------------------------------------------- */}

          <rect x="1050" y="270" width="260" height="140" stroke="#8aa6c4" strokeWidth="2" fill="none" />
          <line x1="1180" y1="270" x2="1180" y2="410" stroke="#8aa6c4" strokeWidth="2" />

          {/* Storage cabinets */}
          <rect x="1000" y="430" width="310" height="220" stroke="#8aa6c4" strokeWidth="2" fill="none" />
          <line x1="1150" y1="430" x2="1150" y2="650" stroke="#8aa6c4" strokeWidth="2" />

          {/* -------------------------------------------------- */}
          {/* FRONT TROLLEYS */}
          {/* -------------------------------------------------- */}

          <rect x="430" y="520" width="160" height="120" stroke="#8aa6c4" strokeWidth="2" fill="none" />
          <circle cx="465" cy="650" r="10" stroke="#8aa6c4" strokeWidth="2" fill="none" />
          <circle cx="535" cy="650" r="10" stroke="#8aa6c4" strokeWidth="2" fill="none" />

          {/* -------------------------------------------------- */}
          {/* IV STAND */}
          {/* -------------------------------------------------- */}
          <line x1="950" y1="350" x2="950" y2="520" stroke="#8aa6c4" strokeWidth="2" />
          <circle cx="950" cy="520" r="14" stroke="#8aa6c4" strokeWidth="2" fill="none" />

        </svg>
      </div>

      <div className="loader-percent">{percent}%</div>
    </div>
  );
}
