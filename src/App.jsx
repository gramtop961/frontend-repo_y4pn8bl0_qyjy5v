import React from 'react';
import Hero from './components/Hero';
import CodeEmbed from './components/CodeEmbed';
import TrustBar from './components/TrustBar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500" />
            <span className="text-sm font-semibold">Disappear</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#code" className="hover:text-white">Code</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </nav>
          <a href="#code" className="rounded-md bg-white/10 px-3 py-1.5 text-xs hover:bg-white/15">Start</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <TrustBar />
        <CodeEmbed />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
