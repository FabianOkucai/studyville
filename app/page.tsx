"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wifi,
  BookOpen,
  Zap,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  UtensilsCrossed,
  Heart,
  Target,
  Trophy,
  Users,
  GraduationCap,
  Waves,
  Cigarette,
  Coffee,
  ShoppingBag,
  Briefcase,
  Monitor,
  Headphones
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function Home() {


  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-4 sm:px-8 py-6 sm:py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/assets/logo.png"
              alt="Kafoca Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-base sm:text-lg font-bold tracking-tight">
              Kafoca Mukuru <span className="text-black/40">Studyville</span>
            </h1>
          </div>
          <Link
            href="/contact"
            className="text-xs font-bold border border-black/10 px-4 sm:px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-xl order-2 lg:order-1"
            >
              <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-brand-600 mb-4 uppercase">
                A Joint Venture of Excellence
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                Empowering Students Through <br />
                <span className="text-black/30">Quality Living.</span>
              </h1>
              <p className="text-sm sm:text-base text-black/60 mb-8 leading-relaxed font-medium">
                KAFOCA Mukuru Studyville is a premier student residence born from the partnership between
                <span className="text-black font-bold"> DEFOCA</span> and <span className="text-black font-bold">Mukuru Trust</span>.
                Providing secure, high-quality accommodation off Ole Sangale Road.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/rooms"
                  className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-brand-600 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Book Your Space <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/5 order-1 lg:order-2"
            >
              <Image
                src="/assets/hero.png"
                alt="KAFOCA Premises"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hall Statistics */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-3xl font-bold mb-2">218</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400">Men's Hall Beds</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">218</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400">Women's Hall Beds</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">64</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400">Post-Graduate Rooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Partnership */}
      <section className="py-24 bg-gray-50 border-y border-black/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Legacy & Partnership</h2>
              <p className="text-sm text-black/60 leading-relaxed font-medium">
                KAFOCA Mukuru Studyville is a joint project of the <span className="text-black font-bold">Defence Forces Comrades Association (DEFOCA)</span> and <span className="text-black font-bold">Mukuru Trust</span>. Together, we blend military-grade discipline with charitable care to provide the best university student accommodation in Kenya.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-white border border-black/5 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-4">DEFOCA</h3>
                <p className="text-xs text-black/60 leading-relaxed font-medium">
                  Promotes the welfare of servicing and retired members of the Defence Forces by alleviating poverty and taking care of members in need.
                </p>
              </div>
              <div className="p-8 bg-white border border-black/5 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-4">Mukuru Trust</h3>
                <p className="text-xs text-black/60 leading-relaxed font-medium">
                  Established in 2001 as an initiative of professional Kenyans seeking to assist the less privileged members of society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-serif">Our Mission</h3>
                  <p className="text-sm text-black/60 leading-relaxed font-medium">
                    To provide high-quality secure residential accommodation for students in an atmosphere of trust, mutual cooperation, and care—nurturing their academic growth and self-fulfillment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-serif">Our Vision</h3>
                  <p className="text-sm text-black/60 leading-relaxed font-medium">
                    To provide the best accommodation facility for university students in Kenya.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-12 rounded-[2.5rem]">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-8">Core Values</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[10px] font-bold uppercase tracking-widest">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  Openness & Transparency
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  Mutual Respect
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  Self Discipline
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  Continuous Progress
                </li>
                <li className="flex items-center gap-3 sm:col-span-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  Good Corporate Citizenship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Leadership / Directors */}
      <section className="py-24 bg-gray-50 border-y border-black/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-serif">Board of Directors</h2>
            <p className="text-xs font-bold text-black/40 uppercase tracking-widest">Distinguished Governance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-8 border-b border-black/5 pb-4">DEFOCA Directors</h3>
              <div className="space-y-4">
                {[
                  { name: "Gen CM Kahariri", role: "Chief of Defence Forces" },
                  { name: "Lt Gen JM Omenda", role: "Vice Chief of Defence Forces" },
                  { name: "Lt Gen DK Ketter", role: "Commander Kenya Army" },
                  { name: "Maj Gen B Waliaula", role: "Commander Kenya Air Force" },
                  { name: "Maj Gen PO Otieno", role: "Commander Kenya Navy" }
                ].map((d, i) => (
                  <div key={i} className="flex justify-between items-center text-xs font-bold group">
                    <span className="text-black group-hover:text-brand-600 transition-colors">{d.name}</span>
                    <span className="text-black/30 font-medium text-[10px]">{d.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-8 border-b border-black/5 pb-4">Mukuru Trust Directors</h3>
              <div className="space-y-4">
                {[
                  { name: "Dr Kamithi Ng'ang'a", role: "ENVIRONMENTALIST" },
                  { name: "Amb Muthoni Gichohi", role: "LAWYER" },
                  { name: "Prof David Sperling", role: "UNIVERSITY PROFESSOR" },
                  { name: "Mr Nyaga Boore Kithinji", role: "LAWYER / QS" }
                ].map((d, i) => (
                  <div key={i} className="flex justify-between items-center text-xs font-bold group">
                    <span className="text-black group-hover:text-brand-600 transition-colors">{d.name}</span>
                    <span className="text-black/30 font-medium text-[10px]">{d.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Studyville Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-serif">Life at Studyville</h2>
            <p className="text-sm text-black/60 font-medium">Building a community through shared experiences and quality care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/tree_planting.png"
                alt="Tree Planting Event"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-xs font-bold uppercase tracking-widest">Environmental Initiative</p>
              </div>
            </div>
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg lg:mt-8">
              <Image
                src="/assets/residents_visiting_other_students.png"
                alt="Community Interaction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-xs font-bold uppercase tracking-widest">Student Community</p>
              </div>
            </div>
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/food.png"
                alt="Quality Catering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-xs font-bold uppercase tracking-widest">Nutritious Meals</p>
              </div>
            </div>
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg lg:mt-8">
              <Image
                src="/assets/kitchenstaff.png"
                alt="Our Dedicated Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-xs font-bold uppercase tracking-widest">Professional Staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-serif">Voices of Our Residents</h2>
            <p className="text-sm text-black/60 font-medium">Hear from the students who call KAFOCA Mukuru Studyville home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The environment here is perfectly suited for academic excellence. The quiet study rooms and fast internet have been a game changer for my grades.",
                author: "Sarah J.",
                school: "Strathmore University"
              },
              {
                quote: "Security was my parents' main concern, but at KAFOCA, we feel completely safe. The staff is professional and always ready to help.",
                author: "Kevin M.",
                school: "University of Nairobi"
              },
              {
                quote: "Living here feels like being part of a big family. The mentorship programs and community events make student life so much more fulfilling.",
                author: "Faith K.",
                school: "Daystar University"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white border border-black/5 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all"
              >
                <div className="mb-6 text-brand-600">
                   {[...Array(5)].map((_, i) => (
                     <span key={i} className="text-lg">★</span>
                   ))}
                </div>
                <p className="text-sm italic text-black/70 mb-8 leading-relaxed font-serif">"{t.quote}"</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest">{t.author}</p>
                  <p className="text-[10px] font-medium text-black/30 uppercase tracking-widest">{t.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-20 border-t border-black/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/assets/logo.png"
                  alt="Kafoca Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain grayscale"
                />
                <h2 className="text-lg font-bold tracking-tight">Kafoca Mukuru Studyville</h2>
              </div>
              <p className="text-xs sm:text-sm text-black/60 max-w-sm leading-relaxed font-medium">
                Premier student residence at Madaraka Shopping Center.
                Designed for the ambitious student. Open Monday to Sunday, 08:00 AM — 05:00 PM.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">Address</h3>
              <div className="flex items-start gap-3 text-xs sm:text-sm font-bold">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0" />
                <span>Next to Madaraka Shopping Center,<br />off Ole Sangale Road.<br />P.O Box 3141, 00506, Nairobi.</span>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">Contact</h3>
              <div className="space-y-4 text-xs sm:text-sm font-bold">
                <div className="space-y-2">
                  <a href="https://wa.me/254714371811" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-600 transition-colors">
                    <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>0714 371 811</span>
                  </a>
                  <a href="https://wa.me/254738038456" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-600 transition-colors">
                    <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>0738 038 456</span>
                  </a>
                </div>
                <p className="flex items-center gap-3">
                  <span className="text-brand-600 font-bold italic">@</span>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@kmstudyville.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">
                    info@kmstudyville.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-[8px] sm:text-[10px] text-black/40 font-bold uppercase tracking-widest">© 2026 KAFOCA Mukuru Studyville</p>
            <div className="flex gap-6 text-[8px] sm:text-[10px] text-black/40 font-bold uppercase tracking-widest">
              <a href="https://www.instagram.com/kafocamukurustudyville/" target="_blank" className="hover:text-black">Instagram</a>
              <a href="https://www.facebook.com/kafoca" target="_blank" className="hover:text-black">Facebook</a>
              <a href="https://x.com/DStudyville" target="_blank" className="hover:text-black">X</a>
              <a href="https://www.tiktok.com/@kafocamukuru" target="_blank" className="hover:text-black">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

