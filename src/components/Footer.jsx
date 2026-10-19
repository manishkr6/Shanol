import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageSquare, Star, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";
import { propertyData } from "../data/propertyData";
import { districtsData } from "../data/districtsData";

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-blueberry-950 text-cream-100 border-t border-blueberry-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blueberry-800/50">
          
          {/* Column 1: Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blueberry-900 border border-gold/40 flex items-center justify-center shadow-glow">
                <span className="font-serif text-xl font-bold text-gold">S</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-cream-50 leading-tight">
                  Shanol Residency
                </h3>
                <p className="text-xs text-gold font-medium tracking-wider">
                  शानोल रेजिडेंसी · Gangtok
                </p>
              </div>
            </div>

            <p className="text-sm text-cream-200/80 leading-relaxed">
              A family-run boutique guesthouse nestled in serene Arithang, Gangtok. 
              Cherished for our sparkling clean rooms with parquet floors, fresh homemade meals, and heartfelt Sikkim travel guidance.
            </p>

            {/* Badges Box */}
            <div className="p-3.5 rounded-xl bg-blueberry-900/60 border border-blueberry-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-cream-200 font-medium">Booking.com Score</span>
                <span className="px-2 py-0.5 rounded bg-blueberry-600 text-gold font-bold">9.7 / 10 Exceptional</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-cream-200 font-medium">Google Maps</span>
                <span className="px-2 py-0.5 rounded bg-blueberry-800 text-amber-300 font-bold">★ 4.8 / 5.0 (210+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-gold tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-cream-200">
              <li>
                <Link to="/" className="hover:text-gold transition-colors flex items-center">
                  <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors flex items-center">
                  <span>About Our Family & Story</span>
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-gold transition-colors flex items-center">
                  <span>Rooms & Amenities</span>
                </Link>
              </li>
              <li>
                <Link to="/travel" className="hover:text-gold transition-colors flex items-center">
                  <span>Sikkim Travel & District Guides</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors flex items-center">
                  <span>Contact & Location Map</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="text-gold font-semibold hover:underline flex items-center gap-1 mt-2"
                >
                  <span>Direct Stay Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sikkim District Guides */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-gold tracking-wide">
              Sikkim Districts
            </h4>
            <p className="text-xs text-cream-200/70 mb-2">
              Personal itineraries guided by our host tour desk:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-cream-200">
              {districtsData.map((d) => (
                <li key={d.id}>
                  <Link
                    to={`/travel#${d.slug}`}
                    className="hover:text-gold transition-colors block p-1.5 rounded bg-blueberry-900/40 hover:bg-blueberry-900 border border-blueberry-800/40"
                  >
                    {d.name.replace(" District", "")}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-xs text-cream-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Nathula & North Sikkim permit assistance provided.</span>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-gold tracking-wide">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-sm text-cream-200">
              <a
                href={propertyData.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2.5 hover:text-gold transition-colors group"
                title="Open Shanol Residency on Google Maps"
              >
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <span>
                  {propertyData.address.street}, {propertyData.address.area}, Gangtok, Sikkim {propertyData.address.pincode}
                </span>
              </a>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${propertyData.phoneRaw}`} className="hover:text-gold transition-colors font-medium">
                  {propertyData.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={propertyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Chat Available
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${propertyData.email}`} className="hover:text-gold transition-colors text-xs">
                  {propertyData.email}
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-cream-300">
                  <span className="font-bold text-cream-100">Plus Code:</span> {propertyData.address.plusCode}
                </p>
                <p className="text-xs text-cream-300 mt-1">
                  <span className="font-bold text-cream-100">Check-In:</span> 24 Hours · <span className="font-bold text-cream-100">Check-Out:</span> 10:00 AM
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300 gap-4">
          <p>
            © {new Date().getFullYear()} Shanol Residency (शानोल रेजिडेंसी), Gangtok. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-cream-200">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> for authentic Sikkim hospitality
            </span>
            <span className="text-blueberry-400">·</span>
            <span>Web3Forms Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
