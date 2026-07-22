import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Instagram, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="w-6 h-6 text-gold" />
              <span className="font-display text-xl font-semibold text-white">
                Ultra Yacht Prime
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {t("footer.brandDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-display text-lg font-semibold mb-4">
              {t("footer.navigate")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-white/50 hover:text-gold text-sm transition-colors">
                {t("nav.home")}
              </Link>
              <Link to="/fleet" className="text-white/50 hover:text-gold text-sm transition-colors">
                {t("nav.fleet")}
              </Link>
              <Link to="/crew" className="text-white/50 hover:text-gold text-sm transition-colors">
                {t("nav.crew")}
              </Link>
              <Link to="/contact" className="text-white/50 hover:text-gold text-sm transition-colors">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gold font-display text-lg font-semibold mb-4">
              {t("footer.connect")}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/ultrayachtprime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold text-sm transition-colors flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                @ultrayachtprime
              </a>
              <span className="text-white/50 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Miami, Florida
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Ultra Yacht Prime. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-white/30 hover:text-gold text-xs transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/contact" className="text-white/30 hover:text-gold text-xs transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}