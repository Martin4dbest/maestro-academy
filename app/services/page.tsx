"use client";

import React from "react";

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Literacy Training",
      description:
        "Basic computer skills, internet usage, and essential productivity tools.",
      color: "bg-indigo-100",
      emoji: "💻",
    },
    {
      title: "Programming & Coding",
      description:
        "Hands-on web development and modern programming training.",
      color: "bg-purple-100",
      emoji: "👨‍💻",
    },
    {
      title: "STEM Education",
      description:
        "Structured Science, Technology, Engineering & Mathematics programs.",
      color: "bg-teal-100",
      emoji: "🔬",
    },
    {
      title: "ICT & Computer Training",
      description:
        "Professional ICT skills including Office tools and data processing.",
      color: "bg-blue-100",
      emoji: "🖥️",
    },
    {
      title: "Tech Workshops & Bootcamps",
      description:
        "Intensive short-term training programs and tech seminars.",
      color: "bg-pink-100",
      emoji: "🎓",
    },
    {
      title: "Youth Tech Mentorship",
      description:
        "Guidance and mentorship for future tech professionals.",
      color: "bg-yellow-100",
      emoji: "🤝",
    },
    {
      title: "School Tech Programs",
      description:
        "Digital transformation and training for schools.",
      color: "bg-green-100",
      emoji: "🏫",
    },
    {
      title: "IT Consultancy",
      description:
        "Professional advisory services for individuals and organizations.",
      color: "bg-orange-100",
      emoji: "📊",
    },
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-12">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-3 drop-shadow-sm">
          Our Programs & Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          At TECH Maestro Academy, we build future-ready innovators through
          practical digital, ICT, and STEM-focused training programs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative ${service.color} p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300`}
          >
            {/* Emoji */}
            <div className="text-5xl mb-4">{service.emoji}</div>

            {/* Number Badge */}
            <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white text-indigo-700 font-bold rounded-full shadow-lg">
              {index + 1}
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
