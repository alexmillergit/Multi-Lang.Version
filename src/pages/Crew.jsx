import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Clock, Star, Music, UtensilsCrossed, Camera, Quote, Anchor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const CAPTAIN_IMAGE = "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/e24f19068_generated_068bc338.png";
const STEWARD_IMAGE = "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/b26e030b1_generated_6e1f55b7.png";
const PARTY_IMAGE = "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/dc7a68198_generated_c71c176a.png";

const highlightIcons = [Shield, Clock, Star];
const addonIcons = [Music, UtensilsCrossed, Camera];

export default function Crew() {
  const { t } = useLanguage();
  const highlights = t("crew.highlights") || [];
  const addons = t("crew.addons") || [];

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
              {t("crew.badge")}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light mb-6">
              {t("crew.title1")}
              <span className="italic font-semibold text-gold"> {t("crew.title2")}</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("crew.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Crew Highlights */}
      <section className="py-16 sm:py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = highlightIcons[index] || Shield;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8"
                >
                  <Icon className="w-10 h-10 text-gold mx-auto mb-5" />
                  <h3 className="font-display text-xl text-white font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Captain Dustin Section */}
      <section className="py-20 sm:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={CAPTAIN_IMAGE}
                alt="Captain Dustin Greere at the helm of the Azimut 55"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-sm object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gold p-4 sm:p-6 rounded-sm">
                <Anchor className="w-8 h-8 text-navy-900" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
                {t("crew.captainBadge")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-light mb-8">
                {t("crew.captainTitle1")}
                <span className="italic font-semibold text-gold">
                  {" "}{t("crew.captainTitle2")}
                </span>
              </h2>

              <div className="relative pl-6 border-l-2 border-gold/40 mb-8">
                <Quote className="w-8 h-8 text-gold/30 absolute -top-2 -left-5 bg-navy-900" />
                <blockquote className="text-white/70 text-base sm:text-lg leading-relaxed italic font-display">
                  "{t("crew.captainQuote")}"
                </blockquote>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                {t("crew.captainBio")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steward Section */}
      <section className="py-20 sm:py-28 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
                {t("crew.stewardBadge")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-light mb-6">
                {t("crew.stewardTitle1")}
                <span className="italic font-semibold text-gold">
                  {" "}{t("crew.stewardTitle2")}
                </span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                {t("crew.stewardDesc1")}
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                {t("crew.stewardDesc2")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img
                src={STEWARD_IMAGE}
                alt="Professional yacht steward serving guests"
                className="w-full max-w-md mx-auto lg:ml-auto rounded-sm object-cover aspect-[3/4]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={PARTY_IMAGE}
            alt="DJ party atmosphere on yacht"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-navy-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
              {t("crew.addonsBadge")}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light">
              {t("crew.addonsTitle1")}
              <span className="italic font-semibold text-gold">
                {" "}{t("crew.addonsTitle2")}
              </span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base mt-4 max-w-xl mx-auto">
              {t("crew.addonsDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addons.map((item, index) => {
              const Icon = addonIcons[index] || Music;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy-800/80 backdrop-blur-sm border border-gold/10 p-8 rounded-sm text-center hover:border-gold/30 transition-all duration-500"
                >
                  <Icon className="w-10 h-10 text-gold mx-auto mb-5" />
                  <h3 className="font-display text-xl text-white font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-navy-900 px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              {t("crew.cta")}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}