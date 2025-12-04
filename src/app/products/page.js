"use client";

import { useState } from "react";
import Link from "next/link";
import "./products.css";

// Convert product name to URL
function makeUrl(text) {
  return text.replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
}

export default function Products() {
  const products = {
    "CSSD Equipments": {
      intro:
        "VIDA offers a full range of CSSD sterilization equipment including high-performance steam sterilizers, ETO sterilizers, ultrasonic cleaners, drying cabinets and medical washers. Designed for hospital-grade hygiene, automation and safety.",
      
      features: [
        "Vertical sliding & manual door steam sterilizers (SS316 chamber).",
        "PLC touchscreen automation with safety interlocks.",
        "Advanced sterilization cycles including VLT, Bowie-Dick & Flash.",
        "Automatic water filling, password lock, energy saving mode.",
        "High-capacity washers, dryers, ultrasonic cleaners & heat sealers."
      ],

      specs: [
        "1. Fully Automatic Horizontal Steam Sterilizer – Vertical Sliding (Double Door, SS316)",
        "• SS316 chamber (8mm), SS316 door (12mm), SS316 jacket (8mm)",
        "• 27 kW steam generator, 2 HP vacuum pump",
        "• Pneumatic automatic vertical sliding door",
        "• Multiple safety locks, silicone gasket, dual safety valves",
        "• 7.5” HMI + thermal printer",
        "• Sterilization cycles: VLT, Bowie-Dick, Warped, Unwrapped, Flash",
        "• Sizes: 450×450×1200 mm, 600×600×1200 mm, 750×750×1500 mm",
        "• Includes SS loading carriage & trolley",

        "",
        "2. Fully Automatic Horizontal Steam Sterilizer – Manual Door (SS316)",
        "• SS316 chamber 8mm, SS316 doors 12mm",
        "• 27 kW steam generator, 2 HP vacuum pump",
        "• Hydraulic locking system, welded joints, safety interlocks",
        "• PLC control with multiple sterilization cycles",
        "• Sizes: 600×600×1200 mm, 750×750×1500 mm",

        "",
        "3. Fully Automatic High-Speed Steam Sterilizer – SS316",
        "• 18 kW power, 32/21 PSI pressure, 134/121°C",
        "• SS316 chamber 6mm, SS316 doors 12mm",
        "• 1 HP vacuum pump, 0.5 HP water pump",
        "• Touchscreen PLC control",
        "• Sizes: 16×24\", 20×36\", 20×48\"",

        "",
        "4. Fully Automatic ETO Sterilizer – SS304",
        "• SS304 chamber & body",
        "• 6-hour cycle with aeration",
        "• 1 kg/cm² operating pressure",
        "• Vacuum pump + pneumatic valves + PLC",
        "• Sizes: 1×1×2 ft to 1.5×1.5×5 ft",

        "",
        "5. Automatic Washer Disinfector – Double Door",
        "• 350-liter SS304 machine with toughened glass",
        "• PLC + touchscreen",
        "• 90°C thermal disinfection",
        "• Size: 750×750×1800 mm",

        "",
        "6. Washer Disinfector – Manual Door",
        "• Same as above, manual door",
        "• 350-liter SS304 chamber",

        "",
        "7. Instrument Washer – Single Door (SS304)",
        "• 350-liter capacity",
        "• PLC control with multiple cycles",
        "• 90°C disinfection",
        "• Size: 700×725×1600 mm",

        "",
        "8. Ultrasonic Cleaner – 40 Liters",
        "• 500W ultrasonic power",
        "• 45 kHz frequency",
        "• SS304 tank, heater up to 70°C",
        "• Includes SS lid & mesh basket",

        "",
        "9. Drying Cabinet – SS (24×24×30\")",
        "• SS chamber & body",
        "• 50–250°C temperature",
        "• Uniform air ventilation",

        "",
        "10. Instrument & Catheter Dryer – Dual Chamber",
        "• Independent chambers",
        "• 30–250°C (instrument), 5–60°C (catheter)",
        "• 8 trays + HEPA filter inlet",

        "",
        "11. Class-B Autoclave – 24 Ltr",
        "• SS304 chamber, 8 preset programs",
        "• Vacuum test, B&D test, USB output",

        "",
        "12. Automatic Heat Sealing Machine – SS",
        "• Vertical/horizontal mounting",
        "• Digital temperature control",
        "• Conveyor 0–12 m/min",
        "• Embossing option"
      ],

      images: [
        "/pro_pic/cssd_equipment/1.jpg",
        "/pro_pic/cssd_equipment/2.jpg",
        "/pro_pic/cssd_equipment/3.jpg",
        "/pro_pic/cssd_equipment/4.jpg"
      ]
    },

    // ------------------------------
    // B. CSSD SS FURNITURE
    // ------------------------------

    "CSSD SS Furniture": {
      intro:
        "High-quality stainless-steel furniture designed for CSSD zones including sinks, racks, trolleys, packing stations and inspection tables.",
      
      features: [
        "SS304 construction with premium finishing.",
        "Customizable designs for CSSD workflow.",
        "Durable, hygienic, rust-resistant furniture.",
        "Heavy-duty load capacity."
      ],

      specs: [
        "1. Double Sink with Platform (Closed Type)",
        "• SS304, 16G sheet, tubular stand",
        "• Two sinks: water jet & air jet",

        "",
        "2. Single Sink with Platform",
        "• SS304, 16G sheet with back panel",

        "",
        "3. Air & Water Gun Unit",
        "• Dual pistol guns with pressure pump",

        "",
        "4. Receiving Work Table – SS304",
        "• 3×5 ft reinforced top",

        "",
        "5. Storage Rack – SS304",
        "• 5 shelves, 18G SS, size: 900×450×1800 mm",

        "",
        "6. Equipment Placement Table – SS304",
        "• 16G heavy-duty top, 400 kg capacity",

        "",
        "7. Packing Table + Drawers + Rack",
        "• SS304, size 3×5 ft",

        "",
        "8. Linen Folding / Inspection Table",
        "• 4×7 ft with illumination panel",

        "",
        "9. Pass Box – Mechanical Interlock",
        "• SS304 body, UV light, toughened glass",
        "• Size: 600×600×600 mm",

        "",
        "10. Closed Transport Trolley – SS304",
        "• Color strips for sterile/non-sterile",
        "• 6” PU wheels",

        "",
        "11. Instrument Trolley – SS304",
        "• Heavy-duty frame",

        "",
        "12. SS202 Flush Mounting Fixture",

        "",
        "13. SS304 CSSD Perforated Tray",
        "• Sizes: 12×6×4 to 24×12×4",

        "",
        "14. Sterilizing Box – SS304",
        "• Laser-cut perforated trays",

        "",
        "15. CSSD Linen Grid Tray – SS304",
        "• Sizes: 10×6×4 to 24×12×4"
      ],

      images: [
        "/pro_pic/cssd_furniture/1.jpg",
        "/pro_pic/cssd_furniture/2.jpg",
        "/pro_pic/cssd_furniture/3.jpg",
        "/pro_pic/cssd_furniture/4.jpg"
      ]
    },

    // ------------------------------
    // C. AUTOMATIC BED PAN WASHER
    // ------------------------------

    "Automatic Bed Pan Washer Disinfector": {
      intro:
        "Fully automatic bed pan washer with SS304 body, AO-value disinfection and sensor-controlled quick operation.",
      
      features: [
        "Fully SS304 body construction.",
        "30L hot water tank + steam tank.",
        "Automatic wash, rinse and disinfection.",
        "Foot-operated automatic door.",
        "Capacity: 1 or 2 bed pans."
      ],

      specs: [
        "• High-temperature disinfection (80–90°C).",
        "• PLC-controlled temperature & water flow.",
        "• Steam penetration and final rinse.",
        "• Safety-interlocked systems."
      ],

      images: [
        "/pro_pic/e_01.jpg",
        "/pro_pic/e_02.jpg",
        "/pro_pic/e_04.jpg",
        "/pro_pic/e_05.jpg"
      ]
    },

    // ------------------------------
    // D. MANUAL BED PAN WASHER
    // ------------------------------

    "Manual Bed Pan Washer Disinfector": {
      intro:
        "Manual DU sink-based bed pan washer built with SS304 and CPVC flush tank for efficient manual operation.",
      
      features: [
        "SS304 DU Sink with flush tank.",
        "Circular sink: 450mm dia.",
        "Optional extended 5 ft platform.",
        "High-pressure sprinkling nozzles."
      ],

      specs: [
        "• SS304 construction.",
        "• Conical DU sink 450 mm diameter.",
        "• Optional square sink 450×450×300 mm."
      ],


      images: [
        "/pro_pic/cssd_equipment/1.jpg",
        "/pro_pic/cssd_equipment/2.jpg",
        "/pro_pic/cssd_equipment/3.jpg",
        "/pro_pic/cssd_equipment/4.jpg"
      ]
    },

    // ------------------------------
    // E. HOSPITAL SS FURNITURE
    // ------------------------------

    "Hospital SS Furniture": {
      intro:
        "A complete range of premium stainless-steel hospital furniture including cupboards, trolleys, scrub stations and apron stands.",
      
      features: [
        "SS304/SS316 construction.",
        "Holds up to clinical heavy use.",
        "Glass doors, HEPA options, UV sterlization.",
        "Modular design for hospitals."
      ],

      specs: [
        "1. Endoscope Storage Cupboard",
        "• Holds 6 endoscopes, UV sterilization, filters",

        "",
        "2. SS Instrument Cupboard",
        "• Adjustable shelves, glass doors",

        "",
        "3–5. Scrub Stations",
        "• Floor/wall-mounted options",
        "• Foot, elbow or sensor operated",

        "",
        "6. Anaesthesia / Medicine Trolley – SS316",
        "• 5 drawers + catheter holder + 6\" wheels",

        "",
        "7. Swab Count Holder – SS304",
        "• Removable tray",

        "",
        "8. Lead Apron Stand – SS304",
        "• Holds 10 aprons",

        "",
        "9. Crash Cart – SS304",
        "• 6 drawers, IV rod, catheter holders",
        "• PU wheels, modular trays"
      ],


      images: [
        "/pro_pic/cssd_equipment/1.jpg",
        "/pro_pic/cssd_equipment/2.jpg",
        "/pro_pic/cssd_equipment/3.jpg",
        "/pro_pic/cssd_equipment/4.jpg"
      ]
    },

    // ------------------------------
    // OLD CATEGORIES
    // ------------------------------

    "Horizontal Autoclave": {
      intro:
        "VIDA Horizontal Autoclave is a high-performance sterilizer designed for CSSD, hospitals and laboratories.",

      features: [
        "Chamber made from heavy-duty SS316 (6mm).",
        "Doors SS316 12mm, jacket SS316 8mm.",
        "Operates at 121°C / 134°C.",
        "Vacuum pump, PLC automation, safety valves."
      ],

      specs: [
        "Power: 9–36 kW, 3-phase.",
        "Multiple sterilization cycles.",
        "Chamber sizes: 16×24\", 20×36\", 20×48\", etc."
      ],


    images: [
        "/pro_pic/e_01.jpg",
        "/pro_pic/e_02.jpg",
        "/pro_pic/e_04.jpg",
        "/pro_pic/e_05.jpg"
      ]
    },

    "E.T.O. Sterilizer": {
      intro:
        "Fully automatic ETO sterilizer designed for heat-sensitive sterilization with PLC automation.",

      features: [
        "SS304 construction.",
        "1 kg/cm² operating pressure.",
        "High-vacuum pump.",
        "Thermal printer with PLC."
      ],

      specs: [
        "Sizes: 12×12×24\" to 12×12×54\".",
        "Temperature range: 0–100°C.",
        "Vacuum range: 28” to 30 psi."
      ],


      images: [
        "/pro_pic/cssd_equipment/1.jpg",
        "/pro_pic/cssd_equipment/2.jpg",
        "/pro_pic/cssd_equipment/3.jpg",
        "/pro_pic/cssd_equipment/4.jpg"
      ]
    }
  };

  const productNames = Object.keys(products);
  const [selectedProduct, setSelectedProduct] = useState(productNames[0]);
  const [zoomImage, setZoomImage] = useState(null);
  const current = products[selectedProduct];

  return (
    <>
      <main className="products-page">
        
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg"></div>

          {/* Floating Shapes */}
          <div className="hero-shape shape1"></div>
          <div className="hero-shape shape2"></div>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-glass">
              <h1>Premium Medical & CSSD Equipment</h1>
              <p>Engineered for performance, reliability and healthcare standards.</p>
            </div>
          </div>
        </section>

        {/* LAYOUT */}
        <section className="prod-layout">
          
          {/* SIDEBAR */}
          <div className="prod-list">
            <h2>Product Categories</h2>

            {productNames.map((name) => (
              <button
                key={name}
                className={`prod-item ${selectedProduct === name ? "active" : ""}`}
                onClick={() => setSelectedProduct(name)}
              >
                {name}
              </button>
            ))}
          </div>

          {/* DETAILS */}
          <div className="prod-details">
            <div className="prod-details-main">
              
              {/* TEXT */}
              <div className="prod-text">
                <h2>{selectedProduct}</h2>
                <p className="prod-intro">{current.intro}</p>

                {/* Features */}
                {current.features && (
                  <div className="prod-section">
                    <h3>Key Features</h3>
                    <ul>
                      {current.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specs */}
                {current.specs && (
                  <div className="prod-section">
                    <h3>Technical Highlights</h3>
                    <ul>
                      {current.specs.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* VIEW MORE BUTTON */}
                <Link
                  href={`/products/${makeUrl(selectedProduct)}`}
                  className="view-more-btn"
                >
                  View More Details →
                </Link>
              </div>

              {/* IMAGES */}
              <div className="prod-images">
                <img
                  src={current.images[0]}
                  className="details-img main"
                  onClick={() => setZoomImage(current.images[0])}
                />

                <div className="thumb-row">
                  {current.images.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="thumb-img"
                      onClick={() => setZoomImage(img)}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* IMAGE ZOOM MODAL */}
      {zoomImage && (
        <div className="img-modal" onClick={() => setZoomImage(null)}>
          <div className="img-modal-content">
            <button className="img-close" onClick={() => setZoomImage(null)}>×</button>
            <img src={zoomImage} className="img-modal-img" />
          </div>
        </div>
      )}
    </>
  );
}
