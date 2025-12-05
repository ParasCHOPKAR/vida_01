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
        gsap.to(outer, { height, opacity: 1, duration: 0.4 });
        icon.style.color = colors.red;
        icon.innerHTML = "–";
      } else {
        gsap.to(outer, { height: 0, opacity: 0, duration: 0.35 });
        icon.style.color = colors.blue;
        icon.innerHTML = "+";
      }
    });
  };

  return (
    <section
      style={{
        width: "100%",
        padding: "60px 5%",  // Reduced padding for mobile width
        background: "#ffffff",
        color: colors.textDark,
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      {/* HEADING */}
      <div style={{ width: "100%" }}>
        <h2
          style={{
            fontSize: "46px",
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
            lineHeight: 1.5,
          }}
        >
          Leading the future of stainless-steel medical furniture & technology.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div
        className="vida-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.9fr",
          gap: "60px",
          width: "100%",
        }}
      >
        {/* LEFT – ACCORDION */}
        <div
          className="accordion-left"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom: `1px solid ${colors.lightBlue}`,
                padding: "18px 0",
                width: "100%",
              }}
            >
              {/* Header */}
              <div
                onClick={() => toggleAccordion(i)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "19px",
                    fontWeight: 600,
                    color: colors.blue,
                    width: "85%",
                  }}
                >
                  {item.title}
                </h3>

                <span
                  ref={(el) => (iconRefs.current[i] = el)}
                  style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    color: colors.blue,
                    width: "15%",
                    textAlign: "right",
                  }}
                >
                  +
                </span>
              </div>

              {/* Content */}
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

        {/* RIGHT – IMAGE PREVIEW (HIDDEN ON MOBILE) */}
        <div className="vida-image-box" style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "20px",
              overflow: "hidden",
              border: `3px solid ${colors.blue}`,
              boxShadow: `0 0 24px rgba(0,113,206,0.35)`,
            }}
          >
            <img
              src={activeIndex !== null ? items[activeIndex].image : items[0].image}
              alt="Preview"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* RESPONSIVE CSS */}
      <style>{`
        @media (max-width: 992px) {
          .vida-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .vida-image-box {
            display: none !important;
          }

          h2 {
            font-size: 36px !important;
          }

          section {
            padding: 40px 4% !important;
          }

          .accordion-left {
            width: 100% !important;
          }
        }

        @media (max-width: 600px) {
          h2 { font-size: 30px !important; }
          p { font-size: 15px !important; }
          h3 { font-size: 16px !important; }

          section {
            padding: 35px 4% !important;
          }
        }
      `}</style>
    </section>
  );
}
