import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Wifi, 
  UtensilsCrossed, 
  Car, 
  Clock, 
  Mountain, 
  HeartHandshake, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  PhoneCall,
  CalendarCheck,
  Award
} from "lucide-react";
import { propertyData } from "../data/propertyData";

export default function Home({ onOpenEnquiry }) {
  // Testimonial auto-slide
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = propertyData.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Auto-sliding Hero background images
  const heroSlides = [
    {
      image: "/images/hero.jpg",
      tag: "Himalayan Vistas",
      caption: "Panoramic Kanchenjunga mountain view from Shanol Residency",
    },
    {
      image: "/images/deluxe-king.jpg",
      tag: "Luxury Accommodations",
      caption: "Spacious Deluxe King rooms with parquet hardwood floors",
    },
    {
      image: "/images/dining.jpg",
      tag: "Homely Dining",
      caption: "Freshly cooked local, Indian & Sikkimese meals overlooking the valley",
    },
    {
      image: "/images/host-lounge.jpg",
      tag: "Host Hospitality",
      caption: "Cozy reception lounge with Sikkim travel guidance & friendly cat",
    },
    {
      image: "/images/deluxe-queen.jpg",
      tag: "Tranquil Sanctuaries",
      caption: "Quiet comfort and pine forest mountain views in Arithang",
    },
  ];

  // Extended slides with first slide cloned at end for infinite smooth sliding
  const displaySlides = [...heroSlides, heroSlides[0]];
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  // Auto slide effect
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setWithTransition(true);
      setCurrentHeroSlide((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, []);

  const handleNextSlide = () => {
    setWithTransition(true);
    setCurrentHeroSlide((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    setWithTransition(true);
    setCurrentHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleTransitionEnd = () => {
    if (currentHeroSlide === heroSlides.length) {
      setWithTransition(false);
      setCurrentHeroSlide(0);
    }
  };

  const activeIndex = currentHeroSlide >= heroSlides.length ? 0 : currentHeroSlide;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Auto-sliding Background Images Track (Smooth horizontal slide - NO zoom, NO blue tint) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className={`flex h-full w-full ${
              withTransition ? "transition-transform duration-1000 ease-in-out" : ""
            }`}
            style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {displaySlides.map((slide, idx) => (
              <div key={idx} className="w-full h-full shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full object-cover object-center select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Neutral photographic dark scrim - preserves true vibrant image colors */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 text-center text-cream-100 w-full">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 border border-gold/50 backdrop-blur-md mb-3.5 sm:mb-6 shadow-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[11px] sm:text-sm font-semibold text-gold tracking-wide uppercase">
              Boutique Guesthouse & Homestay · Arithang, Gangtok
            </span>
          </div>

          {/* Main Headings */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-3 sm:mb-6 leading-tight drop-shadow-md">
            Quiet Himalayan Serenity, <br className="hidden sm:inline" />
            <span className="text-gold-gradient font-serif italic">Warm Homely Care.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-base lg:text-lg text-cream-100/90 mb-6 sm:mb-10 leading-relaxed font-light drop-shadow-sm">
            Welcome to <strong className="font-semibold text-white">Shanol Residency (शानोल रेजिडेंसी)</strong>.
            Exceptional comfort with wooden parquet rooms, homemade fresh meals, and personalized Sikkim travel guidance — peacefully situated near MG Road.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10 w-full max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry("Deluxe King Room")}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-gold-dark via-gold to-gold-light text-blueberry-950 hover:opacity-95 shadow-lg hover:shadow-glow transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer border border-gold-light"
            >
              <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blueberry-950" />
              <span>Book / Enquire Stay</span>
            </button>

            <Link
              to="/rooms"
              className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-4 rounded-xl font-semibold text-sm sm:text-base bg-black/50 text-cream-100 hover:bg-black/70 border border-cream-200/40 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          {/* Reputation Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto pt-4 sm:pt-6 border-t border-white/20">
            <div className="p-2 sm:p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 hover:border-gold/40 transition-colors shadow-lg text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold font-serif">9.7 / 10</div>
              <div className="text-[11px] sm:text-xs text-cream-200 font-medium mt-0.5 sm:mt-1">Booking.com</div>
              <div className="text-[9px] sm:text-[10px] text-cream-300">Cleanliness Rated 9.8</div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 hover:border-gold/40 transition-colors shadow-lg text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-300 font-serif">4.8 ★</div>
              <div className="text-[11px] sm:text-xs text-cream-200 font-medium mt-0.5 sm:mt-1">Google Maps</div>
              <div className="text-[9px] sm:text-[10px] text-cream-300">210+ Verified Guests</div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 hover:border-gold/40 transition-colors shadow-lg text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cream-100 font-serif">5 / 5 ★</div>
              <div className="text-[11px] sm:text-xs text-cream-200 font-medium mt-0.5 sm:mt-1">Tripadvisor</div>
              <div className="text-[9px] sm:text-[10px] text-cream-300">100% Recommended</div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 hover:border-gold/40 transition-colors shadow-lg text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400 font-serif">8.9</div>
              <div className="text-[11px] sm:text-xs text-cream-200 font-medium mt-0.5 sm:mt-1">Location Rating</div>
              <div className="text-[9px] sm:text-[10px] text-cream-300">Quiet yet near MG Marg</div>
            </div>
          </div>

          {/* Hero Slide Indicator Bar - Integrated into flow below stats */}
          <div className="mt-5 sm:mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-black/60 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 shadow-xl">
              <button
                onClick={handlePrevSlide}
                className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setWithTransition(true);
                      setCurrentHeroSlide(idx);
                    }}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "w-6 sm:w-7 bg-gold"
                        : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextSlide}
                className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <span className="text-[10px] sm:text-[11px] font-semibold text-cream-200 border-l border-white/20 pl-2 sm:pl-2.5 hidden sm:inline">
                {heroSlides[activeIndex].tag} ({activeIndex + 1}/{heroSlides.length})
              </span>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-8 bg-cream-50" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      {/* 2. SHORT INTRO & VALUE PROPOSITION */}
      <section className="py-12 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blueberry-100 text-blueberry-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blueberry" />
                The Shanol Experience
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-blueberry-950 leading-tight">
                A Family-Run Haven Where You Feel Like an Honoured Guest
              </h2>

              <p className="text-sm sm:text-lg text-slate-700 leading-relaxed">
                Tucked into the hillside of <strong>Arithang</strong>, Shanol Residency is where you step away from generic commercial hotels into genuine Sikkimese hospitality. Managed personally by our host family, every detail is tuned for tranquility: warm parquet hardwood flooring, pristine linen, and hot home-cooked meals tailored to your palate.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="flex items-start space-x-3 p-3 sm:p-3.5 rounded-xl bg-white shadow-sm border border-cream-200">
                  <div className="w-8 h-8 rounded-lg bg-blueberry-100 text-blueberry flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5 text-blueberry" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-blueberry-900">9.8 Cleanliness Score</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Spotless bathrooms, fresh towels, sanitized hardwood floors daily.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 sm:p-3.5 rounded-xl bg-white shadow-sm border border-cream-200">
                  <div className="w-8 h-8 rounded-lg bg-cream-200 text-blueberry flex items-center justify-center shrink-0 mt-0.5">
                    <UtensilsCrossed className="w-5 h-5 text-blueberry" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-blueberry-900">Homely Fresh Meals</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Delicious Sikkimese, Indian, Chinese and Nepalese home cooking.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 sm:p-3.5 rounded-xl bg-white shadow-sm border border-cream-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-blueberry-900">Personal Travel Guidance</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Yashaswi and the host team organize permits, cabs, and hidden gems.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 sm:p-3.5 rounded-xl bg-white shadow-sm border border-cream-200">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-blueberry-900">Arithang Location</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Peaceful nights, yet only a quick stroll to bustling MG Marg.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-blueberry-700 hover:text-blueberry-900 group"
                >
                  <span>Read our host story and guest values</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="/images/host-lounge.jpg"
                  alt="Host lounge and tour guidance desk at Shanol Residency"
                  className="w-full h-[280px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blueberry-950/95 via-blueberry-950/40 to-transparent pointer-events-none"></div>
                
                {/* Image Bottom Caption */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                  <div className="p-3 sm:p-4 rounded-xl bg-blueberry-950/90 backdrop-blur-md border border-gold/40 shadow-xl text-white">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold">The Lounge & Tour Desk</span>
                    </div>
                    <p className="text-[11px] sm:text-sm font-medium text-cream-100 leading-snug">
                      Plan your Sikkim journey over hot Darjeeling tea with host Yashaswi & our friendly house cat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Verified Review Badge */}
              <div className="mt-3 sm:mt-0 sm:absolute sm:-top-5 sm:-left-5 lg:-left-7 z-20 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-cream-200 max-w-xs transition-transform hover:scale-105">
                <div className="flex items-center space-x-1 text-gold mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "Feels like home away from home. Clean, cosy, neat and well decorated."
                </p>
                <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-100 text-[10px]">
                  <span className="font-bold text-blueberry-900">
                    — Anurag, Verified Guest
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">5.0 ★</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ROOM HIGHLIGHTS */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blueberry-600 bg-blueberry-50 px-3 py-1 rounded-md">
              Peaceful Accommodations
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-blueberry-950 mt-2 sm:mt-3">
              Crafted for Rest & Himalayan Solitude
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-2 sm:mt-4 leading-relaxed">
              Every room at Shanol Residency features warm parquet hardwood flooring, private attached bathroom, work desk, and scenic mountain views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {propertyData.rooms.map((room) => (
              <div
                key={room.id}
                className="group rounded-2xl overflow-hidden bg-cream-50/70 border border-cream-200 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-blueberry-950/90 text-gold text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border border-gold/40 shadow-md">
                    {room.priceIndicative} <span className="text-[10px] text-cream-200 font-normal">/ night</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-blueberry-950/85 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-md border border-white/20 shadow-md">
                    {room.bed}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-blueberry-950 group-hover:text-blueberry-700 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 sm:mt-2 line-clamp-3 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-cream-200/80 space-y-1.5">
                      {room.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 mt-4 border-t border-cream-200/60 flex items-center justify-between">
                    <Link
                      to="/rooms"
                      className="text-xs font-bold text-blueberry-800 hover:text-blueberry-950 hover:underline"
                    >
                      View Details & Photos
                    </Link>
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(room.name)}
                      className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-bold bg-blueberry text-cream-100 hover:bg-blueberry-800 transition-colors shadow-sm cursor-pointer"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/rooms"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-blueberry-900 text-cream-100 hover:bg-blueberry-950 font-semibold text-xs sm:text-sm transition-all shadow-md gap-2"
            >
              <span>Compare All Rooms & Extra Bed Options</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. AMENITIES STRIP (Screenshot 1: Comfort & Hospitality) */}
      <section className="py-12 sm:py-20 bg-blueberry-950 text-cream-100 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blueberry-800/30 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold bg-blueberry-900/80 px-3 py-1 rounded-md border border-gold/30">
                Comfort & Hospitality
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3">
                Everything for an Unhurried Stay
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-cream-200/80 max-w-md mt-2 sm:mt-4 md:mt-0 leading-relaxed">
              From high-speed WiFi rated 8.3 to home-style dining and a 24-hour attentive front desk.
            </p>
          </div>

          {/* Responsive Amenities Grid: Clean horizontal card on mobile, vertical card on tablets & desktops */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {propertyData.amenitiesHighlights.map((amenity) => {
              const IconComponent = {
                Wifi,
                UtensilsCrossed,
                Mountain,
                Car,
                Compass: Mountain,
                Clock,
                Sparkles,
                HeartHandshake,
              }[amenity.icon] || Sparkles;

              return (
                <div
                  key={amenity.id}
                  className="p-3.5 sm:p-5 rounded-2xl bg-blueberry-900/60 border border-blueberry-800/80 hover:border-gold/50 hover:bg-blueberry-900/90 transition-all duration-300 flex sm:flex-col items-start gap-3 sm:gap-0 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blueberry-800 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform sm:mb-3 shadow-glow shrink-0">
                    <IconComponent className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-cream-50 leading-snug">
                      {amenity.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-cream-200/70 mt-1 leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. GUEST TESTIMONIALS CAROUSEL (Screenshot 2: Direct Guest Feedback) */}
      <section className="py-12 sm:py-20 bg-cream-100/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blueberry-700 bg-cream-200 px-3 py-1 rounded-md">
              Direct Guest Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-blueberry-950 mt-2 sm:mt-3">
              Words from Travelers Across the Globe
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 sm:mt-2">
              Rated 9.7 / 10 on Booking.com & 4.8 / 5 on Google Maps
            </p>
          </div>

          {/* Carousel Card with balanced padding on mobile */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 shadow-xl border border-cream-200 transition-all">
            <div className="flex items-center space-x-1 text-gold mb-3 sm:mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold" />
              ))}
            </div>

            <blockquote className="font-serif text-base sm:text-xl lg:text-2xl text-slate-800 italic leading-relaxed min-h-[60px] sm:min-h-[80px]">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-cream-200 flex items-center justify-between gap-3">
              <div className="min-w-0 pr-2">
                <h4 className="font-bold text-blueberry-950 text-sm sm:text-base truncate">
                  {testimonials[currentTestimonial].guest}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                  {testimonials[currentTestimonial].country} · {testimonials[currentTestimonial].stayType}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
                <button
                  onClick={() =>
                    setCurrentTestimonial(
                      (prev) => (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="p-2 sm:p-2.5 rounded-full bg-cream-100 hover:bg-blueberry-100 text-blueberry-900 transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-xs font-bold text-slate-400 px-1 sm:px-2">
                  {currentTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                  }
                  className="p-2 sm:p-2.5 rounded-full bg-cream-100 hover:bg-blueberry-100 text-blueberry-900 transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. NEARBY PLACES TEASER (Screenshot 3: Close to the Action, Far from the Clatter) */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                Arithang Neighborhood
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-blueberry-950">
                Close to the Action, Far from the Clatter
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Arithang offers travelers the ideal balance: a peaceful hillside retreat away from traffic horn noise, yet with cozy cafes, local eateries, and pedestrianised MG Market just a short walk or quick taxi ride away.
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl bg-cream-50 border border-cream-200 space-y-1 sm:space-y-2">
                <div className="flex items-center text-xs sm:text-sm font-semibold text-blueberry-900">
                  <Award className="w-4 h-4 mr-2 text-gold" />
                  Location Rating: 8.9 / 10
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600">
                  Couples & families particularly praise our quiet setting close to central Gangtok attractions.
                </p>
              </div>

              <Link
                to="/travel"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-blueberry-700 hover:text-blueberry-950 group"
              >
                <span>Explore all 6 Sikkim District Guides</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Distances Table */}
            <div className="lg:col-span-7 bg-cream-50/80 rounded-2xl p-4 sm:p-6 lg:p-8 border border-cream-200 shadow-sm">
              <h3 className="font-serif text-base sm:text-lg font-bold text-blueberry-950 mb-3 sm:mb-4 pb-2 border-b border-cream-200">
                Notable Distances from Shanol Residency
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {propertyData.nearbyPlaces.slice(0, 8).map((place, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 bg-white rounded-xl border border-cream-200/80 flex items-center justify-between shadow-2xs hover:border-blueberry-300 transition-colors"
                  >
                    <div className="min-w-0 pr-2">
                      <h4 className="text-xs font-bold text-slate-900 truncate">{place.name}</h4>
                      <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">{place.type}</span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-blueberry-700 bg-blueberry-50 px-2 sm:px-2.5 py-1 rounded-md border border-blueberry-100 shrink-0">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-cream-200/80">
                <a
                  href={propertyData.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blueberry-800 hover:text-blueberry-950 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Open Shanol Residency on Google Maps →</span>
                </a>
                <Link to="/contact" className="text-xs font-semibold text-slate-500 hover:underline">
                  View full directions & map
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blueberry-900 via-blueberry-950 to-slate-950 text-cream-100 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold bg-blueberry-900/80 px-3 py-1 rounded-full border border-gold/40">
            Book Direct with Host
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            Plan Your Gangtok Getaway Today
          </h2>
          <p className="text-xs sm:text-base text-cream-200/90 max-w-2xl mx-auto font-light leading-relaxed">
            Reach out directly to enjoy genuine Sikkimese hospitality, best room rates, and tailored Himalayan itinerary advice from co-host Yashaswi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-gold-dark via-gold to-gold-light text-blueberry-950 hover:shadow-glow transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg"
            >
              Send Stay Enquiry Now
            </button>
            <a
              href={`tel:${propertyData.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm bg-blueberry-800/80 text-cream-100 hover:bg-blueberry-700 border border-gold/40 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-gold" />
              <span>Call Us: {propertyData.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
