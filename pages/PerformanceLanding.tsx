
import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import VideoPlaceholder from '../components/VideoPlaceholder';

const PerformanceLanding: React.FC = () => {
  return (
    <div className="bg-premiumBlack text-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <VideoPlaceholder variant="performance" className="w-full h-full opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-premiumBlack via-transparent to-premiumBlack" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center relative z-10 pt-32 md:pt-40">
          <Reveal direction="top" delay={100}>
            <span className="text-performance font-black tracking-wide-premium uppercase mb-6 md:mb-10 block animate-pulse text-[10px] md:text-sm">BIO-STRATEGIC PROTOCOL</span>
          </Reveal>
          <Reveal direction="top" delay={300}>
            <h1 className="text-5xl sm:text-7xl md:text-[120px] lg:text-[180px] font-black mb-8 md:mb-12 leading-[0.8] tracking-premium text-glow-performance uppercase">
              SISTEMA.<br/><span className="text-performance">E-CODE.</span>
            </h1>
          </Reveal>
          <Reveal direction="bottom" delay={500}>
            <p className="text-lg md:text-2xl lg:text-4xl text-gray-400 mb-12 md:mb-20 max-w-4xl mx-auto leading-relaxed font-light">
              L'ingegneria applicata alla biologia umana per imprenditori che operano in ambienti ad alta pressione.
            </p>
          </Reveal>
          <Reveal direction="bottom" delay={700}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <Link to="/profile" className="w-full md:w-auto bg-performance text-white px-10 md:px-20 py-5 md:py-8 rounded-full font-black text-[10px] md:text-sm uppercase tracking-wide-premium hover:scale-105 transition-all shadow-[0_0_50px_rgba(0,102,255,0.4)]">
                RICHIEDI ACCESSO
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Medical Imagery Section */}
      <section className="py-20 md:py-40 bg-black relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
             <Reveal direction="left">
               <div className="relative group">
                 <div className="absolute inset-0 bg-performance/20 blur-[100px] md:group-hover:bg-performance/40 transition-all duration-1000"></div>
                 <div className="relative rounded-[30px] md:rounded-[60px] overflow-hidden border border-white/10 glass-panel">
                   <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                    alt="Medical Lab Analysis" 
                    className="w-full aspect-video md:aspect-auto md:h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                     <span className="text-performance font-black tracking-widest text-[8px] md:text-xs uppercase">Diagnostic_01</span>
                     <h4 className="text-xl md:text-2xl font-black">PRECISION TESTING</h4>
                   </div>
                 </div>
               </div>
             </Reveal>
             <Reveal direction="right" className="space-y-6 md:space-y-10">
               <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-premium leading-tight">DATI REALI.<br/>PERFORMANCE REALE.</h2>
               <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                 Eliminiamo le congetture. Attraverso analisi ematiche e test di bio-feedback avanzati, identifichiamo esattamente dove il tuo sistema sta perdendo energia. Non è motivazione, è medicina applicata.
               </p>
               <div className="flex gap-4 md:gap-6">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-performance/30 flex-shrink-0 flex items-center justify-center text-performance">
                   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <span className="text-gray-300 font-medium text-sm md:text-base">Protocolli basati su biomarcatori reali.</span>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-60 bg-premiumGray/20 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal direction="left" className="mb-16 md:mb-40">
            <h2 className="text-4xl md:text-7xl lg:text-9xl font-black tracking-premium leading-none">I PILASTRI DELLA<br/>DOMINANZA BIO.</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
            {[
              { t: 'METABOLIC ENGINE', d: 'Ottimizzazione del substrato energetico cellulare per eliminare i cali di performance.', i: '01' },
              { t: 'NEURAL CLARITY', d: 'Protocolli neurochimici per massimizzare la velocità di processamento e decisione.', i: '02' },
              { t: 'SYSTEMIC RECOVERY', d: 'Architettura del sonno e del riposo attivo per rigenerare il sistema in tempi record.', i: '03' }
            ].map((p, i) => (
              <Reveal key={i} direction="bottom" delay={i * 200} className="glass-panel p-8 md:p-16 rounded-[30px] md:rounded-[60px] hover:border-performance/40 transition-all group">
                <div className="text-performance text-3xl md:text-5xl font-black mb-6 md:mb-10 opacity-20 group-hover:opacity-100 transition-opacity">{p.i}</div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-8 tracking-premium">{p.t}</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 md:py-80 bg-black">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-20 md:mb-40">
            <Reveal direction="top">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-premium uppercase mb-6 md:mb-10">IL ROADMAP</h2>
              <div className="w-16 md:w-20 h-1 bg-performance mx-auto"></div>
            </Reveal>
          </div>
          
          <div className="space-y-24 md:space-y-40">
            {[
              { s: 'Assessment', t: 'Analisi Biomarcatori', d: 'Mappiamo i tuoi dati attuali. Non ipotizziamo, misuriamo.', v: 'performance' as const },
              { s: 'Optimization', t: 'Integrazione Protocollo', d: 'Implementiamo il sistema E-CODE nella tua routine operativa senza attriti.', v: 'performance' as const },
              { s: 'Execution', t: 'Peak Performance', d: 'Raggiungi la stabilità operativa totale. Ogni giorno al 100%.', v: 'performance' as const }
            ].map((step, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-32 items-center`}>
                <Reveal direction={i % 2 === 0 ? 'left' : 'right'} className="flex-1 space-y-6 md:space-y-10 w-full">
                  <span className="text-performance font-black text-[10px] md:text-xs uppercase tracking-wide-premium">{step.s}</span>
                  <h3 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-premium">{step.t}</h3>
                  <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed">{step.d}</p>
                </Reveal>
                <Reveal direction={i % 2 === 0 ? 'right' : 'left'} className="flex-1 w-full">
                  <div className="aspect-video rounded-[30px] md:rounded-[50px] overflow-hidden glass-panel relative">
                    <VideoPlaceholder variant={step.v} className="w-full h-full" />
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 md:py-60 bg-gradient-to-t from-performance/20 to-transparent">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <Reveal direction="scale">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-10 md:mb-16 tracking-premium leading-none">PRONTO A DOMINARE?</h2>
            <Link to="/profile" className="inline-block px-12 md:px-24 py-6 md:py-10 bg-white text-black rounded-full font-black uppercase text-sm md:text-xl tracking-wide-premium hover:invert transition-all">
              INIZIA IL PROFILING
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PerformanceLanding;
