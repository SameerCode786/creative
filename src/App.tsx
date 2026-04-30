/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Star, Search, Target, Cpu, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function App() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <div className="min-h-screen font-sans bg-pattern selection:bg-violet-500/30 overflow-x-hidden">
      {/* Top Gradient Shade - Initial State */}
      <motion.div 
        animate={{ opacity: isScrolled ? 0 : 1 }}
        style={{ pointerEvents: 'none' }}
        className="fixed top-0 left-0 right-0 h-64 z-40 bg-gradient-to-b from-[#5b4384]/80 via-[#5b4384]/20 to-transparent" 
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/5 py-3" : "bg-transparent py-6"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dow2sbjsp/image/upload/v1777544631/y7q7rzZbi8QBF6gX9yfO8AMg_u9rlq4.webp" 
            alt="Creative 360 Pro Logo" 
            className="h-10 md:h-12"
          />
        </div>

        {/* Center Nav - Pill */}
        <div className={`hidden lg:flex items-center transition-all duration-300 ${
          isScrolled ? "bg-white/5" : "bg-black/80"
        } border border-white/10 rounded-full px-1.5 py-1`}>
          {["HOME", "ABOUT", "SERVICES", "PROJECTS", "REVIEWS", "BLOG", "CONTACT"].map((item, idx) => (
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

        {/* Right CTA */}
        <div className="flex items-center">
          <button className="group flex items-center gap-2 px-6 py-2 md:py-2.5 text-sm font-bold bg-[#6b4d9a] text-white border border-white/20 rounded-full hover:bg-white hover:text-[#6b4d9a] transition-all duration-400">
            <span className="font-unbounded font-bold tracking-tight">(973) 563-1729</span>
            <Phone size={14} className="group-hover:hidden transition-all" />
            <ArrowRight size={14} className="hidden group-hover:block transition-all animate-in slide-in-from-left-1" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-32 pb-0 md:pt-48 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-unbounded text-[32px] md:text-[50px] leading-[1.1] font-normal tracking-tight mb-8"
          >
            STOP SEARCHING
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-unbounded text-[40px] md:text-[70px] leading-[1.2] font-normal tracking-tighter mb-20 text-gradient uppercase"
          >
            YOU&apos;VE FOUND THE TOP <br className="hidden md:block" />
            DIGITAL MARKETING <br className="hidden md:block" />
            AGENCY
          </motion.h1>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start -mt-4">
            {/* Left Box: Reviews Card */}
            <div className="lg:col-span-5 flex flex-col items-start pt-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#0c0c0c] p-6 rounded-[32px] shadow-[0_25px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group w-full max-w-[380px]"
              >
                <p className="text-[12px] font-normal tracking-[0.1em] mb-0 text-white/80 uppercase font-sans px-2">
                  Our Clients Love Working With Us
                </p>
                <div className="h-px w-full bg-white/10 mt-[5px] mb-[5px]" />
                <div className="flex items-center gap-4 px-2">
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
            <div className="lg:col-span-7 flex flex-col gap-10 pt-10 lg:pt-14">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[20px] text-gray-200 leading-[1.6] font-normal font-sans"
              >
                Most agencies are great at sending monthly reports full of &ldquo;vanity metrics&rdquo; that don&apos;t pay the bills. We&apos;re different. We operate like a pack of wolves - calculated, aggressive, and hitting your market from every possible angle to ensure your competitors never see you coming.
              </motion.p>
              
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn-gradient w-full py-6 rounded-full flex items-center justify-center gap-4 text-xs font-black tracking-[0.2em] uppercase group transition-all duration-300"
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
            className="mt-32 py-4 md:py-6 px-10 md:px-16 bg-black/30 rounded-full border-t border-[#654a91] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-4xl mx-auto backdrop-blur-2xl"
          >
            {/* Google Reviews */}
            <div className="shrink-0">
              <img 
                src="https://framerusercontent.com/images/fmhinA849mNotIjj65C3PSSHNQ.png?width=993&height=400" 
                alt="Google Reviews" 
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Google Partner */}
            <div className="shrink-0">
              <img 
                src="https://www.gstatic.com/partners/badge/images/2025/PartnerBadgeClickable.svg" 
                alt="Google Partner" 
                className="h-14 md:h-20 w-auto"
              />
            </div>

            {/* Three Best Rated */}
            <div className="shrink-0">
              <img 
                src="https://threebestrated.com/awards/advertising_agencies-newark-2025-drk.svg" 
                alt="Three Best Rated" 
                className="h-16 md:h-24 w-auto"
              />
            </div>
          </motion.div>

          {/* Our Story Section */}
          <section className="mt-[60px] grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left side: Graphic Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1.15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:-ml-16 flex justify-center"
            >
              <img 
                src="https://framerusercontent.com/images/PxRhqFuVPHYeB6S8CNV2ylqx3SM.png?width=1000&height=1000" 
                alt="Digital Marketing Strategy Graphic" 
                className="w-full md:w-[120%] lg:w-[130%] h-auto max-h-[700px] drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)] object-contain"
              />
            </motion.div>

            {/* Right side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start gap-8"
            >
              {/* Badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <div className="w-4 h-4 rounded-sm border border-violet-400 rotate-45 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.1em] text-gray-300 uppercase font-sans">Our Story</span>
              </div>

              {/* Heading */}
              <h3 className="font-unbounded text-[40px] leading-[48px] font-normal text-white">
                The Team Behind <br /> the Results
              </h3>

              {/* Paragraphs */}
              <div className="space-y-8 font-sans text-[20px] leading-[30px] font-normal text-gray-300">
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
          <section className="mt-40 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start gap-8 order-2 lg:order-1"
            >
              {/* Heading */}
              <h3 className="font-unbounded text-[40px] leading-[48px] font-normal text-white">
                End-to-End Solutions
              </h3>

              {/* Paragraphs */}
              <div className="space-y-8 font-sans text-[20px] leading-[30px] font-normal text-gray-300">
                <p>
                  <strong>Our Methodology</strong> Claiming to master every facet of the search landscape is a big swing, but it’s one we knock out of the park daily. We operate like a pack of wolves, attacking your competition from every possible flank. We leave no stone unturned (metaphorically, of course the lack of opposable thumbs makes the literal version a struggle for wolves).
                </p>
                <p>
                  From deep-layer technical SEO and content marketing to precision on-page optimization, we do it all. As leaders in the American SEO space, we’re already deploying the next-gen strategies other agencies are still trying to figure out. Don’t just take our word for it check out the data to your right to see why we are a top-tier SEO firm in the USA.
                </p>
              </div>
            </motion.div>

            {/* Right side: Graphic Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:-mr-16 flex justify-center order-1 lg:order-2"
            >
              <img 
                src="https://framerusercontent.com/images/P5Phd2iqkZFkXruboeXHhT8Pgg.png?width=1000&height=1000" 
                alt="End-to-End Solutions Graphic" 
                className="w-full md:w-[120%] lg:w-[130%] h-auto max-h-[700px] drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)] object-contain"
              />
            </motion.div>
          </section>

          {/* CTA & Trust Badges Section */}
          <section className="mt-32 mb-5 relative flex flex-col items-center">
            {/* Radial Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[500px] bg-[#2f2441]/60 blur-[110px] rounded-full -z-10" />
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gradient w-full max-w-[500px] py-7 rounded-full flex items-center justify-center gap-4 text-xs md:text-sm font-black tracking-[0.2em] uppercase mb-10 md:mb-14 shadow-2xl shadow-orange-500/10"
            >
              Get 30 Min Free Consultation
              <ArrowRight size={20} />
            </motion.button>

            {/* Trust Badges Container */}
            <div className="flex flex-wrap justify-center items-center gap-2.5 px-4 w-full">
              {[
                { src: "https://framerusercontent.com/images/Wk9abNC6wrvbpFTvRBQEbZlHpBQ.svg", alt: "Semrush" },
                { src: "https://framerusercontent.com/images/OiqLu1V7BGzaa3VAJAPFnyKivA.svg", alt: "HubSpot" },
                { src: "https://framerusercontent.com/images/wOIVYQVwYZeRiPZwWU7LtqCVok.svg", alt: "Meta" },
                { src: "https://framerusercontent.com/images/P1K0vbIuFtj6qDOLBaFZJ5Vt0Zs.svg", alt: "Google Partner" },
                { src: "https://framerusercontent.com/images/ylygHIGZLGQWdyEuzHn11SJt74.svg", alt: "MENA Search Awards" }
              ].map((logo, idx) => (
                <div key={idx} className="bg-[#111111]/80 border border-white/5 p-4 py-7 rounded-[24px] flex items-center justify-center min-w-[120px] md:min-w-[180px] h-20 shadow-xl backdrop-blur-sm">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-8 md:h-10 w-auto object-contain brightness-110"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full py-12 md:py-16 overflow-hidden relative border-t border-white/5">
          <div className="flex whitespace-nowrap">
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
            >
              {[1, 2].map((group) => (
                <div key={group} className="flex items-center gap-8 md:gap-16">
                  {["Website Design", "Content Marketing", "Digital Agency", "Digital Strategy"].map((item, index) => (
                    <div key={index} className="flex items-center gap-8 md:gap-16">
                      <span className="text-4xl md:text-[80px] font-normal font-unbounded text-white tracking-[-0.04em] uppercase leading-none">
                        {item}
                      </span>
                      <div className="flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 100 100" className="text-white w-6 h-6 md:w-12 md:h-12 opacity-30">
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
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-[#2f2441]/20 blur-[130px] rounded-full -z-10" />
          
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center md:-space-x-20">
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
                  className={`w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#453b56]/60 border border-white/20 backdrop-blur-3xl flex flex-col items-center justify-center text-center p-6 -mb-12 md:mb-0 relative group hover:bg-[#453b56]/80 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${
                    idx % 2 === 1 ? 'md:-translate-y-6' : 'md:translate-y-6'
                  }`}
                  style={{ zIndex: idx }}
                >
                  <span className="text-4xl md:text-5xl font-bold font-sans tracking-tighter mb-1 text-white">{stat.number}</span>
                  <p className="text-[10px] md:text-[12px] font-normal text-gray-200 uppercase tracking-[0.1em] font-sans max-w-[100px] leading-tight">
                    {stat.label}
                  </p>
                  
                  {/* Subtle rim light for the 'chain' effect */}
                  <div className="absolute inset-0 rounded-full border-t border-l border-white/10 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Best Services Section Wrapper */}
        <div className="w-full bg-black">
          <section className="py-32 max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-8"
            >
              <div className="w-4 h-4 rounded-sm border border-violet-400 rotate-45 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.1em] text-gray-300 uppercase font-sans">Our Best Services</span>
            </motion.div>

            {/* Heading */}
            <h3 className="font-unbounded text-4xl md:text-[56px] font-normal text-white mb-10 max-w-4xl leading-tight">
              The Full Throttle Growth Engine
            </h3>

            {/* Intro Text */}
            <p className="text-[20px] leading-[30px] text-gray-400 max-w-4xl font-sans mb-12">
              Let’s be real, most "full-service" agencies in the USA are just collections of freelancers in a trench coat. We’re different. We’ve built a coordinated strike team that hits your market from every conceivable angle. Whether we’re rebuilding your digital storefront from the studs up or hunting down the top spot on Google, our approach is relentless, data-backed, and dare we say a little bit obsessed. We don’t just offer "services", we provide the high-caliber ammunition your brand needs to blow the competition out of the water.
            </p>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-12 py-6 rounded-full flex items-center gap-3 text-sm font-black tracking-widest uppercase mb-24 shadow-2xl shadow-orange-500/20"
            >
              View All Services
              <ArrowRight size={20} />
            </motion.button>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {[
                {
                  icon: <Search className="text-violet-400" size={32} />,
                  title: "SEO (Search Engine Optimization)",
                  description: "We don’t just \"rank\" websites; we occupy the digital high ground. Our team hunts down the most competitive keywords in the USA and dominates them, dragging your brand out of the shadows and onto page one. It’s high-velocity growth that turns searchers into loyal customers."
                },
                {
                  icon: <Target className="text-orange-400" size={32} />,
                  title: "Google Ads",
                  description: "Why wait for the algorithm when you can jump the line? We build surgical PPC campaigns that hit your target audience right where they live. No wasted spend, no \"fluff\" metrics—just high-intent clicks and a relentless focus on your North American ROI."
                },
                {
                  icon: <Cpu className="text-blue-400" size={32} />,
                  title: "Website Design & Development",
                  description: "A pretty site is useless if it doesn’t sell. We build high-performance digital storefronts that look stunning and convert like crazy. From sleek UX to lightning-fast backend code, we ensure your first impression is a knockout punch for every visitor."
                },
                {
                  icon: <Users className="text-emerald-400" size={32} />,
                  title: "Social Media Marketing",
                  description: "Stop shouting into the void. We create thumb-stopping content that turns casual scrollers into a dedicated community. Whether it's TikTok trends or LinkedIn leadership, we manage your voice across the States to make sure your brand is the only one worth talking about."
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-white/10 to-transparent border border-white/5 rounded-[40px] p-10 flex flex-col items-start text-left group hover:border-violet-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/5 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-[60px] rounded-full -z-10" />
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors duration-500">{service.title}</h4>
                  <p className="text-gray-400 font-sans leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white hover:text-violet-400 transition-colors group/btn">
                    Learn More
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-violet-400/50 transition-colors">
                      <ArrowRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
