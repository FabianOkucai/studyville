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
  const roomRates = [
    { 
      type: "Single Self Contained", 
      price: "26,000",
      desc: "Utmost privacy and comfort with a private sanctuary feel."
    },
    { 
      type: "Single (Common Washroom)", 
      price: "23,000",
      desc: "Perfect balance between affordability and comfort."
    },
    { 
      type: "2 Sharing", 
      price: "20,000",
      desc: "Perfect blend of companionship and privacy."
    },
    { 
      type: "4 Sharing", 
      price: "17,000",
      desc: "Cost-effective solution without compromising comfort."
    },
    { 
      type: "5 Sharing", 
      price: "15,000",
      desc: "Dynamic social space with essential amenities."
    },
    { 
      type: "6 Sharing (Hall)", 
      price: "13,000",
      desc: "Unbeatable value for budget-conscious students."
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-4 sm:px-8 py-6 sm:py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white font-bold text-lg shrink-0">K</div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight">
              Kafoca <span className="text-black/40">Mukuru</span>
            </h1>
          </div>
          <Link 
            href="/contact" 
            className="text-xs font-bold border border-black/10 px-4 sm:px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all"
          >
            Contact
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
                <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-brand-600 transition-all flex items-center justify-center gap-2 group">
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
                src="/images/hero.png" 
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

      {/* Accommodation Features */}
      <section className="py-24 bg-gray-50 border-y border-black/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-serif">Accommodation Features</h2>
            <p className="text-sm text-black/60 font-medium leading-relaxed">
              Every resident enjoys a comprehensive suite of professional services and modern amenities designed for comfort and success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
             {[
               { icon: <Wifi />, label: "Free WIFI" },
               { icon: <CheckCircle2 />, label: "Laundry" },
               { icon: <Users />, label: "Mentorship" },
               { icon: <UtensilsCrossed />, label: "Full Board" },
               { icon: <Monitor />, label: "DSTV" },
               { icon: <Waves />, label: "Instant Showers" },
               { icon: <ShieldCheck />, label: "CCTV" },
               { icon: <BookOpen />, label: "Study Room" }
             ].map((feat, i) => (
               <div key={i} className="flex flex-col items-center text-center group">
                 <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-brand-600 mb-3 group-hover:bg-brand-600 group-hover:text-white transition-all">
                   {feat.icon}
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">{feat.label}</span>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomRates.map((room, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl border border-black/5 bg-white flex flex-col justify-between hover:shadow-xl hover:shadow-black/5 transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold text-black mb-2 text-serif">{room.type}</h3>
                  <p className="text-xs text-black/60 mb-6 font-medium leading-relaxed">{room.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-2xl font-bold text-black">KES {room.price}</span>
                    <span className="text-[10px] font-bold text-black/30 uppercase tracking-wider">/ mo</span>
                  </div>
                </div>
                <Link href="/contact" className="w-full py-3 bg-black text-white text-center rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-600 transition-all">
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16">
             <h2 className="text-3xl font-bold mb-4 text-serif">Additional Services</h2>
             <p className="text-sm text-black/60 font-medium">Exceeding expectations through meticulous attention to detail.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Briefcase />, title: "Grounds for Hire", desc: "Scenic spaces for events and picturesque settings." },
              { icon: <Users />, title: "Conference Rooms", desc: "Elegant boardrooms for professional gatherings." },
              { icon: <Coffee />, title: "Cafeteria", desc: "Delightful dining with diverse and fresh menus." },
              { icon: <ShoppingBag />, title: "Tuck Shop", desc: "Convenient snacks and daily essentials." },
              { icon: <Headphones />, title: "Customer Care", desc: "Prompt solutions and attentive service 24/7." },
              { icon: <ShieldCheck />, title: "Tight Security", desc: "Full CCTV coverage and dedicated personnel." },
              { icon: <Zap />, title: "Maintenance", desc: "Reliable and professional housekeeping services." },
              { icon: <BookOpen />, title: "Study Rooms", desc: "Quiet spaces optimized for concentration." }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="text-brand-600 [&>svg]:w-6 [&>svg]:h-6">{item.icon}</div>
                <h4 className="text-xs font-bold uppercase tracking-widest">{item.title}</h4>
                <p className="text-xs text-black/60 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
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

      {/* The Management Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold mb-4 text-serif">The Management Team</h2>
            <p className="text-sm text-black/60 font-medium">Experts in their fields, driven and committed to exceeding expectations.</p>
          </div>

          <div className="space-y-12">
            {[
              { 
                role: "Chief Executive Officer", 
                quote: "Welcome to KAFOCA Mukuru Studyville! We provide accommodation and catering services as curators of growth—actively supporting the personal aspirations of our residents." 
              },
              { 
                role: "Finance & Administration Manager", 
                quote: "We prioritize your comfort and satisfaction. Our dedicated team is committed to ensuring your stay is both pleasant and memorable." 
              },
              { 
                role: "Catering Manager", 
                quote: "KAFOCA–Mukuru Studyville is a home away from home. We offer a balanced diet and delicious meals for both residents and external customers." 
              },
              { 
                role: "Operation & Marketing Manager", 
                quote: "We remain focused on providing dignified accommodation and catering, effectively engaging our audience while upholding the highest standards." 
              },
              { 
                role: "Accommodation Manager", 
                quote: "Our separate male and female halls ensure quality comfort. We offer housekeeping, ample water, weekly laundry, and top-notch security with CCTV surveillance." 
              }
            ].map((member, i) => (
              <div key={i} className="grid md:grid-cols-3 gap-8 items-start border-b border-black/5 pb-12 last:border-0">
                <div className="md:col-span-1">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{member.role}</h4>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm italic text-black/60 font-medium leading-relaxed font-serif">"{member.quote}"</p>
                </div>
              </div>
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
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-lg">K</div>
                <h2 className="text-lg font-bold tracking-tight">Kafoca Mukuru</h2>
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
              <Link href="#" className="hover:text-black">Privacy</Link>
              <Link href="#" className="hover:text-black">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

