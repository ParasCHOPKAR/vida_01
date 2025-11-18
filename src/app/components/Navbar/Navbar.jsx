"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Mobile dropdown states
  const [prodOpen, setProdOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <div className="logo-area">
            <Link href="/">
              <img src="/images/logo_01.jpg" alt="VIDA Logo" className="logo" />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>

            {/* PRODUCTS DROPDOWN */}
            <li className="dropdown">
              <span>Products ▾</span>
              <ul className="dropdown-menu">
                <li><Link href="/products/autoclave">Autoclave Horizontal / Vertical</Link></li>
                <li><Link href="/products/cssd">All CSSD Equipments</Link></li>
                <li><Link href="/products/cssd-furniture">CSSD Furniture</Link></li>
                <li><Link href="/products/bedpan">Automatic Bed Pan Washer</Link></li>
                <li><Link href="/products/sd-dd">S/D DD Instrument & Catheter Dryer</Link></li>
                <li><Link href="/products/scrub-unit">Scrub Units</Link></li>
                <li><Link href="/products/endoscopy">Endoscopy Dryer / Cabinet</Link></li>
                <li><Link href="/products/wash-sinks">Baby Wash Sink</Link></li>
                <li><Link href="/products/pigeon-rack">Pigeon Rack</Link></li>
                <li><Link href="/products/swab-holder">Swab Count Holder</Link></li>
                <li><Link href="/products/apron-stand">Lead Apron Stand</Link></li>
                <li><Link href="/products/utility-sink">Dirty Utility Sink</Link></li>
                <li><Link href="/products/pass-box">Interlocking Pass Box</Link></li>
                <li><Link href="/products/catheter-wash">Catheter Wash Station</Link></li>
              </ul>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="dropdown">
              <span>Services ▾</span>
              <ul className="dropdown-menu">
                <li><Link href="/services/workshops">Equipment Maintenance Workshops</Link></li>
                <li><Link href="/services/amc">AMC / CMC</Link></li>
                <li><Link href="/services/training">Healthcare Training</Link></li>
              </ul>
            </li>

            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* MOBILE HAMBURGER BUTTON */}
          <button className="menu-btn" onClick={() => setOpen(true)}>☰</button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div className={`overlay ${open ? "show" : ""}`} onClick={closeSidebar}></div>

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "open" : ""}`}>

        <div className="sidebar-top">
          <button className="close-sidebar" onClick={closeSidebar}>✕</button>
        </div>

        <ul className="sidebar-links">

          <li><Link href="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link href="/about" onClick={closeSidebar}>About</Link></li>

          {/* MOBILE PRODUCTS DROPDOWN */}
          <li>
            <button
              className="mobile-dropdown-btn"
              onClick={() => setProdOpen(!prodOpen)}
            >
              Products {prodOpen ? "▴" : "▾"}
            </button>

            <ul className={`mobile-dropdown ${prodOpen ? "show" : ""}`}>
              <li><Link href="/products/autoclave" onClick={closeSidebar}>Autoclave Horizontal / Vertical</Link></li>
              <li><Link href="/products/cssd" onClick={closeSidebar}>All CSSD Equipments</Link></li>
              <li><Link href="/products/cssd-furniture" onClick={closeSidebar}>CSSD Furniture</Link></li>
              <li><Link href="/products/bedpan" onClick={closeSidebar}>Automatic Bed Pan Washer</Link></li>
              <li><Link href="/products/scrub-unit" onClick={closeSidebar}>Scrub Units</Link></li>
              <li><Link href="/products/endoscopy" onClick={closeSidebar}>Endoscopy Dryer</Link></li>
              <li><Link href="/products/wash-sinks" onClick={closeSidebar}>Baby Wash Sink</Link></li>
            </ul>
          </li>

          {/* MOBILE SERVICES DROPDOWN */}
          <li>
            <button
              className="mobile-dropdown-btn"
              onClick={() => setServOpen(!servOpen)}
            >
              Services {servOpen ? "▴" : "▾"}
            </button>

            <ul className={`mobile-dropdown ${servOpen ? "show" : ""}`}>
              <li><Link href="/services/workshops" onClick={closeSidebar}>Equipment Workshops</Link></li>
              <li><Link href="/services/amc" onClick={closeSidebar}>AMC / CMC</Link></li>
              <li><Link href="/services/training" onClick={closeSidebar}>Healthcare Training</Link></li>
            </ul>
          </li>

          <li><Link href="/contact" onClick={closeSidebar}>Contact</Link></li>

        </ul>
      </aside>
    </>
  );
}
