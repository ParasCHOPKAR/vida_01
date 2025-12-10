"use client";

import React from "react";
import styles from "./page.module.css";
import Loader from "./components/Loader";
import HomeAbout from "./components/home_about";
import VidaProductsAccordion from "./components/VidaProductsAccordion";
import CertificateSection from "./components/Certificate";
import VideoSection from "./components/video";



export default function Home() {
  return (
    <>
      <Loader />  {/* 🔥 ADDED HERE */}

      <main className={styles.main}>

        {/* ---------------- HERO SECTION ---------------- */}
        <section className={styles.hero}>

          {/* Left Content */}
          <div className={styles.left}>
            <p className={styles.smallText}>— About VIDA Life Sciences</p>

            <h1 className={styles.title}>About VIDA Life Sciences</h1>

            <p className={styles.subtitle}>
              VIDA LIFE SCIENCES PVT. LTD. was launched on 26th Sep 2011 by 
              Mr. Onkar Yadav and Mr. Dhananjay Sawant as a healthcare equipment 
              and service provider. Vida has shown exponential growth from its 
              inception and now manufactures and delivers a wide range of quality 
              hospital equipment and services across the world.
            </p>

            <button className={styles.cta}>Learn More</button>
          </div>

          {/* Right Image Slider */}
          <div className={styles.sliderWrapper}>
            <div className={styles.slider}>
              <div className={styles.slideTrack}>
                <img src="/pro_pic/hero_01.jpg" />
                <img src="/pro_pic/hero_02.jpg" />
                <img src="/pro_pic/hero_03.jpg" />
                <img src="/pro_pic/hero_04.jpg" />
              </div>
            </div>
          </div>

        </section>

        {/* FEATURES OVERLAY */}
        <div className={styles.featuresWrapper}>
          <section className={styles.features}>
            <div className={styles.featureBox}>
              <h3>Professional Staff</h3>
              <p>Highly skilled experts across all departments.</p>
            </div>

            <div className={styles.featureBox}>
              <h3>Affordable Prices</h3>
              <p>Best-in-class health solutions at optimal cost.</p>
            </div>

            <div className={styles.featureBox}>
              <h3>Great Services</h3>
              <p>Commitment to quality and excellence.</p>
            </div>

            <div className={styles.featureBox}>
              <h3>Best Consultation</h3>
              <p>Guidance from experienced specialists.</p>
            </div>
          </section>
        </div>

        {/* HOME ABOUT SECTION */}
        <HomeAbout />

        {/* VIDA PRODUCTS ACCORDION */}
        <VidaProductsAccordion />

        
<VideoSection />


        <CertificateSection />


      </main>
    </>
  );
}
