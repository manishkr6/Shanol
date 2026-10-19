import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, ArrowUp } from "lucide-react";
import { propertyData } from "../data/propertyData";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-5 z-40 flex flex-col items-end space-y-2 sm:space-y-2.5 pointer-events-none"
    >
      {/* 1. Back to Top Circle - Only shown when scrolled down */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blueberry-950/90 hover:bg-blueberry-900 text-gold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 border border-gold/40 cursor-pointer"
          aria-label="Scroll back to top of page"
          title="Back to Top"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      )}

      {/* 2. Direct Call Floating Circle */}
      <a
        href={`tel:${propertyData.phoneRaw}`}
        className="pointer-events-auto flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blueberry-700 hover:bg-blueberry-800 text-cream-100 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group border border-gold/40"
        aria-label={`Call Shanol Residency at ${propertyData.phone}`}
        title={`Call ${propertyData.phone}`}
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold group-hover:animate-bounce" />
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-xs font-bold text-cream-100">
          Call {propertyData.phone}
        </span>
      </a>

      {/* 3. WhatsApp Floating Circle */}
      <a
        href={propertyData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group border-2 border-white/20"
        aria-label="Chat with host on WhatsApp"
        title="WhatsApp Chat"
      >
        <MessageSquare className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-xs font-bold">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
