"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";

export default function VidaProductsAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const wrapperRefs = useRef([]);
  const iconRefs = useRef([]);

  const colors = {
    blue: "#0071CE",
    red: "#E21E26",
    lightBlue: "#62A8E0",
    textDark: "#1A1A1A",
  };

  const items = [
    {
      title: "Manufacturer of All Hospital SS 304/316L Furniture",
      content: `
• Autoclave Horizontal / Vertical
• All CSSD Equipments
• CSSD Furniture
• Automatic Bed Pan Washer Disinfector
• S/D DD Instrument & Catheter Dryer
• Different types of Scrub Unit
• Endoscopy Dryer/Cabinet
• Baby Wash Sink
• Pigeon Rack
• Swab Count Holder
• Lead Apron Stand
• Dirty Utility Sink
• Inter Locking Pass Box
• Catheter Wash Station
`,
      image: "/pro_pic/about_03.jpg",
    },
    {
      title: "Research & Development",
      content: `
Our continuous R&D ensures innovative, safe, durable and world-class hospital equipment solutions.
`,
      image: "/pro_pic/about_04.jpg",
    },
    {
      title: "Services",
      content: `
• Equipment Maintenance Workshops
• AMC / CMC
• Healthcare Training
`,
      image: "/pro_pic/about_05.jpg",
    },
    {
      title: "Management & Ownership",
      content: `
Led by experienced leaders, VIDA ensures superior product quality and global standards.
`,
      image: "/pro_pic/about_06.jpg",
    },
  ];

  const toggleAccordion = (index) => {
    const isOpening = activeIndex !== index;
    setActiveIndex(isOpening ? index : null);

    items.forEach((_, i) => {
      const outer = contentRefs.current[i];
      const inner = wrapperRefs.current[i];
      const icon = iconRefs.current[i];

      if (!outer || !inner) return;

      const height = inner.scrollHeight;

      if (i === index && isOpening) {
        gsap.to(outer, { height, opacity: 1, duration: 0.4, ease: "power2.out" });
        icon.style.color = colors.red;
        icon.innerHTML = "–";
      } else {
        gsap.to(outer, { height: 0, opacity: 0, duration: 0.35, ease: "power2.inOut" });
        icon.style.color = colors.blue;
        icon.innerHTML = "+";
      }
    });
  };

  return (
    <section
      style={{
        width: "100%",
        padding: "80px 8%",
        background: "#ffffff",
        color: colors.textDark,
        display: "flex",
        flexDirection: "column",
        gap: "60px",
      }}
    >
      {/* HEADING */}
      <div style={{ maxWidth: "650px" }}>
        <h2
          style={{
            fontSize: "54px",
            fontWeight: 700,
            margin: 0,
            color: colors.blue,
          }}
        >
          VIDA Hospital Solutions
        </h2>

        <p
          style={{
            marginTop: "12px",
            fontSize: "18px",
            color: colors.red,
          }}
        >
          Leading the future of stainless-steel medical furniture & technology.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* LEFT SIDE – ACCORDION */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom: `1px solid ${colors.lightBlue}`,
                padding: "22px 0",
              }}
            >
              {/* Accordion Header */}
              <div
                onClick={() => toggleAccordion(i)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 600, color: colors.blue }}>
                  {item.title}
                </h3>

                <span
                  ref={(el) => (iconRefs.current[i] = el)}
                  style={{
                    fontSize: "30px",
                    fontWeight: 600,
                    color: colors.blue,
                    transition: "0.25s ease",
                  }}
                >
                  +
                </span>
              </div>

              {/* Accordion Content */}
              <div
                ref={(el) => (contentRefs.current[i] = el)}
                style={{
                  height: 0,
                  opacity: 0,
                  overflow: "hidden",
                }}
              >
                <div
                  ref={(el) => (wrapperRefs.current[i] = el)}
                  style={{
                    whiteSpace: "pre-line",
                    padding: "14px 0",
                    lineHeight: 1.6,
                    fontSize: "16px",
                    color: colors.textDark,
                  }}
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – IMAGE PREVIEW BOX */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "20px",
              overflow: "hidden",
              border: `3px solid ${colors.blue}`,
              boxShadow: `0 0 28px rgba(0,113,206,0.4)`,
              background: "rgba(0,113,206,0.05)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={activeIndex !== null ? items[activeIndex].image : items[0].image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
