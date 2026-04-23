"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Wifi, 
  CheckCircle2, 
  Users, 
  UtensilsCrossed, 
  Monitor, 
  Waves, 
  ShieldCheck, 
  BookOpen,
  Coffee,
  ShoppingBag,
  Briefcase,
  Zap,
  Headphones
} from "lucide-react";

export default function FacilitiesPage() {
  const features = [
    { icon: <Wifi />, label: "High-Speed WIFI", desc: "Uninterrupted connectivity for your studies and entertainment." },
    { icon: <UtensilsCrossed />, label: "Full Board Catering", desc: "Nutritious and delicious meals served daily in our modern cafeteria." },
    { icon: <ShieldCheck />, label: "24/7 Security", desc: "Full CCTV surveillance and professional security personnel." },
    { icon: <BookOpen />, label: "Quiet Study Rooms", desc: "Dedicated spaces designed for maximum focus and productivity." },
    { icon: <CheckCircle2 />, label: "Laundry Services", desc: "Professional cleaning services to keep you looking your best." },
    { icon: <Waves />, label: "Instant Showers", desc: "Hot water available around the clock for your comfort." },
    { icon: <Monitor />, label: "Entertainment & DSTV", desc: "Common areas equipped with DSTV for relaxation and socializing." },
    { icon: <Users />, label: "Mentorship Programs", desc: "Personal growth support through our dedicated mentorship initiatives." }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation - Absolute to match home page feel */}
      <nav className="absolute top-0 w-full z-50 px-4 sm:px-8 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back Home</span>
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

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-serif">World-Class Facilities</h1>
            <p className="text-lg text-black/60 font-medium leading-relaxed max-w-2xl">
              At KAFOCA Mukuru Studyville, we've designed every corner to support your academic journey and personal wellbeing. Explore our comprehensive range of amenities.
            </p>
          </div>

          {/* Grid of Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-black/5 hover:border-brand-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3">{f.label}</h3>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3">{f.label}</h3>
                <p className="text-xs text-black/60 leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Gallery / Visual Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/assets/food.png" alt="Cafeteria" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-2">Gourmet Catering</h4>
                  <p className="text-sm opacity-80">Balanced, nutritious meals prepared by our professional kitchen staff.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <Image src="/assets/kitchenstaff.png" alt="Staff" fill className="object-cover" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <Image src="/assets/kitchenstaff3.png" alt="Staff" fill className="object-cover" />
              </div>
              <div className="relative col-span-2 h-[160px] rounded-3xl overflow-hidden shadow-lg">
                <Image src="/assets/tree_planting.png" alt="Grounds" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px]">Scenic Outdoor Spaces</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <section className="py-20 bg-black text-white rounded-[3rem] px-8 sm:px-16">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-bold mb-4">Beyond Accommodation</h2>
              <p className="text-sm text-brand-200 font-medium">We offer additional professional services for the wider community.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { icon: <Briefcase />, title: "Grounds for Hire", desc: "Scenic spaces for events and picturesque settings." },
                { icon: <Users />, title: "Conference Rooms", desc: "Elegant boardrooms for professional gatherings." },
                { icon: <Coffee />, title: "Cafeteria Service", desc: "Open for external bookings and special events." },
                { icon: <ShoppingBag />, title: "Tuck Shop", desc: "Convenient snacks and daily essentials for residents." },
                { icon: <Headphones />, title: "24/7 Support", desc: "Our team is always available for assistance." },
                { icon: <Zap />, title: "Maintenance", desc: "Rapid response team for all facility needs." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-brand-400 [&>svg]:w-6 [&>svg]:h-6">{item.icon}</div>
                  <h4 className="text-xs font-bold uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-black/5 text-center">
        <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest">© 2026 KAFOCA Mukuru Studyville</p>
      </footer>
    </div>
  );
}
