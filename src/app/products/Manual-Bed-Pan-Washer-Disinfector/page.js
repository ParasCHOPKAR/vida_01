"use client";
import Image from "next/image";
import "./page.css";

export default function Page() {
  return (
    <div className="manual-bedpan-page">

      {/* Watermark */}
      <Image
        src="/vida-logo.png"
        alt="Watermark"
        width={600}
        height={600}
        className="watermark"
      />

      {/* Logo */}
      <div className="logo-wrapper">
        <Image
          src="/images/logo_01.jpg"
          width={180}
          height={60}
          alt="VIDA Life Sciences"
          className="vida-logo"
        />
      </div>

      <h1 className="title">Manual Bed Pan Washer Disinfector</h1>

      {/* PRODUCT IMAGE */}
      <div className="product-image-box">
        <Image
          src="/products/manual-bedpan.jpg"
          width={420}
          height={420}
          alt="Manual Bedpan Disinfector"
          className="product-img"
        />
      </div>

      <section className="section">
        <h2 className="subtitle">01. Vida – SS 304 DU Sink with Platform & Flush Tank</h2>

        <p className="desc">
          A high-quality manual bed pan washer system featuring a durable stainless-steel DU sink,
          platform, and integrated flush tank designed for smooth and hygienic operation.
        </p>

        <div className="spec-box">
          <h3>Conical DU Sink Size</h3>
          <p>450 mm diameter × 600 mm (Depth)</p>

          <h3>Overall Size</h3>
          <p>Available in 3 feet length & 5 feet length</p>
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Specifications</h2>

        <ul className="list">
          <li>SS 304, 16 Gauge Matt Finish Sheet</li>
          <li>40×40 mm SS Square Pipe (16G Frame) with Support</li>
          <li>Three-side Half Closed Stainless Steel Panel</li>
          <li>6” Stainless Steel Back Panel (SS304)</li>
          <li>High-quality CPVC Flush Tank with required plumbing & attachments</li>
          <li>Flush tank mounted with DU unit using strong support</li>
        </ul>
      </section>
    </div>
  );
}
