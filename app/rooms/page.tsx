"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";

export default function RoomsPage() {
  const roomTypes = [
    { 
      type: "Single Self Contained", 
      price: "26,000",
      desc: "Utmost privacy and comfort with a private sanctuary feel. Includes ensuite bathroom and private study desk.",
      features: ["Private Bathroom", "Ensuite Study Area", "Wardrobe", "Premium Bedding"]
    },
    { 
      type: "Single (Common Washroom)", 
      price: "23,000",
      desc: "Perfect balance between affordability and comfort for the independent student.",
      features: ["Large Windows", "Study Desk", "Personal Wardrobe", "Shared Clean Facilities"]
    },
    { 
      type: "2 Sharing", 
      price: "20,000",
      desc: "Perfect blend of companionship and privacy with a roommate.",
      features: ["Spacious Layout", "Individual Study Desks", "Ample Storage", "Shared Amenities"]
    },
    { 
      type: "4 Sharing", 
      price: "17,000",
      desc: "Cost-effective solution without compromising comfort and security.",
      features: ["Social Environment", "Individual Lockers", "Shared Study Tables", "Bunk Bed Options"]
    },
    { 
      type: "5 Sharing", 
      price: "15,000",
      desc: "Dynamic social space with essential amenities for active students.",
      features: ["Vibrant Atmosphere", "Essential Storage", "Group Study Access", "Secure Environment"]
    },
    { 
      type: "6 Sharing (Hall)", 
      price: "13,000",
      desc: "Unbeatable value for budget-conscious students in a safe hall environment.",
      features: ["Best Value", "Basic Amenities", "Strong Community", "24/7 Security"]
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation - Changed from fixed to absolute to match home page feel */}
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
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-serif">Find Your Space</h1>
            <p className="text-lg text-black/60 font-medium leading-relaxed max-w-2xl">
              From private sanctuaries to vibrant social halls, we offer diverse accommodation options tailored to every student's budget and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {roomTypes.map((room, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] border border-black/5 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-black/5 transition-all"
              >
                <div className="p-10 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-serif">{room.type}</h2>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-brand-600">KES {room.price}</p>
                      <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest">per month</p>
                    </div>
                  </div>
                  <p className="text-sm text-black/60 font-medium leading-relaxed mb-8">{room.desc}</p>
                  
                  <ul className="grid grid-cols-2 gap-4 mb-10">
                    {room.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-black/40">
                        <CheckCircle2 className="w-4 h-4 text-brand-600" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                    <div className="flex -space-x-2">
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center"><Users className="w-3 h-3" /></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center"><ShieldCheck className="w-3 h-3" /></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold">+2</div>
                    </div>
                    <a 
                      href={`https://wa.me/254714371811?text=${encodeURIComponent(`Hi! I'm interested in booking the ${room.type} room at Kafoca Mukuru Studyville.`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-600 transition-colors"
                    >
                      Book This Space <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-black/5 text-center">
        <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest">© 2026 KAFOCA Mukuru Studyville</p>
      </footer>
    </div>
  );
}
