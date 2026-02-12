
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeHub from './pages/HomeHub';
import PerformanceLanding from './pages/PerformanceLanding';
import CreativeLanding from './pages/CreativeLanding';
import EvansEvents from './pages/EvansEvents';
import ProfileFunnel from './pages/ProfileFunnel';
import Resources from './pages/Resources';
import GenericPage from './pages/GenericPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeHub />} />
            
            {/* Creative Agency Routes */}
            <Route path="/creative" element={<CreativeLanding />} />
            <Route path="/creative/servizi" element={<GenericPage />} />
            <Route path="/creative/progetti" element={<GenericPage />} />
            <Route path="/creative/team" element={<GenericPage />} />
            <Route path="/creative/eventi" element={<GenericPage />} />

            {/* Performance Routes */}
            <Route path="/performance" element={<PerformanceLanding />} />
            <Route path="/performance/consulenza" element={<GenericPage />} />
            <Route path="/performance/testimonianze" element={<GenericPage />} />
            <Route path="/performance/eventi" element={<GenericPage />} />

            {/* Events Routes */}
            <Route path="/events" element={<EvansEvents />} />
            <Route path="/evans" element={<EvansEvents />} /> {/* Keep legacy route just in case */}
            <Route path="/events/organizzazione" element={<GenericPage />} />
            <Route path="/events/prossimi" element={<GenericPage />} />
            <Route path="/events/testimonianze" element={<GenericPage />} />

            {/* Academy Routes */}
            <Route path="/academy" element={<GenericPage />} />
            <Route path="/academy/imprenditori" element={<GenericPage />} />
            <Route path="/academy/sales" element={<GenericPage />} />
            <Route path="/academy/organizzazione" element={<GenericPage />} />
            <Route path="/academy/altro" element={<GenericPage />} />

            {/* Legacy Routes */}
            <Route path="/profile" element={<ProfileFunnel />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
