import React from 'react';
import { ShieldCheck, KeyRound, Sparkles } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-400/10 p-2 text-emerald-300">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Enterprise-grade security</div>
                <div className="text-xs text-white/60">SOC 2 aligned. FIDO2/WebAuthn native.</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                <KeyRound size={18} />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Biometrics without friction</div>
                <div className="text-xs text-white/60">Passkeys, Face/Touch ID, platform authenticators.</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-violet-400/10 p-2 text-violet-300">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Drop-in in minutes</div>
                <div className="text-xs text-white/60">Copy a line. Ship. Scale to millions.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-white/50">
          <span>Trusted by teams building with</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Vercel</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Cloudflare</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">GitHub</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Stripe</span>
        </div>
      </div>
    </section>
  );
}
