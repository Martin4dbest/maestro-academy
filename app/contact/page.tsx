"use client";

import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-indigo-100 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pb-16">

      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl md:text-2xl font-serif font-bold mb-8 text-center text-indigo-900 drop-shadow-sm">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl w-full">

        {/* Contact Info Card */}
        <div className="bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-indigo-900">
            EPO IT-World (Tech Maestro)
          </h2>

          <p className="text-gray-700 text-[10px] sm:text-[11px] md:text-[12px] mb-4 leading-relaxed">
            Tech Maestro is a platform dedicated to building the next generation of tech champions through digital literacy, computing, and STEM training.
          </p>

          <div className="space-y-2 text-gray-800 text-[9px] sm:text-[10px] md:text-[11px]">
            <p>
              <strong>📍 Address:</strong> <br />
              65B Coker Road, Ilupeju, Lagos, Nigeria, 23401
            </p>

            <p>
              <strong>📞 Phone:</strong> <br />
              +234 704 106 8262
            </p>

            <p>
              <strong>📧 Email:</strong> <br />
              epoitworld@gmail.com
            </p>

            <p>
              <strong>🌐 Website:</strong> <br />
              <a
                href="https://epopace.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                epopace.com.ng
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-indigo-900">
            Send Us a Message
          </h2>

          {/* Formspree Form */}
          <form
            className="space-y-3 sm:space-y-4"
            action="https://formspree.io/f/mlgwbqlv"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-blue-700 placeholder-blue-300 text-[10px] sm:text-[11px] md:text-[12px]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-blue-700 placeholder-blue-300 text-[10px] sm:text-[11px] md:text-[12px]"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-blue-700 placeholder-blue-300 text-[10px] sm:text-[11px] md:text-[12px]"
              required
            />

            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-indigo-700 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-[11px] sm:text-[12px] md:text-[13px]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}