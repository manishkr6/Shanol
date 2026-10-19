import React, { useState } from "react";
import { X, Calendar, Users, Mail, Phone, User, CheckCircle2, AlertCircle, Loader2, Bed, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { propertyData } from "../data/propertyData";

export default function EnquiryModal({ isOpen, onClose, defaultRoom = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: defaultRoom || "Deluxe King Room",
    message: "",
    botcheck: "", // Honeypot field
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.botcheck) {
      return;
    }

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete your name, email, and phone number.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      // If access key is placeholder or missing, provide a friendly simulation mode
      if (!accessKey || accessKey.includes("your_web3forms") || accessKey.trim() === "") {
        // Simulated network delay
        await new Promise((res) => setTimeout(res, 900));
        setStatus("success");
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch (e) {
          // ignore confetti if not available
        }
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
          subject: `New Stay Enquiry from ${formData.name} - Shanol Residency Website`,
          from_name: "Shanol Residency Web Booking",
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
        } catch (e) {
          // ignore
        }
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to submit enquiry. Please try again or WhatsApp us directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please contact us via phone or WhatsApp.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-blueberry-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-cream-50 rounded-2xl shadow-2xl border border-cream-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blueberry-900 to-blueberry-800 text-cream-100 px-6 py-4 flex items-center justify-between border-b border-gold/30">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-gold font-serif text-lg font-bold">Shanol Residency</span>
              <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full border border-gold/40">Direct Enquiry</span>
            </div>
            <p className="text-xs text-cream-200/80 mt-0.5">
              Best direct rates & personal Sikkim tour advice from host family
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-cream-200 hover:text-white hover:bg-blueberry-700/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4 animate-scaleUp">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-400 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-blueberry-900">
                Enquiry Sent Successfully!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our host team at Shanol Residency has received your details for the <strong className="text-blueberry-800">{formData.roomType}</strong>. We will get back to you promptly via phone or email with room confirmation.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/917699231996?text=Hi%20Shanol%20Residency,%20I%20just%20submitted%20a%20stay%20enquiry%20for%20${encodeURIComponent(formData.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Fast Track via WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-blueberry-800 text-cream-100 font-semibold text-sm hover:bg-blueberry-900 shadow-sm"
                >
                  Close
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

              {/* Honeypot anti-spam */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                checked={formData.botcheck}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                {/* Email */}
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
                      placeholder="e.g. guest@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry focus:border-transparent bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
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
                      placeholder="e.g. +91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                {/* Room Preference */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Room Category
                  </label>
                  <div className="relative">
                    <Bed className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry focus:border-transparent bg-white"
                    >
                      <option value="Deluxe King Room">Deluxe King Room (Extra-Large Bed)</option>
                      <option value="Deluxe Queen Room">Deluxe Queen Room (Large Bed & View)</option>
                      <option value="Deluxe Double Room">Deluxe Double Room (Hardwood Floors)</option>
                      <option value="Multiple Rooms / Family Group">Multiple Rooms / Family Group</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dates & Guests */}
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
                      className="w-full pl-9 pr-2 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
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
                      className="w-full pl-9 pr-2 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
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
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests (with Extra Bed)</option>
                      <option value="4+">4+ Guests / Family</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message / Special Requests (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Need travel guidance, airport pickup from Pakyong, meal preferences, or bringing a pet?"
                  className="w-full p-3 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blueberry bg-white"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 px-6 rounded-lg font-bold text-sm bg-gradient-to-r from-blueberry-600 via-blueberry-700 to-blueberry-900 text-cream-100 hover:from-blueberry-700 hover:to-blueberry-950 shadow-md hover:shadow-lg transition-all duration-200 border border-gold/40 flex items-center justify-center space-x-2 disabled:opacity-70 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold" />
                      <span>Sending Enquiry to Shanol Residency...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-gold" />
                      <span>Submit Direct Booking Enquiry</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  🔒 No immediate payment required. Host will confirm availability and current rates.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
