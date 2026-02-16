"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-20">

      {/* HERO SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
          
          {/* Floating background shapes */}
          <div className="absolute top-[-40px] left-[-40px] w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>

          {/* Logo */}
          <img
            src="/maestrologo.jpeg"
            alt="TECH Maestro Academy Logo"
            className="w-20 sm:w-24 md:w-28 mx-auto mb-6"
          />

          {/* Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug mb-4 drop-shadow-lg">
            Welcome to <span className="text-yellow-300">TECH Maestro Academy 🚀</span>
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8 text-indigo-100">
            Empowering the next generation of tech innovators through AI, Robotics, STEM learning, and hands-on digital experiences.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-yellow-300 transition-transform duration-300"
            >
              Explore Programs
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-gradient-to-br from-indigo-100 via-indigo-50 to-purple-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
            <div className="text-5xl mb-3">💻</div>
            <h3 className="text-base sm:text-lg font-semibold text-indigo-800 mb-2">
              Hands-On Learning
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Students build real projects and gain practical experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
            <div className="text-5xl mb-3">🤖</div>
            <h3 className="text-base sm:text-lg font-semibold text-indigo-800 mb-2">
              AI & Robotics
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Learn coding, automation, and intelligent systems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-100 via-pink-50 to-yellow-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
            <div className="text-5xl mb-3">🌐</div>
            <h3 className="text-base sm:text-lg font-semibold text-indigo-800 mb-2">
              STEM Innovation
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Build creativity and problem-solving skills
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-2xl">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-indigo-900 mb-4">
            Why Choose TECH Maestro Academy?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            We focus on career-ready skills, mentorship, and real-world innovation. Our programs are designed to help young learners build confidence, creativity, and technical excellence.
          </p>
        </div>
      </section>

    </main>
  );
}
