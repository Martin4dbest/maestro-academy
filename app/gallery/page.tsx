"use client";

import React from "react";

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 px-6 py-16">

      {/* Page Title Banner */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-8 shadow-2xl mb-12 text-center relative overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-[-30px] left-[-30px] w-24 h-24 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-30px] right-[-30px] w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
          Gallery
        </h1>
        <p className="text-xs sm:text-sm md:text-base drop-shadow-sm">
          Explore highlights from our workshops, events, and student projects.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {[
          {
            src: "https://images.unsplash.com/photo-1557683316-973673baf926",
            alt: "Tech VR event",
            title: "Virtual Reality Workshop"
          },
          {
            src: "https://cdn.pixabay.com/photo/2017/02/01/22/02/conference-2032904_1280.jpg",
            alt: "Conference crowd",
            title: "Tech Conference"
          },
          {
            src: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg",
            alt: "Tech presentation",
            title: "Student Presentation"
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white font-medium text-sm sm:text-base">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Event Videos Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-900 mb-8">
          Event Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1,2,3,4].map((_, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1"
            >
              <iframe
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl bg-black"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition">
          View All Videos
        </button>
      </div>

    </main>
  );
}
