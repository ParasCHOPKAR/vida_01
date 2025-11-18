"use client";

import React from "react";
import "./about.css";

export default function AboutPage() {
  return (
    <>
{/* ================= HERO SECTION ================= */}
<section className="about-hero">
  <div className="hero-overlay"></div>

  <div className="hero-inner">
    <h1>About Vida Life sciences</h1>
    <p>Delivering Excellence in Medical Innovation & Healthcare Advancement.</p>
    <button className="cta-btn">Contact Us</button>
  </div>
</section>




{/* ================= MAIN CONTENT ================= */}
<section className="about-container">

  {/* ================= OUR HISTORY (MODERN SECTION) ================= */}
  <div className="history-wrapper">
    
    {/* LEFT TEXT */}
    <div className="history-left">
      <h3 className="small-title">Our Journey</h3>
      <h2 className="big-title">Our History</h2>

      <p>
        Established in 2011, Vida Lifesciences began as a mission-driven company
        focused on manufacturing high-quality SS medical furniture and equipment.
        Today, VIDA is a trusted brand supplying advanced healthcare solutions 
        across India.
      </p>

      <p>
        With thousands of successful installations, VIDA continues its commitment 
        to excellence, innovation, and customer satisfaction.
      </p>
    </div>

    {/* RIGHT IMAGE CARDS */}
    <div className="history-right">

      <div className="history-card large">
        <img src="/images/hero_01.jpg" alt="History large" />
      </div>

      <div className="history-card small">
        <img src="/images/hero_01.jpg" alt="History small 1" />
      </div>

      <div className="history-card small">
        <img src="/images/hero_01.jpg" alt="History small 2" />
      </div>

      <div className="history-card small">
        <img src="/images/hero_01.jpg" alt="History small 3" />
      </div>

    </div>

  </div>



        {/* ================= WHAT WE DO ================= */}
        <h2 className="section-heading">What We Do</h2>

        <div className="what-we-do-cards">
          <div className="wwd-card blue">
            <h4>Turnkey OT & CSSD</h4>
            <p>End-to-end OT & CSSD setup with international medical compliance.</p>
          </div>

          <div className="wwd-card beige">
            <h4>Hospital Equipments</h4>
            <p>Premium SS furniture, sterilizers, scrub sinks & more.</p>
          </div>

          <div className="wwd-card orange">
            <h4>Maintenance & Support</h4>
            <p>After-sales AMC, CMC & biomedical training sessions.</p>
          </div>
        </div>

        <button className="primary-btn">Talk With Vida Lifesciences</button>

        
{/* ================= MISSION VISION VALUES (PUZZLE STYLE) ================= */}
<section className="mv-section">
  <h2 className="mv-heading">Mission, Vision &amp; Values</h2>

  <div className="mv-container">

    {/* LEFT ICON */}
    <div className="mv-left">
      <div className="big-icon">
        <img src="/images/missio_vision.jpg" alt="company" />
      </div>
    </div>

    {/* CONNECTOR */}
    <div className="mv-middle">
      <div className="connector"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className="mv-right">

      {/* MISSION */}
      <div className="icon-card">
        <div className="icon-circle">
          <img src="/images/v_01-removebg-preview.png" alt="mission" />
        </div>
        <div className="icon-text">
          <h3>Mission</h3>
          <p>
            We aim to enhance patient care through high-quality products,
            advanced technologies, and strong after-sales support.
          </p>
        </div>
      </div>

      {/* VISION */}
      <div className="icon-card">
        <div className="icon-circle vision">
          <img src="/images/v_02-removebg-preview.png" alt="vision" />
        </div>
        <div className="icon-text">
          <h3>Vision</h3>
          <ul>
            <li>Deliver superior patient-care infrastructure.</li>
            <li>Affordable &amp; accessible medical innovation.</li>
            <li>Improve global clinical research standards.</li>
            <li>Empower healthcare workforce with training.</li>
          </ul>
        </div>
      </div>

      {/* VALUES */}
      <div className="icon-card">
        <div className="icon-circle values">
          <img src="/images/v_03-removebg-preview.png" alt="values" />
        </div>
        <div className="icon-text">
          <h3>Values</h3>
          <ul>
            <li>Integrity &amp; Honesty</li>
            <li>Excellence</li>
            <li>Commitment</li>
            <li>Teamwork</li>
            <li>Reliable After-Sales Support</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>




<section className="timeline-section">

  <h2 className="timeline-heading">Our Journey</h2>

  <div className="timeline">

    <div className="timeline-item" data-aos="fade-right">
      <div className="timeline-year">2011</div>
      <div className="timeline-content">
        Vida was launched & started providing hospitals with surgical disposable products.
      </div>
    </div>

    <div className="timeline-item" data-aos="fade-left">
      <div className="timeline-year">2012</div>
      <div className="timeline-content">
        Started hospital equipment & furniture supply.
      </div>
    </div>

    <div className="timeline-item" data-aos="fade-right">
      <div className="timeline-year">2013</div>
      <div className="timeline-content">
        Started in-house manufacturing of CSSD, OT equipment and hospital furniture.
      </div>
    </div>

    <div className="timeline-item" data-aos="fade-left">
      <div className="timeline-year">2014</div>
      <div className="timeline-content">
        Started designing new hospital project services & biomedical consultancy.
      </div>
    </div>

    <div className="timeline-item" data-aos="fade-right">
      <div className="timeline-year">2015</div>
      <div className="timeline-content">
        Vida’s brand reached Maharashtra and expanded to Karnataka, Telangana, MP, Gujarat and also exports to Muscat & Malaysia.
      </div>
    </div>

    <div className="timeline-item" data-aos="fade-left">
      <div className="timeline-year">2016</div>
      <div className="timeline-content">
        Started its own Research & Development department to develop new CSSD equipment.
      </div>
    </div>

    <div className="timeline-item" data-aos="fade-right">
      <div className="timeline-year">2017</div>
      <div className="timeline-content">
        Awarded the <strong>Fastest Growing Indian Company Excellence Award</strong> at the International Achievers Conference.
      </div>
    </div>

  </div>

</section>

 


      </section>
    </>
  );
}
