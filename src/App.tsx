/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Star, Search, Target, Cpu, Users, CheckCircle2, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function App() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = ["HOME", "ABOUT", "SERVICES", "PROJECTS", "REVIEWS", "BLOG", "CONTACT"];

  return (
    <div className="min-h-screen font-sans relative selection:bg-violet-500/30 overflow-x-hidden">
      {/* Base Pattern Background */}
      <div className="fixed inset-0 -z-50 bg-[#0a0a0a] bg-pattern opacity-100" />
      
      {/* Background Overlay Gradient (4-Way Vignette) */}
      <div 
        className="fixed inset-0 -z-40 pointer-events-none"
        style={{ 
          backgroundImage: `
            linear-gradient(to bottom, black 0%, black 15%, transparent 40%, transparent 60%, black 85%, black 100%),
            linear-gradient(to right, black 0%, transparent 10%, transparent 90%, black 100%)
          `
        }} 
      />

      {/* Top Gradient Shade - Pixel Perfect refinement for Image 2 */}
      <motion.div 
        animate={{ opacity: isScrolled ? 0 : 1 }}
        style={{ pointerEvents: 'none' }}
        className="fixed top-0 left-0 right-0 h-32 z-40 bg-[#654991]/90 blur-[40px] -translate-y-4" 
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 transition-all duration-300 ${
          isScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5 py-3" : "bg-transparent py-4 md:py-8"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dow2sbjsp/image/upload/v1777544631/y7q7rzZbi8QBF6gX9yfO8AMg_u9rlq4.webp" 
            alt="Creative 360 Pro Logo" 
            className="h-8 md:h-12"
          />
        </div>

        {/* Center Nav - Pill (Desktop) */}
        <div className={`hidden lg:flex items-center transition-all duration-300 ${
          isScrolled ? "bg-white/5" : "bg-black/80"
        } border border-white/10 rounded-full px-1.5 py-1`}>
          {navItems.map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-5 py-2 text-[11px] font-bold tracking-widest transition-all duration-300 ${
                idx === 0 
                  ? `bg-[#1a1a1a] text-[#6b4d9a] shadow-[0_0_20px_rgba(107,77,154,0.3)] rounded-full` 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button className="group flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-bold bg-[#6b4d9a] text-white border border-white/20 rounded-full hover:bg-white hover:text-[#6b4d9a] transition-all duration-400">
            <span className="font-unbounded font-bold tracking-tight hidden sm:inline">(973) 563-1729</span>
            <Phone size={14} className="sm:group-hover:hidden transition-all" />
            <ArrowRight size={14} className="hidden sm:group-hover:block transition-all animate-in slide-in-from-left-1" />
          </button>
          
          <button 
            className="lg:hidden p-2 text-white bg-white/5 border border-white/10 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[49] bg-[#0a0a0a] pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center pt-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold font-unbounded text-white tracking-widest hover:text-violet-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-24 pb-12 md:pt-48 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-unbounded text-[24px] md:text-[50px] leading-[1.1] font-normal tracking-tight mb-4 md:mb-8"
          >
            STOP SEARCHING
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-unbounded text-[32px] sm:text-[40px] md:text-[70px] leading-[1.2] font-normal tracking-tighter mb-12 md:mb-20 text-[#a390c5] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] uppercase"
          >
            YOU&apos;VE FOUND THE TOP <br className="hidden md:block" />
            DIGITAL MARKETING <br className="hidden md:block" />
            AGENCY
          </motion.h1>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-start md:-mt-4">
            {/* Left Box: Reviews Card */}
            <div className="lg:col-span-5 flex flex-col items-start pt-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#0c0c0c] p-5 md:p-6 rounded-[24px] md:rounded-[32px] shadow-[0_25px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group w-full max-w-full md:max-w-[380px]"
              >
                <p className="text-[10px] md:text-[12px] font-normal tracking-[0.1em] mb-0 text-white/80 uppercase font-sans px-2 text-center md:text-left">
                  Our Clients Love Working With Us
                </p>
                <div className="h-px w-full bg-white/10 mt-[5px] mb-[5px]" />
                <div className="flex items-center justify-center md:justify-start gap-4 px-2 py-2">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#4285F4]">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={11} fill="#fbbf24" className="text-amber-400" />)}
                    </div>
                    <p className="text-sm font-bold text-white font-sans">267+ 5 Star Reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Description & CTA */}
            <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10 pt-4 md:pt-14">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[17px] md:text-[20px] text-gray-200 leading-[1.6] font-normal font-sans text-center lg:text-left"
              >
                Most agencies are great at sending monthly reports full of &ldquo;vanity metrics&rdquo; that don&apos;t pay the bills. We&apos;re different. We operate like a pack of wolves - calculated, aggressive, and hitting your market from every possible angle to ensure your competitors never see you coming.
              </motion.p>
              
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn-gradient w-full py-5 md:py-6 rounded-full flex items-center justify-center gap-4 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase group transition-all duration-300 shadow-xl shadow-violet-500/10"
              >
                Book a Call With Us
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Social Proof Section (Bottom) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 md:mt-32 py-6 md:py-6 px-4 md:px-16 bg-[#0c0c0c]/30 rounded-full border-t border-[#654a91] flex flex-row items-center justify-center gap-4 sm:gap-10 md:gap-20 max-w-4xl mx-auto backdrop-blur-2xl"
          >
            {/* Google Reviews */}
            <div className="shrink-0 flex items-center justify-center">
              <img 
                src="https://framerusercontent.com/images/fmhinA849mNotIjj65C3PSSHNQ.png?width=993&height=400" 
                alt="Google Reviews" 
                className="h-6 sm:h-10 md:h-16 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

            {/* Google Partner */}
            <div className="shrink-0 flex items-center justify-center">
              <img 
                src="https://www.gstatic.com/partners/badge/images/2025/PartnerBadgeClickable.svg" 
                alt="Google Partner" 
                className="h-8 sm:h-12 md:h-20 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

            {/* Three Best Rated */}
            <div className="shrink-0 flex items-center justify-center">
              <img 
                src="https://threebestrated.com/awards/advertising_agencies-newark-2025-drk.svg" 
                alt="Three Best Rated" 
                className="h-10 sm:h-14 md:h-24 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Our Story Section */}
          <section id="about" className="mt-24 md:mt-[120px] grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left side: Graphic Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full flex justify-center lg:-ml-12 overflow-visible"
            >
              <img 
                src="https://framerusercontent.com/images/PxRhqFuVPHYeB6S8CNV2ylqx3SM.png?width=1000&height=1000" 
                alt="Digital Marketing Strategy Graphic" 
                className="w-full sm:w-[80%] md:w-[100%] lg:w-[130%] h-auto max-h-[400px] md:max-h-[700px] drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)] object-contain"
              />
            </motion.div>

            {/* Right side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start gap-6 md:gap-8"
            >
              {/* Badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <div className="w-4 h-4 rounded-sm border border-violet-400 rotate-45 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                </div>
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] text-gray-300 uppercase font-sans">Our Story</span>
              </div>

              {/* Heading */}
              <h3 className="font-unbounded text-[28px] md:text-[40px] leading-[1.2] font-normal text-white">
                The Team Behind <br /> the Results
              </h3>

              {/* Paragraphs */}
              <div className="space-y-6 md:space-y-8 font-sans text-[16px] md:text-[20px] leading-[1.6] md:leading-[30px] font-normal text-gray-300">
                <p>
                  With a powerhouse team of over 50 specialists based in the United States, we provide cutting-edge digital marketing strategies to a diverse portfolio of 400+ American businesses. As the top-rated SEO agency on Google, we maintain a stellar 5-star rating backed by more than 450 verified client reviews.
                </p>
                <p>
                  Statistics are great, but what actually matters is your ROI. Our mission is straightforward: we amplify your online visibility to directly increase your revenue. We don't just promise results; we deliver them. By navigating the most competitive search landscapes in the country, we've generated millions in additional profit for our partners, moving them from page ten to the #1 spot.
                </p>
              </div>
            </motion.div>
          </section>

          {/* End-to-End Solutions Section */}
          <section id="services" className="mt-24 md:mt-40 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Right side for mobile, Left for Desktop: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start gap-6 md:gap-8 order-2 lg:order-1"
            >
              {/* Heading */}
              <h3 className="font-unbounded text-[28px] md:text-[40px] leading-[1.2] font-normal text-white">
                End-to-End Solutions
              </h3>

              {/* Paragraphs */}
              <div className="space-y-6 md:space-y-8 font-sans text-[16px] md:text-[20px] leading-[1.6] md:leading-[30px] font-normal text-gray-300">
                <p>
                  <strong>Our Methodology</strong> Claiming to master every facet of the search landscape is a big swing, but it’s one we knock out of the park daily. We operate like a pack of wolves, attacking your competition from every possible flank. We leave no stone unturned (metaphorically, of course).
                </p>
                <p>
                  From deep-layer technical SEO and content marketing to precision on-page optimization, we do it all. As leaders in the American SEO space, we’re already deploying the next-gen strategies other agencies are still trying to figure out. Don’t just take our word for it—check out the data to your right to see why we are a top-tier SEO firm in the USA.
                </p>
              </div>
            </motion.div>

            {/* Left side for mobile, Right for Desktop: Graphic Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full flex justify-center lg:-mr-12 order-1 lg:order-2 overflow-visible"
            >
              <img 
                src="https://framerusercontent.com/images/P5Phd2iqkZFkXruboeXHhT8Pgg.png?width=1000&height=1000" 
                alt="End-to-End Solutions Graphic" 
                className="w-full sm:w-[80%] md:w-[100%] lg:w-[130%] h-auto max-h-[400px] md:max-h-[700px] drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)] object-contain"
              />
            </motion.div>
          </section>

          {/* CTA & Trust Badges Section */}
          <section className="mt-24 md:mt-32 mb-5 relative flex flex-col items-center">
            {/* Radial Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[500px] bg-[#2f2441]/60 blur-[110px] rounded-full -z-10" />
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gradient w-full max-w-[500px] py-6 md:py-7 rounded-full flex items-center justify-center gap-4 text-[11px] md:text-sm font-black tracking-[0.2em] uppercase mb-10 md:mb-14 shadow-2xl shadow-orange-500/20"
            >
              Get 30 Min Free Consultation
              <ArrowRight size={20} />
            </motion.button>

            {/* Trust Badges Container */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 px-4 w-full">
              {[
                { src: "https://framerusercontent.com/images/Wk9abNC6wrvbpFTvRBQEbZlHpBQ.svg", alt: "Semrush" },
                { src: "https://framerusercontent.com/images/OiqLu1V7BGzaa3VAJAPFnyKivA.svg", alt: "HubSpot" },
                { src: "https://framerusercontent.com/images/wOIVYQVwYZeRiPZwWU7LtqCVok.svg", alt: "Meta" },
                { src: "https://framerusercontent.com/images/P1K0vbIuFtj6qDOLBaFZJ5Vt0Zs.svg", alt: "Google Partner" },
                { src: "https://framerusercontent.com/images/ylygHIGZLGQWdyEuzHn11SJt74.svg", alt: "MENA Search Awards" }
              ].map((logo, idx) => (
                <div key={idx} className="bg-[#111111]/80 border border-white/5 p-4 md:py-7 rounded-[18px] md:rounded-[24px] flex items-center justify-center min-w-[100px] md:min-w-[180px] h-16 md:h-20 shadow-xl backdrop-blur-sm">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-6 md:h-10 w-auto object-contain brightness-110"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full py-10 md:py-16 overflow-hidden relative border-y border-white/5 bg-black/40">
          <div className="flex whitespace-nowrap">
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
            >
              {[1, 2].map((group) => (
                <div key={group} className="flex items-center gap-8 md:gap-16">
                  {["Website Design", "Content Marketing", "Digital Agency", "Digital Strategy"].map((item, index) => (
                    <div key={index} className="flex items-center gap-8 md:gap-16">
                      <span className="text-2xl sm:text-4xl md:text-[80px] font-normal font-unbounded text-white tracking-[-0.04em] uppercase leading-none opacity-80">
                        {item}
                      </span>
                      <div className="flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 100 100" className="text-white w-4 h-4 sm:w-6 sm:h-6 md:w-12 md:h-12 opacity-30">
                          <path d="M50 0 L56 44 L100 50 L56 56 L50 100 L44 56 L0 50 L44 44 Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <section id="reviews" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[300px] bg-[#2f2441]/20 blur-[130px] rounded-full -z-10" />
          
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-4 sm:gap-8 md:-space-x-12">
              {[
                { number: "10+", label: "Years of Experience" },
                { number: "2000+", label: "Successful Projects" },
                { number: "1900+", label: "Happy Clients" },
                { number: "267+", label: "5 Star Reviews" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`w-full aspect-square max-w-[160px] md:w-52 md:h-52 rounded-full bg-[#453b56]/80 border border-white/20 backdrop-blur-3xl flex flex-col items-center justify-center text-center p-4 relative group hover:bg-[#453b56] transition-all duration-500 shadow-2xl ${
                    idx % 2 === 1 ? 'md:-translate-y-8' : 'md:translate-y-8'
                  }`}
                  style={{ zIndex: idx }}
                >
                  <span className="text-3xl md:text-5xl font-bold font-sans tracking-tighter mb-1 text-white">{stat.number}</span>
                  <p className="text-[9px] md:text-[11px] font-normal text-gray-200 uppercase tracking-[0.1em] font-sans max-w-[90px] leading-tight">
                    {stat.label}
                  </p>
                  
                  {/* Glowing rim */}
                  <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-white/30 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Best Services Section Wrapper */}
        <div className="w-full bg-black bg-pattern-dark relative overflow-hidden">
          {/* Central Atmospheric Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-violet-600/5 blur-[160px] rounded-full pointer-events-none" />
          
          <section className="py-20 md:py-32 max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-6 md:mb-8"
            >
              <div className="w-4 h-4 rounded-sm border border-violet-400 rotate-45 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
              </div>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] text-gray-300 uppercase font-sans">Our Best Services</span>
            </motion.div>

            {/* Heading */}
            <h3 className="font-unbounded text-3xl md:text-[56px] font-normal text-white mb-6 md:mb-10 max-w-4xl leading-tight">
              The Full Throttle Growth Engine
            </h3>

            {/* Intro Text */}
            <p className="text-[16px] md:text-[20px] leading-[1.6] md:leading-[30px] text-gray-400 max-w-4xl font-sans mb-8 md:mb-12">
              Let’s be real, most agencies in the USA are just collections of freelancers in a trench coat. We’re different. We’ve built a coordinated strike team that hits your market from every angle. Whether we’re rebuilding your digital storefront or hunting down the top spot on Google, our approach is relentless and data-backed.
            </p>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-8 md:px-12 py-5 md:py-6 rounded-full flex items-center gap-3 text-[11px] md:text-sm font-black tracking-widest uppercase mb-16 md:mb-24 shadow-2xl shadow-orange-500/20"
            >
              View All Services
              <ArrowRight size={20} />
            </motion.button>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
              {[
                {
                  icon: <Search className="text-violet-400" size={28} />,
                  title: "SEO (Optimization)",
                  description: "We don’t just \"rank\" websites; we occupy the digital high ground. Our team hunts down the most competitive keywords in the USA and dominates them, dragging your brand into the light."
                },
                {
                  icon: <Target className="text-orange-400" size={28} />,
                  title: "Google Ads",
                  description: "Jump the line with surgical PPC campaigns. No wasted spend, no fluff metrics—just high-intent clicks and a relentless focus on your North American ROI."
                },
                {
                  icon: <Cpu className="text-blue-400" size={28} />,
                  title: "Web Design",
                  description: "Pretty sites are useless if they don't sell. We build high-performance storefronts that look stunning and convert like crazy from sleek UX to fast code."
                },
                {
                  icon: <Users className="text-emerald-400" size={28} />,
                  title: "Social Marketing",
                  description: "Stop shouting into the void. We create thumb-stopping content that turns scrollers into a dedicated community. Manage your voice across the States."
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[linear-gradient(135deg,#674b94_0%,#241a3d_100%)] border border-white/10 rounded-[24px] md:rounded-[40px] p-6 md:p-10 flex flex-col items-start text-left group hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-[60px] rounded-full -z-10" />
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-violet-300 transition-colors duration-500">{service.title}</h4>
                  <p className="text-sm md:text-base text-gray-400 font-sans leading-relaxed mb-6 md:mb-8 flex-grow">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase text-white hover:text-violet-400 transition-colors group/btn">
                    Learn More
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-violet-400/50 transition-colors">
                      <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Feature Detailed Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full mt-10 md:mt-12">
              {/* Card 1: Website Operations */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative min-h-[480px] md:min-h-[520px] rounded-[24px] md:rounded-[40px] overflow-hidden flex flex-col p-6 md:p-12 text-left group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://framerusercontent.com/images/ZTUk0b5iK6nEA7yCLACn1LKtBjU.webp?scale-down-to=512&width=1285&height=1000')` }}
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/60" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-unbounded text-xl md:text-3xl font-normal text-white mb-6 leading-tight">Website Operations</h3>
                  
                  <div className="space-y-2.5 md:space-y-3 mb-6">
                    {[
                      "We detect and resolve issues in real-time",
                      "Direct access to human experts, not bots",
                      "Hands-off updates for speed & security",
                      "Secure daily snapshots at the edge",
                      "Built-in ssl, caching, and advanced shields"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                          <CheckCircle2 size={10} className="text-white" />
                        </div>
                        <span className="text-xs md:text-sm text-gray-200 font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed mb-8 max-w-sm">
                    Keep your website running smoothly and performing at its best with our full-service maintenance solutions.
                  </p>

                  <div className="mt-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-gradient px-6 md:px-8 py-3 md:py-3.5 rounded-full flex items-center gap-2 text-[10px] md:text-sm font-black tracking-widest uppercase shadow-xl w-fit"
                    >
                      HIRE US
                      <ArrowRight size={18} />
                    </motion.button>

                    <div className="flex flex-col items-end">
                      <div className="flex gap-1 mb-1.5">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} md:size={14} fill="#fb923c" className="text-orange-400" />)}
                      </div>
                      <span className="text-sm md:text-lg font-bold text-white italic">“Mindblowing Results.”</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Flexible Support */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative min-h-[480px] md:min-h-[520px] rounded-[24px] md:rounded-[40px] overflow-hidden flex flex-col p-6 md:p-12 text-left group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://framerusercontent.com/images/OP253dOnpn7qMVBxez2GTl2oYeo.jpg?scale-down-to=1024&width=1200&height=900')` }}
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/70" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-unbounded text-xl md:text-3xl font-normal text-white mb-6 leading-tight uppercase">Flexible Support</h3>
                  
                  <div className="space-y-2.5 md:space-y-3 mb-6">
                    {[
                      "Strategic leadership rooted in performance",
                      "Digital strategy & scalability roadmaps",
                      "Budget stewardship & creative direction",
                      "Direct partnership with your internal teams",
                      "Expert Email, SMS, CRM & CRO Execution"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                          <CheckCircle2 size={10} className="text-white" />
                        </div>
                        <span className="text-xs md:text-sm text-gray-200 font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed mb-8 max-w-sm">
                    Actionable, strategic guidance across your entire digital landscape delivered by senior marketers.
                  </p>

                  <div className="mt-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-6 md:px-8 py-3 md:py-3.5 rounded-full flex items-center gap-2 text-[10px] md:text-sm font-black tracking-widest uppercase shadow-xl w-fit"
                    >
                      LET'S CHAT
                      <ArrowRight size={18} />
                    </motion.button>

                    <div className="flex flex-col items-end">
                      <div className="flex gap-1 mb-1.5">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} md:size={14} fill="#fb923c" className="text-orange-400" />)}
                      </div>
                      <span className="text-sm md:text-lg font-bold text-white text-right max-w-[280px]">"Proven results. Real movement."</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* New Section: Conversion-Focused Design Marquee */}
      <div className="w-full py-10 md:py-16 overflow-hidden relative border-t border-white/5 bg-[#0a0a0a] bg-pattern">
        <div className="flex whitespace-nowrap">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
          >
            {[1, 2].map((group) => (
              <div key={group} className="flex items-center gap-8 md:gap-16">
                {["Conversion-Focused Design", "Conversion-Focused Design", "Conversion-Focused Design"].map((item, index) => (
                  <div key={index} className="flex items-center gap-8 md:gap-16">
                    <span className="text-3xl sm:text-4xl md:text-[80px] font-normal font-unbounded text-white tracking-[-0.04em] uppercase leading-none opacity-90">
                      {item}
                    </span>
                    <div className="flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 100 100" className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-12 md:h-12 opacity-30">
                        <path d="M50 0 L56 44 L100 50 L56 56 L50 100 L44 56 L0 50 L44 44 Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Large Gallery Image Section */}
      <section id="projects" className="bg-[#0a0a0a] bg-pattern pb-16 md:pb-32 px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto overflow-hidden rounded-[24px] md:rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/5">
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://framerusercontent.com/images/cZSRzq0SOyVgW917zjEMq8OWk.webp?width=1920&height=1080" 
            alt="Conversion-Focused Design Portfolio" 
            className="w-full h-auto object-cover min-h-[300px]"
          />
        </div>
      </section>

      {/* Footer / Contact (Bottom) */}
      <footer id="contact" className="py-12 md:py-20 bg-black/80 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
               src="https://res.cloudinary.com/dow2sbjsp/image/upload/v1777544631/y7q7rzZbi8QBF6gX9yfO8AMg_u9rlq4.webp" 
               alt="Creative 360 Pro Logo" 
               className="h-10 md:h-12"
            />
            <p className="text-sm text-gray-500 font-sans text-center md:text-left">
              &copy; 2026 Creative 360 Pro. All rights reserved. <br className="md:hidden" />
              Strategic Growth for Modern Brands.
            </p>
          </div>
          <div className="flex gap-8">
             {["Twitter", "LinkedIn", "Instagram"].map(social => (
               <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold font-sans">
                 {social}
               </a>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
