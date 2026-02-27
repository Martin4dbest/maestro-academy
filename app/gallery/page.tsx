"use client";

import React from "react";

export default function GalleryPage() {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1581092450112-d366f7bb7a1b?auto=format&fit=crop&w=800&q=80",
      alt: "Virtual Reality Workshop",
      title: "Virtual Reality Workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1581091467237-22a0b2835b47?auto=format&fit=crop&w=800&q=80",
      alt: "Software Development",
      title: "Software Development",
    },
    {
      src: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Student Presentation",
      title: "Student Presentation",
    },
    {
      src: "https://images.unsplash.com/photo-1605902711622-cfb43c44329c?auto=format&fit=crop&w=800&q=80",
      alt: "Robotics Lab",
      title: "Robotics Lab",
    },
    {
      src: "https://images.unsplash.com/photo-1581090700227-3d0df7be92f1?auto=format&fit=crop&w=800&q=80",
      alt: "Coding Workshop",
      title: "Coding Workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee9815?auto=format&fit=crop&w=800&q=80",
      alt: "Team Project",
      title: "Team Project",
    },
    {
      src: "https://images.unsplash.com/photo-1581093448791-f0f6d36c81a0?auto=format&fit=crop&w=800&q=80",
      alt: "AI Presentation",
      title: "AI Presentation",
    },
    {
      src: "https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Tech Gadgets",
      title: "Tech Gadgets",
    },
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-12">

      {/* Page Title */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-4 sm:p-6 shadow-2xl mb-8 text-center relative overflow-hidden">
        <div className="absolute top-[-20px] left-[-20px] w-16 h-16 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-white opacity-10 rounded-full animate-pulse"></div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">
          Gallery
        </h1>
        <p className="text-[10px] sm:text-[11px] md:text-[12px] drop-shadow-sm">
          Explore highlights from our tech workshops, events, and student projects.
        </p>
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-1 text-white font-medium text-[9px] sm:text-[10px] md:text-[11px] text-center">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}