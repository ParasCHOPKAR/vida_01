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
              <Link href="/products" className="dropdown-title">
                Products ▾
              </Link>

              <ul className="dropdown-menu">
                <li><Link href="/products/CSSD-Equipments">CSSD Equipments</Link></li>
                <li><Link href="/products/CSSD-SS-Furniture">CSSD SS Furniture</Link></li>
                <li><Link href="/products/Automatic-Bed-Pan-Washer-Disinfector">Automatic Bed Pan Washer Disinfector</Link></li>
                <li><Link href="/products/Manual-Bed-Pan-Washer-Disinfector">Manual Bed Pan Washer Disinfector</Link></li>
                <li><Link href="/products/Hospital-SS-Furniture">Hospital SS Furniture</Link></li>
                <li><Link href="/products/Horizontal-Autoclave">Horizontal Autoclave</Link></li>
                <li><Link href="/products/ETO-Sterilizer">E.T.O. Sterilizer</Link></li>
                <li><Link href="/products/CSSD-Project">CSSD Project</Link></li>
              </ul>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="dropdown">
              <Link href="/services" className="dropdown-title">Services </Link>
           
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

    {/* VIEW ALL PRODUCTS LINK */}
    <li><Link href="/products" onClick={closeSidebar}>View All Products</Link></li>

    <li><Link href="/products/CSSD-Equipments" onClick={closeSidebar}>CSSD Equipments</Link></li>
    <li><Link href="/products/CSSD-SS-Furniture" onClick={closeSidebar}>CSSD SS Furniture</Link></li>
    <li><Link href="/products/Automatic-Bed-Pan-Washer-Disinfector" onClick={closeSidebar}>Automatic Bed Pan Washer Disinfector</Link></li>
    <li><Link href="/products/Manual-Bed-Pan-Washer-Disinfector" onClick={closeSidebar}>Manual Bed Pan Washer Disinfector</Link></li>
    <li><Link href="/products/Hospital-SS-Furniture" onClick={closeSidebar}>Hospital SS Furniture</Link></li>
    <li><Link href="/products/Horizontal-Autoclave" onClick={closeSidebar}>Horizontal Autoclave</Link></li>
    <li><Link href="/products/ETO-Sterilizer" onClick={closeSidebar}>E.T.O. Sterilizer</Link></li>
    <li><Link href="/products/CSSD-Project" onClick={closeSidebar}>CSSD Project</Link></li>

  </ul>
</li>


          {/* MOBILE SERVICES DROPDOWN */}
 <li>
  <Link href="/services" onClick={closeSidebar}>
    Services
  </Link>
</li>


          <li><Link href="/contact" onClick={closeSidebar}>Contact</Link></li>
        </ul>
      </aside>
    </>
  );
}
