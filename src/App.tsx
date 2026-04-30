/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-pattern selection:bg-violet-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dow2sbjsp/image/upload/v1777544631/y7q7rzZbi8QBF6gX9yfO8AMg_u9rlq4.webp" 
            alt="Creative 360 Pro Logo" 
            className="h-10 md:h-12"
          />
        </div>

        {/* Center Nav - Pill */}
        <div className="hidden lg:flex items-center bg-[#0d0d0d]/90 border border-white/5 rounded-full px-1.5 py-1">
          {["HOME", "ABOUT", "SERVICES", "PROJECTS", "REVIEWS", "BLOG", "CONTACT"].map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-5 py-2 text-[11px] font-bold tracking-widest transition-all duration-300 ${
                idx === 0 
                  ? "bg-[#1a1a1a] text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.2)] rounded-full" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 px-6 py-2 text-sm font-bold border border-white/20 rounded-full hover:bg-white/5 transition-all">
            <span className="hidden sm:inline text-gray-100">(973) 563-1729</span>
            <Phone size={14} className="text-gray-400" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-32 pb-20 md:pt-48 md:px-12">
        <div className="max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-4"
          >
            STOP SEARCHING
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter mb-16 text-gradient uppercase"
          >
            YOU&apos;VE FOUND THE TOP <br className="hidden md:block" />
            DIGITAL MARKETING <br className="hidden md:block" />
            AGENCY
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            {/* Left: Reviews Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-6 rounded-3xl max-w-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-violet-500/20" />
              <p className="text-[10px] font-bold tracking-[0.2em] mb-4 text-gray-300 uppercase">
                Our Clients Love Working With Us
              </p>
              <div className="flex items-center gap-4 py-4 border-t border-white/5">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-blue-500">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="#fbbf24" className="text-amber-400" />)}
                  </div>
                  <p className="text-sm font-bold">267+ 5 Star Reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Description & CTA */}
            <div className="flex flex-col gap-8 md:pl-12">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
              >
                Most agencies are great at sending monthly reports full of &ldquo;vanity metrics&rdquo; that don&apos;t pay the bills. We&apos;re different. We operate like a pack of wolves - calculated, aggressive, and hitting your market from every possible angle to ensure your competitors never see you coming.
              </motion.p>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gradient px-10 py-5 rounded-full flex items-center justify-center gap-3 text-sm font-black tracking-widest uppercase group overflow-hidden relative shadow-2xl shadow-violet-500/20"
              >
                Book a Call With Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Social Proof (Moved here) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 glass rounded-3xl md:rounded-full px-8 py-6 md:py-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-blue-500 font-bold text-lg">Google</span>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="#fbbf24" className="text-amber-400" />)}
                </div>
                <span className="text-[8px] font-bold tracking-tighter uppercase">Reviews</span>
              </div>
            </div>

            <div className="hidden md:block h-8 w-px bg-white/10" />

            <div className="flex items-center gap-2 shrink-0">
              <img 
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" 
                alt="Google Partner" 
                className="h-4 opacity-80"
              />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Partner</span>
            </div>

            <div className="hidden md:block h-8 w-px bg-white/10" />

            <div className="flex items-center gap-2 shrink-0">
              <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-amber-400/50 rounded-full animate-[spin_10s_linear_infinite]" />
                  <Star size={18} fill="#fbbf24" className="text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-bold uppercase leading-none">Best</span>
                <span className="text-[8px] font-bold uppercase leading-none">Agency</span>
                <span className="text-[8px] font-bold uppercase leading-none">2024</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

    </div>
  );
}
