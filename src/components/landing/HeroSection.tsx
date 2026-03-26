import { Component } from "solid-js";

const HeroSection: Component = () => {
  return (
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div class="absolute inset-0 grid-pattern" />
      <div class="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-neon-cyan/8 rounded-full blur-[120px] pointer-events-none animate-pulse" style="animation-duration: 4s;" />
      <div class="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-neon-violet/8 rounded-full blur-[120px] pointer-events-none animate-pulse" style="animation-duration: 6s;" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-rose/4 rounded-full blur-[160px] pointer-events-none" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badge */}
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/20 text-sm text-neon-cyan mb-8">
          <span class="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          Now in Alpha — Built with Solid.js + Tauri 2.0
        </div>

        {/* Main heading */}
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          <span class="block">The Future of</span>
          <span class="block gradient-text">Cross-Platform</span>
          <span class="block">Mobile Development</span>
        </h1>

        {/* Subtitle */}
        <p class="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
          Solid Native combines{" "}
          <span class="text-neon-cyan font-semibold">Solid.js fine-grained reactivity</span> with{" "}
          <span class="text-neon-amber font-semibold">Tauri 2.0's Rust backend</span> to deliver
          mobile apps that are faster than React Native, lighter than Flutter, and natural for web developers.
        </p>

        {/* CTA Buttons */}
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#quickstart"
            class="flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-neon-cyan to-neon-violet hover:from-neon-cyan/90 hover:to-neon-violet/90 rounded-2xl shadow-lg shadow-neon-cyan/25 hover:shadow-neon-cyan/40 transition-all duration-300 hover:scale-105"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            Get Started Free
          </a>
          <a
            href="https://github.com/CasperHK/solid-native"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-8 py-4 text-base font-medium text-gray-300 glass-card-strong hover:bg-white/15 border border-white/10 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Hero Stats */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "~2–5 MB", label: "Bundle Size", color: "text-neon-cyan", bg: "bg-neon-cyan/10" },
            { value: "60 FPS", label: "Animations", color: "text-neon-emerald", bg: "bg-neon-emerald/10" },
            { value: "Zero", label: "Virtual DOM", color: "text-neon-violet", bg: "bg-neon-violet/10" },
            { value: "Rust", label: "Native Bridge", color: "text-neon-amber", bg: "bg-neon-amber/10" },
          ].map((stat) => (
            <div class="glass-card p-4 rounded-2xl border border-white/10">
              <div class={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div class="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
