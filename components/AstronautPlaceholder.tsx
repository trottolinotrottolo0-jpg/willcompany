import React from 'react';

const AstronautPlaceholder: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-performance/30 blur-[80px] rounded-full animate-pulse-slow"></div>
      
      {/* Abstract Astronaut SVG */}
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,102,255,0.5)] animate-float">
        <defs>
          <linearGradient id="astroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e0e0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Helmet */}
        <path d="M100 40 C 70 40 50 65 50 95 C 50 125 70 150 100 150 C 130 150 150 125 150 95 C 150 65 130 40 100 40 Z" fill="url(#astroGradient)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        
        {/* Visor */}
        <path d="M100 55 C 80 55 65 75 65 95 C 65 115 80 135 100 135 C 120 135 135 115 135 95 C 135 75 120 55 100 55 Z" fill="#000000" stroke="#0066FF" strokeWidth="1">
           <animate attributeName="fill" values="#000;#101010;#000" dur="5s" repeatCount="indefinite" />
        </path>
        
        {/* Visor Reflection */}
        <path d="M85 70 Q 100 60 115 70" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
        
        {/* Body/Suit Top */}
        <path d="M50 140 Q 20 160 20 200 L 180 200 Q 180 160 150 140" fill="url(#astroGradient)" opacity="0.9" />
        
        {/* Tech Details */}
        <circle cx="50" cy="100" r="4" fill="#D90000" className="animate-pulse" />
        <rect x="145" y="90" width="8" height="20" rx="2" fill="#0066FF" />
      </svg>
    </div>
  );
};

export default AstronautPlaceholder;
