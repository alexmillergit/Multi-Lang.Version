import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const HERO_IMAGE = "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/a488f1e3b_generated_75962a57.png";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury Azimut 55 Flybridge yacht cruising Miami waters at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/40 to-navy-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-6">
            {t("hero.badge")}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6"
        >
          {t("hero.title1")}
          <br />
          <span className="font-semibold italic text-gold">{t("hero.title2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10"
        >
          <p className="font-display text-2xl sm:text-3xl text-white font-semibold">
            <span className="text-gold">$290</span>
            <span className="text-white/60 text-lg sm:text-xl">/hr</span>
          </p>
          <p className="text-white/50 text-sm mt-1">{t("hero.crewNote")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-light text-navy-900 px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm w-full sm:w-auto"
          >
            {t("hero.cta1")}
          </Link>
          <a
            href="#gallery"
            className="border border-white/30 hover:border-gold text-white hover:text-gold px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm w-full sm:w-auto"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#features" className="text-white/40 hover:text-gold transition-colors">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}