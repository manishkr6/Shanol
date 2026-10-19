import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxModal({ isOpen, images = [], currentIndex = 0, onClose, onPrev, onNext, onSelect, title = "" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between text-white z-10 px-2 py-2" onClick={(e) => e.stopPropagation()}>
        <div>
          <h4 className="font-serif text-lg font-bold text-cream-100">{title || "Photo Gallery"}</h4>
          <span className="text-xs text-cream-300">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close photo preview"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div 
        className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImg}
          alt={title || "Shanol Residency Gallery View"}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all transform hover:scale-110"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all transform hover:scale-110"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Thumbnail Bar */}
      {images.length > 1 && (
        <div 
          className="flex justify-center space-x-2 py-3 overflow-x-auto max-w-2xl mx-auto z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => (onSelect ? onSelect(idx) : onPrev && (idx < currentIndex ? onPrev() : onNext()))}
              className={`w-14 h-10 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                idx === currentIndex ? "border-gold scale-105" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
