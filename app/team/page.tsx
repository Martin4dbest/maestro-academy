"use client";

import React from "react";
import Image from "next/image";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Founder & Lead Instructor",
      role: "Head of Technology Training",
      bio: "Leads the vision of EPO IT-World and oversees all digital literacy, coding, and STEM programs.",
      image: "/Martinez.jpeg",
      color: "bg-indigo-100",
    },
    {
      name: "Program Coordinator",
      role: "Training & Operations Manager",
      bio: "Coordinates training programs, student activities, and technology workshops.",
      image: "/Martinez.jpeg",
      color: "bg-purple-100",
    },
    {
      name: "Senior Tech Instructor",
      role: "Software & ICT Trainer",
      bio: "Specialist in programming, ICT tools, and hands-on practical training.",
      image: "/Martinez.jpeg",
      color: "bg-teal-100",
    },
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-12">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-3 drop-shadow-sm">
          Our Management Team
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          Meet the dedicated professionals driving the mission of EPO IT-World (Tech Maestro) to build the next generation of tech innovators.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`relative ${member.color} rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-6 text-center`}
          >
            {/* Image Box */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>

            {/* Name */}
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
              {member.name}
            </h2>

            {/* Role */}
            <p className="text-indigo-700 text-xs sm:text-sm font-medium mb-2">
              {member.role}
            </p>

            {/* Bio */}
            <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
