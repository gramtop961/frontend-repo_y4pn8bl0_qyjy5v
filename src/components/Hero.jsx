import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Fingerprint } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),rgba(17,24,39,0)_40%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.2),rgba(17,24,39,0)_40%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20 lg:py-28">
          {/* Copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Fingerprint size={14} /> Passwordless biometrics for devs
            </div>
            <h1 className="mt-5 font-bold text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Auth that disappears.
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/70">
              Ship passwordless biometrics in one line. Drop-in passkeys and WebAuthn APIs that vanish into your product flow. No passwords. No friction. Just verified users.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#code"
                className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Get started <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
              </a>
              <a
                href="#docs"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10"
              >
                Read the docs
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-white/50">
              <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-400" /> 99.99% uptime</div>
              <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-400" /> WebAuthn + FIDO2</div>
              <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-violet-400" /> SOC 2 ready</div>
            </div>
          </div>

          {/* 3D */}
          <div className="relative h-[360px] sm:h-[440px] lg:h-[560px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
