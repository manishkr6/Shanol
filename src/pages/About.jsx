import React from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  ShieldCheck, 
  UtensilsCrossed, 
  Compass, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  Car, 
  Wifi, 
  Coffee, 
  Lock, 
  ArrowRight,
  Smile
} from "lucide-react";
import { propertyData } from "../data/propertyData";

export default function About({ onOpenEnquiry }) {
  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      {/* 1. Header Hero */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-slate-950 text-cream-100 overflow-hidden">
        {/* Background Image - Host Lounge & Warm Homestay Ambience */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/host-lounge.jpg"
            alt="Shanol Residency Host Lounge & Hospitality"
            className="w-full h-full object-cover object-center"
          />
          {/* Neutral dark scrim - NO bluish tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/65 pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold bg-black/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-gold/50 backdrop-blur-md shadow-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            About Our Family & Guesthouse
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            Rooted in Himalayan Warmth
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-cream-100/90 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm">
            Shanol Residency (शानोल रेजिडेंसी) was founded on a simple philosophy: treating every guest who steps into our Gangtok home as family.
          </p>
        </div>
      </section>

      {/* 2. Host Story & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blueberry-600 bg-blueberry-50 px-3 py-1 rounded-md">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blueberry-950 leading-tight">
                Hospitality that Lingers in Your Memory Long After You Leave
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Nestled along the quiet hill slopes of <strong>Lower Arithang</strong> in Gangtok, Shanol Residency is proudly owner-operated. Unlike chain hotels with impersonal service, our host family and co-host <strong>Yashaswi</strong> remain intimately involved in every guest’s experience.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                When guests are unwell, we prepare special soothing meals. When travelers dream of exploring remote corners of North Sikkim or crossing into Nathula Pass, we sit down with them at the tour desk, map out realistic routes, and handle permits without stressful markups.
              </p>

              {/* Four Pillar Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="flex items-center space-x-2 text-blueberry-800 font-bold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Sparkling Cleanliness (9.8/10)</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Polished parquet floors, sanitized bathrooms, and crisp fresh linens inspected daily.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="flex items-center space-x-2 text-blueberry-800 font-bold text-sm mb-1">
                    <UtensilsCrossed className="w-4 h-4 text-blueberry" />
                    <span>Nourishing Homemade Food</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Cooked fresh on order: local Sikkimese momos, thukpa, wholesome Indian curries, and vegetarian breakfasts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="flex items-center space-x-2 text-blueberry-800 font-bold text-sm mb-1">
                    <Compass className="w-4 h-4 text-gold" />
                    <span>Personal Tour & Permit Guidance</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Direct travel advice from Yashaswi, permit documentation, and trustworthy driver arrangements.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="flex items-center space-x-2 text-blueberry-800 font-bold text-sm mb-1">
                    <Smile className="w-4 h-4 text-rose-500" />
                    <span>Peaceful Mountain Atmosphere</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Arithang provides calm nights away from market noise, while remaining walking distance to MG Marg.
                  </p>
                </div>
              </div>
            </div>

            {/* Images Collage */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/dining.jpg"
                  alt="Homely Dining at Shanol Residency with Himalayan views"
                  className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 rounded-2xl bg-blueberry-950 text-cream-100 space-y-2 border border-gold/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                    Guest Verified
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    Booking.com 9.7
                  </span>
                </div>
                <p className="text-sm italic font-serif text-cream-100">
                  "Four memorable nights in Gangtok. Clean, comfortable and refined, like a boutique stay; a warm host family."
                </p>
                <span className="text-xs text-cream-300 font-medium block">
                  — Rosemary, Australia
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Comprehensive Amenities & Services */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blueberry-600 bg-blueberry-100 px-3 py-1 rounded-md">
              Services & Conveniences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blueberry-950 mt-3">
              Full Property Amenities
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Every amenity detailed in our official listings, designed for seamless mountain comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Category 1: Dining */}
            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-blueberry-900">
                <div className="w-10 h-10 rounded-xl bg-blueberry-50 flex items-center justify-center text-blueberry-700">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold">Dining & Cuisine</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Family-friendly on-site restaurant and lounge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Authentic Chinese, Indian, Nepalese & local Sikkimese food</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Breakfast-to-go & packed lunches for full-day excursions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Vegetarian breakfast & special diet meals on advance request</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Room service & electric tea kettle in every guest room</span>
                </li>
              </ul>
            </div>

            {/* Category 2: Front Desk & Assistance */}
            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-blueberry-900">
                <div className="w-10 h-10 rounded-xl bg-blueberry-50 flex items-center justify-center text-blueberry-700">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold">Front Desk & Concierge</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>24-Hour front desk & private check-in / check-out</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dedicated Tour Desk & personal itinerary guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Daily housekeeping and morning wake-up service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Luggage storage while on overnight North Sikkim trips</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Official GST invoice provided for business travelers</span>
                </li>
              </ul>
            </div>

            {/* Category 3: Connectivity & Transport */}
            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-blueberry-900">
                <div className="w-10 h-10 rounded-xl bg-blueberry-50 flex items-center justify-center text-blueberry-700">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold">Transport & Parking</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Free private on-site parking (advance reservation advised)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>High-speed Free WiFi throughout the property (rated 8.3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Paid airport & railway shuttle service (Pakyong / Bagdogra / NJP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Paid laundry, dry cleaning and ironing service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Paid grocery delivery service upon request</span>
                </li>
              </ul>
            </div>

            {/* Category 4: Safety & Security */}
            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-blueberry-900">
                <div className="w-10 h-10 rounded-xl bg-blueberry-50 flex items-center justify-center text-blueberry-700">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold">Safety & Security</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>24-Hour security personnel on premises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>CCTV outside property and throughout common areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fire extinguishers placed on all floors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Secure private key card / key access to rooms</span>
                </li>
              </ul>
            </div>

            {/* Category 5: Room Amenities */}
            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-blueberry-900">
                <div className="w-10 h-10 rounded-xl bg-blueberry-50 flex items-center justify-center text-blueberry-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold">In-Room Comforts</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Polished parquet hardwood floors in all bedrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Panoramic windows overlooking hills and pine trees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Private attached bath with hot water shower & toiletries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Flat-screen TV, work desk, and room heating</span>
                </li>
              </ul>
            </div>

            {/* Category 6: House Policies */}
            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-blueberry-900">
                <div className="w-10 h-10 rounded-xl bg-blueberry-50 flex items-center justify-center text-blueberry-700">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold">House Policies</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Check-In:</strong> 24 Hours (recommended from 12 PM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Check-Out:</strong> Until 10:00 AM</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Children:</strong> All ages warmly welcomed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pets:</strong> Allowed on request (charges may apply, pet bowls provided)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Extra Beds:</strong> ₹500/night per guest (on request)</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blueberry-700 to-blueberry-900 text-cream-100 font-bold text-sm shadow-md hover:shadow-lg transition-all border border-gold/40"
            >
              Ask Host a Question or Check Availability
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
