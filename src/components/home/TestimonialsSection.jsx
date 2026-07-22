import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = t("testimonials.items") || [];

  return (
    <section className="py-24 sm:py-32 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            {t("testimonials.badge")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light">
            {t("testimonials.title1")}
            <span className="italic font-semibold text-gold"> {t("testimonials.title2")}</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-white/60 text-sm ml-3">
              {t("testimonials.rating")}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((tm, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-700/50 border border-white/5 p-8 rounded-sm hover:border-gold/20 transition-all duration-500 flex flex-col"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-grow mb-6 italic">
                "{tm.text}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-medium text-sm">{tm.name}</p>
                <p className="text-white/40 text-xs mt-1">
                  {tm.location} · {tm.occasion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}