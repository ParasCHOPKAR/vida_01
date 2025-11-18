"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import styles from "./vidaAccordion.module.css";

export default function VidaProductsAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const wrapperRefs = useRef([]);
  const iconRefs = useRef([]);

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
      image: "/images/product_01.jpeg",
    },
    {
      title: "Research & Development",
      content: `
Our continuous R&D ensures innovative, safe, durable and world-class hospital equipment solutions.
`,
      image: "/images/product_01.jpeg",
    },
    {
      title: "Services",
      content: `
• Equipment Maintenance Workshops
• AMC / CMC
• Healthcare Training
`,
      image: "/images/product_01.jpeg",
    },
    {
      title: "Management & Ownership",
      content: `
Led by experienced leaders, VIDA ensures superior product quality and global standards.
`,
      image: "/images/product_01.jpeg",
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
        // OPEN
        gsap.to(outer, {
          height,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(icon, {
          rotate: 0,
          duration: 0.2,
        });

        icon.innerHTML = "–";
      } else {
        // CLOSE
        gsap.to(outer, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });

        gsap.to(icon, {
          rotate: 0,
          duration: 0.2,
        });

        icon.innerHTML = "+";
      }
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* TOP IMAGE */}
        <div className={styles.topImageBox}>
          <img
            src={activeIndex !== null ? items[activeIndex].image : items[0].image}
            className={styles.topImage}
            alt="Preview"
          />
        </div>

        {/* ACCORDION */}
        <div className={styles.accordion}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              
              <div className={styles.header} onClick={() => toggleAccordion(i)}>
                <h3>{item.title}</h3>
                <span
                  className={styles.icon}
                  ref={(el) => (iconRefs.current[i] = el)}
                >
                  +
                </span>
              </div>

              <div
                className={styles.contentOuter}
                ref={(el) => (contentRefs.current[i] = el)}
              >
                <div
                  className={styles.contentInner}
                  ref={(el) => (wrapperRefs.current[i] = el)}
                >
                  {item.content}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
