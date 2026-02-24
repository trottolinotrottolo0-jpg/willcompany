import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import VideoPlaceholder from '../components/VideoPlaceholder';

const CreativeLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Space Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Stars & Effects */}
        <div className="absolute inset-0 z-0">
          <VideoPlaceholder variant="creative" className="w-full h-full opacity-15" />
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
                Strategie che <span className="text-willOrange">portano clienti</span>.
              </h1>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <p className="text-gray-300 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
                Costruiamo la tua identità e il tuo posizionamento con un metodo strategico, chiaro e potente.
              </p>
            </Reveal>

            <Reveal direction="left" delay={600}>
              <div className="flex flex-wrap gap-3 pt-3">
                {['Web Design','E‑Commerce','ADV','Digital Marketing','Brand Identity','AI SEO','Creazione Contenuti'].map((chip) => (
                  <span key={chip} className="text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-full border border-willOrange/40 text-white/90">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="pt-2">
                <Link to="/profile" className="inline-block px-10 py-4 bg-willOrange text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,85,0,0.4)]">
                  Raccontaci il tuo progetto
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="hidden lg:block"></div>
        </div>

        {/* Lunar Surface Bottom */}
        <div className="absolute bottom-0 w-full h-32 lg:h-64 bg-gradient-to-t from-[#101010] to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* Chi Siamo Section (White Background) */}
      <section className="py-24 md:py-40 bg-white text-black relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal direction="left">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-8">
                 Decisioni guidate<br/>dall'<span className="text-willOrange">Identità.</span>
               </h2>
               <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                 <p>
                   <strong className="text-black">Will Group è il collaboratore strategico per la crescita della tua azienda.</strong> Affianchiamo leader e aziende nei momenti in cui le decisioni contano davvero.
                 </p>
                 <p>
                   Portiamo chiarezza umana nei processi decisionali, aiutando le aziende a crescere senza perdere coerenza, energia e direzione.
                 </p>
                 <p>
                   Attraverso il nostro metodo e una strategia costruita assieme. <span className="text-black border-b border-willOrange/50">Noi portiamo le competenze, tu la voglia di crescere.</span>
                 </p>
               </div>
             </Reveal>
             <Reveal direction="right">
               <div className="bg-gray-100 p-10 rounded-[40px] border border-gray-200 shadow-xl">
                 <h3 className="text-2xl font-black uppercase mb-6 text-black">Ti sei mai sentito così?</h3>
                 <ul className="space-y-4 text-gray-600">
                   <li className="flex gap-4">
                     <span className="text-willOrange font-bold">✕</span>
                     <span>L'imprenditore è sovraccarico. Tutto passa da te.</span>
                   </li>
                   <li className="flex gap-4">
                     <span className="text-willOrange font-bold">✕</span>
                     <span>Decidi sempre con urgenza e sotto pressione.</span>
                   </li>
                   <li className="flex gap-4">
                     <span className="text-willOrange font-bold">✕</span>
                     <span>Ti ritrovi a cambiare spesso direzione.</span>
                   </li>
                   <li className="flex gap-4">
                     <span className="text-willOrange font-bold">✕</span>
                     <span>L'identità dell'azienda si è confusa con l'operatività.</span>
                   </li>
                 </ul>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Il Metodo Section (Black Background) */}
      <section className="py-24 md:py-40 bg-premiumBlack">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal direction="top" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">Il Nostro <span className="text-willOrange">Metodo</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Lavoriamo su tre pilastri fondamentali per costruire aziende solide, lucide e guidabili.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Chiarezza", d: "Allineiamo la tua identità alla tua comunicazione attraverso uno storytelling coerente con il brand." },
              { t: "Direzione", d: "Trasformiamo la strategia in un piano operativo di marketing scalabile e misurabile." },
              { t: "Risultati", d: "Contenuti e campagne che trasmettono autenticità e coinvolgono clienti e team." }
            ].map((item, i) => (
              <Reveal key={i} direction="bottom" delay={i * 200} className="glass-panel p-10 rounded-[30px] border-white/5 hover:border-willOrange/30 transition-all group">
                <div className="text-6xl font-black text-white/10 mb-6 group-hover:text-willOrange/20 transition-colors">0{i+1}</div>
                <h3 className="text-2xl font-black uppercase mb-4 text-white">{item.t}</h3>
                <p className="text-gray-400 leading-relaxed">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risultati Section (White Background) */}
      <section className="py-24 md:py-40 bg-white text-center">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <Reveal direction="scale">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12 text-black">
              Non serve "più marketing",<br/>servono <span className="text-willOrange">risultati reali.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
              {[
                { t: 'Più contatti qualificati', d: 'Miglioriamo il posizionamento per farti diventare il punto di riferimento del tuo pubblico, ottenendo contatti più qualificati fin da subito.' },
                { t: 'Miglior conversione', d: 'Ottimizziamo processi e automazioni per aumentare la conversione dei contatti in clienti.' },
                { t: 'Crescita costante', d: 'Monitoriamo ogni azione, allineiamo le strategie agli obiettivi e programmiamo il lavoro futuro.' }
              ].map((b, i) => (
                <div key={i} className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-willOrange" />
                    <h3 className="text-xl font-black uppercase">{b.t}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-willOrange/10 to-willOrange/5 p-10 rounded-[30px] border border-willOrange/20">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-black">Risultato Finale</h3>
              <p className="text-xl md:text-2xl text-gray-700 font-light">
                Un'azienda che cresce senza perdere identità, energia e direzione.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Finale (Black Background) */}
      <section className="py-24 bg-premiumBlack border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <Reveal direction="bottom">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 text-white">
              Non basta essere online per<br/>acquisire nuovi clienti.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Serve una strategia di posizionamento. Noi la costruiamo con te.
            </p>
            <Link to="/profile" className="inline-block px-12 py-5 bg-willOrange text-white rounded-full font-black uppercase text-lg tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,85,0,0.4)]">
              INIZIAMO SUBITO
            </Link>
            <p className="mt-4 text-sm text-gray-600 uppercase tracking-widest font-bold">Raccontaci la tua storia</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CreativeLanding;
