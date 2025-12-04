"use client";
import { useState } from "react";
import Image from "next/image";
import "./page.css";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // PRODUCT LIST (9 ITEMS)
  const products = [
    {
      code: "E01",
      title: "Endoscopy S.S. 304 Customized Endoscope Storage Cupboard",
      desc: `Floor-mounted cupboard with customized hangers for 6 endoscopes, cushion on all sides, SS hooks for accessories, 3-side closed body, and 2 transparent doors. Includes perforation on sides and adjustable nylon leveling bullets.`,
      specs: [
        "Air circulation with 0.3 micron filter",
        "2 U.V. lights for sterilization",
        "Size: 1200 × 400 × 2100 mm (L×W×H)",
      ],
    },
    {
      code: "E02",
      title: "VIDA S.S. 304 Instrument Cupboard with Glass Doors",
      desc: `Stainless steel cupboard with visible laminated glass shutters, lock & handle, and 5 adjustable shelves.`,
      specs: [
        "Size: 900 × 450 × 1800 mm",
        "SS304 16G Jindal pre-coated sheet",
        "6mm laminated toughened glass",
        "Manual locking system",
      ],
    },
    {
      code: "E03",
      title: "VIDA S.S. 304 Deluxe Floor Mounted Scrub Station (Elbow & Foot Operated)",
      desc: `High-grade scrub station with SS304 inner and outer bodies, adjustable nylon bush.`,
      specs: [
        "Size 1: 36” × 24” × 52” (1 Port)",
        "Size 2: 60” × 24” × 52” (2 Port)",
      ],
    },
    {
      code: "E04",
      title:
        "VIDA S.S. 304 Deluxe Scrub Station with Sensor & Foot Operated Cock",
      desc: `SS304 sheet construction with sensor + foot operation.`,
      specs: [
        "Size 1: 36” × 24” × 52” (1 Port)",
        "Size 2: 60” × 24” × 52” (2 Port)",
      ],
    },
    {
      code: "E05",
      title: "VIDA S.S. 304 Wall Mounted Scrub Station (Elbow Operated)",
      desc: `Wall-mounted scrub station, inner SS304 (16G) matt finish.`,
      specs: [
        "Size 1: 36” × 24” × 36” (1 Port)",
        "Size 2: 60” × 24” × 36” (2 Port)",
      ],
    },
    {
      code: "E06",
      title: "Vida-SS 316 Anaesthesia Drug Trolley – Medicine Trolley",
      desc: `Heavy gauge SS316 trolley with 5 drawers, IV stand, catheter holder, and wheels.`,
      specs: [
        "Size: 1100(H) × 900(W) × 450(D) mm",
        "Drawer Heights: 100 / 150 / 200 / 198 / 198 mm",
        "Mounted on 6-inch wheels",
      ],
    },
    {
      code: "E07",
      title:
        "VIDA SS304 Quality Swab Count Holder with Removable Tray",
      desc: `Strong SS holder with removable tray.`,
      specs: [
        "Size: 60” × 30” × 12”",
        "25mm round pipe (18G)",
        "8mm SS solid bar",
        "PVC matt 0.8mm sheet",
      ],
    },
    {
      code: "E08",
      title: "Vida-SS 304 Lead Apron Stand",
      desc: `Heavy-duty stand for 10 aprons with 250kg weight capacity.`,
      specs: [
        "Size: 900 × 600 × 1500 mm",
        "4 nylon castor wheels (2 with brakes)",
      ],
    },
    {
      code: "E09",
      title: "Vida Crash Cart Fully SS304",
      desc: `Crash cart with 6 modular drawers, SS tray, catheter storage, and PU wheels.`,
      specs: [
        "Size: 27” × 24” × 58”",
        "4” PU wheels with brake",
        "Detachable SS tray",
      ],
    },
  ];

  return (
    <div className="hospital-page">

      {/* Watermark */}
      <Image
        src="/vida-logo.png"
        alt="Watermark"
        width={700}
        height={700}
        className="watermark"
      />

      {/* Logo */}
      <div className="logo-wrapper">
        <Image
          src="/vida-logo.png"
          width={200}
          height={70}
          alt="VIDA Life Sciences"
          className="vida-logo"
        />
      </div>

      <h1 className="title">Hospital SS Furniture</h1>

      {products.map((p, i) => (
        <div key={i} className="item-block">

          {/* HEADER BAR */}
          <div
            className={`item-header ${openIndex === i ? "open" : ""}`}
            onClick={() => toggle(i)}
          >
            <div className="header-left">
              <h2>{p.title}</h2>
              <p className="short-desc">{p.desc.slice(0, 90)}...</p>
            </div>

            <div className="header-right">
              <span className="code-tag">{p.code}</span>
              <span className="toggle-btn">{openIndex === i ? "−" : "+"}</span>
            </div>
          </div>

          {/* CONTENT */}
          {openIndex === i && (
            <div className="item-content">

              <div className="left-content">
                <h3>Specifications</h3>
                <ul>
                  {p.specs.map((s, k) => (
                    <li key={k}>{s}</li>
                  ))}
                </ul>
              </div>

              {/* GALLERY */}
              <div className="gallery-box">
                <h3>Gallery</h3>

                <div className="gallery-grid">
                  {Array.from({ length: 8 }).map((_, imgIndex) => (
                    <div key={imgIndex} className="gallery-img-box">
                      <Image
                        src={`/gallery/${p.code.toLowerCase()}-${imgIndex + 1}.jpg`}
                        width={180}
                        height={140}
                        alt={`${p.code} image`}
                        className="gallery-img"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      ))}

    </div>
  );
}
