"use client";

import { useState, useEffect } from "react";
import { wedding } from "@/data/wedding";
import ScriptHeading from "@/components/ui/ScriptHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FloralCornerGarland } from "@/components/ui/FloralBorders";
import confetti from "canvas-confetti";
import {
  Check,
  Heart,
  HelpCircle,
  ChevronDown,
  Clock,
  Phone,
} from "lucide-react";

export default function Rsvp() {
  const { deadline, contactPerson, phone, phoneHref, altContact } = wedding.rsvp;

  const [formData, setFormData] = useState({
    name: "",
    attending: "attending",
    guests: "1",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("kelvin_janine_rsvp");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFormData(parsed);
          setSubmitted(true);
        } catch {
          // ignore
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      attending:
        formData.attending === "attending"
          ? "Joyfully Attending"
          : "Regretfully Declining",
      guests:
        formData.attending === "declining"
          ? 0
          : parseInt(formData.guests, 10) || 1,
      phone: formData.phone.trim() || "N/A",
      timestamp: new Date().toISOString(),
    };

    // 1. Post to API route which syncs directly with the Google Spreadsheet
    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Could not sync with Google Spreadsheet endpoint:", err);
    } finally {
      // 2. Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#d9aba6", "#bfa15f", "#783832", "#f7ebe4"],
        });
      } catch {
        // ignore
      }

      // 3. Mark response as submitted and save locally
      setSubmitted(true);
      setIsSubmitting(false);
      localStorage.setItem("kelvin_janine_rsvp", JSON.stringify(formData));
    }
  };

  const resetForm = () => {
    localStorage.removeItem("kelvin_janine_rsvp");
    setSubmitted(false);
  };

  return (
    <section id="rsvp" className="scroll-mt-16 bg-watercolor px-4 sm:px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* Luxury Stationery Groove Frame with Floral Corners */}
        <div
          className="relative rounded-3xl border border-[#bfa15f]/40 bg-white/70 p-6 sm:p-12 shadow-xl backdrop-blur-md"
          style={{
            boxShadow:
              "inset 0 0 0 3px #f7ede5, inset 0 0 0 4.5px rgba(191, 161, 95, 0.35), 0 20px 50px -15px rgba(120, 56, 50, 0.12)",
          }}
        >
          {/* Floral Corner Garlands */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <FloralCornerGarland position="top-left" />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none">
            <FloralCornerGarland position="top-right" />
          </div>
          <div className="absolute bottom-2 left-2 pointer-events-none">
            <FloralCornerGarland position="bottom-left" />
          </div>
          <div className="absolute bottom-2 right-2 pointer-events-none">
            <FloralCornerGarland position="bottom-right" />
          </div>

          <ScrollReveal animation="fade-down">
            <ScriptHeading subtitle="Celebrate With Us" divider>
              Kindly RSVP
            </ScriptHeading>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delayMs={100}>
            <p className="mx-auto mt-3 max-w-xl text-center font-serif text-lg leading-relaxed text-[#664338]">
              We have reserved a seat in your honor. Please let us know if you can celebrate with us by{" "}
              <strong className="text-[#783832] font-semibold">{deadline}</strong>.
            </p>
          </ScrollReveal>

          {/* Main Grid: RSVP Response Form & FAQs */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left Column: RSVP FORM / CONFIRMATION */}
            <ScrollReveal animation="fade-right" delayMs={150}>
              <div className="luxury-card rounded-3xl p-6 sm:p-10">
                {submitted ? (
                  <div className="text-center py-6 animate-in fade-in duration-300">
                    <div className="mx-auto w-16 h-16 rounded-full bg-[#f7ebe4] border border-[#bfa15f] flex items-center justify-center text-[#783832] shadow-sm mb-3">
                      <Check className="w-8 h-8 text-[#783832]" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-display uppercase tracking-widest bg-[#f7ebe4] text-[#783832] border border-[#bfa15f]/40 font-semibold mb-3">
                      <Check className="w-3.5 h-3.5 text-[#bfa15f]" />
                      Response Successfully Confirmed
                    </span>

                    <h3 className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#783832]">
                      Thank You, {formData.name}!
                    </h3>

                    {/* Appreciation Message Validation Box */}
                    <div className="mt-5 p-5 rounded-2xl bg-[#fdf8f5] border border-[#bfa15f]/30 text-left space-y-3">
                      <div className="flex items-center gap-2 text-[#783832]">
                        <Heart className="w-4 h-4 fill-[#d9aba6] text-[#bfa15f]" />
                        <span className="font-display text-xs font-semibold uppercase tracking-wider">
                          A Message of Gratitude
                        </span>
                      </div>

                      <p className="font-serif text-sm sm:text-base text-[#5a2722] leading-relaxed italic">
                        {formData.attending === "attending" ? (
                          <>
                            &ldquo;We are deeply touched and overjoyed that you will be sharing this sacred chapter of our lives with us. Having you celebrate our union before God and family means the world to us.&rdquo;
                          </>
                        ) : (
                          <>
                            &ldquo;Thank you so much for taking the time to send your response. Though we will truly miss your presence on our wedding day, your love, prayers, and warm wishes are deeply felt in our hearts.&rdquo;
                          </>
                        )}
                      </p>

                      <div className="pt-3 border-t border-[#bfa15f]/20 flex flex-wrap items-center justify-between gap-2 text-xs font-serif text-[#8b685e]">
                        <span>
                          Reserved:{" "}
                          <strong className="text-[#783832]">
                            {formData.guests} {formData.guests === "1" ? "Seat" : "Seats"}
                          </strong>
                        </span>
                        <span>
                          Status:{" "}
                          <strong className="text-[#783832]">
                            {formData.attending === "attending" ? "Attending" : "Regretfully Declined"}
                          </strong>
                        </span>
                        {formData.phone && (
                          <span>
                            Contact: <strong className="text-[#783832]">{formData.phone}</strong>
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 font-script text-3xl text-[#783832]">
                      Kelvin &amp; Janine
                    </p>

                    <div className="mt-6 flex items-center justify-center">
                      <button
                        onClick={resetForm}
                        type="button"
                        className="px-6 py-2.5 rounded-full font-display text-xs font-semibold uppercase tracking-[0.15em] bg-white border border-[#bfa15f]/50 text-[#783832] hover:bg-[#f7ebe4] hover:border-[#bfa15f] transition-all shadow-xs"
                      >
                        Edit Your Response
                      </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#bfa15f]/20 text-xs text-[#8b685e] font-serif">
                      For questions or seat updates, please contact Kelvin at{" "}
                      <a href={phoneHref} className="text-[#783832] font-semibold underline">
                        {phone}
                      </a>
                      .
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="text-center mb-6">
                      <span className="font-display text-xs uppercase tracking-[0.2em] text-[#bfa15f] font-semibold">
                        Reserve Your Seat
                      </span>
                      <h4 className="font-cormorant text-2xl font-bold text-[#783832] mt-0.5">
                        Response Form
                      </h4>
                    </div>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="guest-name"
                        className="block font-display text-xs font-semibold uppercase tracking-wider text-[#664338] mb-1.5"
                      >
                        Your Full Name(s) *
                      </label>
                      <input
                        id="guest-name"
                        required
                        type="text"
                        placeholder="e.g. Juan & Maria Dela Cruz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#bfa15f]/40 bg-white/90 text-sm font-serif text-[#3d2119] focus:outline-none focus:ring-2 focus:ring-[#783832]/30 focus:border-[#783832]"
                      />
                    </div>

                    {/* Attendance Radio */}
                    <div>
                      <label className="block font-display text-xs font-semibold uppercase tracking-wider text-[#664338] mb-2">
                        Will You Attend? *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label
                          className={`cursor-pointer flex items-center justify-center gap-2 p-3 rounded-xl border transition-all text-xs font-display uppercase tracking-wider font-semibold ${
                            formData.attending === "attending"
                              ? "bg-[#783832] text-white border-[#783832] shadow-sm"
                              : "bg-white border-[#bfa15f]/40 text-[#664338] hover:bg-[#f7ebe4]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="attending"
                            value="attending"
                            checked={formData.attending === "attending"}
                            onChange={() => setFormData({ ...formData, attending: "attending" })}
                            className="sr-only"
                          />
                          <span>Joyfully Accepts</span>
                        </label>

                        <label
                          className={`cursor-pointer flex items-center justify-center gap-2 p-3 rounded-xl border transition-all text-xs font-display uppercase tracking-wider font-semibold ${
                            formData.attending === "declining"
                              ? "bg-[#783832] text-white border-[#783832] shadow-sm"
                              : "bg-white border-[#bfa15f]/40 text-[#664338] hover:bg-[#f7ebe4]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="attending"
                            value="declining"
                            checked={formData.attending === "declining"}
                            onChange={() => setFormData({ ...formData, attending: "declining" })}
                            className="sr-only"
                          />
                          <span>Regretfully Declines</span>
                        </label>
                      </div>
                    </div>

                    {/* Number of Seats & Contact */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="seats-count"
                          className="block font-display text-xs font-semibold uppercase tracking-wider text-[#664338] mb-1.5"
                        >
                          Number of Seats
                        </label>
                        <select
                          id="seats-count"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          disabled={formData.attending === "declining"}
                          className="w-full px-4 py-3 rounded-xl border border-[#bfa15f]/40 bg-white/90 text-sm font-serif text-[#3d2119] focus:outline-none focus:ring-2 focus:ring-[#783832]/30"
                        >
                          <option value="1">1 Seat</option>
                          <option value="2">2 Seats</option>
                          <option value="3">3 Seats</option>
                          <option value="4">4 Seats</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="guest-phone"
                          className="block font-display text-xs font-semibold uppercase tracking-wider text-[#664338] mb-1.5"
                        >
                          Mobile / WhatsApp
                        </label>
                        <input
                          id="guest-phone"
                          type="tel"
                          placeholder="+63 9XX XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#bfa15f]/40 bg-white/90 text-sm font-serif text-[#3d2119] focus:outline-none focus:ring-2 focus:ring-[#783832]/30"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full font-display text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#783832] to-[#a66a64] text-white shadow-md hover:shadow-xl hover:from-[#5a2722] hover:to-[#8f423d] transition-all transform hover:-translate-y-0.5 border border-[#bfa15f]/60 mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Recording RSVP...</span>
                        </>
                      ) : (
                        <span>Submit RSVP</span>
                      )}
                    </button>

                    {/* Contact info fallback */}
                    <div className="pt-2 text-center text-xs font-serif text-[#8b685e]">
                      <span>Or contact {contactPerson}: </span>
                      <a href={phoneHref} className="text-[#783832] font-semibold underline">
                        {phone}
                      </a>
                      <span className="block mt-0.5">{altContact}</span>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Right Column: FAQ ACCORDION & GUEST INFORMATION */}
            <ScrollReveal animation="fade-left" delayMs={200}>
              <div className="luxury-card rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-5 h-5 text-[#bfa15f]" />
                    <h4 className="font-cormorant text-2xl font-bold text-[#783832]">
                      Guest Questions &amp; FAQs
                    </h4>
                  </div>
                  <p className="font-serif text-sm text-[#664338] leading-relaxed">
                    Essential details to ensure your celebration with us is comfortable and memorable.
                  </p>
                </div>

                <div className="space-y-3">
                  {wedding.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#bfa15f]/20 bg-[#fdf8f5] overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-3.5 text-left font-serif text-sm font-semibold text-[#5a2722] hover:text-[#783832]"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#bfa15f] transition-transform duration-200 shrink-0 ml-2 ${
                            openFaq === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === idx && (
                        <div className="px-3.5 pb-3.5 pt-1 text-xs font-serif text-[#664338] leading-relaxed border-t border-[#bfa15f]/15">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Helpful Reminders Card */}
                <div className="rounded-2xl bg-[#fdf8f5] border border-[#bfa15f]/30 p-4 space-y-2 text-xs font-serif text-[#664338] leading-relaxed">
                  <div className="flex items-center gap-2 text-[#783832] font-display font-semibold uppercase tracking-wider text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-[#bfa15f]" />
                    <span>Nuptial Schedule Note</span>
                  </div>
                  <p>
                    Ceremony begins promptly at <strong>9:30 AM</strong> at San Pablo Cathedral Church. Reception luncheon follows at Golden Rich.
                  </p>
                  <div className="pt-2 border-t border-[#bfa15f]/15 flex items-center gap-2 text-[#8b685e]">
                    <Phone className="w-3.5 h-3.5 text-[#bfa15f] shrink-0" />
                    <span>
                      For dietary requests, please contact Kelvin:{" "}
                      <a href={phoneHref} className="text-[#783832] font-semibold underline">
                        {phone}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
