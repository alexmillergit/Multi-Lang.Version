import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const galleryImages = [
  {
    src: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/a488f1e3b_generated_75962a57.png",
    alt: "Azimut 55 Flybridge yacht cruising Miami waters",
    labelKey: "exterior",
  },
  {
    src: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/9bbafa24a_generated_32aba21e.png",
    alt: "Luxury yacht interior salon with leather seating",
    labelKey: "salon",
  },
  {
    src: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/dae866953_generated_d194fe17.png",
    alt: "Flybridge deck with panoramic ocean views",
    labelKey: "flybridge",
  },
  {
    src: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/5175b0652_generated_51b3dcff.png",
    alt: "Luxury master cabin with king bed",
    labelKey: "master",
  },
  {
    src: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/c553268ef_generated_5ced226d.png",
    alt: "Hydraulic swim platform with water toys",
    labelKey: "platform",
  },
  {
    src: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/dc7a68198_generated_c71c176a.png",
    alt: "DJ party on yacht deck at sunset",
    labelKey: "dj",
  },
  {
    src: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/12427d966_generated_31332622.png",
    alt: "Aerial view of yacht anchored near Miami Beach",
    labelKey: "aerial",
  },
  {
    src: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/e8b020bae_generated_0354b304.png",
    alt: "Luxury yacht bathroom with marble finishes",
    labelKey: "bathroom",
  },
];

export default function GallerySection() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState(null);
  const labels = t("gallery.labels") || {};

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const nextImage = () => setLightbox((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            {t("gallery.badge")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light">
            {t("gallery.title1")}
            <span className="italic font-semibold text-gold"> {t("gallery.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-sm cursor-pointer group ${
                index === 0 || index === 5
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-gold text-xs tracking-widest uppercase font-medium">
                  {labels[image.labelKey]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 sm:left-8 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 sm:right-8 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}