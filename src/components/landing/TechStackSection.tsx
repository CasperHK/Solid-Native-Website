import { Component, For } from "solid-js";

interface StackLayer {
  layer: string;
  tech: string;
  highlight: string;
  color: string;
  icon: string;
}

const colorMap: Record<string, { text: string; bg: string }> = {
  "neon-cyan": { text: "text-neon-cyan", bg: "bg-neon-cyan/10" },
  "neon-amber": { text: "text-neon-amber", bg: "bg-neon-amber/10" },
  "neon-violet": { text: "text-neon-violet", bg: "bg-neon-violet/10" },
  "neon-emerald": { text: "text-neon-emerald", bg: "bg-neon-emerald/10" },
  "neon-rose": { text: "text-neon-rose", bg: "bg-neon-rose/10" },
};

const stackLayers: StackLayer[] = [
  {
    layer: "UI",
    tech: "Solid.js",
    highlight: "Fine-grained Primitives — zero VDOM, surgical DOM updates",
    color: "neon-cyan",
    icon: "⚛",
  },
  {
    layer: "Native Bridge",
    tech: "Tauri v2",
    highlight: "Rust backend — high-performance IPC and native API access",
    color: "neon-amber",
    icon: "🦀",
  },
  {
    layer: "Build Tool",
    tech: "Vite",
    highlight: "Lightning-fast HMR and optimised production builds",
    color: "neon-violet",
    icon: "⚡",
  },
  {
    layer: "Styling",
    tech: "UnoCSS",
    highlight: "Atomic CSS, mobile-optimised, tree-shakeable utilities",
    color: "neon-emerald",
    icon: "🎨",
  },
  {
    layer: "Headless UI",
    tech: "Kobalte",
    highlight: "Accessible, composable components built for Solid.js",
    color: "neon-rose",
    icon: "🧩",
  },
  {
    layer: "Runtime",
    tech: "WebKit / Chromium",
    highlight: "System WebView rendering — no bundled browser engine needed",
    color: "neon-cyan",
    icon: "🌐",
  },
];

const TechStackSection: Component = () => {
  return (
    <section id="stack" class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 grid-pattern opacity-50" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background accent */}
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-[100px] pointer-events-none" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-emerald/20 text-sm text-neon-emerald mb-6">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>
            Tech Stack
          </div>
          <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Best-in-Class{" "}
            <span class="gradient-text-emerald">Technology</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-400">
            Every piece of the stack was chosen for performance, type safety, and developer experience. No compromises.
          </p>
        </div>

        {/* Stack Cards */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          <For each={stackLayers}>
            {(item) => (
              <div class="glass-card p-5 hover:scale-[1.02] transition-all duration-300 group">
                <div class="flex items-center gap-4 mb-3">
                  <div class={`text-2xl p-2.5 rounded-xl ${colorMap[item.color].bg}`}>{item.icon}</div>
                  <div>
                    <div class="text-xs text-gray-500 uppercase tracking-wider font-medium">{item.layer}</div>
                    <div class={`text-base font-bold ${colorMap[item.color].text}`}>{item.tech}</div>
                  </div>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed">{item.highlight}</p>
              </div>
            )}
          </For>
        </div>

        {/* Architecture Visual */}
        <div class="glass-card-strong rounded-2xl p-8 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/3 to-neon-violet/3" />
          <div class="relative z-10">
            <h3 class="text-center text-xl font-bold text-white mb-8">
              Hybrid-Native Architecture
            </h3>

            {/* Architecture Layers */}
            <div class="max-w-2xl mx-auto space-y-3">
              {[
                {
                  label: "Solid.js UI Layer",
                  sublabel: "Fine-grained reactivity · JSX · Kobalte components",
                  color: "from-neon-cyan/20 to-neon-cyan/5",
                  border: "border-neon-cyan/30",
                  text: "text-neon-cyan",
                },
                {
                  label: "Vite + UnoCSS",
                  sublabel: "Build tooling · HMR · Atomic CSS",
                  color: "from-neon-violet/20 to-neon-violet/5",
                  border: "border-neon-violet/30",
                  text: "text-neon-violet",
                },
                {
                  label: "WebKit / WebView",
                  sublabel: "System renderer · 60 fps · Safe-area aware",
                  color: "from-neon-emerald/20 to-neon-emerald/5",
                  border: "border-neon-emerald/30",
                  text: "text-neon-emerald",
                },
                {
                  label: "Tauri v2 IPC Bridge",
                  sublabel: "Type-safe invoke() · Async commands · Plugins",
                  color: "from-neon-amber/20 to-neon-amber/5",
                  border: "border-neon-amber/30",
                  text: "text-neon-amber",
                },
                {
                  label: "Rust Backend",
                  sublabel: "#[tauri::command] · Memory safe · Hardware access",
                  color: "from-neon-rose/20 to-neon-rose/5",
                  border: "border-neon-rose/30",
                  text: "text-neon-rose",
                },
              ].map((layer, i) => (
                <div>
                  <div class={`bg-gradient-to-r ${layer.color} border ${layer.border} rounded-xl px-5 py-3 flex items-center justify-between`}>
                    <div>
                      <div class={`text-sm font-semibold ${layer.text}`}>{layer.label}</div>
                      <div class="text-xs text-gray-500 mt-0.5">{layer.sublabel}</div>
                    </div>
                    <div class={`text-xs px-2.5 py-1 rounded-full bg-white/5 ${layer.text}`}>
                      Layer {i + 1}
                    </div>
                  </div>
                  {i < 4 && (
                    <div class="flex justify-center my-1">
                      <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
