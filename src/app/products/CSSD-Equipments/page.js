"use client";

import { useState } from "react";
import "./vidaCSSD.css";

export default function Page() {
  // placeholder images
  const placeholders = Array.from({ length: 20 }, (_, i) => `/images/placeholder${i + 1}.jpg`);

  // All 12 products (A01 - A12) with auto-formatted sections
  const items = [
    {
      id: "A01",
      title:
        "VIDA — Fully Automatic Horizontal Rectangular Steam Sterilizer — Vertical Sliding (Automatic Door) Double Door (SS316)",
      overview:
        "High-capacity SS316 double-door steam sterilizer with PLC automation, data storage up to 1,000 cycles, pneumatic vertical sliding automatic doors, hydraulic door locking and multiple safety mechanisms. Designed for hospitals and CSSD with robust construction and comprehensive control features.",
      technical: [
        "Chamber: SS316, 8 mm thickness",
        "Doors: SS316, 12 mm thickness",
        "Jacket: SS, 8 mm thickness",
        "Steam generator: 27 kW (1 No.)",
        "Temperature controller: 121 / 134 °C",
        "Stand: S.S.",
        "Vacuum pump: 2 HP",
        "Hydraulic steam door locking (bellows plate removed in new design)",
        "Door hinges & clutch nut assembly: SS304",
        "Side valve to control different phases of sterilizing cycle",
        "Individual valves for sizes above 2' x 2' x 4'",
        "Operating pressure up to 2.2 kg/cm²",
        "All SS joints argon-arc welded; outgoing pipes SS304",
      ],
      doorSafety: [
        "Pneumatically operated automatic vertical sliding double door with chamber inter-locking",
        "Temperature-sensitive locking facility",
        "Doors reinforced with steel support structure",
        "Silicone door gasket for sealing",
        "Compound gauge & digital gasket pressure indication on both sides",
      ],
      pneumaticAndSteam: [
        "Two safety valves and one temperature sensor on autoclave jacket to control steam exhaust",
        "Vacuum breaker for sterile air entry with 0.3 micron air filter",
        "Steam pressure hydraulic lock device for door and pressure switch to prevent accidental pressure build-up",
        "Steam trap for rapid and complete air elimination",
      ],
      steamGenerator: [
        "Front & back plate made of SS304, argon arc welded",
        "Front plate with SS bush for easy access to heaters",
        "Low water cut-off for heater safety",
        "Rapid heating/cooling",
        "6-level digital water sensor in boiler (heater won't start if no water)",
        "Air-over-steam pulsing pressure system",
        "Water level indicator provided",
        "High vacuum pump: 2 HP",
      ],
      automation: [
        "PLC-based control system with thermal printer",
        "HMI: 7.5” color touch screen",
        "Pneumatically operated solenoid valves",
        "Pressure & vacuum sensors (chamber)",
        "PT100 temperature sensors (chamber/jacket)",
        "Digital displays: chamber pressure, temperature, cycle no., batch no., time & date, alarm indicator, low water indicator",
        "Provision for inbuilt error-code analysis",
        "Dual Auto/Manual facility; password-protected settings",
        "Auto water filling via 0.5 HP high-pressure pump",
      ],
      cycles: [
        "VLT (Vacuum Leak Test)",
        "Bowie & Dick (air removal for hollow instruments)",
        "Warped Cycle (4 cycles) — adjustable",
        "Unwrapped Cycle (2 cycles) — for unwrapped instruments",
        "Flash Cycle (single cycle) — for open instruments",
        "Detailed timed recommendations included for each cycle (121°C / 134°C variations)",
      ],
      misc: [
        "Printer records date/time/load/ID and operating parameters continuously",
        "Loading carriage & transfer trolley (set of 2) in SS304",
        "Saves steam and energy via automation; reduces man-hours",
      ],
      sizes: ["450 x 450 x 1200 mm", "600 x 600 x 1200 mm", "750 x 750 x 1500 mm"],
 images: [
  "/pro_pic/cssd_equipment/1.jpg",
  "/pro_pic/cssd_equipment/2.jpg",
  "/pro_pic/cssd_equipment/3.jpg",
  "/pro_pic/cssd_equipment/4.jpg",
],

    },

    {
      id: "A02",
      title:
        "VIDA — Fully Automatic Horizontal Steam Sterilizer — Double Door (Manual Door) (SS316)",
      overview:
        "SS316 double-door sterilizer with hydraulic locking, PLC control and standard sterilization cycles. Manual door operation option while preserving automation and safety.",
      technical: [
        "Chamber: SS316, 8 mm",
        "Doors: SS316, 12 mm",
        "Jacket: SS, 8 mm",
        "Steam Generator: 27 kW",
        "Vacuum Pump: 2 HP",
        "Operating pressure up to 2.2 kg/cm²",
      ],
      generatorAndControls: [
        "Two safety valves + temperature sensor on jacket",
        "Vacuum breaker with 0.3 micron filter",
        "Steam trap, low water cut-off and 6-level digital water sensor",
        "PLC control with 7.5” HMI & thermal printer",
      ],
      cycles: ["VLT, Bowie & Dick, Warped, Unwrapped, Flash"],
      sizes: ["600 x 600 x 1200 mm", "750 x 750 x 1500 mm"],
     images: [
  "/pro_pic/cssd_equipment/5.jpg",
  "/pro_pic/cssd_equipment/6.jpg",
  "/pro_pic/cssd_equipment/7.jpg",
  "/pro_pic/cssd_equipment/8.jpg",
],
    },

    {
      id: "A03",
      title:
        "VIDA — Fully Automatic High Speed Steam Sterilizer — Double Door (Manual Door) (SS316)",
      overview:
        "High-speed sterilizer for demanding environments. SS316 construction, robust vacuum systems and PLC automation for faster cycle times.",
      technical: [
        "Power: 18 kW",
        "Working Pressure: 32/21 PSI",
        "Temperature: 121 / 134 °C",
        "Chamber: SS316, 6 mm",
        "Doors: SS316, 12 mm",
        "Vacuum Pump: 1 HP; Water Pump: 0.5 HP",
        "Limit switches ensure doors closed before start",
      ],
      safety: [
        "Two safety valves and jacket temperature sensor",
        "Vacuum breaker with 0.3 micron sterile air filter",
        "Hydraulic steam pressure lock device & pressure switch",
      ],
      sizes: ['16" x 24" single door', '20" x 36" single door', '20" x 48" single/double door'],
 images: [
  "/pro_pic/cssd_equipment/9.jpg",
  "/pro_pic/cssd_equipment/10.jpg",
  "/pro_pic/cssd_equipment/11.jpg",
  "/pro_pic/cssd_equipment/12.jpg",
],
    },

    {
      id: "A04",
      title: "VIDA — E.T.O. Sterilizer — Fully Automatic (SS304)",
      overview:
        "ETO sterilizer for heat-sensitive devices. Cartridge type with PLC automation, vacuum cycles and thermal printer. Total cycle time with aeration approx. 6 hours.",
      technical: [
        "Chamber: SS304, 4 mm",
        "Outer body & door: SS304",
        "Operating gas pressure: 1 kg/cm²",
        "Hydraulic pressure test: 2 kg",
        "Vacuum pump: typically 3 HP (water-ring)",
      ],
      controls: [
        "PLC automation with 4.3” HMI & thermal printer",
        "Temperature indicator 0–100°C",
        "Pressure indicator: 28” vacuum to 30 psig",
        "Pneumatic solenoid valves with cartridge safety logic",
      ],
      sizes: ["1 x 1 x 2 ft", "1 x 1 x 3 ft", "1 x 1 x 4 ft", "1 x 1 x 4.5 ft", "1.5 x 1.5 x 5 ft"],
 images: [
  "/pro_pic/cssd_equipment/13.jpg",
  "/pro_pic/cssd_equipment/14.jpg",
  "/pro_pic/cssd_equipment/15.jpg",
  "/pro_pic/cssd_equipment/16.jpg",
],
    },

    {
      id: "A05",
      title:
        "VIDA — Automatic Sensor Operated Door Washer Disinfector with Dryer — Double Door (SS304)",
      overview:
        "350 Ltr straight-through washer disinfector with Delta PLC, 4” touch HMI, visible toughened glass double doors and inbuilt dryer — reduces hospital-acquired infections by lowering bioburden on instruments.",
      technical: [
        "Washes, rinses and disinfects surgical instruments, tubing, suction devices, bottles & glassware",
        "PLC with Ethernet and 4” HMI; programs: Rapid, Standard, Intensive, User",
        "Powerful water circulation pump; electric heater up to 90°C; detachable rotating spray arms",
        "Dosing pump for detergents, sensors for soap level and chamber water; double-wall insulation",
      ],
      size: ["Overall size: 750 mm (L) x 750 mm (B) x 1800 mm (H)"],
     images: [
  "/pro_pic/cssd_equipment/17.jpg",
  "/pro_pic/cssd_equipment/18.jpg",
  "/pro_pic/cssd_equipment/19.jpg",
  "/pro_pic/cssd_equipment/1.jpg",
],
    },

    {
      id: "A06",
      title:
        "VIDA — Washer Disinfector with Dryer — Double Door Fully Automatic (Manual Door Option) (SS304)",
      overview:
        "Similar to sensor-operated model but with manual door option. 350 Ltr SS304 chamber, PLC control and thermal printer.",
      technical: [
        "350 Ltr SS304 chamber",
        "PLC control, 4” touch HMI and thermal printer",
        "Detachable rotating spray arms, dosing pump, double-wall insulation, two water inlets",
      ],
     images: [
  "/pro_pic/cssd_equipment/2.jpg",
  "/pro_pic/cssd_equipment/3.jpg",
  "/pro_pic/cssd_equipment/4.jpg",
  "/pro_pic/cssd_equipment/1.jpg",
],
    },

    {
      id: "A07",
      title: "VIDA — Instrument Washer (Single Door) — SS304 (350 Ltr)",
      overview:
        "Instrument washer for pre-wash, detergent wash and hot water rinse cycles; PLC controlled with touch HMI.",
      technical: [
        "Chamber volume: 350 litres",
        "4” touch screen HMI, PLC-based programs (Rapid/Standard/Intensive/User)",
        "Heater to raise temperature up to 90°C",
        "Overall size: 700 mm (L) x 725 mm (B) x 1600 mm (H); Electrical: 3 kW, single phase",
      ],
     images: [
  "/pro_pic/cssd_equipment/5.jpg",
  "/pro_pic/cssd_equipment/6.jpg",
  "/pro_pic/cssd_equipment/7.jpg",
  "/pro_pic/cssd_equipment/8.jpg",
],
    },

    {
      id: "A08",
      title: "VIDA — 40 Liters Ultrasonic Cleaner",
      overview:
        "40 L ultrasonic cleaner — 500 W power, ~45 kHz frequency, SS304 tank with heater up to 70°C; ideal for instrument cleaning.",
      technical: [
        "Ultrasonic Power: 500 W",
        "Tank capacity: 40 L (tank size 550 x 300 x 200 mm)",
        "Frequency: 45 ± 3 kHz",
        "Electric supply: 230 V AC, 50 Hz",
        "Transducer: PZT sandwiched; accessories: SS lid, wire mesh basket, drain strainer",
      ],
         images: [
  "/pro_pic/cssd_equipment/17.jpg",
  "/pro_pic/cssd_equipment/18.jpg",
  "/pro_pic/cssd_equipment/19.jpg",
  "/pro_pic/cssd_equipment/1.jpg",
],
    },

    {
      id: "A09",
      title: "VIDA — Drying Cabinet (SS) — 24 x 24 x 30\"",
      overview:
        "SS chamber & outer body; uniform heating and ventilation ports. Temperature control by capillary thermostat (50–250 °C).",
      technical: [
        "SS chamber with SS outer cabinet",
        "Heating elements: high-grade nichrome wires bottom & ribs",
        "Temperature control by capillary thermostat (50–250 °C)",
        "Ventilation ports to evacuate gases/fumes",
      ],
       images: [
  "/pro_pic/cssd_equipment/2.jpg",
  "/pro_pic/cssd_equipment/3.jpg",
  "/pro_pic/cssd_equipment/4.jpg",
  "/pro_pic/cssd_equipment/1.jpg",
],
    },

    {
      id: "A10",
      title: "VIDA — Instrument cum Catheter Dryer (Hot Air Oven) — Dual Chamber",
      overview:
        "Dual chamber dryer with independent controls for instruments and catheters/ventilator tubes. PLC control, HMI and HEPA inlet for clean air.",
      technical: [
        "Outer size: 36” L x 30” W x 72” H",
        "Inner sizes: Instrument & Catheter: 15” x 22” x 51” each",
        "Dual PLC control with independent HMI displays",
        "Temp ranges: Instruments 30–250 °C; Catheters 5–60 °C",
        "HEPA filter inlet; 8 trays; cycle complete alarms",
      ],
        images: [
  "/pro_pic/cssd_equipment/5.jpg",
  "/pro_pic/cssd_equipment/6.jpg",
  "/pro_pic/cssd_equipment/7.jpg",
  "/pro_pic/cssd_equipment/8.jpg",
],
    },

    {
      id: "A11",
      title: "VIDA — Class B Autoclave (24 Ltr)",
      overview:
        "Class B autoclave with single-lever locking, 8 preset + 1 user program, vacuum/B&D/Helix test support and USB output for data.",
      technical: [
        "Size: Ø250 x 450 mm; Capacity: 24 Ltr",
        "Sterilization temp: 105–134 °C; Time: 4–60 min",
        "Vacuum time: 1–10 cycles; Dry time: 1–25 min",
        "Safety features: overpressure prevention, lid lock under pressure, MCB safety, audio/visual alarms",
        "2 x 4.5 L water tanks; USB data output",
      ],
     images: [
  "/pro_pic/cssd_equipment/5.jpg",
  "/pro_pic/cssd_equipment/6.jpg",
  "/pro_pic/cssd_equipment/7.jpg",
  "/pro_pic/cssd_equipment/8.jpg",
],
    },

    {
      id: "A12",
      title: "VIDA — Automatic Heat Sealing Machine (SS)",
      overview:
        "Horizontal continuous heat sealing machine with digital temperature control; vertical/horizontal mountable; conveyor 0–12 m/min; optional embossing.",
      technical: [
        "Example size: 850 x 420 x 360 mm",
        "Optional embossing facility on select models",
        "Digital temperature control & display; conveyor speed 0–12 m/min",
        "SS construction, suitable for Tyvek reels, pouches and hospital-grade packaging",
      ],
        images: [
  "/pro_pic/cssd_equipment/2.jpg",
  "/pro_pic/cssd_equipment/3.jpg",
  "/pro_pic/cssd_equipment/4.jpg",
  "/pro_pic/cssd_equipment/1.jpg",
],
    },
  ];

  // accordion open state
  const [open, setOpen] = useState({});
  const toggle = (id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <div className="vida-wrapper">
        <div className="vida-watermark" aria-hidden="true" />

        <header className="vida-header">
          <div className="vida-header-inner">
            <h1>VIDA — CSSD Equipment & Solutions</h1>
            <p>Complete specifications, safety features, galleries and product downloads.</p>
          </div>
        </header>

        <main className="vida-container">
          <section className="vida-intro">
            <h2>All VIDA CSSD Products</h2>
            <p className="lead">Click a product to expand fully formatted specifications. Use gallery or download spec as needed.</p>
          </section>

          <section className="vida-accordion">
            {items.map((it) => (
              <article key={it.id} className={`acc-card ${open[it.id] ? "is-open" : ""}`}>
                <button className={`acc-btn`} onClick={() => toggle(it.id)} aria-expanded={!!open[it.id]}>
                  <div className="acc-top">
                    <div className="acc-title-wrap">
                      <h3 className="acc-title">{it.title}</h3>
                      <p className="acc-over">{it.overview}</p>
                    </div>

                    <div className="acc-meta">
                      <span className="pid">{it.id}</span>
                      <span className="acc-toggle">{open[it.id] ? "−" : "+"}</span>
                    </div>
                  </div>
                </button>

                <div className={`acc-panel ${open[it.id] ? "expanded" : ""}`}>
                  <div className="acc-grid">
                    <div className="acc-left">
                      {/* Technical */}
                      {it.technical && (
                        <>
                          <h4>Technical Specification</h4>
                          <ul className="spec-list">
                            {it.technical.map((t, i) => (
                              <li key={i}>{t}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Door Safety */}
                      {it.doorSafety && (
                        <>
                          <h4>Door Safety</h4>
                          <ul className="spec-list">
                            {it.doorSafety.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Pneumatic/Steam */}
                      {it.pneumaticAndSteam && (
                        <>
                          <h4>Steam & Pneumatic Systems</h4>
                          <ul className="spec-list">
                            {it.pneumaticAndSteam.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Generator & Controls */}
                      {it.generatorAndControls && (
                        <>
                          <h4>Generator & Controls</h4>
                          <ul className="spec-list">
                            {it.generatorAndControls.map((g, i) => (
                              <li key={i}>{g}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Automation */}
                      {it.automation && (
                        <>
                          <h4>Automation & Instrumentation</h4>
                          <ul className="spec-list">
                            {it.automation.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Cycles */}
                      {it.cycles && (
                        <>
                          <h4>Sterilization Cycles</h4>
                          <ul className="spec-list">
                            {it.cycles.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Sizes */}
                      {it.sizes && (
                        <>
                          <h4>Sizes / Options</h4>
                          <ul className="spec-list">
                            {it.sizes.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Misc */}
                      {it.misc && (
                        <>
                          <h4>Additional Notes</h4>
                          <ul className="spec-list">
                            {it.misc.map((m, i) => (
                              <li key={i}>{m}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    <aside className="acc-right">
                      <div className="acc-right-inner">
                        <h4>Gallery</h4>
                        <div className="acc-gallery">
                          {(it.images || []).map((img, idx) => (
                            <img key={idx} src={img} alt={`${it.id} img ${idx + 1}`} />
                          ))}
                          {/* fill with placeholders if fewer than 4 */}
                          {((it.images || []).length < 4
                            ? Array.from({ length: 4 - (it.images || []).length })
                            : []
                          ).map((_, k) => (
                            <img key={`ph-${k}`} src={placeholders[(k + 5) % placeholders.length]} alt="placeholder" />
                          ))}
                        </div>

                        <div className="panel-actions">
                          <a className="btn primary" href={`/products/${it.id.toLowerCase()}`}>View full product page</a>
                          <a className="btn ghost" href={placeholders[0]} target="_blank" rel="noreferrer">Download spec (PDF)</a>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>

        <footer className="vida-footer">© {new Date().getFullYear()} VIDA Life Sciences. All rights reserved.</footer>
      </div>
    </>
  );
}
