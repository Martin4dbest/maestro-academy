"use client";

import React from "react";

export default function ServicesPage() {
  const items = [
    // Products
    {
      title: "STEM Kit Sale",
      description: "Educational STEM kits for hands-on learning in schools and homes.",
      color: "bg-indigo-100",
      emoji: "🧩",
    },
    {
      title: "Lego Robotic Kit",
      description: "Build and program Lego robots to develop STEM skills.",
      color: "bg-purple-100",
      emoji: "🤖",
    },
    {
      title: "Solar Powered Robots",
      description: "Explore renewable energy and robotics with solar-powered kits.",
      color: "bg-teal-100",
      emoji: "☀️",
    },
    {
      title: "Drones",
      description: "Learn drone operations and aerial robotics.",
      color: "bg-pink-100",
      emoji: "🛸",
    },

    // Services
    {
      title: "Software Development",
      description: "Custom software solutions for businesses and individuals.",
      color: "bg-yellow-100",
      emoji: "💻",
    },
    {
      title: "Tech Maestro Academy",
      description:
        "Courses: Robotics, AI, 3D Modelling, Microbit STEM, Arduino STEM, IoT, Mechatronics & more. Summer Tech Bootcamp & Full-Time Digital Literacy included.",
      color: "bg-green-100",
      emoji: "🎓",
    },
    {
      title: "General IT Equipment Sales",
      description: "Providing high-quality IT equipment for personal and business use.",
      color: "bg-orange-100",
      emoji: "🖥️",
    },
    {
      title: "Cisco Networking",
      description: "Professional networking solutions and Cisco-certified training.",
      color: "bg-blue-100",
      emoji: "🌐",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-indigo-900 mb-2 drop-shadow-sm">
          Our Products & Services
        </h1>
        <p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-700 leading-relaxed">
          At Tech Maestro Academy, we build future-ready innovators through practical STEM education, hands-on tech products, and professional IT services.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative ${item.color} p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col justify-between`}
          >
            <div>
              {/* Emoji */}
              <div className="text-3xl sm:text-4xl mb-2">{item.emoji}</div>

              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-base font-semibold mb-1 text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-800 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Number Badge */}
            <div className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white text-indigo-700 font-bold rounded-full shadow-md text-xs sm:text-sm">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}