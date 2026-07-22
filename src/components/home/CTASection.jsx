import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const CTA_IMAGE = "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/12427d966_generated_31332622.png";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={CTA_IMAGE}
          alt="Aerial view of luxury yacht in turquoise Miami waters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/75" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-6">
            {t("cta.badge")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
            {t("cta.title1")}
            <br />
            <span className="italic font-semibold text-gold">
              {t("cta.title2")}
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-light text-navy-900 px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm w-full sm:w-auto"
            >
              {t("cta.cta1")}
            </Link>
            <a
              href="https://www.instagram.com/ultrayachtprime"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-gold text-white hover:text-gold px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Instagram className="w-4 h-4" />
              {t("cta.cta2")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}