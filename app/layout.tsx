import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "TECH Maestro Academy",
  description: "Official website of TECH Maestro Academy",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col overflow-x-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
