import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Disappear</div>
            <p className="text-xs text-white/50">Auth that disappears. © {new Date().getFullYear()}</p>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={16} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={16} /></a>
            <a href="#" aria-label="Email" className="hover:text-white"><Mail size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
