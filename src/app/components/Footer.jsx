"use client";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footerContainer">

        {/* COLUMN 1 — ABOUT */}
        <div className="footerCol footerAbout">
          <img src="/images/logo_01.jpg" alt="Vida Logo" className="footerLogo" />

          <p className="footerAboutText">
            Vida Life Sciences is a leading manufacturer of CSSD equipment,
            hospital stainless-steel furniture, and automated sterilization systems.
            We deliver world-class, reliable, and innovative healthcare solutions 
            trusted by medical facilities across India.
          </p>

          {/* SOCIAL ICONS */}
          <div className="socialIcons">
            <a href="#"><img src="/images/facebook.webp" alt="Facebook" className="social-icon" /></a>
            <a href="#"><img src="/images/instagram.png" alt="Instagram" className="social-icon" /></a>
            <a href="#"><img src="/images/linkedin.webp" alt="LinkedIn" className="social-icon" /></a>
            <a href="#"><img src="/images/whatsapp.jpg" alt="WhatsApp" className="social-icon" /></a>
          </div>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div className="footerCol">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About VIDA</a></li>
            <li><a href="/products">All Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 3 — PRODUCTS */}
        <div className="footerCol">
          <h3>Products</h3>
          <ul>
            <li><a href="/products/CSSD-Equipments">CSSD Equipments</a></li>
            <li><a href="/products/Hospital-SS-Furniture">Hospital SS Furniture</a></li>
            <li><a href="/products/Automatic-Bed-Pan-Washer-Disinfector">Automatic Bed Pan Washer</a></li>
            <li><a href="/products/Manual-Bed-Pan-Washer-Disinfector">Manual Bed Pan Washer</a></li>
            <li><a href="/products/Horizontal-Autoclave">Horizontal Autoclave</a></li>
            <li><a href="/products/ETO-Sterilizer">E.T.O Sterilizer</a></li>
            <li><a href="/products/CSSD-Project">Complete CSSD Projects</a></li>
          </ul>
        </div>

        {/* COLUMN 4 — CONTACT + MAP */}
        <div className="footerCol">
          <h3>Contact Us</h3>

          <div className="footerContact">
            <p><i className="fas fa-map-marker-alt"></i> Mumbai, Maharashtra, India</p>
            <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
            <p><i className="fas fa-envelope"></i> support@vidalifesciences.com</p>
          </div>

          {/* MAP BOX */}
          <div className="footerMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241318.9040611048!2d72.60098035599777!3d19.08219783945451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fb84dc38f%3A0x8a5f8d39e0b1d2e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footerDivider"></div>

      {/* COPYRIGHT */}
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} VIDA Life Sciences. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
