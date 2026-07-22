import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Anchor } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function PricingSection() {
  const { t } = useLanguage();
  const included = t("pricing.included") || [];

  return (
    <section className="py-24 sm:py-32 bg-navy-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            {t("pricing.badge")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light">
            {t("pricing.title1")}
            <span className="italic font-semibold text-gold"> {t("pricing.title2")}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-navy-700 to-navy-900 border border-gold/20 rounded-sm p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <Anchor className="w-10 h-10 text-gold mx-auto mb-6" />
          <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold mb-2">
            {t("pricing.yachtName")}
          </h3>
          <p className="text-white/50 text-sm mb-8">
            {t("pricing.yachtDesc")}
          </p>

          <div className="mb-8">
            <span className="font-display text-5xl sm:text-6xl text-gold font-bold">$290</span>
            <span className="text-white/50 text-xl ml-2">{t("pricing.perHour")}</span>
          </div>

          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
            {t("pricing.note")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-10 text-left">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-navy-900 px-12 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm"
          >
            {t("pricing.cta")}
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/30 text-xs mt-6"
        >
          {t("pricing.footnote")}
        </motion.p>
      </div>
    </section>
  );
}