import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import EnquiryModal from "./components/EnquiryModal";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Travel from "./pages/Travel";
import Contact from "./pages/Contact";

import "./App.css";

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedRoomForEnquiry, setSelectedRoomForEnquiry] = useState("Deluxe King Room");

  const handleOpenEnquiry = (roomName = "Deluxe King Room") => {
    if (typeof roomName === "string" && roomName.trim()) {
      setSelectedRoomForEnquiry(roomName);
    } else {
      setSelectedRoomForEnquiry("Deluxe King Room");
    }
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-slate-800 antialiased selection:bg-blueberry selection:text-cream-100">
      <ScrollToTop />
      
      {/* Top Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/rooms" element={<Rooms onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/travel" element={<Travel onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Quick Action Navigation: Bottom Bar on Mobile, Floating on Desktop */}
      <FloatingActions onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Direct Booking & Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={handleCloseEnquiry}
        defaultRoom={selectedRoomForEnquiry}
      />
    </div>
  );
}
