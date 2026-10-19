import React, { useState } from "react";
import { 
  Bed, 
  Maximize2, 
  Users, 
  Check, 
  Sparkles, 
  HeartHandshake, 
  CalendarCheck, 
  Info,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon
} from "lucide-react";
import { propertyData } from "../data/propertyData";
import LightboxModal from "../components/LightboxModal";

export default function Rooms({ onOpenEnquiry }) {
  const [expandedRoom, setExpandedRoom] = useState("deluxe-king");
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (images, index, title) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const toggleExpand = (id) => {
    setExpandedRoom((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      {/* 1. Header Banner */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-slate-950 text-cream-100 overflow-hidden">
        {/* Background Image - Deluxe King Room & Warm Himalayan Comfort */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/deluxe-king.jpg"
            alt="Shanol Residency Rooms & Sanctuaries"
            className="w-full h-full object-cover object-center"
          />
          {/* Neutral dark scrim - NO bluish tint, preserving real room wood & ambience */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/65 pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold bg-black/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-gold/50 backdrop-blur-md shadow-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Accommodations & Suites
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            Our Rooms & Sanctuaries
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Designed with natural parquet hardwood flooring, Himalayan hillside windows, and modern attached private bathrooms.
          </p>
        </div>
      </section>

      {/* 2. Main Rooms List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {propertyData.rooms.map((room, index) => {
            const isExpanded = expandedRoom === room.id;

            return (
              <div
                key={room.id}
                id={room.id}
                className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Image & Gallery Thumbnails */}
                  <div className="lg:col-span-6 relative flex flex-col justify-between bg-slate-900 overflow-hidden">
                    <div className="relative h-80 sm:h-96 w-full group overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                        onClick={() => openLightbox(room.gallery, 0, room.name)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"></div>

                      <button
                        onClick={() => openLightbox(room.gallery, 0, room.name)}
                        className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blueberry-950/90 hover:bg-blueberry-900 text-white text-xs font-semibold backdrop-blur-md border border-gold/40 shadow-md transition-all cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5 text-gold" />
                        <span>View Photo Gallery ({room.gallery.length})</span>
                      </button>

                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-blueberry-950/90 text-gold text-xs font-bold px-3 py-1.5 rounded-full border border-gold/40 shadow-md backdrop-blur-md">
                        {room.priceIndicative} <span className="text-[10px] text-cream-200 font-normal">/ night</span>
                      </div>
                    </div>

                    {/* Gallery Thumbnails Strip */}
                    <div className="grid grid-cols-4 gap-1 p-2 bg-slate-950">
                      {room.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => openLightbox(room.gallery, idx, room.name)}
                          className="h-16 rounded overflow-hidden cursor-pointer opacity-75 hover:opacity-100 transition-opacity relative group"
                        >
                          <img src={img} alt="thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Room Details */}
                  <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-blueberry-50 text-blueberry-800 text-[11px] font-bold uppercase tracking-wider">
                          Parquet Flooring
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                          Mountain View
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-blueberry-950">
                        {room.name}
                      </h2>

                      {/* Quick Meta Specs */}
                      <div className="flex flex-wrap items-center gap-4 py-3 mt-2 border-y border-cream-200/80 text-xs sm:text-sm text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <Bed className="w-4 h-4 text-blueberry" />
                          <strong>Bed:</strong> {room.bed}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Maximize2 className="w-4 h-4 text-blueberry" />
                          <strong>Size:</strong> {room.size}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-blueberry" />
                          <strong>Capacity:</strong> {room.capacity}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                        {room.description}
                      </p>

                      {/* Features List */}
                      <div className="mt-6">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                          Key Room Amenities:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {(isExpanded ? room.features : room.features.slice(0, 6)).map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {room.features.length > 6 && (
                          <button
                            onClick={() => toggleExpand(room.id)}
                            className="mt-3 text-xs font-bold text-blueberry-700 hover:text-blueberry-900 inline-flex items-center gap-1"
                          >
                            <span>{isExpanded ? "Show fewer features" : `Show all ${room.features.length} features`}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-500 block">Indicative Rate:</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-serif text-2xl font-bold text-blueberry-950">
                            {room.priceIndicative}
                          </span>
                          <span className="text-xs text-slate-500">/ night</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Exact rate varies by season & dates</span>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          onClick={() => onOpenEnquiry && onOpenEnquiry(room.name)}
                          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blueberry-700 to-blueberry-900 text-cream-100 hover:from-blueberry-800 hover:to-blueberry-950 shadow-md transition-all border border-gold/40 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <CalendarCheck className="w-4 h-4 text-gold" />
                          <span>Enquire This Room</span>
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 3. Extra Bed & Pet Policies Card */}
      <section className="py-12 bg-white border-t border-cream-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-cream-50 border border-cream-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blueberry-100 text-blueberry flex items-center justify-center">
                <Info className="w-5 h-5 text-blueberry" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-blueberry-950">
                  Extra Bed & Pet Information
                </h3>
                <p className="text-xs text-slate-600">
                  Clear, upfront policies as noted in our public listings
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-white border border-cream-200">
                <h4 className="font-bold text-blueberry-900 text-sm mb-1">
                  Extra Bed Policy
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extra beds can be accommodated in all room categories upon request at <strong>₹500 per person per night</strong> (for children aged 0-12 and adult guests 13+). Cots/cribs are not available.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-cream-200">
                <h4 className="font-bold text-blueberry-900 text-sm mb-1">
                  Pet-Friendly Stay
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pets are allowed upon prior request (charges may apply depending on size). Clean pet bowls and a pet-welcoming environment are prepared for your arrival.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 pt-2 text-center">
              Please note: The property features stairs only (no elevator), so upper floors are not step-free.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        title={lightboxTitle}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)
        }
        onSelect={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
