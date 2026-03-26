import { Component, For } from "solid-js";

interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  status: "done" | "in-progress" | "upcoming";
  phaseText: string;
  dotBg: string;
  dotBorder: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    phase: "Alpha",
    title: "Core Foundation",
    status: "in-progress",
    phaseText: "text-neon-cyan",
    dotBg: "bg-neon-cyan",
    dotBorder: "border-neon-cyan/40",
    items: [
      "Core CLI scaffolding tool (solid-native-cli init)",
      "Project template with Solid.js + Tauri v2",
      "createNativeCommand primitive",
      "UnoCSS mobile-optimised configuration",
      "Desktop, Android, and iOS build targets",
    ],
  },
  {
    phase: "Beta",
    title: "UI Kit",
    status: "upcoming",
    phaseText: "text-neon-violet",
    dotBg: "bg-neon-violet",
    dotBorder: "border-neon-violet/40",
    items: [
      "iOS/Android-native-feel component library",
      "Gesture recogniser primitives",
      "Safe-area-aware layout components",
      "Dark/light mode theming system",
      "Animated transitions and micro-interactions",
    ],
  },
  {
    phase: "v1.0",
    title: "Plugin Ecosystem",
    status: "upcoming",
    phaseText: "text-neon-emerald",
    dotBg: "bg-neon-emerald",
    dotBorder: "border-neon-emerald/40",
    items: [
      "Camera & media library access",
      "Push notifications (FCM + APNs)",
      "Biometrics (Face ID / Fingerprint)",
      "Secure storage (Keychain / Keystore)",
      "Haptic feedback",
    ],
  },
  {
    phase: "v1.5",
    title: "Benchmarks & Docs",
    status: "upcoming",
    phaseText: "text-neon-amber",
    dotBg: "bg-neon-amber",
    dotBorder: "border-neon-amber/40",
    items: [
      "Automated performance benchmarks vs. React Native & Flutter",
      "Comprehensive API documentation",
      "Interactive tutorials and guides",
      "Example app showcase",
      "Community template library",
    ],
  },
];

const statusConfig = {
  done: {
    label: "Complete",
    bg: "bg-neon-emerald/15",
    text: "text-neon-emerald",
    border: "border-neon-emerald/30",
    dot: "bg-neon-emerald",
  },
  "in-progress": {
    label: "In Progress",
    bg: "bg-neon-cyan/15",
    text: "text-neon-cyan",
    border: "border-neon-cyan/30",
    dot: "bg-neon-cyan animate-pulse",
  },
  upcoming: {
    label: "Upcoming",
    bg: "bg-white/5",
    text: "text-gray-400",
    border: "border-white/10",
    dot: "bg-gray-600",
  },
};

const RoadmapSection: Component = () => {
  return (
    <section id="roadmap" class="py-24 relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div class="absolute top-1/2 right-0 w-96 h-96 bg-neon-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-emerald/20 text-sm text-neon-emerald mb-6">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
            Roadmap
          </div>
          <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            What's{" "}
            <span class="gradient-text-emerald">Coming Next</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-400">
            We're building Solid Native in the open. Here's what we're working on and what's coming.
          </p>
        </div>

        {/* Roadmap grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <For each={roadmapItems}>
            {(item) => {
              const s = statusConfig[item.status];
              return (
                <div class={`glass-card p-6 rounded-2xl border ${s.border} hover:scale-[1.01] transition-all duration-300`}>
                  {/* Header */}
                  <div class="flex items-start justify-between mb-5">
                    <div>
                      <div class={`text-xs font-bold uppercase tracking-widest ${item.phaseText} mb-1`}>
                        {item.phase}
                      </div>
                      <h3 class="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <span class={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full ${s.bg} ${s.text}`}>
                      <span class={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                      {s.label}
                    </span>
                  </div>

                  {/* Items */}
                  <ul class="space-y-2.5">
                    <For each={item.items}>
                      {(task) => (
                        <li class="flex items-start gap-3">
                          <div class={`mt-0.5 w-4 h-4 rounded-full ${item.status === "done" ? item.dotBg : `border ${item.dotBorder}`} flex-shrink-0 flex items-center justify-center`}>
                            {item.status === "done" && (
                              <svg class="w-2.5 h-2.5 text-dark-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            )}
                          </div>
                          <span class={`text-sm ${item.status === "upcoming" ? "text-gray-500" : "text-gray-300"}`}>
                            {task}
                          </span>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              );
            }}
          </For>
        </div>

        {/* Contributing CTA */}
        <div class="mt-12 glass-card-strong rounded-2xl p-8 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-violet/5" />
          <div class="relative z-10">
            <div class="text-3xl mb-4">🤝</div>
            <h3 class="text-xl font-bold text-white mb-2">Help Shape the Roadmap</h3>
            <p class="text-gray-400 max-w-xl mx-auto mb-6 text-sm">
              Solid Native is built in the open. Contributions of all kinds are welcome — Rust backend optimisations, Solid.js component work, documentation improvements, or bug reports.
            </p>
            <a
              href="https://github.com/CasperHK/solid-native"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-neon-cyan to-neon-violet hover:from-neon-cyan/90 hover:to-neon-violet/90 rounded-xl shadow-lg shadow-neon-cyan/20 transition-all duration-200 hover:scale-105"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Contribute on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
