'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'ai-espresso',
    title: 'AI Espresso',
    category: 'Newsletter & Community',
    year: '2025',
    status: 'active',
    highlight: '16th Fastest Growing Worldwide',
    metric: '6,000+ readers in 6 months',
    image: '/AI Espresso.png',
    description: `AI Espresso is my operator-first newsletter where AI becomes usable structure, not noise. It's framed through a Fallout-inspired world, with me as the barista-guide serving "espresso shots" of clarity: practical frameworks, checklists, and real examples to help founders and teams make better decisions, build stronger systems, and execute with less fragility.

No trend-chasing. Just disciplined AI for real work, plus an optional Advanced Vault for deeper technical and strategic layers.

Results: 16th fastest growing newsletter worldwide on Substack, with 6,000+ readers acquired in less than 6 months.`,
  },
  {
    id: 'morfeus',
    title: 'Morfeus',
    category: 'AI Consulting',
    year: '2024',
    status: 'active',
    highlight: 'AI Implementation for Enterprises',
    metric: 'Custom AI Agents',
    image: '/MORFEUS.png',
    description: `In recent years, I've integrated artificial intelligence extensively into the projects I lead — and the results have been game-changing. That journey led to the birth of Morfeus, a venture I co-founded with two partners.

Our vision: helping companies adopt AI consciously and effectively, through the development of custom AI Agents and tailored solutions that actually solve business problems.`,
  },
  {
    id: 'automazione-vincente',
    title: 'Automazione Vincente',
    category: 'Automation & E-commerce',
    year: '2022',
    status: 'completed',
    highlight: 'AI-Powered Email Marketing',
    metric: '+30% Cart Recovery',
    image: '/Automazione-vincente-image-backround-1536x1024.png',
    description: `The protocol to exploit email marketing and automation to increase performance: a step by step procedure to optimize an effective email marketing system thanks to AI and the skills of our team.

Results: Ensures no email ends up in spam, recovers 30% more abandoned carts, and increases the lifetime value of every single customer.`,
  },
  {
    id: 'dsyre-school',
    title: 'DSYRE School',
    category: 'Education Platform',
    year: '2020',
    status: 'completed',
    highlight: 'Gamer Academy',
    metric: 'Warzone Masterplayer',
    image: '/DSYRE school.png',
    description: `The first projects I worked on in my career were infoproducts and video courses. Over the years, my team and I have developed great skills in launching online schools and academies.

Given this past and my passion for the gaming world, together with our partner Dsyre, a rapidly growing Italian Esports Team, we opened the doors to the online training academy for Gamers by launching the first course in July 2022: "Warzone Masterplayer".`,
  },
  {
    id: 'lead-by-neo',
    title: 'Lead by Neo',
    category: 'AI Lead Generation',
    year: '2019',
    status: 'completed',
    highlight: 'AI-Powered Lead Generation',
    metric: 'High-Quality Appointments',
    image: '/LEAD-BY-NEO-1536x1024.png',
    description: `We are an Artificial Intelligence Consulting Agency. We take care of generating highly profiled appointments for our partners.

Our promise: "We use the power of Artificial Intelligence to enable our partners to effortlessly generate a continuous flow of high-quality appointments and leads in less than 60 days, bypassing the limitations and inefficiencies of traditional lead generation approaches."`,
  },
];

export const SelectedWorkSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const activeProject = projects.find(p => p.id === hoveredProject);
  const openProject = projects.find(p => p.id === selectedProject);

  return (
    <section 
      id="work"
      className="relative bg-[#050508] py-32 md:py-48 min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-accent/60" />
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-accent/80 font-bold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight uppercase">
            Selected Work
          </h2>
          <p className="mt-6 text-lg text-white/40 max-w-xl leading-relaxed">
            Systems built. Results delivered. Some of the projects and collaborations of the last 4 years.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-white/5 last:border-b"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer">
                
                {/* LEFT: Title & Info */}
                <div className="flex items-center gap-6 md:gap-12">
                  {/* Index */}
                  <span className={`font-mono text-sm md:text-base transition-colors duration-500 ${
                    hoveredProject === project.id ? 'text-accent' : 'text-white/20'
                  }`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  
                  {/* Title */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <h3 className={`text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter transition-all duration-500 ${
                        hoveredProject === project.id ? 'text-white' : 'text-white/20'
                      }`}>
                        {project.title}
                      </h3>
                      
                      {/* Status Badge */}
                      {project.status === 'active' ? (
                        <span className="hidden md:inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          At Work
                        </span>
                      ) : (
                        <span className="hidden md:inline-flex px-3 py-1 bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
                          Completed
                        </span>
                      )}
                    </div>
                    
                {/* Highlight on hover */}
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    height: hoveredProject === project.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className={`text-sm md:text-base font-medium tracking-wide ${
                    project.status === 'active' ? 'text-emerald-400' : 'text-accent'
                  }`}>
                    {project.highlight}
                  </p>
                </motion.div>
                  </div>
                </div>

                {/* RIGHT: Metadata */}
                <div className={`flex items-center gap-8 md:gap-12 transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-30'
                }`}>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-white/60">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Arrow indicator */}
                  <motion.div 
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
                    animate={{ 
                      scale: hoveredProject === project.id ? 1.1 : 1,
                      borderColor: hoveredProject === project.id 
                        ? project.status === 'active' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(53, 75, 181, 0.5)' 
                        : 'rgba(255,255,255,0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className={`text-lg transition-all duration-300 ${
                      hoveredProject === project.id 
                        ? project.status === 'active' ? 'text-emerald-400 translate-x-0.5' : 'text-accent translate-x-0.5'
                        : 'text-white/30'
                    }`}>
                      →
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FLOATING IMAGE ON HOVER */}
        <AnimatePresence>
          {activeProject && activeProject.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed pointer-events-none z-50 hidden lg:block"
              style={{
                left: mousePosition.x + 30,
                top: mousePosition.y - 150,
              }}
            >
              <div className="relative w-[400px] h-[280px] rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0f]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Metric overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/60 font-bold">
                    {activeProject.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {openProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0f] border border-white/10 rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                ✕
              </button>

              {/* Image Header */}
              {openProject.image && (
                <div className="relative w-full h-64 md:h-80">
                  <img
                    src={openProject.image}
                    alt={openProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Status Badge */}
                {openProject.status === 'active' ? (
                  <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Currently Active
                  </span>
                ) : (
                  <span className="inline-flex px-3 py-1 mb-6 bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
                    Completed Project
                  </span>
                )}

                {/* Title */}
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                  {openProject.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-6 mb-10 text-white/40">
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">{openProject.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-mono text-xs">{openProject.year}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className={`font-mono text-xs ${openProject.status === 'active' ? 'text-emerald-400' : 'text-accent'}`}>
                    {openProject.metric}
                  </span>
                </div>

                {/* Description */}
                <div className="prose prose-invert prose-lg max-w-none">
                  {openProject.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-white/70 leading-relaxed mb-6 text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlight */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/30 mb-4 block font-bold">Key Result</span>
                  <p className={`text-2xl md:text-3xl font-bold tracking-tight ${
                    openProject.status === 'active' ? 'text-emerald-400' : 'text-accent'
                  }`}>
                    {openProject.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Frame borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-30" />
    </section>
  );
};
