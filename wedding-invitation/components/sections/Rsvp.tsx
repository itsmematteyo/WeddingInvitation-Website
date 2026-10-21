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
  MessageCircle,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

interface GuestWish {
  id: string;
  name: string;
  message: string;
  date: string;
  likes: number;
}

export default function Rsvp() {
  const { deadline, contactPerson, phone, phoneHref, altContact } = wedding.rsvp;

  const [formData, setFormData] = useState({
    name: "",
    attending: "attending",
    guests: "1",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [wishes, setWishes] = useState<GuestWish[]>([
    {
      id: "1",
      name: "Tita Amor & Tito Gaudencio",
      message: "May God bless your sacred union with endless love, peace, and abundance. We are so proud of you both!",
      date: "Recently",
      likes: 8,
    },
    {
      id: "2",
      name: "Raquel Consulta",
      message: "Wishing my dear sister and brother-in-law Kelvin a lifetime of joy and laughter! Can't wait for December 29!",
      date: "Recently",
      likes: 5,
    },
    {
      id: "3",
      name: "Jemar Abordo",
      message: "Cheers to the best groom and bride! May your love grow deeper with every passing sunrise.",
      date: "Recently",
      likes: 4,
    },
  ]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    // Trigger confetti
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

    setSubmitted(true);
    localStorage.setItem("kelvin_janine_rsvp", JSON.stringify(formData));

    // If they left a message, add to wishes
    if (formData.message.trim()) {
      const newWish: GuestWish = {
        id: Date.now().toString(),
        name: formData.name,
        message: formData.message,
        date: "Just now",
        likes: 1,
      };
      setWishes([newWish, ...wishes]);
    }
  };

  const resetForm = () => {
    localStorage.removeItem("kelvin_janine_rsvp");
    setSubmitted(false);
  };

  const getSmsUrl = () => {
    const text = encodeURIComponent(
      `Hello Kelvin! This is ${formData.name}. I am confirming my RSVP for your wedding on Dec 29, 2026. Status: ${
        formData.attending === "attending" ? "Joyfully Attending" : "Regretfully Declining"
      } (${formData.guests} seat/s). Message: ${formData.message || "Congratulations!"}`
    );
    return `sms:+639959835850?body=${text}`;
  };

  const likeWish = (id: string) => {
    setWishes(
      wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    );
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

          {/* Main Grid: Form & Wishes */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* RSVP FORM / CONFIRMATION */}
            <ScrollReveal animation="fade-right" delayMs={150}>
              <div className="luxury-card rounded-3xl p-6 sm:p-10">
                {submitted ? (
                  <div className="text-center py-6 animate-in fade-in duration-300">
                    <div className="mx-auto w-16 h-16 rounded-full bg-[#f7ebe4] border border-[#bfa15f] flex items-center justify-center text-[#783832] shadow-sm mb-4">
                      <Check className="w-8 h-8 text-[#783832]" />
                    </div>
                    <h3 className="font-cormorant text-3xl font-semibold text-[#783832]">
                      RSVP Received, {formData.name}!
                    </h3>
                    <p className="mt-2 font-serif text-base text-[#664338]">
                      {formData.attending === "attending"
                        ? `Thank you for confirming! We look forward to celebrating with you (${formData.guests} seat/s reserved).`
                        : "Thank you for letting us know. You will be missed, but we carry your love and prayers in our hearts!"}
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getSmsUrl()}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display text-xs font-semibold uppercase tracking-[0.15em] bg-[#783832] text-white hover:bg-[#5a2722] transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4 text-[#e0ca92]" />
                        Send Confirmation via SMS
                      </a>
                      <button
                        onClick={resetForm}
                        type="button"
                        className="w-full sm:w-auto px-5 py-3 rounded-full font-display text-xs font-semibold uppercase tracking-[0.15em] bg-white border border-[#bfa15f]/50 text-[#783832] hover:bg-[#f7ebe4] transition-colors"
                      >
                        Edit Response
                      </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#bfa15f]/20 text-xs text-[#8b685e] font-serif">
                      For questions or changes, please message Kelvin at{" "}
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

                    {/* Warm Wishes / Prayer */}
                    <div>
                      <label
                        htmlFor="guest-message"
                        className="block font-display text-xs font-semibold uppercase tracking-wider text-[#664338] mb-1.5"
                      >
                        Warm Wishes or Prayer for Kelvin &amp; Janine
                      </label>
                      <textarea
                        id="guest-message"
                        rows={3}
                        placeholder="Share your love, blessing, or favourite memory with the couple..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#bfa15f]/40 bg-white/90 text-sm font-serif text-[#3d2119] focus:outline-none focus:ring-2 focus:ring-[#783832]/30"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full font-display text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#783832] to-[#a66a64] text-white shadow-md hover:shadow-xl hover:from-[#5a2722] hover:to-[#8f423d] transition-all transform hover:-translate-y-0.5 border border-[#bfa15f]/60"
                    >
                      Submit RSVP
                    </button>

                    {/* Contact info fallback */}
                    <div className="pt-3 text-center text-xs font-serif text-[#8b685e]">
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

            {/* GUEST WISHES WALL */}
            <div className="space-y-6">
              <ScrollReveal animation="fade-left" delayMs={200}>
                <div className="luxury-card rounded-3xl p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#bfa15f] fill-[#d9aba6]" />
                      <h4 className="font-cormorant text-2xl font-bold text-[#783832]">
                        Guest Wishes Wall
                      </h4>
                    </div>
                    <span className="font-display text-[11px] uppercase tracking-wider text-[#8b685e]">
                      {wishes.length} Messages
                    </span>
                  </div>

                  <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
                    {wishes.map((w) => (
                      <div
                        key={w.id}
                        className="p-4 rounded-2xl bg-[#fdf8f5] border border-[#bfa15f]/25 text-left"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-cormorant text-lg font-bold text-[#5a2722]">
                            {w.name}
                          </span>
                          <span className="font-serif text-[11px] text-[#8b685e] italic">
                            {w.date}
                          </span>
                        </div>
                        <p className="font-serif text-sm text-[#664338] leading-relaxed">
                          &ldquo;{w.message}&rdquo;
                        </p>
                        <div className="mt-2 flex justify-end">
                          <button
                            onClick={() => likeWish(w.id)}
                            type="button"
                            className="inline-flex items-center gap-1 text-xs text-[#783832] hover:text-[#bfa15f] transition-colors"
                          >
                            <Heart className="w-3.5 h-3.5 fill-[#d9aba6]" />
                            <span>{w.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* FREQUENTLY ASKED QUESTIONS */}
              <ScrollReveal animation="fade-up" delayMs={260}>
                <div className="luxury-card rounded-3xl p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="w-5 h-5 text-[#bfa15f]" />
                    <h4 className="font-cormorant text-2xl font-bold text-[#783832]">
                      Guest Questions &amp; FAQs
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {wedding.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#bfa15f]/20 bg-[#fdf8f5] overflow-hidden"
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
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
