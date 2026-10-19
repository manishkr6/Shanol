import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, CalendarCheck, MapPin } from "lucide-react";
import { propertyData } from "../data/propertyData";

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Sikkim Travel", path: "/travel" },
    { name: "Contact", path: "/contact" },
  ];

  const isCurrent = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Banner Notice */}
      <header className="bg-blueberry-950 text-cream-100 text-xs py-2 px-4 border-b border-blueberry-800/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-cream-200">
              <MapPin className="w-3.5 h-3.5 mr-1 text-gold" />
              Lower Arithang, Gangtok (Near MG Road) · Sikkim 737101
            </span>
            <span className="text-blueberry-300">|</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Booking.com Rated 9.7/10 · Exceptional Hospitality
            </span>
          </div>
          <div className="flex items-center space-x-4 text-cream-100">
            <a
              href={`tel:${propertyData.phoneRaw}`}
              className="flex items-center hover:text-gold transition-colors font-medium"
            >
              <Phone className="w-3 h-3 mr-1 text-gold" />
              {propertyData.phone}
            </a>
            <span className="text-blueberry-300">|</span>
            <span className="text-cream-200 text-xs">24-Hr Front Desk</span>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav-scrolled text-cream-100 shadow-soft-xl py-3"
            : "glass-nav text-blueberry-950 shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 group">
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 border shrink-0 ${
                  scrolled
                    ? "bg-blueberry-900 border-gold/50 shadow-glow"
                    : "bg-blueberry border-cream-300 shadow-md"
                }`}
              >
                <span className="font-serif text-xl sm:text-2xl font-bold text-gold">S</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-none ${
                    scrolled ? "text-cream-50" : "text-blueberry-900"
                  }`}
                >
                  Shanol Residency
                </span>
                <span
                  className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase mt-0.5 ${
                    scrolled ? "text-gold" : "text-blueberry-600"
                  }`}
                >
                  शानोल रेजिडेंसी · Gangtok
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isCurrent(link.path)
                      ? scrolled
                        ? "text-gold bg-blueberry-850/60 font-bold"
                        : "text-blueberry-900 bg-blueberry-100/60 font-bold"
                      : scrolled
                      ? "text-cream-100 hover:text-gold hover:bg-blueberry-900/40"
                      : "text-slate-700 hover:text-blueberry-700 hover:bg-cream-100/70"
                  }`}
                >
                  {link.name}
                  {isCurrent(link.path) && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gold rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`tel:${propertyData.phoneRaw}`}
                className={`p-2.5 rounded-full border transition-all ${
                  scrolled
                    ? "border-blueberry-700 text-gold hover:bg-blueberry-900"
                    : "border-blueberry-200 text-blueberry-800 hover:bg-cream-200/50"
                }`}
                title="Call Shanol Residency"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-blueberry-600 to-blueberry-800 text-cream-100 hover:from-blueberry-700 hover:to-blueberry-900 shadow-md hover:shadow-lg transition-all duration-200 border border-gold/40 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 mr-2 text-gold" />
                Book / Enquire
              </button>
            </div>

            {/* Mobile & Tablet Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="px-2.5 py-1.5 text-xs font-bold bg-blueberry text-cream-100 rounded-lg border border-gold/40 cursor-pointer"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg cursor-pointer ${
                  scrolled ? "text-cream-100" : "text-blueberry-900"
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-nav-scrolled text-cream-100 px-5 pt-3 pb-6 border-t border-blueberry-800/80 mt-2 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isCurrent(link.path)
                    ? "bg-blueberry-800 text-gold font-bold"
                    : "text-cream-100 hover:bg-blueberry-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-blueberry-800 flex flex-col gap-2">
              <a
                href={`tel:${propertyData.phoneRaw}`}
                className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-blueberry-800 text-cream-100 font-semibold text-sm border border-blueberry-700"
              >
                <Phone className="w-4 h-4 mr-2 text-gold" />
                Call {propertyData.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry && onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-gold-dark to-gold text-blueberry-950 font-bold text-sm shadow-md"
              >
                Book / Enquire Room
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
