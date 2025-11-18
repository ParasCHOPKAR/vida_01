"use client";

import React from "react";
import "./floatingButtons.css";

export default function FloatingButtons() {
  return (
    <div className="floatingButtons">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="floatBtn whatsappBtn"
      >
        <img src="/images/WhatsApp___011.webp" alt="WhatsApp" className="iconImg" />
      </a>

      {/* Call */}
      <a href="tel:+919876543210" className="floatBtn callBtn">
        <img src="/images/phone.png" alt="Call" className="iconImg" />
      </a>

    </div>
  );
}
