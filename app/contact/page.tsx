"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowLeft
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-black/5 px-4 sm:px-8 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center text-white font-bold text-xs">K</div>
            <span className="text-xs sm:text-sm font-bold tracking-tight">Kafoca Mukuru</span>
          </div>
        </div>
      </nav>

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Inquiries</h1>
              <p className="text-xs sm:text-sm text-black/60 font-medium max-w-lg">
                For room bookings and tours at Madaraka Shopping Center, please get in touch via the form or details below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
              {/* Contact Info */}
              <div className="space-y-10 sm:space-y-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gray-50 border border-black/5 rounded flex items-center justify-center text-brand-600 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <a href="https://wa.me/254714371811" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-600 transition-colors">
                        <p className="text-[9px] sm:text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">WhatsApp / Call</p>
                        <p className="text-xs sm:text-sm font-bold">0714 371 811</p>
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gray-50 border border-black/5 rounded flex items-center justify-center text-brand-600 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <a href="https://wa.me/254738038456" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-600 transition-colors">
                        <p className="text-[9px] sm:text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">WhatsApp / Call</p>
                        <p className="text-xs sm:text-sm font-bold">0738 038 456</p>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-50 border border-black/5 rounded flex items-center justify-center text-brand-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@kmstudyville.com" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-600 transition-colors">
                      <p className="text-[9px] sm:text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">Direct Gmail</p>
                      <p className="text-xs sm:text-sm font-bold">info@kmstudyville.com</p>
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-50 border border-black/5 rounded flex items-center justify-center text-brand-600 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">Address</p>
                      <p className="text-xs sm:text-sm font-bold">Madaraka Shopping Center, Nairobi</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-black/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">Office Hours</h3>
                  <div className="space-y-3 text-[10px] sm:text-xs font-bold">
                    <div className="flex justify-between">
                      <span className="text-black/40">Mon — Fri</span>
                      <span>08:00 — 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/40">Sat</span>
                      <span>09:00 — 16:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-black/40">Message Us</h2>
                <form className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/40">Full Name</label>
                      <input type="text" className="w-full bg-white border-b border-black/10 py-2 text-xs sm:text-sm font-bold focus:border-black outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/40">Phone</label>
                      <input type="tel" className="w-full bg-white border-b border-black/10 py-2 text-xs sm:text-sm font-bold focus:border-black outline-none transition-colors" placeholder="+254" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/40">Email</label>
                    <input type="email" className="w-full bg-white border-b border-black/10 py-2 text-xs sm:text-sm font-bold focus:border-black outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/40">Message</label>
                    <textarea className="w-full bg-white border-b border-black/10 py-2 text-xs sm:text-sm font-bold focus:border-black outline-none transition-colors h-24 resize-none" placeholder="Details of your inquiry..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-black text-white rounded text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-600 transition-all">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-12 border-t border-black/5">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[9px] sm:text-[10px] font-bold text-black/30 uppercase tracking-widest text-center sm:text-left">© 2026 Kafoca Mukuru</p>
          <div className="flex gap-6 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-black/30">
             <Link href="#" className="hover:text-black transition-colors cursor-pointer">Instagram</Link>
             <Link href="#" className="hover:text-black transition-colors cursor-pointer">Facebook</Link>
             <Link href="#" className="hover:text-black transition-colors cursor-pointer">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
