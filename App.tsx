
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Menu, 
  X,
  Plus,
  ExternalLink,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Moon,
  Sun
} from 'lucide-react';
import { EXPERIENCES, SKILL_GROUPS, PERSONAL_INFO, CONTACT, CASE_STUDIES, PERSONALITY, EDUCATION } from './constants';
import { CaseStudy, Experience, SkillGroup } from './types';

// Portrait Component with 3D Parallax Interaction
const HeroPortrait = ({ mousePos, isDark }: { mousePos: { x: number, y: number }, isDark: boolean }) => {
  const tiltX = (mousePos.y - 50) * 0.1;
  const tiltY = (mousePos.x - 50) * -0.1;

  return (
    <div className="relative w-full h-full group reveal-on-scroll stagger-2 max-w-lg mx-auto md:max-w-none">
      <div 
        className="relative z-10 w-full aspect-[4/5] md:aspect-auto md:h-[75vh] overflow-hidden transition-all duration-700 ease-out rounded-sm"
        style={{ 
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          boxShadow: isDark ? '0 30px 60px -12px rgba(0,0,0,0.7)' : '0 30px 60px -12px rgba(0,0,0,0.1)'
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
          alt="Kashif Iqbal"
          className={`w-full h-full object-cover contrast-125 transition-all duration-1000 ${isDark ? 'grayscale brightness-90 group-hover:grayscale-0' : 'grayscale brightness-100 group-hover:grayscale-0'}`}
        />
        
        {/* Frame Overlay */}
        <div className={`absolute inset-0 border-[8px] md:border-[20px] pointer-events-none transition-all duration-700 ${isDark ? 'border-black/20 group-hover:border-white/5' : 'border-white/20 group-hover:border-black/5'}`}></div>
        
        {/* Interactive Floating Label */}
        <div className={`absolute bottom-4 left-4 md:bottom-10 md:left-10 p-4 md:p-8 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] leading-none mb-1 md:mb-2 opacity-70">Senior Product Designer</p>
          <p className="text-lg md:text-3xl font-black uppercase tracking-tighter">Lahore, PK</p>
        </div>
      </div>
      
      {/* Dynamic Background Shadow/Ghost Frame */}
      <div 
        className={`absolute -top-4 -right-4 md:-top-8 md:-right-8 w-full h-full border -z-10 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6 ${isDark ? 'border-white/5' : 'border-black/5'}`}
        style={{ transform: `translate(${tiltY * 1}px, ${tiltX * 1}px)` }}
      ></div>
    </div>
  );
};

const Logo = ({ isDark }: { isDark: boolean }) => (
  <svg width="100" height="100" viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill={isDark ? "white" : "black"} />
    <rect x="6" y="6" width="88" height="88" rx="14" fill={isDark ? "black" : "white"} />
    <path d="M22 22H38V47L54 22H72L52 50L72 78H54L38 53V78H22V22Z" fill={isDark ? "white" : "black"} />
    <rect x="76" y="32" width="10" height="36" rx="1" fill={isDark ? "white" : "black"} />
  </svg>
);

const useScrollReveal = (dependency?: any) => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dependency]);
};

const Navbar = ({ onHome, isDark, toggleTheme }: { onHome: () => void, isDark: boolean, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onHome();
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${scrolled ? (isDark ? 'bg-black/95 backdrop-blur-xl border-white/10 shadow-2xl py-4' : 'bg-white/95 backdrop-blur-xl border-black/10 shadow-lg py-4') : 'bg-transparent py-8 border-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <button onClick={onHome} className="flex items-center gap-4 group text-left outline-none shrink-0">
          <Logo isDark={isDark} />
          <div className={`text-xl font-black tracking-tighter uppercase overflow-hidden relative h-7 w-28 sm:w-32 md:w-44 ${isDark ? 'text-white' : 'text-black'}`}>
            <span className="block group-hover:-translate-y-full transition-transform duration-500">Kashif Iqbal</span>
            <span className={`block absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${isDark ? 'text-white/50' : 'text-black/50'}`}>Kashif Iqbal</span>
          </div>
        </button>
        
        <div className="hidden md:flex gap-12 items-center">
          {['Work', 'Experience', 'About', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors relative group outline-none ${isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isDark ? 'bg-white' : 'bg-black'}`}></span>
            </button>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-black/5 hover:bg-black/10 text-black'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDark ? 'text-white' : 'text-black'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={`p-2 relative z-50 ${isDark ? 'text-white' : 'text-black'}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {['Work', 'Experience', 'About', 'Contact'].map((item, idx) => (
          <button 
            key={item} 
            onClick={() => handleNavClick(item.toLowerCase())}
            className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-all duration-700 delay-[${idx * 100}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} hover:opacity-30 outline-none`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, className = "", isDark }: { title: string; subtitle?: string, className?: string, isDark: boolean }) => (
  <div className={`mb-8 md:mb-24 reveal-on-scroll ${className}`}>
    <h2 className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6 flex items-center gap-4 ${isDark ? 'text-white/30' : 'text-black/30'}`}>
      <span className={`w-6 md:w-10 h-[1px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></span>
      {title}
    </h2>
    {subtitle && <p className={`text-3xl sm:text-5xl md:text-7xl font-light leading-[1.1] max-w-5xl tracking-tighter break-words ${isDark ? 'text-white' : 'text-black'}`}>{subtitle}</p>}
  </div>
);

const CaseStudyRow: React.FC<{ study: CaseStudy; index: number; onSelect: (s: CaseStudy) => void; isDark: boolean }> = ({ study, index, onSelect, isDark }) => {
  return (
    <div className={`group border-t py-12 md:py-32 grid md:grid-cols-12 gap-8 md:gap-10 items-center reveal-on-scroll ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="md:col-span-5 order-2 md:order-1 stagger-1">
        <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
          <span className={`text-xs md:text-sm font-bold font-mono ${isDark ? 'text-white/20' : 'text-black/20'}`}>/ 0{index + 1}</span>
          <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-3 py-1 border ${isDark ? 'text-white/30 border-white/10' : 'text-black/30 border-black/10'}`}>{study.category}</span>
        </div>
        <h3 className={`text-2xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 group-hover:pl-4 transition-all duration-700 ease-out leading-[0.9] break-words ${isDark ? 'text-white' : 'text-black'}`}>
          {study.title}
        </h3>
        <p className={`text-base md:text-xl max-w-md mb-8 md:mb-12 leading-relaxed font-light ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          {study.description}
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
          {study.tags.map(tag => (
            <span key={tag} className={`text-[8px] md:text-[9px] uppercase font-bold tracking-widest border px-3 md:px-4 py-1.5 md:py-2 transition-all duration-500 ${isDark ? 'border-white/5 bg-white/[0.02] group-hover:border-white/20 text-white/70' : 'border-black/5 bg-black/[0.02] group-hover:border-black/20 text-black/70'}`}>
              {tag}
            </span>
          ))}
        </div>
        <button 
          onClick={() => onSelect(study)}
          className={`group/btn relative inline-flex items-center gap-4 md:gap-6 px-8 md:px-10 py-4 md:py-5 font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em] overflow-hidden transition-all duration-500 hover:pr-14 md:hover:pr-16 w-full sm:w-auto justify-center sm:justify-start ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
        >
          <span className="relative z-10">Case Study</span>
          <ChevronRight size={16} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
          <div className={`absolute top-0 left-0 w-0 h-full transition-all duration-500 ${isDark ? 'bg-black/5 group-hover/btn:w-full' : 'bg-white/5 group-hover/btn:w-full'}`}></div>
        </button>
      </div>
      <div className={`md:col-span-7 order-1 md:order-2 overflow-hidden rounded-sm stagger-2 shadow-2xl ${isDark ? 'bg-[#0d0d0d]' : 'bg-[#f9f9f9]'}`}>
        <div 
          onClick={() => onSelect(study)}
          className={`parallax-wrap aspect-[16/10] grayscale group-hover:grayscale-0 transition-all duration-1000 cursor-pointer ${isDark ? '' : 'brightness-110'}`}
        >
          <img 
            src={study.image} 
            alt={study.title} 
            className="parallax-img w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          <div className={`absolute inset-0 bg-gradient-to-t opacity-80 group-hover:opacity-20 transition-opacity duration-700 ${isDark ? 'from-black/80 to-transparent' : 'from-white/80 to-transparent'}`}></div>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem: React.FC<{ exp: Experience, isDark: boolean }> = ({ exp, isDark }) => (
  <div className={`grid md:grid-cols-12 gap-6 md:gap-8 py-12 md:py-16 border-t group reveal-on-scroll ${isDark ? 'border-white/10' : 'border-black/10'}`}>
    <div className={`md:col-span-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] pt-2 font-mono ${isDark ? 'text-white/30' : 'text-black/30'}`}>
      {exp.period}
    </div>
    <div className="md:col-span-4 stagger-1">
      <h4 className={`text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-500 leading-tight ${isDark ? 'text-white group-hover:text-white' : 'text-black group-hover:text-black'}`}>{exp.role}</h4>
      <p className={`font-medium text-lg mt-2 md:mt-3 uppercase tracking-widest text-[10px] md:text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>{exp.company}</p>
    </div>
    <div className="md:col-span-5 stagger-2 mt-4 md:mt-0">
      <ul className="space-y-4 md:space-y-6">
        {exp.achievements.map((a, i) => (
          <li key={i} className={`text-base md:text-lg leading-relaxed font-light transition-all duration-700 flex gap-4 md:gap-5 ${isDark ? 'text-white/40 group-hover:text-white/80' : 'text-black/40 group-hover:text-black/80'}`}>
            <span className={`mt-3 w-1.5 md:w-2 h-[1px] shrink-0 transition-all duration-500 group-hover:w-4 md:group-hover:w-5 ${isDark ? 'bg-white/20 group-hover:bg-white' : 'bg-black/20 group-hover:bg-black'}`} />
            {a}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectDetailPage: React.FC<{ study: CaseStudy; onBack: () => void; isDark: boolean }> = ({ study, onBack, isDark }) => {
  useScrollReveal(study.id);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [study.id]);

  return (
    <div className={`min-h-screen pt-24 md:pt-32 pb-24 md:pb-48 transition-colors duration-700 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <button onClick={onBack} className={`flex items-center gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] transition-all mb-12 md:mb-20 group ${isDark ? 'text-white/30 hover:text-white' : 'text-black/30 hover:text-black'}`}>
          <ArrowLeft size={16} className="group-hover:-translate-x-3 transition-transform md:w-[18px]" /> Back to Workspace
        </button>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-32 items-end">
          <div className="md:col-span-8 overflow-hidden">
            <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.8em] mb-4 md:mb-8 block ${isDark ? 'text-white/20' : 'text-black/20'}`}>/ {study.category}</span>
            <h1 className={`text-2xl sm:text-5xl md:text-huge font-black uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12 break-words ${isDark ? 'text-white' : 'text-black'}`}>
              {study.title.replace(':', '\n').split('\n').map((part, i) => (
                <React.Fragment key={i}>{part}{i === 0 && <br className="hidden md:block" />}</React.Fragment>
              ))}
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-6 md:mt-8">
              {study.tags.map(tag => (
                <span key={tag} className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] px-4 md:px-6 py-3 md:py-4 border ${isDark ? 'text-white/70 border-white/10 bg-white/5' : 'text-black/70 border-black/10 bg-black/5'}`}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 flex md:justify-end mt-8 md:mt-0">
             <div className={`flex flex-col gap-6 md:gap-8 text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] border-l pl-8 md:pl-12 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                <div className="space-y-1 md:space-y-2">
                  <span className={isDark ? "text-white/20 block" : "text-black/20 block"}>Core Discipline</span>
                  <span className={isDark ? "text-white block" : "text-black block"}>UX Engineering</span>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <span className={isDark ? "text-white/20 block" : "text-black/20 block"}>Project Status</span>
                  <span className={isDark ? "text-white block" : "text-black block"}>Delivered</span>
                </div>
             </div>
          </div>
        </div>

        <div className={`aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden mb-20 md:mb-64 reveal-on-scroll shadow-2xl ${isDark ? '' : 'brightness-105'}`}>
          <img src={study.image} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" alt={study.title} />
        </div>

        <div className="grid md:grid-cols-12 gap-16 md:gap-32 lg:gap-48 items-start mb-24 md:mb-48">
          <div className="md:col-span-4 reveal-on-scroll">
            <SectionHeader title="The Obstacle" isDark={isDark} />
            <p className={`text-xl sm:text-2xl md:text-4xl font-light leading-relaxed mb-8 md:mb-12 ${isDark ? 'text-white/50' : 'text-black/50'}`}>{study.details?.challenge}</p>
          </div>
          <div className="md:col-span-8 reveal-on-scroll stagger-1">
            <SectionHeader title="The Resolution" isDark={isDark} />
            <p className={`text-2xl sm:text-3xl md:text-6xl font-light leading-tight md:leading-[1] mb-12 md:mb-24 tracking-tighter break-words ${isDark ? 'text-white' : 'text-black'}`}>{study.details?.solution}</p>
            
            <div className="grid sm:grid-cols-2 gap-12 md:gap-24">
              <div className="reveal-on-scroll">
                <h4 className={`text-[10px] font-black uppercase tracking-[0.6em] mb-8 md:mb-12 border-b pb-4 ${isDark ? 'text-white/20 border-white/10' : 'text-black/20 border-black/10'}`}>Strategy</h4>
                <ul className="space-y-4 md:space-y-6">
                  {study.details?.process.map((step, i) => (
                    <li key={i} className={`flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-bold tracking-tight transition-colors ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}>
                      <Plus size={14} className={isDark ? "text-white/20" : "text-black/20"} /> {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal-on-scroll stagger-2">
                <h4 className={`text-[10px] font-black uppercase tracking-[0.6em] mb-8 md:mb-12 border-b pb-4 ${isDark ? 'text-white/20 border-white/10' : 'text-black/20 border-black/10'}`}>Outcome</h4>
                <ul className="space-y-6 md:space-y-8">
                  {study.details?.results.map((result, i) => (
                    <li key={i} className={`flex items-start gap-4 md:gap-6 text-xl md:text-3xl font-black tracking-tight group ${isDark ? 'text-white' : 'text-black'}`}>
                      <CheckCircle2 size={24} className="text-green-500 mt-1.5 shrink-0 md:w-[32px] md:h-[32px]" /> {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {study.link && (
              <div className="mt-20 md:mt-32 pt-16 md:pt-32 border-t border-white/10 reveal-on-scroll overflow-hidden">
                <a href={study.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-6 md:gap-8 group/link max-w-full">
                  <span className={`text-xl sm:text-4xl md:text-9xl opacity-10 font-black uppercase group-hover/link:opacity-60 transition-all duration-1000 tracking-tighter truncate ${isDark ? 'text-white' : 'text-black'}`}>Case Study</span>
                  <ExternalLink size={24} className={`transition-all duration-700 md:w-[48px] md:h-[48px] ${isDark ? 'text-white/20 group-hover/link:text-white' : 'text-black/20 group-hover/link:text-black'}`} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isDark, setIsDark] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useScrollReveal(selectedProject);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  useEffect(() => {
    const savedTheme = localStorage.theme;
    if (savedTheme === 'light') {
      setIsDark(false);
    } else if (savedTheme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(!window.matchMedia('(prefers-color-scheme: light)').matches);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToHome = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`selection:bg-white selection:text-black min-h-screen font-inter antialiased overflow-x-hidden transition-colors duration-700 ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'}`} ref={containerRef}>
      <Navbar onHome={goToHome} isDark={isDark} toggleTheme={toggleTheme} />

      {selectedProject ? (
        <ProjectDetailPage study={selectedProject} onBack={goToHome} isDark={isDark} />
      ) : (
        <>
          {/* 1. HERO SECTION */}
          <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-700" 
              style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.03)'} 0%, transparent 45%)` }}
            ></div>
            
            <div className="max-w-[1600px] mx-auto w-full relative z-10">
              <div className="grid md:grid-cols-12 gap-12 md:gap-32 items-center">
                <div className="md:col-span-7">
                  <h1 className="text-huge font-black uppercase mb-8 md:mb-20 select-none tracking-tighter">
                    <span className="reveal-text reveal-delay-1 text-outline-hover cursor-default">Senior</span>
                    <span className="reveal-text reveal-delay-2 text-outline-hover cursor-default">Product</span>
                    <span className="reveal-text reveal-delay-3 flex items-baseline gap-3 md:gap-4 overflow-hidden">
                      {/* Fixed "invisible" text by using a solid color instead of white/10 which breaks stroke transparency */}
                      <span className={`text-outline-hover cursor-default ${isDark ? 'text-white/40' : 'text-black/40'}`}>Designer.</span>
                      <span className={`w-3 h-3 md:w-10 md:h-10 inline-block animate-pulse mb-1.5 md:mb-10 ${isDark ? 'bg-white' : 'bg-black'}`}></span>
                    </span>
                  </h1>
                  
                  <div className="reveal-on-scroll stagger-3">
                    <p className={`text-xl sm:text-3xl md:text-5xl font-extralight leading-tight md:leading-[1.1] max-w-2xl tracking-tight transition-colors duration-700 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                      Architecting <span className={`font-medium italic ${isDark ? 'text-white' : 'text-black'}`}>digital ecosystems</span> for complex logistics and enterprise-scale SaaS platforms.
                    </p>
                    <div className={`mt-8 md:mt-16 flex flex-col gap-4 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] border-l pl-6 md:pl-10 transition-colors duration-700 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500"></span>
                        </span>
                        <span className={isDark ? "text-white/40" : "text-black/40"}>Available for Strategic Roles</span>
                      </div>
                      <span className={isDark ? "text-white/40" : "text-black/40"}>Currently based in Lahore, PK</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 h-[350px] sm:h-[500px] md:h-full mt-10 md:mt-0">
                  <HeroPortrait mousePos={mousePos} isDark={isDark} />
                </div>
              </div>
            </div>
          </section>

          {/* 2. WORK SECTION */}
          <section id="work" className={`py-16 md:py-64 px-6 md:px-12 transition-colors duration-700 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
            <div className="max-w-[1600px] mx-auto">
              <SectionHeader title="Selected Portfolio" subtitle="Translating complex business logic into intuitive user experiences." isDark={isDark} />
              <div className="mt-8 md:mt-32">
                {CASE_STUDIES.map((study, idx) => (
                  <CaseStudyRow key={idx} study={study} index={idx} onSelect={(s) => setSelectedProject(s)} isDark={isDark} />
                ))}
              </div>
            </div>
          </section>

          {/* 3. EXPERIENCE SECTION */}
          <section id="experience" className={`py-16 md:py-64 px-6 md:px-12 border-t transition-colors duration-700 ${isDark ? 'bg-[#0d0d0d] border-white/10' : 'bg-[#fbfbfb] border-black/10'}`}>
            <div className="max-w-[1600px] mx-auto">
              <SectionHeader title="Professional History" className="mb-12 md:mb-20" isDark={isDark} />
              <div className="mt-8 md:mt-16">
                {EXPERIENCES.map((exp, idx) => (
                  <ExperienceItem key={idx} exp={exp} isDark={isDark} />
                ))}
              </div>
            </div>
          </section>

          {/* 4. ABOUT SECTION */}
          <section id="about" className={`py-16 md:py-64 px-6 md:px-12 border-t transition-colors duration-700 ${isDark ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-black/5'}`}>
            <div className="max-w-[1600px] mx-auto">
              <div className="grid md:grid-cols-12 gap-16 md:gap-24 lg:gap-40 items-start">
                <div className="md:col-span-5 reveal-on-scroll">
                  <SectionHeader 
                    title="Capabilities" 
                    subtitle="Bridging business strategy with human centered interaction."
                    isDark={isDark}
                  />
                  <p className={`text-lg sm:text-xl md:text-3xl leading-relaxed mb-12 md:mb-20 font-light max-w-xl ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                    {PERSONAL_INFO.summary}
                  </p>
                  
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 pt-12 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                    <div>
                      <h4 className={`text-[10px] font-black uppercase tracking-[0.6em] mb-8 md:mb-10 ${isDark ? 'text-white/20' : 'text-black/20'}`}>Philosophy</h4>
                      <ul className="space-y-4 md:space-y-6">
                        {PERSONALITY.map(trait => (
                          <li key={trait} className={`text-lg md:text-2xl font-black tracking-tight transition-colors cursor-default ${isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}>{trait}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={`pt-8 sm:pt-0 border-t sm:border-t-0 ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                      <h4 className={`text-[10px] font-black uppercase tracking-[0.6em] mb-8 md:mb-10 ${isDark ? 'text-white/20' : 'text-black/20'}`}>Foundations</h4>
                      <div className="space-y-8">
                        <div>
                          <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 ${isDark ? 'text-white/40' : 'text-black/40'}`}>{EDUCATION.university}</p>
                          <p className={`text-lg md:text-xl font-bold tracking-tight leading-tight ${isDark ? 'text-white' : 'text-black'}`}>{EDUCATION.degree}</p>
                          <p className={`text-[10px] md:text-xs mt-1 ${isDark ? 'text-white/20' : 'text-black/20'}`}>{EDUCATION.period}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 space-y-16 md:space-y-32">
                  {SKILL_GROUPS.map((group) => (
                    <div key={group.category} className={`border-t pt-12 md:pt-16 reveal-on-scroll ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                      <h4 className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] md:tracking-[0.8em] mb-10 md:mb-16 ${isDark ? 'text-white/20' : 'text-black/20'}`}>{group.category}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-12">
                        {group.items.map((skill, i) => (
                          <div key={skill} className="flex items-center gap-4 md:gap-6 group cursor-default stagger-1">
                            <div className={`w-1 md:w-1.5 h-1 md:h-1.5 transition-all duration-500 group-hover:scale-125 ${isDark ? 'bg-white/10 group-hover:bg-white' : 'bg-black/10 group-hover:bg-black'}`}></div>
                            <span className={`text-lg sm:text-2xl md:text-4xl font-bold tracking-tighter transition-all duration-500 ${isDark ? 'text-white/30 group-hover:text-white' : 'text-black/30 group-hover:text-black'}`}>
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. CONTACT SECTION */}
          <section id="contact" className={`py-16 md:py-64 px-6 md:px-12 relative z-10 rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[80px] transition-colors duration-700 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <div className="max-w-[1600px] mx-auto">
              <div className="grid md:grid-cols-2 gap-16 md:gap-40 items-start">
                <div className="reveal-on-scroll">
                  <h2 className="text-4xl sm:text-6xl md:text-[9rem] font-black uppercase tracking-tighter mb-12 md:mb-16 leading-[0.85] md:leading-[0.8] stagger-1 break-words">
                    Let's scale<br />your product.
                  </h2>
                  <div className="space-y-6 md:space-y-12 stagger-2">
                    <a href={`mailto:${CONTACT.email}`} className="group relative block text-lg sm:text-2xl md:text-5xl font-black w-fit transition-all duration-700 overflow-hidden break-all sm:break-normal">
                      <span className="relative z-10 block group-hover:-translate-y-full transition-transform duration-500">{CONTACT.email}</span>
                      <span className={`absolute top-0 left-0 z-10 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${isDark ? 'text-black/40' : 'text-white/40'}`}>{CONTACT.email}</span>
                      <div className={`absolute bottom-0 left-0 w-full h-[3px] md:h-[4px] group-hover:h-full transition-all duration-700 opacity-5 ${isDark ? 'bg-black' : 'bg-white'}`}></div>
                    </a>
                    <p className="text-lg md:text-3xl font-light opacity-60 tracking-tighter font-mono">{CONTACT.phone}</p>
                  </div>
                </div>
                <div className="space-y-12 md:space-y-24 reveal-on-scroll stagger-3">
                  <p className="text-xl sm:text-3xl md:text-6xl font-light leading-tight tracking-tighter">
                    I thrive in solving complex problems with elegant design solutions. Reach out to discuss how we can partner on your next venture.
                  </p>
                  <div className="flex flex-wrap gap-8 md:gap-20">
                    <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] group shrink-0">
                      <Linkedin size={24} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 md:w-[28px]" />
                      <span className={`border-b group-hover:border-current transition-all ${isDark ? 'border-black/10' : 'border-white/10'}`}>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <footer className={`py-12 md:py-24 px-6 md:px-12 text-center text-[8px] md:text-[9px] uppercase font-bold tracking-[0.6em] md:tracking-[0.8em] transition-colors duration-700 ${isDark ? 'bg-black text-white/20' : 'bg-white text-black/20'}`}>
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="flex flex-col md:items-start gap-3 md:gap-4">
            <span className="hover:text-current transition-colors cursor-default">Designed for impact &copy; {new Date().getFullYear()}</span>
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-light opacity-50">Product Strategy &times; UX Engineering</span>
          </div>
          <span className="tracking-[0.3em] md:block hidden opacity-40 shrink-0">Kashif Iqbal Abbasi &mdash; Senior Product Designer</span>
          <button onClick={goToHome} className="group flex items-center gap-4 md:gap-6 hover:text-current transition-all duration-700 outline-none shrink-0">
            Back to top 
            <span className={`w-8 md:w-12 h-[1px] transition-all duration-700 group-hover:w-12 md:group-hover:w-20 group-hover:bg-current ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
