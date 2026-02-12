import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  {
    title: "CREATIVE AGENCY",
    path: "/creative",
    color: "text-creative",
    hoverColor: "hover:text-creative",
    bulletColor: "bg-creative",
    submenu: [
      { label: "Servizi", path: "/creative/servizi" },
      { label: "Progetti", path: "/creative/progetti" },
      { label: "Team", path: "/creative/team" },
      { label: "Eventi", path: "/creative/eventi" },
    ]
  },
  {
    title: "PERFORMANCE",
    path: "/performance",
    color: "text-performance",
    hoverColor: "hover:text-performance",
    bulletColor: "bg-performance",
    submenu: [
      { label: "Consulenza", path: "/performance/consulenza" },
      { label: "Testimonianze", path: "/performance/testimonianze" },
      { label: "Eventi", path: "/performance/eventi" },
    ]
  },
  {
    title: "EVENTS",
    path: "/events",
    color: "text-events",
    hoverColor: "hover:text-events",
    bulletColor: "bg-events",
    submenu: [
      { label: "Organizzazione di eventi", path: "/events/organizzazione" },
      { label: "I prossimi eventi", path: "/events/prossimi" },
      { label: "Testimonianze", path: "/events/testimonianze" },
    ]
  },
  {
    title: "ACADEMY",
    path: "/academy",
    color: "text-academy",
    hoverColor: "hover:text-academy",
    bulletColor: "bg-academy",
    submenu: [
      { label: "Formazione per imprenditori", path: "/academy/imprenditori" },
      { label: "Formazione sales", path: "/academy/sales" },
      { label: "Organizzazione aziendale", path: "/academy/organizzazione" },
      { label: "ecc", path: "/academy/altro" },
    ]
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleBrandClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[2000] transition-all duration-700 ${scrolled || isOpen ? 'liquid-glass py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex justify-between items-center relative z-[2001]">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={handleBrandClick}
          className="text-2xl md:text-3xl font-black tracking-premium flex items-center group relative z-[2002]"
        >
          <span className="text-white transition-all duration-500 group-hover:tracking-wider">WILL.</span>
        </Link>

        {/* Center Navigation - Creative & Performance */}
        <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <Link to="/creative" className="text-sm font-black uppercase tracking-widest text-white hover:text-creative transition-colors">
            CREATIVE AGENCY
          </Link>
          <span className="mx-6 text-willOrange font-light text-xl">|</span>
          <Link to="/performance" className="text-sm font-black uppercase tracking-widest text-white hover:text-performance transition-colors">
            PERFORMANCE
          </Link>
        </div>

        {/* Right Section - CTA & Hamburger */}
        <div className="flex items-center gap-6">
          <Link 
            to="/profile" 
            className="hidden md:block bg-willOrange text-white px-8 py-3 rounded-md font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)]"
          >
            PRENOTA UNA CALL
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 relative z-[2100] outline-none group"
            aria-label="Toggle Menu"
          >
            <div className="w-8 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-white transition-all duration-500 origin-right ${isOpen ? '-rotate-[45deg] translate-y-[-2px] -translate-x-[2px]' : ''}`} />
              <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-[2px] bg-white transition-all duration-500 origin-right ${isOpen ? 'rotate-[45deg] translate-y-[2px] -translate-x-[2px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Fullscreen Menu Overlay */}
        <div 
          className={`fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-32 px-10 gap-8 z-[2050] overflow-y-auto ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
          }`}
        >
          {menuItems.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 max-w-2xl mx-auto w-full border-b border-white/10 pb-8 last:border-0">
              <button 
                onClick={() => setActiveSubmenu(activeSubmenu === item.title ? null : item.title)}
                className={`text-3xl md:text-5xl font-black uppercase tracking-premium text-white flex items-center justify-between w-full text-left ${item.hoverColor} transition-colors`}
              >
                {item.title}
                <span className={`transform transition-transform duration-300 ${activeSubmenu === item.title ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 transition-all duration-500 overflow-hidden ${
                activeSubmenu === item.title ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base text-gray-400 ${item.hoverColor} font-bold uppercase tracking-widest py-2 flex items-center gap-3 group`}
                  >
                    <span className={`w-1 h-1 ${item.bulletColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></span>
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-auto pb-10 text-center md:hidden">
            <Link 
              to="/profile" 
              onClick={() => setIsOpen(false)}
              className="inline-block w-full bg-willOrange text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest"
            >
              PRENOTA UNA CALL
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
