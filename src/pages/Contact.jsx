import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Send, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const FLYBRIDGE_IMAGE = "https://media.base44.com/images/public/6a3f47901814dd51cc6c5e2b/dae866953_generated_d194fe17.png";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    await base44.entities.CharterInquiry.create({
      name: form.name,
      email: form.email,
      phone: form.phone,
      preferred_date: form.date,
      guests: form.guests,
      message: form.message,
    });

    // Notify admin users about the new inquiry (best effort)
    try {
      const admins = await base44.entities.User.filter({ role: "admin" });
      const notificationBody = `New charter inquiry from ${form.name}.\n\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nPreferred Date: ${form.date || "—"}\nGuests: ${form.guests || "—"}\n\nMessage:\n${form.message}`;
      for (const admin of admins) {
        await base44.integrations.Core.SendEmail({
          to: admin.email,
          subject: `New Charter Inquiry — ${form.name}`,
          body: notificationBody,
        });
      }
    } catch (notifyErr) {
      // Notification failed — inquiry is already saved in the database
    }

    // Send confirmation email to the submitter (best effort — only works if they are a registered app user)
    try {
      await base44.integrations.Core.SendEmail({
        to: form.email,
        subject: "We've received your charter inquiry — Ultra Yacht Prime",
        body: `Hi ${form.name},\n\nThank you for your interest in Ultra Yacht Prime! We've received your charter inquiry and our team will review it and get back to you within 24 hours.\n\nHere's a summary of your request:\nPreferred Date: ${form.date || "—"}\nGuests: ${form.guests || "—"}\nMessage: ${form.message}\n\nWe look forward to creating an unforgettable experience for you on the water.\n\n— The Ultra Yacht Prime Team`,
        from_name: "Ultra Yacht Prime",
      });
    } catch (confirmErr) {
      // Confirmation email failed (recipient may not be a registered app user) — inquiry is already saved
    }

    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
  };

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
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
              {t("contact.badge")}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light mb-6">
              {t("contact.title1")}
              <span className="italic font-semibold text-gold"> {t("contact.title2")}</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {t("contact.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-24 sm:pb-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {sent ? (
                <div className="bg-navy-800 border border-gold/20 rounded-sm p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
                  <h3 className="font-display text-2xl text-white font-semibold mb-3">
                    {t("contact.sentTitle")}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {t("contact.sentDesc")}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-gold hover:text-gold-light text-sm font-medium tracking-wider uppercase transition-colors"
                  >
                    {t("contact.sendAnother")}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-navy-800 border border-white/5 rounded-sm p-8 sm:p-10"
                >
                  <h3 className="font-display text-2xl text-white font-semibold mb-8">
                    {t("contact.formTitle")}
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-white/60 text-xs tracking-wider uppercase mb-2">
                        {t("contact.labels.name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy-700 border border-white/10 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white/20"
                        placeholder={t("contact.placeholders.name")}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-xs tracking-wider uppercase mb-2">
                          {t("contact.labels.email")}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy-700 border border-white/10 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white/20"
                          placeholder={t("contact.placeholders.email")}
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs tracking-wider uppercase mb-2">
                          {t("contact.labels.phone")}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-navy-700 border border-white/10 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white/20"
                          placeholder={t("contact.placeholders.phone")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-xs tracking-wider uppercase mb-2">
                          {t("contact.labels.date")}
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          className="w-full bg-navy-700 border border-white/10 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs tracking-wider uppercase mb-2">
                          {t("contact.labels.guests")}
                        </label>
                        <input
                          type="number"
                          name="guests"
                          value={form.guests}
                          onChange={handleChange}
                          min="1"
                          max="13"
                          className="w-full bg-navy-700 border border-white/10 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white/20"
                          placeholder={t("contact.placeholders.guests")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/60 text-xs tracking-wider uppercase mb-2">
                        {t("contact.labels.message")}
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-navy-700 border border-white/10 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors resize-none placeholder:text-white/20"
                        placeholder={t("contact.placeholders.message")}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full mt-8 bg-gold hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed text-navy-900 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t("contact.send")}
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <img
                src={FLYBRIDGE_IMAGE}
                alt="Azimut 55 flybridge deck with ocean views"
                className="w-full rounded-sm object-cover aspect-video"
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{t("contact.info.locationTitle")}</h4>
                    <p className="text-white/50 text-sm">
                      {t("contact.info.location")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{t("contact.info.availabilityTitle")}</h4>
                    <p className="text-white/50 text-sm">
                      {t("contact.info.availability")}
                      <br />
                      {t("contact.info.minCharter")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{t("contact.info.followTitle")}</h4>
                    <a
                      href="https://www.instagram.com/ultrayachtprime"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light text-sm transition-colors font-medium"
                    >
                      @ultrayachtprime
                    </a>
                    <p className="text-white/40 text-xs mt-1">
                      {t("contact.info.followDesc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram CTA */}
              <a
                href="https://www.instagram.com/ultrayachtprime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-orange-400/20 border border-white/10 rounded-sm p-6 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm group-hover:text-gold transition-colors">
                    @ultrayachtprime
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">
                    {t("contact.info.instagramCta")}
                  </p>
                </div>
              </a>

              {/* Quick Response Promise */}
              <div className="bg-navy-800 border border-gold/10 rounded-sm p-6 text-center">
                <p className="text-gold font-display text-lg font-semibold mb-2">
                  {t("contact.info.quickResponseTitle")}
                </p>
                <p className="text-white/50 text-sm">
                  {t("contact.info.quickResponse")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}