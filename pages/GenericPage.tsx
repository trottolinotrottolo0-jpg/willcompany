import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal';

const GenericPage: React.FC = () => {
  const location = useLocation();
  const title = location.pathname.split('/').pop()?.replace(/-/g, ' ') || 'Pagina';
  const section = location.pathname.split('/')[1] || 'Sezione';

  return (
    <div className="min-h-screen bg-black text-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal direction="top">
          <span className="text-performance font-black uppercase tracking-widest text-sm mb-4 block">
            {section}
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-premium mb-8 text-white">
            {title}
          </h1>
          <div className="w-20 h-1 bg-white/10 mb-12"></div>
        </Reveal>
        
        <Reveal direction="bottom" delay={200}>
          <div className="glass-panel p-10 md:p-20 rounded-[40px] border-white/5">
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              Contenuto in arrivo per la sezione <span className="text-white font-bold">{title}</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default GenericPage;
