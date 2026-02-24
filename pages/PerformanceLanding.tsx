
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal';
import VideoModal from '../components/VideoModal';

const PerformanceLanding: React.FC = () => {
  const routerLocation = useLocation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  useEffect(() => {
    const state = routerLocation.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      window.setTimeout(() => scrollToSection(state.scrollTo as string), 50);
    }
  }, [routerLocation.state]);

  return (
    <div className="bg-premiumBlack text-white min-h-screen">
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-gradient-to-br from-black via-[#001a40] to-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-premiumBlack via-black/40 to-premiumBlack" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 pt-28 md:pt-36">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-4xl">
            <Reveal direction="top" delay={100}>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-performance font-black tracking-wide-premium uppercase text-[10px] md:text-sm">WILL PERFORMANCE</span>
                <span className="h-px w-10 bg-white/20" />
                <span className="text-white/70 font-bold uppercase tracking-widest text-[10px] md:text-sm">Where Identity Leads</span>
              </div>
            </Reveal>

            <Reveal direction="top" delay={250}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 leading-[0.95] tracking-premium">
                Costruiamo persone ad alte prestazioni.
              </h1>
            </Reveal>

            <Reveal direction="bottom" delay={400}>
              <div className="space-y-4 md:space-y-6">
                <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl">
                  WILL Performance è un’azienda specializzata in leadership personale, biohacking applicato e sistemi di esecuzione.
                </p>
                <p className="text-base md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl">
                  Il nostro metodo proprietario, E-CODE, integra Essenza, Energia ed Esecuzione per sviluppare performance sostenibili nel lungo periodo.
                </p>
              </div>
            </Reveal>

            <Reveal direction="bottom" delay={550}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-10 md:mt-14 max-w-2xl">
                <button
                  type="button"
                  onClick={openVideoModal}
                  className="w-full sm:w-auto bg-performance text-white px-10 py-4 md:py-5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-wide-premium hover:scale-[1.02] active:scale-[0.99] transition-all shadow-[0_0_50px_rgba(0,102,255,0.4)]"
                >
                  Scopri il Metodo E-CODE
                </button>
              </div>
            </Reveal>
          </div>
          </div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 pb-10 md:pb-0">
          <div className="max-w-[1400px] mx-auto">
            <div className="mt-12 md:mt-0 md:absolute md:right-10 md:bottom-10 w-full md:w-[420px]">
              <Reveal direction="right" delay={450}>
                <div className="rounded-[18px] md:rounded-[22px] overflow-hidden border border-white/15 bg-black/30 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                  <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-performance shadow-[0_0_18px_rgba(0,102,255,0.9)]" />
                      <span className="text-white/70 font-black uppercase tracking-widest text-[10px]">Video</span>
                    </div>
                    <span className="text-performance font-black uppercase tracking-wide-premium text-[10px]">E‑CODE</span>
                  </div>

                  <button
                    type="button"
                    onClick={openVideoModal}
                    className="relative w-full aspect-video overflow-hidden group cursor-pointer"
                    aria-label="Guarda il video sul metodo E-CODE"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-black via-[#001a40] to-black opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                          <path d="M8 5v14l11-7z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                      <div className="text-left">
                        <div className="text-white font-black uppercase tracking-premium text-sm">Scopri E‑CODE</div>
                        <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Panoramica in 60s</div>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 backdrop-blur-md">
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Guarda</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                          <path d="M8 5v14l11-7z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-32 lg:h-64 bg-gradient-to-t from-[#101010] to-transparent z-20 pointer-events-none" />
      </section>

      <section className="py-24 md:py-40 bg-black relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <Reveal direction="left" className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-premium leading-none">
                WILL <span className="text-performance">Performance</span>
              </h2>
              <div className="space-y-5 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                <p>WILL Performance nasce con una missione chiara:</p>
                <p>
                  Aiutare imprenditori, professionisti e aziende a raggiungere massime prestazioni attraverso un sistema integrato che unisce identità, fisiologia e disciplina operativa.
                </p>
                <p className="text-white font-bold">Non lavoriamo solo sulla produttività. Lavoriamo sulla persona.</p>
                <p>Crediamo che la vera eccellenza sia il risultato di tre dimensioni allineate:</p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="grid grid-cols-1 gap-6">
                {[
                  { t: 'Chi sei (Essenza)', d: 'Identità e leadership personale per chiarezza e direzione.' },
                  { t: 'Come generi energia (Energia)', d: 'Biohacking sostenibile per energia stabile e recupero rapido.' },
                  { t: 'Come trasformi energia in risultati (Esecuzione)', d: 'Struttura e sistemi per risultati ripetibili senza burnout.' }
                ].map((x, i) => (
                  <div key={i} className="glass-panel p-8 rounded-[30px] border-white/10 hover:border-performance/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-performance/30 flex-shrink-0 flex items-center justify-center text-performance font-black">
                        0{i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-premium">{x.t}</h3>
                        <p className="text-gray-400 mt-2 leading-relaxed">{x.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="ecode" className="py-24 md:py-40 bg-premiumGray/20 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal direction="top" className="text-center mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-premium uppercase">
              <span className="text-performance">E-CODE</span>
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl font-light mt-4">Il Codice dell’Eccellenza</p>
            <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-base md:text-lg leading-relaxed">
              E-CODE è il sistema proprietario di WILL Performance. Non è un semplice programma di coaching. È un framework strutturato che integra leadership personale, biohacking e sistemi di performance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <Reveal direction="bottom" delay={100} className="h-full">
              <div className="glass-panel p-10 rounded-[30px] border-white/10 hover:border-performance/40 transition-all h-full">
                <div className="text-performance font-black uppercase tracking-wide-premium text-xs mb-4">1 — Essenza</div>
                <h3 className="text-3xl font-black uppercase tracking-premium mb-6">Leadership personale e identità</h3>
                <p className="text-gray-400 leading-relaxed mb-6 font-light">Prima della performance viene la chiarezza. Lavoriamo su:</p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Visione personale e professionale',
                    'Valori e coerenza',
                    'Decision making',
                    'Disciplina sostenibile',
                    'Eliminazione dell’autosabotaggio'
                  ].map((x) => (
                    <li key={x} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-performance mt-2 flex-shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-white font-bold">
                  Obiettivo: <span className="text-gray-300 font-light">Stabilità mentale e direzione chiara.</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="bottom" delay={250} className="h-full">
              <div className="glass-panel p-10 rounded-[30px] border-white/10 hover:border-performance/40 transition-all h-full">
                <div className="text-performance font-black uppercase tracking-wide-premium text-xs mb-4">2 — Energia</div>
                <h3 className="text-3xl font-black uppercase tracking-premium mb-6">Biohacking fondamentale e sostenibile</h3>
                <p className="text-gray-400 leading-relaxed mb-6 font-light">La tua capacità di eseguire dipende dalla qualità della tua energia. Interveniamo su:</p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Sonno — ritmo circadiano, qualità del riposo, routine serale',
                    'Nutrizione — stabilità energetica, timing dei pasti, focus cognitivo',
                    'Allenamento — forza, movimento quotidiano, minima dose efficace',
                    'Gestione dello stress — regolazione del sistema nervoso, recupero mentale',
                    'Ambiente — luce, spazi di lavoro, relazioni'
                  ].map((x) => (
                    <li key={x} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-performance mt-2 flex-shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-white font-bold">
                  Obiettivo: <span className="text-gray-300 font-light">Energia stabile e recupero rapido.</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="bottom" delay={400} className="h-full">
              <div className="glass-panel p-10 rounded-[30px] border-white/10 hover:border-performance/40 transition-all h-full">
                <div className="text-performance font-black uppercase tracking-wide-premium text-xs mb-4">3 — Esecuzione</div>
                <h3 className="text-3xl font-black uppercase tracking-premium mb-6">Sistemi e disciplina applicata</h3>
                <p className="text-gray-400 leading-relaxed mb-6 font-light">L’energia senza struttura si disperde. Costruiamo:</p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Agenda energetica',
                    'Routine mattina / sera',
                    'Deep work',
                    'Settimana tipo e settimana ad alta pressione',
                    'Tracking KPI personali'
                  ].map((x) => (
                    <li key={x} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-performance mt-2 flex-shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-white font-bold">
                  Obiettivo: <span className="text-gray-300 font-light">Risultati ripetibili senza burnout.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal direction="top" className="text-center mb-14 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-premium">A chi ci rivolgiamo</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
            <Reveal direction="left" className="h-full">
              <div className="glass-panel p-10 rounded-[30px] border-white/10 h-full">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-premium mb-6 text-performance">Imprenditori e professionisti ambiziosi</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Gestiscono responsabilità elevate',
                    'Vivono sotto pressione costante',
                    'Vogliono performance alte senza sacrificare la salute'
                  ].map((x) => (
                    <li key={x} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-performance mt-2 flex-shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal direction="right" className="h-full">
              <div className="glass-panel p-10 rounded-[30px] border-white/10 h-full">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-premium mb-6 text-performance">Aziende e team</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Migliorare energia e focus dei collaboratori',
                    'Ridurre stress cronico',
                    'Aumentare qualità decisionale',
                    'Costruire cultura della performance sostenibile'
                  ].map((x) => (
                    <li key={x} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-performance mt-2 flex-shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-premiumGray/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal direction="left" className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-premium">Come lavoriamo</h2>
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed font-light">
                <p>WILL Performance opera attraverso:</p>
                <ul className="space-y-3">
                  {[
                    'Percorsi individuali basati su E-CODE',
                    'Workshop e formazione aziendale',
                    'Programmi strutturati di performance',
                    'Assessment personalizzati'
                  ].map((x) => (
                    <li key={x} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-performance mt-2 flex-shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p>Ogni intervento è costruito su dati, misurazione e progressione graduale.</p>
                <p className="text-white font-bold">Non puntiamo a trasformazioni improvvise. Puntiamo a stabilità nel lungo periodo.</p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="aspect-video rounded-[30px] overflow-hidden glass-panel relative cursor-pointer" onClick={openVideoModal}>
                <div className="w-full h-full bg-gradient-to-br from-black via-[#001a40] to-black" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                  <span className="text-performance font-black uppercase tracking-wide-premium text-[10px] md:text-xs">Data Driven</span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-premium">Misurazione & progressione</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Reveal direction="top" className="text-center mb-14 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-premium">La nostra filosofia</h2>
          </Reveal>
          <Reveal direction="bottom">
            <div className="glass-panel p-10 md:p-16 rounded-[40px] border-white/10">
              <div className="space-y-4 text-gray-300 text-lg md:text-2xl font-light leading-relaxed">
                <p className="text-white font-black">La performance non è lavorare di più. È funzionare meglio.</p>
                <p>È avere energia stabile.</p>
                <p>È essere lucidi sotto pressione.</p>
                <p>È eseguire con disciplina senza distruggere il proprio sistema.</p>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  WILL Performance nasce per creare una nuova generazione di leader: <span className="text-white font-bold">fisicamente forti</span>, <span className="text-white font-bold">mentalmente solidi</span>, capaci di <span className="text-white font-bold">esecuzione elevata</span>.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-60 bg-gradient-to-t from-performance/20 to-transparent">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <Reveal direction="scale">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-premium leading-none">Scopri il tuo livello di performance</h2>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 leading-relaxed">
              Prenota un Assessment iniziale e analizziamo energia attuale, stabilità del sonno, livello di stress e sistema di esecuzione.
            </p>
            <Link to="/profile" className="inline-block px-12 md:px-20 py-5 md:py-7 bg-performance text-white rounded-full font-black uppercase text-[10px] md:text-sm tracking-wide-premium hover:scale-105 transition-all shadow-[0_0_50px_rgba(0,102,255,0.4)]">
              Prenota ora
            </Link>
          </Reveal>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoSrc="/videos/mixkit-man-walking.mp4"
        title="E-CODE Method"
      />
    </div>
  );
};

export default PerformanceLanding;
