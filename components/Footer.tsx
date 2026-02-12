
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-premiumBlack border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-black tracking-tighter mb-6 block">WILL.</Link>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Il sistema definitivo per l'ottimizzazione biologica e il posizionamento di mercato per professionisti ad alte responsabilità.
            </p>
            <div className="flex gap-4">
              {['instagram', 'linkedin', 'youtube'].map(s => (
                <div key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all cursor-pointer">
                  <span className="text-[10px] uppercase font-bold">{s[0]}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Area Performance</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/performance" className="hover:text-performance">Metodo E-CODE</Link></li>
              <li><Link to="/evans" className="hover:text-performance">Evans Events</Link></li>
              <li><Link to="/resources" className="hover:text-performance">Vault Risorse</Link></li>
              <li><Link to="/profile" className="hover:text-performance">Start Profiling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Area Creative</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/creative" className="hover:text-creative">Brand Strategy</Link></li>
              <li><Link to="/creative" className="hover:text-creative">Content Systems</Link></li>
              <li><Link to="/resources" className="hover:text-creative">Assets Digitali</Link></li>
              <li><button className="hover:text-creative">Book a Call</button></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 uppercase tracking-[0.2em] font-bold">
          <div>© 2024 WILL. Tutti i diritti riservati.</div>
          <div className="flex gap-8">
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
