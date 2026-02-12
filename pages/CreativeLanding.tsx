
import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import VideoPlaceholder from '../components/VideoPlaceholder';

const CreativeLanding: React.FC = () => {
  return (
    <div className="bg-premiumBlack text-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <VideoPlaceholder variant="creative" className="w-full h-full opacity-20 contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-b from-premiumBlack via-transparent to-premiumBlack" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center relative z-10 pt-32 md:pt-40">
          <Reveal direction="top" delay={100}>
            <h1 className="text-5xl sm:text-7xl md:text-[140px] lg:text-[240px] font-black mb-8 md:mb-12 leading-[0.75] tracking-premium italic text-glow-creative uppercase">
              CREATIVE<br/><span className="text-creative">SYSTEM.</span>
            </h1>
          </Reveal>
          <Reveal direction="bottom" delay={400}>
            <p className="text-2xl md:text-4xl lg:text-6xl text-gray-200 mb-12 md:mb-24 max-w-6xl mx-auto font-medium tracking-tight leading-[1] md:leading-none uppercase">
              STRATEGIA PRIMA DELL'ESTETICA.<br/><span className="opacity-50">POSIZIONAMENTO PRIMA DELLA VOCE.</span>
            </p>
          </Reveal>
          <Reveal direction="bottom" delay={700}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <button className="w-full md:w-auto bg-creative text-white px-10 md:px-20 py-5 md:py-8 rounded-full font-black text-[10px] md:text-sm uppercase tracking-wide-premium hover:scale-110 transition-all shadow-[0_0_80px_rgba(217,0,0,0.4)]">
                PRENOTA CALL STRATEGICA
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="py-20 md:py-40 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal direction="left" className="space-y-6 md:space-y-12">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-premium leading-tight uppercase">STUDIO<br/>STRATEGICO.</h2>
              <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed">
                Ogni pixel ha uno scopo. Ogni parola ha un peso. Il nostro processo inizia con un'analisi profonda del tuo mercato per trovare l'angolo di attacco unico che ti renda inattaccabile.
              </p>
              <div className="h-px w-full bg-white/10"></div>
              <div className="flex items-center gap-4 md:gap-8">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
                  alt="Creative Planning" 
                  className="w-16 h-16 md:w-32 md:h-32 rounded-full object-cover grayscale border-2 border-creative/30"
                />
                <p className="text-[10px] md:text-sm uppercase tracking-widest text-gray-500 font-bold">Concept Development Phase</p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-creative to-premiumBlack rounded-[30px] md:rounded-[60px] blur opacity-25 md:group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative glass-panel rounded-[30px] md:rounded-[60px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2055" 
                    alt="Creative Design Studio" 
                    className="w-full h-[400px] md:h-[600px] object-cover grayscale brightness-75 md:group-hover:grayscale-0 md:group-hover:brightness-100 transition-all duration-1000"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Authority Engine Section */}
      <section className="py-24 md:py-60 bg-premiumGray/30 relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <Reveal direction="scale">
            <span className="text-creative font-black uppercase tracking-wide-premium mb-6 md:mb-10 block text-[10px] md:text-sm">The Authority Engine</span>
            <h2 className="text-4xl md:text-7xl lg:text-9xl font-black tracking-premium mb-12 md:mb-20 leading-none">LA TUA STORIA,<br/>MONETIZZATA.</h2>
            <p className="text-gray-400 text-lg md:text-2xl lg:text-3xl leading-relaxed font-light max-w-4xl mx-auto mb-20 md:mb-40">
              Non costruiamo solo un brand. Costruiamo un'autorità indiscutibile che trasforma l'attenzione in flussi di cassa costanti e posizionamento premium.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 text-left">
            {[
              { t: 'ARCHITETTURA PERCETTIVA', d: 'Ridisegniamo come il mondo ti vede. Dalla psicologia dei colori alla struttura del messaggio, ogni dettaglio proietta autorità.' },
              { t: 'SISTEMI DI DOMINANZA', d: 'Ingegnerizziamo macchine editoriali. Sistemi di creazione contenuti che amplificano la tua presenza 24/7.' }
            ].map((box, i) => (
              <Reveal key={i} direction={i === 0 ? "left" : "right"} className="glass-panel p-8 md:p-20 rounded-[40px] md:rounded-[80px] hover:border-creative/40 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-creative/10 blur-[40px] md:blur-[60px] rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-16 md:w-24 h-1.5 md:h-2 bg-creative mb-8 md:mb-16 rounded-full" />
                  <h3 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 tracking-premium">{box.t}</h3>
                  <p className="text-gray-500 text-base md:text-xl leading-relaxed">{box.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Creative Process Section */}
      <section className="py-24 md:py-80 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-40 items-center">
            <Reveal direction="left">
              <div className="space-y-10 md:space-y-16">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-premium leading-none">PROCESSO<br/>ELITE.</h2>
                <div className="space-y-8 md:space-y-12">
                  {[
                    { t: 'AUDIT STRATEGICO', d: 'Identifichiamo i buchi neri della tua comunicazione attuale.' },
                    { t: 'BRAND BLUEPRINT', d: 'Costruiamo le fondamenta visuali e verbali del tuo posizionamento.' },
                    { t: 'DEPLOYMENT', d: 'Lancio del sistema editoriale su tutti i canali target.' }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-6 md:gap-10 items-start group">
                      <div className="text-creative font-black text-2xl md:text-4xl opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                      <div className="space-y-2">
                        <h4 className="text-2xl md:text-3xl font-black tracking-premium">{s.t}</h4>
                        <p className="text-gray-500 text-sm md:text-lg">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" className="relative h-[400px] md:h-[600px] lg:h-[800px]">
              <div className="absolute inset-0 glass-panel rounded-[40px] md:rounded-[100px] overflow-hidden p-1 md:p-2">
                 <VideoPlaceholder variant="creative" className="w-full h-full rounded-[39px] md:rounded-[98px]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-creative/20 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-60 bg-premiumGray/10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <Reveal direction="bottom">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-10 md:mb-16 tracking-premium">LA TUA VISIONE,<br/>AMPLIFICATA.</h2>
            <p className="text-gray-500 text-lg md:text-xl mb-12 md:mb-20 leading-relaxed font-light">
              Non lavoriamo con chiunque. Lavoriamo con leader che hanno una visione e hanno bisogno della migliore architettura creativa sul pianeta per realizzarla.
            </p>
            <button className="w-full md:w-auto px-12 md:px-24 py-6 md:py-10 bg-white text-black rounded-full font-black uppercase text-sm md:text-xl tracking-wide-premium hover:invert transition-all shadow-2xl">
              INIZIA IL PROGETTO
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CreativeLanding;
