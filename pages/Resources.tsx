
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { ResourceItem } from '../types';

const resources: ResourceItem[] = [
  {
    id: 'eco-01',
    title: 'E-CODE BIO-PROTOCOL',
    category: 'performance',
    price: '€197',
    description: 'Il protocollo completo di ottimizzazione cellulare e neurochimica per imprenditori.',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070',
    features: ['Analisi Biomarcatori', 'Piano Integrazione', 'Architettura Sonno']
  },
  {
    id: 'cre-01',
    title: 'BRAND AUTHORITY BLUEPRINT',
    category: 'creative',
    price: '€249',
    description: 'Architettura del brand e ingegneria della percezione. Posizionati come leader di mercato.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070',
    features: ['Strategia Visuale', 'Copywriting d\'Impatto', 'Funnel Design']
  },
  {
    id: 'foc-01',
    title: 'NEURAL FOCUS MASTERCLASS',
    category: 'mindset',
    price: '€97',
    description: 'Video masterclass per padroneggiare gli stati di Deep Work e Peak Flow.',
    image: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&q=80&w=2083',
    features: ['Sistemi di Attenzione', 'Biofeedback', '2h Video HD']
  },
  {
    id: 'eco-02',
    title: 'METABOLIC ENGINE 2.0',
    category: 'performance',
    price: '€149',
    description: 'Guida avanzata alla flessibilità metabolica per eliminare i cali energetici pomeridiani.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070',
    features: ['Nutrizione Strategica', 'Timing Nutrizionale', 'Test Glicemici']
  }
];

const Resources: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'performance' | 'creative' | 'mindset'>('all');

  const filteredResources = filter === 'all' 
    ? resources 
    : resources.filter(r => r.category === filter);

  return (
    <div className="bg-premiumBlack text-white min-h-screen pt-32 md:pt-40 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <Reveal direction="top" className="text-center mb-16 md:mb-24">
          <span className="text-resources font-black uppercase tracking-wide-premium text-[10px] md:text-sm mb-4 md:mb-6 block">The Resource Vault</span>
          <h1 className="text-5xl md:text-7xl lg:text-[140px] font-black tracking-premium leading-none mb-8 md:mb-12 uppercase text-glow-resources">
            ELITE<br/><span className="text-white/20">ASSETS.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Strumenti, protocolli e masterclass progettati per chi non ha tempo da perdere. Sblocca il sistema.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal direction="scale" className="flex flex-wrap justify-center gap-4 mb-16 md:mb-32">
          {['all', 'performance', 'creative', 'mindset'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                filter === f 
                  ? 'bg-resources text-black border-resources' 
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-resources/30 hover:text-resources'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {filteredResources.map((item, index) => (
            <Reveal key={item.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 100}>
              <div className="group glass-panel rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/5 hover:border-resources/40 transition-all duration-700 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className={`absolute top-6 right-6 px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest bg-resources text-black shadow-[0_0_20px_rgba(0,255,133,0.4)]`}>
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-premiumBlack via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-8 md:p-12 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6 md:mb-8">
                      <h3 className="text-2xl md:text-4xl font-black tracking-premium leading-tight max-w-[70%] group-hover:text-resources transition-colors">{item.title}</h3>
                      <span className="text-xl md:text-3xl font-black text-resources">{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm md:text-lg font-light mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-3 mb-12">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-resources/50"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase text-xs md:text-sm tracking-wide-premium hover:bg-resources transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                    ACQUISTA ORA
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Support Call */}
        <Reveal direction="bottom" className="mt-32 md:mt-60 text-center glass-panel p-10 md:p-20 rounded-[40px] md:rounded-[80px] border-resources/5">
          <h2 className="text-3xl md:text-5xl font-black tracking-premium mb-6 md:mb-10 uppercase">Hai bisogno di un supporto personalizzato?</h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 md:mb-16 font-light max-w-2xl mx-auto">
            I nostri protocolli sono il punto di partenza. Per un'implementazione assistita al 100%, richiedi l'accesso al sistema completo.
          </p>
          <Link to="/profile" className="inline-block border-2 border-resources/20 text-resources px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-resources hover:text-black transition-all">
            RICHIEDI COACHING
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default Resources;
