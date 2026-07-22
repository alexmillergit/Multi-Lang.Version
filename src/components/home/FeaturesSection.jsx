import React from "react";
import { motion } from "framer-motion";
import { Waves, Music, BedDouble, Bath, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [Waves, Music, BedDouble, Bath, Users, Sparkles];

export default function FeaturesSection() {
  const { t } = useLanguage();
  const items = t("features.items") || [];

  return (
    <section id="features" className="py-24 sm:py-32 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            {t("features.badge")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light">
            {t("features.title1")}
            <span className="italic font-semibold text-gold"> {t("features.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((feature, index) => {
            const Icon = icons[index] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-700/50 border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-500 group"
              >
                <Icon className="w-8 h-8 text-gold mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl text-white font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}