
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import VideoPlaceholder from '../components/VideoPlaceholder';
import AstronautPlaceholder from '../components/AstronautPlaceholder';

const VideoCard: React.FC<{ 
  to: string, 
  title: string, 
  subtitle: string, 
  desc: string, 
  videoUrl?: string,
  accentColor: 'performance' | 'creative',
  index: number
}> = ({ to, title, subtitle, desc, accentColor, index }) => {
  const accentClass = accentColor === 'performance' ? 'text-performance' : 'text-creative';
  const borderClass = accentColor === 'performance' ? 'hover:border-performance/40' : 'hover:border-creative/40';
  const gradientClass = accentColor === 'performance' ? 'from-performance/80' : 'from-creative/80';

  return (
    <Reveal direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 150} className="h-full">
      <Link 
        to={to} 
        className={`group relative overflow-hidden rounded-[30px] md:rounded-[50px] aspect-[4/5] flex items-end p-6 md:p-12 bg-premiumGray border border-white/5 transition-all duration-1000 ${borderClass} shadow-3xl block w-full h-full`}
      >
        <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10`} />
        
        <VideoPlaceholder 
          variant={accentColor} 
          className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-all duration-1000"
        />

        <div className="relative z-20 w-full transform transition-all duration-700 md:group-hover:-translate-y-6">
          <span className={`text-[10px] md:text-[12px] uppercase tracking-wide-premium font-black ${accentClass} mb-2 md:mb-4 block`}>{subtitle}</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-6 leading-[0.9] tracking-premium">{title}</h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 max-w-sm leading-relaxed">
            {desc}
          </p>
        </div>
      </Link>
    </Reveal>
  );
};

const HomeHub: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: 100, suffix: '%', t: 'Operatività', d: 'Focus assoluto', isInfinity: false },
    { value: 10, suffix: 'x', t: 'Autorità', d: 'Mercato', isInfinity: false },
    { value: 10, suffix: 'x', t: 'In Finanza', d: 'Elite', isInfinity: false },
    { value: 0, suffix: '', t: 'Energia', d: 'Peak Flow', isInfinity: true }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Space Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Stars & Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg')] bg-cover bg-center opacity-40 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10 pt-10 lg:pt-0">
            <Reveal direction="left">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                       <img src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="Client" className="w-full h-full object-cover opacity-70" />
                     </div>
                   ))}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  <span className="text-white font-bold">100%</span> delle Aziende soddisfatte
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wide text-white leading-tight mb-6 max-w-4xl">
                <span className="text-metallic-silver animate-[metallicShine_3s_linear_infinite]">WHERE</span> IDENTITY <span className="text-metallic-silver animate-[metallicShine_3s_linear_infinite]">LEADS.</span>
              </h1>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <p className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
                Affianchiamo leader e aziende nei momenti in cui le decisioni contano davvero.
              </p>
              <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mt-4 font-light">
                Crediamo che ogni decisione aziendale nasca da una persona. Migliorando noi stessi potremo prendere decisioni migliori.
              </p>
            </Reveal>

            <Reveal direction="left" delay={600}>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-6 w-auto" alt="Google" />
                   <span className="font-bold text-gray-500">Partner</span>
                </div>
                <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-5 w-auto" alt="Google" />
                   <div className="flex text-[#F4B400]">★★★★★</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Visual - Removed as requested */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Lunar Surface Bottom */}
        <div className="absolute bottom-0 w-full h-32 lg:h-64 bg-gradient-to-t from-[#101010] to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* Chi Siamo Section (White Background) */}
      <section className="py-24 md:py-40 bg-white text-black relative z-20">
        {/* Gradient Transition Overlay */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-50 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal direction="left">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-8">
                 Decisioni guidate<br/>dall'<span className="text-metallic-silver animate-[metallicShine_3s_linear_infinite]">Identità.</span>
               </h2>
               <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                 <p>
                   Portiamo chiarezza umana nei processi decisionali, aiutando le aziende a crescere senza perdere coerenza, energia e direzione.
                 </p>
                 <p>
                   Attraverso il nostro metodo e una strategia costruita assieme. <span className="text-black border-b border-gray-400">Noi portiamo le competenze, tu la voglia di crescere.</span>
                 </p>
               </div>
             </Reveal>
             <Reveal direction="right">
               <div className="bg-gray-100 p-10 rounded-[40px] border border-gray-200 shadow-xl">
                 <h3 className="text-2xl font-black uppercase mb-6 text-black">Ti sei mai sentito così?</h3>
                 <ul className="space-y-4 text-gray-600">
                   <li className="flex gap-4">
                     <span className="text-metallic-silver font-bold">✕</span>
                     <span>L'imprenditore è sovraccarico. Tutto passa da te.</span>
                   </li>
                   <li className="flex gap-4">
                     <span className="text-metallic-silver font-bold">✕</span>
                     <span>Decidi sempre con urgenza e sotto pressione.</span>
                   </li>
                   <li className="flex gap-4">
                     <span className="text-metallic-silver font-bold">✕</span>
                     <span>Ti ritrovi a cambiare spesso direzione.</span>
                   </li>
                   <li className="flex gap-4">
                     <span className="text-metallic-silver font-bold">✕</span>
                     <span>Il team è disallineato.</span>
                   </li>
                   <li className="flex gap-4">
                     <span className="text-metallic-silver font-bold">✕</span>
                     <span>L'azienda cresce ma non senti solidità.</span>
                   </li>
                   <li className="flex gap-4">
                     <span className="text-metallic-silver font-bold">✕</span>
                     <span>L'identità dell'azienda si è confusa con l'operatività.</span>
                   </li>
                 </ul>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Il Metodo Section (Black Background) */}
      <section className="py-24 md:py-40 bg-premiumBlack relative z-20">
        {/* Gradient Transition Overlay */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal direction="top" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">Il Nostro <span className="text-metallic-silver animate-[metallicShine_3s_linear_infinite]">Metodo</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Lavoriamo su tre pilastri fondamentali per costruire aziende solide, lucide e guidabili.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "IDENTITÀ DEL LEADER", d: "Il ruolo, la responsabilità, processi decisionali anche sotto pressione." },
              { t: "DECISIONI", d: "Aiutiamo l'azienda a rallentare dove serve, a scegliere cosa non fare, creare criteri decisionali chiari, uscire dal “si è sempre fatto così”." },
              { t: "DIREZIONE E ALLINEAMENTO", d: "Visione, priorità, persone, azioni chiave." }
            ].map((item, i) => (
              <Reveal key={i} direction="bottom" delay={i * 200} className="glass-panel p-10 rounded-[30px] border-white/5 hover:border-gray-500 transition-all group">
                <div className="text-6xl font-black text-white/10 mb-6 group-hover:text-metallic-silver transition-colors">0{i+1}</div>
                <h3 className="text-2xl font-black uppercase mb-4 text-white">{item.t}</h3>
                <p className="text-gray-400 leading-relaxed">{item.d}</p>
              </Reveal>
            ))}
          </div>
          
          <Reveal direction="bottom" delay={600} className="mt-16 text-center">
            <p className="text-xl text-white max-w-3xl mx-auto font-light">
              Con il nostro metodo allineiamo identità, decisioni e direzione per rendere l'azienda solida, lucida e guidabile.
            </p>
            <p className="text-2xl text-metallic-silver mt-4 font-bold animate-[metallicShine_3s_linear_infinite]">
              Il risultato finale? Un’azienda che cresce senza perdere identità, energia e direzione.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Risultati Section (White Background) */}
      <section className="py-24 md:py-40 bg-white text-center relative z-20">
        {/* Gradient Transition Overlay */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-50 pointer-events-none"></div>

        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <Reveal direction="scale">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12 text-black">
              Non serve "più marketing",<br/>servono <span className="text-metallic-silver animate-[metallicShine_3s_linear_infinite]">risultati reali.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              {[
                "Meno confusione", "Meno stress", "Meno emergenze",
                "Più controllo", "Più chiarezza", "Team allineato"
              ].map((res, i) => (
                <div key={i} className="bg-gray-100 py-6 px-4 rounded-2xl border border-gray-200 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <span className={`w-3 h-3 rounded-full bg-metallic-silver flex-shrink-0`}></span>
                  <span className="font-bold uppercase text-sm md:text-base text-gray-800 tracking-wide text-left">{res}</span>
                </div>
              ))}
            </div>

            <div className="mb-16">
               <h3 className="text-2xl font-black uppercase mb-8 text-black">Cosa dicono di noi</h3>
               <div className="aspect-video max-w-4xl mx-auto rounded-[30px] overflow-hidden bg-gray-100 shadow-xl border border-gray-200 relative group cursor-pointer">
                 <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                     <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                 </div>
                 <VideoPlaceholder variant="neutral" className="w-full h-full opacity-50" />
               </div>
            </div>

            <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-10 rounded-[30px] border border-gray-300">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-black">Non sai da dove iniziare?</h3>
              <p className="text-xl md:text-2xl text-gray-700 font-light mb-8">
                Iniziamo dalle cose semplici. Chiamaci e raccontaci la tua storia.
              </p>
              <Link to="/profile" className="inline-block px-12 py-5 bg-metallic-silver text-black rounded-full font-black uppercase text-lg tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(192,192,192,0.4)]">
                PRENOTA UNA CALL
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Le Divisioni Section */}
      <section className="py-24 bg-premiumBlack border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal direction="top" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white">Le <span className="text-metallic-silver animate-[metallicShine_3s_linear_infinite]">Divisioni</span></h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Creative Agency */}
            <Reveal direction="left" className="group">
              <div className="glass-panel p-10 md:p-14 rounded-[40px] border-white/5 hover:border-willOrange/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-willOrange/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-willOrange/20"></div>
                
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 text-white group-hover:text-willOrange transition-colors">Will. <span className="text-willOrange">Creative</span></h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
                  Oggi non basta essere online per acquisire nuovi clienti. Serve una strategia di posizionamento. Noi la costruiamo con te.
                </p>

                <div className="space-y-4 mb-10">
                  {["Più contatti qualificati", "Miglior conversione", "Crescita costante"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-willOrange"></span>
                      <span className="text-gray-300 font-bold uppercase text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/creative" className="inline-block w-full py-4 bg-transparent border border-willOrange text-willOrange rounded-full font-black uppercase text-center tracking-widest hover:bg-willOrange hover:text-white transition-all">
                  SCOPRI LA DIVISIONE MARKETING
                </Link>
              </div>
            </Reveal>

            {/* Performance */}
            <Reveal direction="right" className="group">
              <div className="glass-panel p-10 md:p-14 rounded-[40px] border-white/5 hover:border-performance/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-performance/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-performance/20"></div>
                
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 text-white group-hover:text-performance transition-colors">Will. <span className="text-performance">Performance</span></h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
                  Aiutare imprenditori, professionisti e aziende a raggiungere massime prestazioni attraverso un sistema integrato che unisce identità, fisiologia e disciplina operativa.
                </p>

                <div className="space-y-4 mb-10">
                  {["Chi sei (Essenza)", "Come generi energia (Energia)", "Come trasformi energia in risultati (Esecuzione)"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-performance"></span>
                      <span className="text-gray-300 font-bold uppercase text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/performance" className="inline-block w-full py-4 bg-transparent border border-performance text-performance rounded-full font-black uppercase text-center tracking-widest hover:bg-performance hover:text-white transition-all">
                  RIPRENDI IN MANO LA TUA VITA
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHub;
