"use client";

import { useState } from "react";
import Link from "next/link";

/* Reusable Links Component */
function NavLinks({
  mobile = false,
  handleClick,
}: {
  mobile?: boolean;
  handleClick?: () => void;
}) {
  const linkStyle = mobile
    ? "block text-white py-2 text-base font-medium hover:text-yellow-300 transition"
    : "text-white font-medium hover:text-yellow-300 transition";

  return (
    <>
      <Link href="/" className={linkStyle} onClick={handleClick}>Home</Link>
      <Link href="/gallery" className={linkStyle} onClick={handleClick}>Gallery</Link>
      <Link href="/services" className={linkStyle} onClick={handleClick}>Programs</Link>
      <Link href="/team" className={linkStyle} onClick={handleClick}>Team</Link>
      <Link href="/contact" className={linkStyle} onClick={handleClick}>Contact</Link>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /* Close mobile menu on link click */
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white shadow-lg fixed w-full z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/maestrologo.jpeg"
              alt="TECH Maestro Academy Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg sm:text-xl font-bold">
              TECH Maestro
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <NavLinks handleClick={handleLinkClick} />
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-950 px-4 pb-6 space-y-4">
          <NavLinks mobile handleClick={handleLinkClick} />
        </div>
      )}
    </nav>
  );
}
