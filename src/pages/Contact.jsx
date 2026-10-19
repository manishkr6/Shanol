import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Calendar, 
  Users, 
  User, 
  Bed, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import confetti from "canvas-confetti";
import { propertyData } from "../data/propertyData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "Deluxe King Room",
    message: "",
    botcheck: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.botcheck) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete your name, email, and phone number.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      if (!accessKey || accessKey.includes("your_web3forms") || accessKey.trim() === "") {
        await new Promise((res) => setTimeout(res, 900));
        setStatus("success");
        try {
          confetti({
            particleCount: 90,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch (e) {}
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from Shanol Residency website - ${formData.name}`,
          from_name: "Shanol Residency Web",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          guests: formData.guests,
          room_type: formData.roomType,
          message: formData.message,
          botcheck: formData.botcheck,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (e) {}
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to submit enquiry. Please check fields or contact directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please contact us via phone or WhatsApp.");
    }
  };

  const faqs = [
    {
      q: "What is the check-in and check-out time?",
      a: "Our front desk is staffed 24 hours. Normal check-in is recommended from 12:00 PM onwards, and check-out is until 10:00 AM. Early check-in or late check-out can be arranged with prior notice depending on room availability."
    },
    {
      q: "How far is Shanol Residency from MG Marg and Pakyong Airport?",
      a: "We are located in Arithang, about 1.5 km (a comfortable short stroll or 5-minute taxi ride) from the pedestrianized MG Marg. Pakyong Airport (PYG) is approximately 23 km away (about 50 minutes scenic drive). We can arrange private airport pickup upon request."
    },
    {
      q: "Can you help arrange Nathula Pass & North Sikkim permits?",
      a: "Yes! Co-host Yashaswi and the Shanol team assist in arranging protected area permits for Nathula Pass, Tsomgo Lake, Baba Mandir, and North Sikkim (Lachung/Lachen/Gurudongmar). Please provide valid government photo IDs and passport-sized photos upon arrival."
    },
    {
      q: "What are your meal options? Do you offer pure vegetarian food?",
      a: "Yes! Our on-site kitchen prepares fresh home-style meals with extensive vegetarian choices, as well as Indian, Sikkimese (momos, thukpa), Chinese, and Nepalese cuisine. We also pack breakfast-to-go for early morning sightseeing excursions."
    },
    {
      q: "What is your policy regarding extra beds and children?",
      a: "Children of all ages are welcome. Extra beds are available in our rooms on request at ₹500 per person per night. Please mention your extra bed requirements when submitting your enquiry."
    },
    {
      q: "Are pets allowed at Shanol Residency?",
      a: "Yes, pets are allowed on advance request (nominal charges may apply depending on pet size). We provide clean pet bowls and a welcoming environment for furry travel companions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      {/* 1. Header Hero */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-slate-950 text-cream-100 overflow-hidden text-center">
        {/* Background Image - Exterior & Himalayan Peaks */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="Shanol Residency Exterior & Mountain View"
            className="w-full h-full object-cover object-center"
          />
          {/* Neutral dark scrim - NO bluish tint, preserving natural mountain colors */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/65 pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold bg-black/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-gold/50 backdrop-blur-md shadow-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Get in Touch · Lower Arithang, Gangtok
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            Contact & Stay Enquiries
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Reach out directly to the host family at Shanol Residency for personalized reservations, custom travel planning, and special group inquiries.
          </p>
        </div>
      </section>

      {/* 2. Main Grid: Contact Form + Contact Details */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: Web3Forms Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-cream-200 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blueberry-600 bg-blueberry-50 px-2.5 py-1 rounded">
                  Direct Reservation Request
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-blueberry-950 mt-2">
                  Send Your Stay Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your travel dates below. Your request goes directly to the host family's inbox.
                </p>
              </div>

              {status === "success" ? (
                <div className="py-12 text-center space-y-4 animate-scaleUp">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-400 shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-blueberry-950">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our host team at Shanol Residency will review availability for your dates and respond promptly via phone or email.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={`https://wa.me/917699231996?text=Hi%20Shanol%20Residency,%20I%20just%20submitted%20a%20stay%20enquiry%20for%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-sm"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Chat on WhatsApp Now
                    </a>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-5 py-2.5 rounded-lg bg-blueberry-800 text-cream-100 font-semibold text-sm hover:bg-blueberry-900"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    checked={formData.botcheck}
                    onChange={handleChange}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Navin Sharma"
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. navin@example.com"
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 76992 31996"
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Room Category Preference
                      </label>
                      <div className="relative">
                        <Bed className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                        >
                          <option value="Deluxe King Room">Deluxe King Room (Extra-Large Bed)</option>
                          <option value="Deluxe Queen Room">Deluxe Queen Room (Large Bed & View)</option>
                          <option value="Deluxe Double Room">Deluxe Double Room (Hardwood Floors)</option>
                          <option value="Entire Floor / Family Group">Multiple Rooms / Family Group</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Check-In Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="date"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          className="w-full pl-9 pr-2 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Check-Out Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="date"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          className="w-full pl-9 pr-2 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Guests
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests (with Extra Bed)</option>
                          <option value="4+">4+ Guests / Family</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Travel Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Special meal preferences, arrival times, airport pickup from Pakyong, or pet travel..."
                      className="w-full p-3 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-blueberry-700 to-blueberry-900 text-cream-100 hover:from-blueberry-800 hover:to-blueberry-950 shadow-md hover:shadow-lg transition-all border border-gold/40 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-gold" />
                          <span>Submitting to Shanol Residency...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-gold" />
                          <span>Submit Booking Enquiry (Web3Forms)</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      🔒 No payment required now. Our team responds with exact availability and rates.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details, Map & WhatsApp */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Info Card */}
              <div className="bg-blueberry-950 text-cream-100 rounded-3xl p-6 sm:p-8 border border-blueberry-800/80 shadow-lg space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blueberry-900 border border-gold/40 flex items-center justify-center">
                    <span className="font-serif text-lg font-bold text-gold">S</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      Shanol Residency
                    </h3>
                    <p className="text-xs text-gold font-medium">शानोल रेजिडेंसी · Arithang, Gangtok</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-cream-200/90 pt-2 border-t border-blueberry-800/80">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Official Address:</strong>
                      <span>{propertyData.address.street}, {propertyData.address.area}, Gangtok, Sikkim {propertyData.address.pincode}</span>
                      <span className="text-xs text-gold block mt-1">Plus Code: {propertyData.address.plusCode}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <strong className="text-white block">Call Host Directly:</strong>
                      <a href={`tel:${propertyData.phoneRaw}`} className="text-gold font-bold hover:underline">
                        {propertyData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <strong className="text-white block">WhatsApp Chat:</strong>
                      <a
                        href={propertyData.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 font-bold hover:underline"
                      >
                        Click to chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <strong className="text-white block">Email:</strong>
                      <a href={`mailto:${propertyData.email}`} className="text-cream-200 hover:text-white text-xs">
                        {propertyData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <strong className="text-white block">Timings:</strong>
                      <span className="text-xs">Check-in: 24 Hours (from 12 PM) · Check-out: 10:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-3xl overflow-hidden border border-cream-200 shadow-md bg-white">
                <div className="p-4 bg-cream-100 flex items-center justify-between border-b border-cream-200">
                  <span className="font-bold text-xs text-blueberry-950 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blueberry" />
                    Google Maps Location
                  </span>
                  <a
                    href={propertyData.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blueberry-700 hover:underline"
                  >
                    Open in Maps App →
                  </a>
                </div>
                <div className="h-64 sm:h-72 w-full">
                  <iframe
                    title="Shanol Residency Location Map"
                    src={propertyData.address.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section className="py-16 bg-white border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blueberry-700 bg-blueberry-50 px-3 py-1 rounded-md">
              Need Help?
            </span>
            <h2 className="font-serif text-3xl font-bold text-blueberry-950 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Important details about staying at Shanol Residency in Gangtok.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-cream-200 bg-cream-50/70 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-serif font-bold text-base sm:text-lg text-blueberry-950 hover:text-blueberry-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-cream-200/60 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
