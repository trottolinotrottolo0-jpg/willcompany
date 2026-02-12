import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import { LeadData } from '../types';
import VideoPlaceholder from '../components/VideoPlaceholder';

const EventCard: React.FC<{ title: string, date: string, location: string, image: string }> = ({ title, date, location, image }) => (
  <Reveal direction="bottom" className="group">
    <div className="relative aspect-[16/10] rounded-[25px] md:rounded-[40px] overflow-hidden glass-panel border border-white/5 md:group-hover:border-events/40 transition-all duration-700">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-1000 opacity-60 md:opacity-40 md:group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">
        <div>
          <span className="text-events font-black uppercase tracking-widest text-[8px] md:text-[10px] mb-1 md:mb-2 block">{date} — {location}</span>
          <h4 className="text-xl md:text-3xl font-black tracking-tight">{title}</h4>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center md:group-hover:bg-events md:group-hover:border-events transition-all">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-white md:group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  </Reveal>
);

const EvansEvents: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    role: '',
    problem: ''
  });
  
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending event application...', formData);
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-premiumBlack text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <VideoPlaceholder variant="events" className="w-full h-full opacity-20 contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-b from-premiumBlack via-transparent to-premiumBlack" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <Reveal direction="top" delay={100}>
            <div className="mb-6 md:mb-8 inline-block">
              <span className="text-events font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] md:text-sm animate-pulse block">EXCLUSIVE ACTIVATIONS</span>
            </div>
          </Reveal>
          
          <div className="relative mb-8 md:mb-12">
            <h1 className={`text-5xl sm:text-7xl md:text-[100px] lg:text-[140px] font-black tracking-tighter leading-none select-none transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <span className="text-white md:hover:text-[#FFD700] md:hover:drop-shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all duration-500 cursor-default inline-block uppercase">
                EVENTS.
              </span>
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-events/10 blur-[2px]"></div>
          </div>

          <Reveal direction="bottom" delay={600}>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 max-w-4xl mx-auto font-light leading-none uppercase tracking-tight mb-12 md:mb-16">
              NON È UN SEMINARIO. È UNA <span className="text-white font-black italic">METAMORFOSI</span> COLLETTIVA.
            </p>
          </Reveal>

          <Reveal direction="scale" delay={800}>
            <button 
              onClick={scrollToForm}
              className="w-full md:w-auto bg-white text-black px-10 md:px-16 py-5 md:py-8 rounded-full font-black uppercase text-sm md:text-lg tracking-wide-premium md:hover:bg-events md:hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,215,0,0.15)]"
            >
              SCOPRI LE DATE
            </button>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-60 bg-black relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 text-center">
            {[
              { value: 100, suffix: '%', t: 'OPERATIVITÀ', d: 'Focus rigenerato' },
              { value: 10, suffix: 'x', t: 'AUTORITÀ', d: 'Impatto sociale' },
              { value: 10, suffix: 'x', t: 'FINANZA', d: 'Scaling' },
              { value: 0, suffix: '', t: 'ENERGIA', d: 'Peak Flow', isInfinity: true }
            ].map((stat, i) => (
              <Reveal key={i} direction="bottom" delay={i * 200}>
                <div className="space-y-2 md:space-y-4">
                  <div className="text-4xl md:text-6xl lg:text-8xl font-black text-white md:hover:text-events transition-colors duration-500">
                    {stat.isInfinity ? (
                      <span className="animate-pulse-slow">∞</span>
                    ) : (
                      <Counter end={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-events font-black tracking-widest text-[8px] md:text-sm uppercase">{stat.t}</div>
                  <div className="text-gray-500 text-[8px] md:text-xs font-bold uppercase tracking-widest">{stat.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 md:py-40 bg-premiumGray/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal direction="left" className="mb-16 md:mb-32">
            <h2 className="text-4xl md:text-7xl lg:text-9xl font-black tracking-premium leading-none uppercase">LA STANZA<br/><span className="text-events">DOVE ACCADE.</span></h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <EventCard title="METODO E-CODE LIVE" date="15-17 NOV" location="DUBAI" image="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=2070" />
            <EventCard title="BRAND DOMINANCE" date="04-06 DIC" location="MILAN" image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069" />
            <EventCard title="NEURAL PEAK" date="20-22 GEN" location="LONDON" image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070" />
            <EventCard title="ELITE SYMPOSIUM" date="12-14 MAR" location="ZURICH" image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2012" />
          </div>
        </div>
      </section>

      {/* Massive CTA & Form Section */}
      <section ref={formRef} className="py-32 md:py-60 bg-black relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-5">
          <div className="text-[200px] md:text-[400px] font-black tracking-tighter absolute -bottom-20 -left-10 md:-bottom-40 md:-left-20 text-events">WILL.</div>
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] mb-12 uppercase">
                NON RESTARE<br/>FUORI DALLA<br/><span className="text-events">STANZA.</span>
              </h2>
              <p className="text-gray-400 text-xl md:text-2xl font-light max-w-xl leading-relaxed">
                Le selezioni per i prossimi eventi sono aperte. Solo 40 posti per data. Candidati ora per bloccare la tua posizione nel sistema.
              </p>
            </Reveal>

            <Reveal direction="right" className="w-full">
              {submitted ? (
                <div className="glass-panel p-12 md:p-20 rounded-[40px] border-events/40 text-center animate-pulse">
                  <div className="w-24 h-24 bg-events rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(255,184,0,0.5)]">
                    <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-black mb-4">CANDIDATURA RICEVUTA</h3>
                  <p className="text-gray-400 text-lg uppercase tracking-widest">Il nostro team analizzerà il tuo profilo entro 48 ore.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-[40px] border-white/10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-black uppercase text-events tracking-widest mb-2 block">Nome Completo</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Nome"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-events transition-all text-white"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-events tracking-widest mb-2 block">Email Professionale</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="Email"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-events transition-all text-white"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black uppercase text-events tracking-widest mb-2 block">Qual è il tuo obiettivo principale?</label>
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-events transition-all text-white appearance-none cursor-pointer"
                      value={formData.role}
                      onChange={e => setFormData({...formData, role: e.target.value})}
                    >
                      <option value="" className="bg-black">Seleziona data/interesse</option>
                      <option value="dubai" className="bg-black">METODO E-CODE LIVE - DUBAI</option>
                      <option value="milan" className="bg-black">BRAND DOMINANCE - MILANO</option>
                      <option value="london" className="bg-black">NEURAL PEAK - LONDRA</option>
                      <option value="zurich" className="bg-black">ELITE SYMPOSIUM - ZURIGO</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-black uppercase text-events tracking-widest mb-2 block">Cosa ti aspetti da questa esperienza?</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Descrivi brevemente la tua sfida attuale..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-events transition-all text-white resize-none"
                      value={formData.problem}
                      onChange={e => setFormData({...formData, problem: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-events text-black py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(255,184,0,0.2)]"
                  >
                    CANDIDATI ORA
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvansEvents;