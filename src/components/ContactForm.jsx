import React from 'react';
import { Send, Mail } from 'lucide-react';

const API_BASE = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '');

export default function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | loading | success | error
  const [error, setError] = React.useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company: company || undefined, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || 'Failed to send message');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'Something went wrong');
    }
  };

  return (
    <section id="contact" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300"><Mail size={18} /></div>
          <div>
            <h2 className="text-xl font-semibold text-white">Get in touch</h2>
            <p className="text-sm text-white/60">Tell us about your use case. We’ll get back within 1–2 business days.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block text-xs text-white/70">Name</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-0 focus:border-cyan-400/40"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-xs text-white/70">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-0 focus:border-cyan-400/40"
                placeholder="jane@company.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="company" className="block text-xs text-white/70">Company (optional)</label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-0 focus:border-cyan-400/40"
                placeholder="Acme Inc."
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-xs text-white/70">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-0 focus:border-cyan-400/40"
                placeholder="We’re building ..."
              />
            </div>

            <div className="sm:col-span-2 mt-2 flex items-center justify-between">
              <div className="text-xs text-white/60" aria-live="polite">
                {status === 'success' && <span className="text-emerald-300">Message sent. We’ll reply soon.</span>}
                {status === 'error' && <span className="text-rose-300">{error}</span>}
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending…' : (<><Send size={16} /> Send</>)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
