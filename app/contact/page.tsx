"use client";

import React from "react";
import Image from "next/image";
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
      {/* Navigation - Changed from fixed to absolute to match home page feel */}
      <nav className="absolute top-0 w-full z-50 px-4 sm:px-8 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <Image 
              src="/assets/logo.png" 
              alt="Kafoca Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xs sm:text-sm font-bold tracking-tight">Kafoca Mukuru <span className="text-black/40">Studyville</span></span>
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


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
              {/* Contact Info */}
              <div className="space-y-10 sm:space-y-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gray-50 border border-black/5 rounded flex items-center justify-center text-brand-600 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2">Location</h3>
                        <p className="text-xs sm:text-sm font-bold leading-relaxed">
                          Madaraka Shopping Center,<br />
                          off Ole Sangale Road, Nairobi.
                        </p>
                        <a 
                          href="https://www.google.com/maps/dir//KAFOCA-Mukuru+Studyville,+Nairobi/@-1.3074432,36.814848,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x182f10f915970df1:0x6b8a8d512ce8fe2d!2m2!1d36.81832!2d-1.308352" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-[10px] font-bold text-brand-600 uppercase tracking-widest hover:underline"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gray-50 border border-black/5 rounded flex items-center justify-center text-brand-600 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2">Call or WhatsApp</h3>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-bold tracking-tight">0714 371 811</p>
                          <p className="text-xs sm:text-sm font-bold tracking-tight">0738 038 456</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gray-50 border border-black/5 rounded flex items-center justify-center text-brand-600 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2">Email</h3>
                        <p className="text-xs sm:text-sm font-bold tracking-tight">info@kmstudyville.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-black/40">Send a Formal Email</h2>
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
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/40">Email Address</label>
                    <input type="email" className="w-full bg-white border-b border-black/10 py-2 text-xs sm:text-sm font-bold focus:border-black outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/40">Inquiry Details</label>
                    <textarea className="w-full bg-white border-b border-black/10 py-2 text-xs sm:text-sm font-bold focus:border-black outline-none transition-colors h-24 resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="w-full py-4 bg-black text-white rounded text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-600 transition-all">
                    Send Email Inquiry
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-12 border-t border-black/5">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[9px] sm:text-[10px] font-bold text-black/30 uppercase tracking-widest text-center sm:text-left">© 2026 Kafoca Mukuru Studyville</p>
          <div className="flex gap-6 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-black/30">
             <a href="https://www.instagram.com/kafocamukurustudyville/" target="_blank" className="hover:text-black transition-colors">Instagram</a>
             <a href="https://www.facebook.com/kafoca" target="_blank" className="hover:text-black transition-colors">Facebook</a>
             <a href="https://x.com/DStudyville" target="_blank" className="hover:text-black transition-colors">X</a>
             <a href="https://www.tiktok.com/@kafocamukuru" target="_blank" className="hover:text-black transition-colors">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
