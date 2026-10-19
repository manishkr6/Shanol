import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  MapPin, 
  Compass, 
  ShieldCheck, 
  Calendar, 
  Mountain, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Car,
  Clock,
  ExternalLink
} from "lucide-react";
import { districtsData } from "../data/districtsData";
import { propertyData } from "../data/propertyData";

export default function Travel({ onOpenEnquiry }) {
  const location = useLocation();
  const [selectedDistrict, setSelectedDistrict] = useState(districtsData[0]);

  // Handle hash navigation to jump to a district
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace("#", "");
      const found = districtsData.find((d) => d.slug === slug);
      if (found) {
        setSelectedDistrict(found);
      }
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      {/* 1. Hero Header */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-slate-950 text-cream-100 overflow-hidden">
        {/* Background Image - Sikkim Himalayan Landscape & Kanchenjunga */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/travel/kanchenjunga.png"
            alt="Sikkim Himalayan Landscape & Mt. Kanchenjunga"
            className="w-full h-full object-cover object-center"
          />
          {/* Neutral dark scrim - NO heavy bluish tint, preserving natural snow mountain peaks */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/65 pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold bg-black/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-gold/50 backdrop-blur-md shadow-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Local Tourism & District Explorer
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            Discover Sikkim with Us
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Your journey begins at Shanol Residency. Explore Gangtok’s cultural landmarks and all six magnificent districts of Sikkim with authentic insider guidance.
          </p>
        </div>
      </section>

      {/* 2. Host Tour Desk Banner */}
      <section className="py-8 bg-blueberry-900 text-cream-100 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Personal Sikkim Tour Guidance by Co-Host Yashaswi
              </h3>
              <p className="text-xs text-cream-200">
                Permits for Nathula Pass & North Sikkim · Trustworthy private cab drivers · Luggage holding
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry("Tour & Travel Advice")}
            className="px-6 py-2.5 rounded-lg font-bold text-xs bg-gold text-blueberry-950 hover:bg-gold-light transition-colors shrink-0 shadow-md"
          >
            Ask for Travel Guidance
          </button>
        </div>
      </section>

      {/* 3. District Explorer Tabs */}
      <section className="py-16 bg-white" id="districts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blueberry-700 bg-blueberry-50 px-3 py-1 rounded-md">
              Sikkim's 6 Districts
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blueberry-950 mt-2">
              Explore the Six Realms of Sikkim
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select a district below to discover signature attractions, altitude, permits, and day-trip feasibility from Shanol Residency.
            </p>
          </div>

          {/* District Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
            {districtsData.map((district) => {
              const isSelected = selectedDistrict.id === district.id;

              return (
                <button
                  key={district.id}
                  onClick={() => setSelectedDistrict(district)}
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-blueberry text-cream-100 shadow-md border border-gold/40 scale-105"
                      : "bg-cream-100 text-slate-700 hover:bg-cream-200 border border-cream-200"
                  }`}
                >
                  {district.name}
                </button>
              );
            })}
          </div>

          {/* Selected District Showcase Card */}
          <div className="bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 shadow-xl transition-all duration-500 animate-fadeIn">
            {/* Top Hero Banner */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <img
                src={selectedDistrict.heroImage}
                alt={selectedDistrict.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blueberry-950/95 via-blueberry-950/50 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-cream-100 z-10">
                <div className="p-3.5 sm:p-5 rounded-2xl bg-blueberry-950/90 backdrop-blur-md border border-gold/40 shadow-xl max-w-2xl">
                  <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold bg-blueberry-900/90 px-3 py-1 rounded-md border border-gold/40 mb-1.5">
                    {selectedDistrict.distanceFromShanol}
                  </span>
                  <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
                    {selectedDistrict.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200 mt-1 font-light leading-relaxed">
                    {selectedDistrict.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-cream-200 shadow-2xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    District Headquarters
                  </span>
                  <div className="font-serif text-lg font-bold text-blueberry-950 mt-1">
                    {selectedDistrict.headquarters}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-cream-200 shadow-2xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Altitude Range
                  </span>
                  <div className="font-serif text-lg font-bold text-blueberry-950 mt-1">
                    {selectedDistrict.altitude}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-cream-200 shadow-2xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Ideal Season
                  </span>
                  <div className="font-serif text-lg font-bold text-blueberry-950 mt-1">
                    {selectedDistrict.bestTime}
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-bold text-blueberry-950">
                  About {selectedDistrict.name}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedDistrict.summary}
                </p>
              </div>

              {/* Highlights Gallery */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-blueberry-950">
                  Top Attractions in {selectedDistrict.name}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedDistrict.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden bg-white border border-cream-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="h-44 overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                          {item.tag}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h5 className="font-bold text-sm text-blueberry-950">
                            {item.title}
                          </h5>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Host Tips & Permit Info Callout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-blueberry-50 border border-blueberry-200 text-xs sm:text-sm text-blueberry-950">
                  <div className="font-bold flex items-center gap-1.5 text-blueberry-800 mb-1">
                    <Compass className="w-4 h-4 text-blueberry-600" />
                    <span>Host Tip from Yashaswi:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-xs">
                    {selectedDistrict.hostTip}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
                  <div className="font-bold flex items-center gap-1.5 text-amber-800 mb-1">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Permit Requirements:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-xs">
                    {selectedDistrict.permitRequired}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Gangtok & Arithang Local Spots Table */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md">
              Near Shanol Residency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blueberry-950 mt-2">
              Gangtok Points of Interest & Distances
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Accurate distances from our front gate in Arithang to popular local spots.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-cream-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-blueberry-950 text-cream-100 font-serif border-b border-blueberry-800">
                    <th className="py-4 px-6 font-bold">Attraction / Place</th>
                    <th className="py-4 px-6 font-bold">Category</th>
                    <th className="py-4 px-6 font-bold">Distance from Shanol</th>
                    <th className="py-4 px-6 font-bold">Est. Travel Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200/80 text-slate-700">
                  {propertyData.nearbyPlaces.map((item, idx) => (
                    <tr key={idx} className="hover:bg-cream-50/60 transition-colors">
                      <td className="py-3.5 px-6 font-semibold text-blueberry-950">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-6 text-xs text-slate-500">
                        {item.type}
                      </td>
                      <td className="py-3.5 px-6 font-bold text-blueberry-700">
                        {item.distance}
                      </td>
                      <td className="py-3.5 px-6 text-xs text-slate-600">
                        {item.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry("Custom Sikkim Tour Plan")}
              className="px-8 py-3.5 rounded-xl bg-blueberry text-cream-100 font-bold text-sm shadow-md hover:bg-blueberry-800 transition-colors border border-gold/40"
            >
              Have Us Customize Your Sikkim Sightseeing Schedule
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
