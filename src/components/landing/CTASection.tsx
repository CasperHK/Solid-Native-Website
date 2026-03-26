import { Component } from "solid-js";

const CTASection: Component = () => {
  return (
    <section class="py-24 relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glows */}
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="w-[800px] h-[400px] bg-gradient-to-r from-neon-cyan/10 via-neon-violet/10 to-neon-rose/10 rounded-full blur-[100px]" />
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="glass-card-strong rounded-3xl p-12 relative overflow-hidden">
          {/* Accent stripe */}
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-rose" />

          <div class="text-5xl mb-6">🚀</div>

          <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to Build the{" "}
            <span class="gradient-text">Next Generation</span>
            {" "}of Mobile Apps?
          </h2>

          <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the growing community of developers building faster, lighter, more secure mobile applications
            with Solid Native. Zero Virtual DOM. Rust-powered. Web developer friendly.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#quickstart"
              class="flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-neon-cyan to-neon-violet hover:from-neon-cyan/90 hover:to-neon-violet/90 rounded-2xl shadow-lg shadow-neon-cyan/25 hover:shadow-neon-cyan/40 transition-all duration-300 hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Start Building Now
            </a>
            <a
              href="https://github.com/CasperHK/solid-native"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-8 py-4 text-base font-medium text-gray-300 glass-card hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>

          {/* Trust badges */}
          <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              MIT License
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Open Source
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              No Vendor Lock-in
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Free Forever
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
