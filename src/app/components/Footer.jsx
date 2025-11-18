"use client";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footerContainer">

        {/* COLUMN 1 */}
        <div className="footerCol footerAbout">
          <img src="/images/logo_01.jpg" alt="Vida Logo" className="footerLogo" />
          <p className="footerAboutText">
            Vida Life Sciences is committed to improving healthcare through
            innovative medical equipment, advanced solutions, and world-class
            maintenance services.
          </p>

          <div className="socialIcons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footerCol">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Vida</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Our Products</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footerCol">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Operation Theatre Lights</a></li>
            <li><a href="#">ICU Beds</a></li>
            <li><a href="#">Medical Equipment</a></li>
            <li><a href="#">Hospital Furniture</a></li>
            <li><a href="#">Maintenance Services</a></li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footerCol">
          <h3>Contact</h3>
          <p><i className="fas fa-map-marker-alt"></i> Mumbai, Maharashtra, India</p>
          <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
          <p><i className="fas fa-envelope"></i> info@vidalife.in</p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footerDivider"></div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Vida Life Sciences. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
