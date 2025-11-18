"use client"; // 👈 Required to use useEffect

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";

export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
