import { Component, For } from "solid-js";

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
  bg: string;
  glow: string;
  badge?: string;
}

const features: Feature[] = [
  {
    icon: "⚡️",
    title: "Zero Virtual DOM",
    description:
      "Solid.js updates the real DOM directly with fine-grained reactivity — no reconciliation overhead, no diffing, just surgical updates.",
    color: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    glow: "glow-cyan",
    badge: "Core",
  },
  {
    icon: "🦀",
    title: "Rust Core",
    description:
      "Tauri v2 bridges CPU-intensive tasks through a type-safe Rust API. Rust's ownership model eliminates entire classes of runtime bugs.",
    color: "text-neon-amber",
    bg: "bg-neon-amber/10",
    glow: "glow-rose",
    badge: "Performance",
  },
  {
    icon: "📦",
    title: "Tiny Bundle",
    description:
      '~2–5 MB "Hello World" APK/IPA — less than 1/5 of comparable frameworks. Ship faster and update instantly.',
    color: "text-neon-emerald",
    bg: "bg-neon-emerald/10",
    glow: "glow-emerald",
    badge: "Lightweight",
  },
  {
    icon: "📱",
    title: "Native Feel",
    description:
      "WebKit/WebView-optimised animations, safe-area-aware layout, and smooth 60 fps interactions that feel indistinguishable from native.",
    color: "text-neon-violet",
    bg: "bg-neon-violet/10",
    glow: "glow-violet",
    badge: "UX",
  },
  {
    icon: "🔒",
    title: "Memory Safe",
    description:
      "Rust's ownership and borrowing model guarantees memory safety at compile time — no null pointer exceptions, no use-after-free bugs.",
    color: "text-neon-rose",
    bg: "bg-neon-rose/10",
    glow: "glow-rose",
    badge: "Security",
  },
  {
    icon: "🌐",
    title: "Web Developer Friendly",
    description:
      "If you know Solid.js, you already know Solid Native. Familiar primitives, JSX, and tooling — just supercharged with mobile capabilities.",
    color: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    glow: "glow-cyan",
    badge: "DX",
  },
];

const FeaturesSection: Component = () => {
  return (
    <section id="features" class="py-24 relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-violet/20 text-sm text-neon-violet mb-6">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Core Features
          </div>
          <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Built for{" "}
            <span class="gradient-text">Peak Performance</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-400">
            Every architectural decision in Solid Native was made with one goal: the fastest, lightest, most developer-friendly mobile framework possible.
          </p>
        </div>

        {/* Features Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={features}>
            {(feature) => (
              <div class={`glass-card p-6 hover:scale-[1.02] transition-all duration-300 group ${feature.glow} relative overflow-hidden`}>
                {/* Background gradient */}
                <div class={`absolute inset-0 ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                <div class="relative z-10">
                  {/* Icon + Badge */}
                  <div class="flex items-start justify-between mb-4">
                    <div class={`text-3xl p-3 rounded-xl ${feature.bg}`}>{feature.icon}</div>
                    {feature.badge && (
                      <span class={`px-2.5 py-1 text-xs font-semibold rounded-full ${feature.bg} ${feature.color}`}>
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <h3 class="text-lg font-bold text-white mb-2 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )}
          </For>
        </div>

        {/* Comparison Banner */}
        <div class="mt-16 glass-card-strong p-8 rounded-2xl relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-violet/5" />
          <div class="relative z-10">
            <h3 class="text-center text-xl font-bold text-white mb-8">
              How Solid Native Compares
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left py-3 px-4 text-gray-400 font-medium">Metric</th>
                    <th class="text-center py-3 px-4 text-neon-cyan font-semibold">Solid Native</th>
                    <th class="text-center py-3 px-4 text-gray-500 font-medium">React Native</th>
                    <th class="text-center py-3 px-4 text-gray-500 font-medium">Flutter</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Bundle Size (Hello World)", sn: "~2–5 MB", rn: "~20–25 MB", flutter: "~10–15 MB" },
                    { metric: "Virtual DOM", sn: "✗ None", rn: "✓ Yes", flutter: "✗ None" },
                    { metric: "Language", sn: "TypeScript + Rust", rn: "JavaScript/TypeScript", flutter: "Dart" },
                    { metric: "Native Bridge", sn: "Tauri IPC (Rust)", rn: "JSI / Bridge", flutter: "Platform Channels" },
                    { metric: "Web Dev Familiar", sn: "✓ Yes", rn: "✓ Partial", flutter: "✗ Dart only" },
                    { metric: "Memory Safety", sn: "✓ Rust compile-time", rn: "✗ Runtime only", flutter: "✗ Runtime only" },
                  ].map((row, i) => (
                    <tr class={`futuristic-table-row border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                      <td class="py-3 px-4 text-gray-300">{row.metric}</td>
                      <td class="py-3 px-4 text-center font-semibold text-neon-cyan">{row.sn}</td>
                      <td class="py-3 px-4 text-center text-gray-500">{row.rn}</td>
                      <td class="py-3 px-4 text-center text-gray-500">{row.flutter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
