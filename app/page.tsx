"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* =====================
   TYPES
===================== */
type FeatureProps = {
  icon: string;
  title: string;
  text: string;
};

/* =====================
   PAGE
===================== */
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-20">

      {/* HERO */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">

          <div className="absolute top-[-40px] left-[-40px] w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>

          {/* Logo */}
          <img
            src="/maestrologo.jpeg"
            alt="TECH Maestro Academy Logo"
            className="w-24 mx-auto mb-6"
          />

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Welcome to{" "}
            <span className="text-yellow-300">
              TECH Maestro Academy 🚀
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg max-w-xl mx-auto mb-8 text-indigo-100">
            Empowering the next generation through AI, Robotics, STEM, and Digital Innovation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/services"
              className="px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg hover:scale-105 transition"
            >
              Explore Programs
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-indigo-700 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <Feature
            icon="💻"
            title="Hands-On Learning"
            text="Build real projects and gain practical skills."
          />

          <Feature
            icon="🤖"
            title="AI & Robotics"
            text="Learn intelligent systems and automation."
          />

          <Feature
            icon="🌐"
            title="STEM Innovation"
            text="Develop creativity and problem-solving skills."
          />

        </div>
      </section>

      {/* WHY US */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 text-center">

        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-2xl">

          <h2 className="text-xl md:text-2xl font-semibold text-indigo-900 mb-4">
            Why Choose TECH Maestro Academy?
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            We focus on career-ready skills, mentorship, and innovation that builds confidence and excellence.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-indigo-900 text-white py-10">
        <div className="max-w-5xl mx-auto text-center">

          <h3 className="text-lg font-semibold mb-5">
            Connect With Us
          </h3>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-2xl">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/epoitword"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-80"
            >
              <FaFacebookF style={{ color: "#1877F2" }} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/techmaestroacademy"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-80"
            >
              <FaInstagram style={{ color: "#E4405F" }} />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/techmaestro"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-80"
            >
              <FaXTwitter style={{ color: "#1DA1F2" }} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/tech-maestro-academy"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-80"
            >
              <FaLinkedinIn style={{ color: "#0A66C2" }} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348119395391"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-80"
            >
              <FaWhatsapp style={{ color: "#25D366" }} />
            </a>

          </div>

          <p className="text-xs mt-6 text-indigo-200">
            © {new Date().getFullYear()} TECH Maestro Academy. All Rights Reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}

/* =====================
   FEATURE COMPONENT
===================== */
function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-indigo-50 to-purple-50 p-6 rounded-3xl shadow-lg hover:scale-105 transition text-center">

      <div className="text-5xl mb-3">{icon}</div>

      <h3 className="text-lg font-semibold text-indigo-800 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-700">
        {text}
      </p>

    </div>
  );
}