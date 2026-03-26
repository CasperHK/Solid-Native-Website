import { Component } from "solid-js";

const ArchitectureSection: Component = () => {
  return (
    <section id="architecture" class="py-24 relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div class="absolute bottom-1/3 -left-48 w-96 h-96 bg-neon-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-amber/20 text-sm text-neon-amber mb-6">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
            Architecture
          </div>
          <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Hybrid-Native{" "}
            <span class="gradient-text">Model</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-400">
            Solid Native uses a carefully designed hybrid approach — the best of web rendering performance
            with native hardware access through Rust.
          </p>
        </div>

        {/* Data flow diagram */}
        <div class="max-w-4xl mx-auto mb-16">
          <div class="glass-card-strong rounded-2xl p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/3 via-transparent to-neon-violet/3" />
            <div class="relative z-10">
              <h3 class="text-center text-lg font-bold text-white mb-8">
                Reactive Data Flow
              </h3>

              {/* Flow diagram */}
              <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                {/* Solid UI */}
                <div class="glass-card p-5 rounded-2xl border border-neon-cyan/30 text-center min-w-[140px]">
                  <div class="text-2xl mb-2">⚛</div>
                  <div class="text-sm font-bold text-neon-cyan">Solid UI</div>
                  <div class="text-xs text-gray-500 mt-1">createSignal<br />createResource</div>
                </div>

                {/* Arrow right */}
                <div class="flex flex-col items-center md:mx-4">
                  <div class="hidden md:block text-xs text-gray-500 mb-1">invoke()</div>
                  <div class="flex items-center">
                    <div class="hidden md:block w-16 h-px bg-gradient-to-r from-neon-cyan to-neon-amber" />
                    <div class="md:hidden h-8 w-px bg-gradient-to-b from-neon-cyan to-neon-amber" />
                    <svg class="w-4 h-4 text-neon-amber hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <svg class="w-4 h-4 text-neon-amber md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>

                {/* Rust Command */}
                <div class="glass-card p-5 rounded-2xl border border-neon-amber/30 text-center min-w-[140px]">
                  <div class="text-2xl mb-2">🦀</div>
                  <div class="text-sm font-bold text-neon-amber">Rust Command</div>
                  <div class="text-xs text-gray-500 mt-1">#[tauri::command]<br />serialize</div>
                </div>

                {/* Arrow right */}
                <div class="flex flex-col items-center md:mx-4">
                  <div class="hidden md:block text-xs text-gray-500 mb-1">JSON</div>
                  <div class="flex items-center">
                    <div class="hidden md:block w-16 h-px bg-gradient-to-r from-neon-amber to-neon-violet" />
                    <div class="md:hidden h-8 w-px bg-gradient-to-b from-neon-amber to-neon-violet" />
                    <svg class="w-4 h-4 text-neon-violet hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <svg class="w-4 h-4 text-neon-violet md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>

                {/* Solid Signal */}
                <div class="glass-card p-5 rounded-2xl border border-neon-violet/30 text-center min-w-[140px]">
                  <div class="text-2xl mb-2">⚡</div>
                  <div class="text-sm font-bold text-neon-violet">Solid Signal</div>
                  <div class="text-xs text-gray-500 mt-1">reactive update<br />auto-suspend</div>
                </div>
              </div>

              {/* Return arrow */}
              <div class="flex justify-center mt-4">
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-4 h-4 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                  </svg>
                  <span class="text-neon-emerald">reactive update propagates back to UI automatically</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture pillars */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Rendering Layer",
              description:
                "The system WebView (WebKit on iOS, Chromium-based on Android) runs the Solid.js UI with zero Virtual DOM overhead. No bundled browser engine means a tiny footprint.",
              numClass: "text-neon-cyan/20",
              titleClass: "text-neon-cyan",
              icon: "🖥",
            },
            {
              number: "02",
              title: "Native Bridge",
              description:
                "Tauri's invoke IPC passes messages to Rust commands for anything CPU or hardware-intensive. The bridge is type-safe and serializes data automatically.",
              numClass: "text-neon-amber/20",
              titleClass: "text-neon-amber",
              icon: "🔗",
            },
            {
              number: "03",
              title: "Primitive API",
              description:
                "createNativeCommand<T>(command, payload?) wraps invoke with createResource, giving you Solid Signals that automatically suspend while the Rust call is in-flight.",
              numClass: "text-neon-violet/20",
              titleClass: "text-neon-violet",
              icon: "🧪",
            },
          ].map((pillar) => (
            <div class="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
              <div class={`text-4xl font-black ${pillar.numClass} mb-3`}>{pillar.number}</div>
              <div class="text-2xl mb-3">{pillar.icon}</div>
              <h3 class={`text-lg font-bold ${pillar.titleClass} mb-2`}>{pillar.title}</h3>
              <p class="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
