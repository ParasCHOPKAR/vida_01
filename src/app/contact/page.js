"use client";

import React from "react";
import "./contact.css";

export default function ContactPage() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            Connect with VIDA for high-quality medical & hospital equipment solutions.
          </p>
          <a href="#contact" className="hero-btn">Contact Now</a>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section id="contact" className="contact-section">

        {/* HEADER */}
        <div className="contact-header">
          <h2>We’re Here to Assist You</h2>
          <p>Reach out to us for product inquiries, support, or business collaborations.</p>
        </div>

        <div className="contact-main-wrapper">

          {/* LEFT SECTION — NEW ATTRACTIVE DESIGN */}
          <div className="contact-info">

            <div className="info-block">
              <div className="info-icon">
                <img src="/images/adress.jpg" alt="location" />
              </div>
              <div>
                <h3>Business Address</h3>
                <p>
                  4, Shriyash, Attrey Society,<br />
                  Opp. Sapna Hotel, Gokhalenagar Road,<br />
                  Pune 411016
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <img src="/images/contact.jpg" alt="phone" />
              </div>
              <div>
                <h3>Contact Numbers</h3>
                <p>
                  09689491632 <br />
                  09922960542 <br />
                  09822056593
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <img src="/images/mail.jpg" alt="email" />
              </div>
              <div>
                <h3>Email</h3>
                <p>sales@vidalife.in</p>
              </div>
            </div>

     
          </div>

          {/* RIGHT SECTION — NOTEPAD FORM */}
          <div className="contact-form-wrapper">

            {/* CLIP */}
            <div className="clip-holder">
              <img src="/images/clip-removebg-preview.png" alt="clip" className="clip-img" />
            </div>

            {/* FORM BOX */}
            <div className="contact-notepad">

              <h3>Book Appointment</h3>

              <form>
                <div className="form-group">
                  <input type="text" placeholder="Name" required />
                </div>

                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Phone" required />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Address" required />
                </div>

                <button type="submit" className="submit-btn">Know More</button>
              </form>
            </div>

            {/* STETHOSCOPE IMAGE */}
            <img
              src="/images/statascope.png"
              alt="stethoscope"
              className="stethoscope-img"
            />

          </div>

        </div>

        {/* GOOGLE MAP */}
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps?q=Gokhalenagar%20Road%20Pune&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

      </section>
    </>
  );
}
