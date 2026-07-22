import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BedDouble, Bath, Waves, ArrowRight, Anchor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const yachtData = [
  { name: "Azimut 45 Sport", length: "45 ft", image: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/b99da8bc1_generated_image.png", guests: 6, cabins: 2, baths: 1, price: "$220" },
  { name: "Azimut 52 Flybridge", length: "52 ft", image: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/61a569171_generated_image.png", guests: 8, cabins: 3, baths: 2, price: "$260" },
  { name: "Azimut 58 Flybridge", length: "58 ft", image: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/466c87dae_generated_image.png", guests: 10, cabins: 3, baths: 2, price: "$290", featured: true },
  { name: "Azimut 65 Grande", length: "65 ft", image: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/22d34ffea_generated_image.png", guests: 12, cabins: 3, baths: 2, price: "$380" },
  { name: "Azimut 72 Flybridge", length: "72 ft", image: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/d5cf63667_generated_image.png", guests: 13, cabins: 4, baths: 3, price: "$520" },
  { name: "Azimut 78 Grande", length: "78 ft", image: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/913feca3b_generated_image.png", guests: 13, cabins: 4, baths: 3, price: "$650" },
  { name: "Azimut 85 Grande", length: "85 ft", image: "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/ca6f576e0_generated_image.png", guests: 13, cabins: 4, baths: 4, price: "$850" },
];

function YachtCard({ yacht, yachtT, index, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`bg-navy-800 border rounded-sm overflow-hidden group transition-all duration-500 ${
        yacht.featured ? "border-gold/40 lg:col-span-2" : "border-white/5 hover:border-gold/20"
      }`}
    >
      <div className={`grid ${yacht.featured ? "lg:grid-cols-2" : "grid-cols-1"}`}>
        {/* Image */}
        <div className="relative overflow-hidden h-64 lg:h-full min-h-[280px]">
          <img
            src={yacht.image}
            alt={`${yacht.name} — ${yacht.length} luxury yacht`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {yacht.featured && (
            <div className="absolute top-4 left-4 bg-gold text-navy-900 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-sm">
              {t("fleet.mostPopular")}
            </div>
          )}
          <div className="absolute bottom-4 left-4 bg-navy-900/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
            <span className="text-gold text-sm font-semibold">{yacht.length}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col">
          <h3 className="font-display text-2xl text-white font-semibold mb-1">
            {yacht.name}
          </h3>
          <p className="text-gold text-sm italic mb-4">{yachtT.tagline}</p>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            {yachtT.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="flex flex-col items-center text-center">
              <Users className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-white text-sm font-medium">{yacht.guests}</span>
              <span className="text-white/30 text-xs">{t("fleet.specs.guests")}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <BedDouble className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-white text-sm font-medium">{yacht.cabins}</span>
              <span className="text-white/30 text-xs">{t("fleet.specs.cabins")}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Bath className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-white text-sm font-medium">{yacht.baths}</span>
              <span className="text-white/30 text-xs">{t("fleet.specs.baths")}</span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-end justify-between mt-auto">
            <div>
              <span className="font-display text-3xl text-gold font-bold">{yacht.price}</span>
              <span className="text-white/40 text-sm ml-1">{t("fleet.perHour")}</span>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-white/70 hover:text-gold text-sm font-medium tracking-wider uppercase transition-colors group/btn"
            >
              {t("fleet.inquire")}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Fleet() {
  const { t } = useLanguage();
  const yachtTranslations = t("fleet.yachts") || [];

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Anchor className="w-6 h-6 text-gold" />
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium">
                {t("fleet.badge")}
              </p>
              <Anchor className="w-6 h-6 text-gold" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light mb-6">
              {t("fleet.title1")}
              <span className="italic font-semibold text-gold"> {t("fleet.title2")}</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("fleet.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="pb-24 sm:pb-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {yachtData.map((yacht, index) => (
              <YachtCard
                key={yacht.name}
                yacht={yacht}
                yachtT={yachtTranslations[index] || {}}
                index={index}
                t={t}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 bg-navy-800 border border-gold/10 rounded-sm p-10 sm:p-14"
          >
            <Waves className="w-10 h-10 text-gold mx-auto mb-5" />
            <h3 className="font-display text-2xl sm:text-3xl text-white font-light mb-4">
              {t("fleet.ctaTitle1")}
              <span className="italic font-semibold text-gold"> {t("fleet.ctaTitle2")}</span>
            </h3>
            <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto mb-8">
              {t("fleet.ctaDesc")}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-navy-900 px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              {t("fleet.ctaBtn")}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}