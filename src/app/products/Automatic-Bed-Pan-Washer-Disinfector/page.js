"use client";
import Image from "next/image";
import "./page.css";

export default function Page() {
  return (
    <div className="bedpan-page">

      {/* Background Watermark */}
      <Image
        src="/pro_pic/abp_01.jpg"
        alt="Watermark"
        width={600}
        height={600}
        className="watermark"
      />

      {/* Logo */}
      <div className="logo-wrapper">
        <Image
          src="/pro_pic/abp_01.jpg"
          width={180}
          height={60}
          alt="VIDA Life Sciences"
          className="vida-logo"
        />
      </div>

      <h1 className="title">Automatic Bed Pan Washer Disinfector</h1>

      {/* Product Images Section */}
      <div className="product-images">
        <Image
          src="/products/bedpan1.jpg"
          width={350}
          height={400}
          alt="Bed Pan Washer Model 1"
          className="product-img"
        />

        <Image
          src="/products/bedpan2.jpg"
          width={350}
          height={400}
          alt="Bed Pan Washer Model 2"
          className="product-img"
        />
      </div>

      <section className="section">
        <h2 className="subtitle">01. Fully Automatic Bed Pan Washer Disinfector</h2>
        <p className="desc">
          Bed Pan Washer process is maintain A0 Value. Elegance Cabinet acts as a fully 
          automatic washer. The bed pan is placed inside the chamber, and high-pressure jets 
          clean fecal matter. The dirty water drains out automatically. The integrated heater 
          generates 80–90°C steam to disinfect the bed pan within the programmed cycle time.
        </p>
        <p className="desc">
          After the wash cycle, steam and water are drained completely into the gutter.
        </p>
      </section>

      <section className="section">
        <h2 className="subtitle">Description</h2>
        <p className="desc">Compact Automatic Bed Pan Washer / Disinfector with Auto Door.</p>
      </section>

      <section className="section">
        <h2 className="subtitle">Features</h2>
        <ul className="list">
          <li>PCL Controller Box</li>
          <li>30L Hot Water Tank with Instant Steam Generator</li>
          <li>Steamer Tank 20L</li>
          <li>0.5 HP Motor for Hot & Cold Water</li>
          <li>Soap & Disinfectant Solution Tank</li>
          <li>Disinfection at 80–90°C</li>
          <li>Fast Cycle Time</li>
          <li>Single Phase Operation (15 Amp)</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="subtitle">Technical Specification</h2>

        <div className="spec-grid">
          <div>
            <h3>Dimensions (Overall)</h3>
            <p>Height – 1680 mm</p>
            <p>Width – 750 mm</p>
            <p>Depth – 570 mm</p>
          </div>

          <div>
            <h3>Cycle Process</h3>
            <ol>
              <li>Washing with cold water</li>
              <li>Washing with hot water</li>
              <li>Disinfectant rinsing</li>
              <li>Steam penetration</li>
              <li>Final cold rinse</li>
            </ol>
          </div>
        </div>

        <p className="desc">
          <strong>Cycle Time:</strong> 12 Minutes (overall)
        </p>

        <div className="spec-box">
          <p><strong>Fabrication:</strong> Complete SS304 body with internal SS plumbing, SS boiler tank, liquid soap tank & frame.</p>
          <p><strong>Operation:</strong> Fully automatic press-to-start with front indication & temperature control.</p>
          <p><strong>Door:</strong> Automatic foot-operated switch with safety lock.</p>
          <p><strong>Mounting:</strong> Adjustable screwed legs.</p>
          <p><strong>Loading:</strong> Front Loading</p>
          <p><strong>Capacity:</strong> 1 bed pan / 2 urine bottles</p>
          <p><strong>Ground Clearance:</strong> 140–150 mm (adjustable)</p>
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Available Models</h2>

        <ul className="list">
          <li>Model 1 – Capacity: 1 Bed Pan & 2 Urine Pot</li>
          <li>Model 2 – Capacity: 2 Bed Pan & 2 Urine Pot</li>
        </ul>
      </section>
    </div>
  );
}
