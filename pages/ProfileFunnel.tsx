
import React, { useState } from 'react';
import { LeadData } from '../types';
import Reveal from '../components/Reveal';

const ProfileFunnel: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    role: '',
    problem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending data to automation...', formData);
    // Simulating API call to Make/Zapier
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-black">
        <div className="max-w-md w-full glass-panel p-12 rounded-[40px] text-center border-performance/20">
          <div className="w-20 h-20 bg-performance rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(0,102,255,0.4)]">
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </div>
          <h2 className="text-3xl font-black mb-4">CONFIRMATO.</h2>
          <p className="text-gray-400 mb-8">Controlla la tua email. I materiali E-CODE sono in viaggio verso di te.</p>
          <button onClick={() => setSubmitted(false)} className="text-performance font-bold uppercase tracking-widest text-sm hover:underline">Nuovo Test</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-48 pb-32 bg-black flex flex-col items-center justify-start p-6">
      <div className="max-w-[1400px] w-full mx-auto">
        
        {/* Titolo Distaccato e Imponente */}
        <Reveal direction="top" className="text-center mb-24 md:mb-32">
          <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[160px] font-black leading-[0.85] tracking-tighter uppercase inline-block">
            ACCESSO <span className="text-performance text-glow-performance">E-CODE</span>
          </h1>
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-px w-12 bg-white/10"></div>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm">Inizia la tua trasformazione ora</p>
            <div className="h-px w-12 bg-white/10"></div>
          </div>
        </Reveal>
        
        {/* Form Container */}
        <Reveal direction="bottom" delay={300} className="flex justify-center">
          <form 
            onSubmit={handleSubmit} 
            className="max-w-xl w-full glass-panel p-8 md:p-14 rounded-[40px] md:rounded-[60px] space-y-8 border-white/5 relative group hover:border-performance/20 transition-all duration-700"
          >
            {/* Elemento Decorativo di Distacco */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-performance/30 to-performance/60"></div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1 block">Nome Completo</label>
              <input 
                required 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-performance transition-all text-white font-medium"
                placeholder="Inserisci il tuo nome"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1 block">Email Professionale</label>
              <input 
                required 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-performance transition-all text-white font-medium"
                placeholder="email@azienda.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1 block">Ruolo / Occupazione</label>
              <div className="relative">
                <select 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-performance transition-all text-white appearance-none cursor-pointer font-medium"
                  value={formData.role}
                  onChange={e => setFormData({...formData, role: e.target.value})}
                >
                  <option value="" className="bg-black">Seleziona ruolo</option>
                  <option value="imprenditore" className="bg-black">Imprenditore</option>
                  <option value="ceo" className="bg-black">CEO / Executive</option>
                  <option value="freelance" className="bg-black">Freelance Senior</option>
                  <option value="manager" className="bg-black">Manager</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1 block">Il problema n.1 oggi</label>
              <textarea 
                required 
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-performance transition-all text-white resize-none font-medium"
                placeholder="Energia, Focus, Strategia..."
                value={formData.problem}
                onChange={e => setFormData({...formData, problem: e.target.value})}
              />
            </div>

            <button type="submit" className="w-full bg-performance text-white py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(0,102,255,0.2)] hover:shadow-[0_25px_60px_rgba(0,102,255,0.4)]">
              Sblocca E-Code
            </button>
            
            <p className="text-center text-[9px] text-gray-600 uppercase font-bold tracking-widest pt-4">
              I tuoi dati sono protetti da crittografia end-to-end.
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default ProfileFunnel;
