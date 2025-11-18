"use client";
import React from "react";
import "./home_about.css";

export default function HomeAbout() {
  return (
    <section className="homeAboutSection">

      {/* SLIDING BACKGROUND TEXT */}
      <div className="aboutBGSlider">
        <div className="sliderTrack">
          <p>
            Surgery • Health • Medical • Wellness • Care • Surgery • Health •
            Medical • Wellness • Care • Surgery • Health • Wellness • Surgery •
            Health • Medical • Wellness • Care • Surgery • Health • Medical •
            Wellness • Care • Surgery • Health • Wellness • Surgery • Health •
            Medical • Wellness • Care • Surgery • Health • Medical • Wellness •
            Care • Surgery • Health • Wellness •
          </p>
        </div>
      </div>

      <div className="homeAboutContainer">

        {/* LEFT SIDE */}
        <div className="homeAboutLeft">

          <p className="aboutTag">OUR INTRODUCTION</p>

          <h2 className="aboutTitle">Vida Life Sciences</h2>

          <p className="aboutText">
            Vida Life Sciences is 100% dedicated to the healthcare industry and
            is focused on manufacturing and marketing quality healthcare
            equipment and products since its inception. Vida is also a market
            leader in providing top-notch maintenance and repair services for
            healthcare equipment.
          </p>

          <p className="aboutText">
            Our customers range from multi-speciality hospitals and medical
            professionals/surgeons to medical education institutions. We serve
            our valuable customers through direct mail, telephone support staff,
            and sales representatives.
          </p>

          <div className="aboutStats">
            <p><span>01.</span> Company Goal — Supporting medical professionals with high-quality products and ideas.</p>
            <p><span>02.</span> Featured Services — Hospital solutions, design, event management & consultation.</p>
          </div>

          <button className="aboutButton">READ MORE</button>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="homeAboutRight">
          <img
            src="/images/hero_01.jpg"
            alt="doctor"
            className="aboutImg aboutImgTop"
          />
          <img
            src="/images/hero_01.jpg"
            alt="team"
            className="aboutImg aboutImgBottom"
          />
        </div>
      </div>

    </section>
  );
}
