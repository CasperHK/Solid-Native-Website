import { Component, createSignal, For } from "solid-js";

interface Tab {
  id: string;
  label: string;
  icon: string;
  code: string;
  description: string;
}

const tabs: Tab[] = [
  {
    id: "install",
    label: "Install",
    icon: "📦",
    description: "Install dependencies and start the dev server",
    code: `# Prerequisites:
# - Rust (rustup): https://rustup.rs
# - Node.js ≥ 18 + pnpm: npm install -g pnpm
# - Android Studio (Android) or Xcode (iOS/macOS)

# 1. Clone and install
git clone https://github.com/CasperHK/solid-native
cd solid-native
pnpm install

# 2. Desktop development (fastest feedback loop)
pnpm tauri:dev

# 3. Android development
pnpm tauri android init   # first time only
pnpm tauri android dev

# 4. iOS development (macOS only)
pnpm tauri ios init       # first time only
pnpm tauri ios dev`,
  },
  {
    id: "component",
    label: "Component",
    icon: "⚛",
    description: "A simple reactive counter using Solid.js primitives",
    code: `// src/App.tsx
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="flex flex-col items-center gap-4 p-8">
      <h1 class="text-2xl font-bold text-white">
        Solid Native Counter
      </h1>

      <div class="text-6xl font-mono text-cyan-400 tabular-nums">
        {count()}
      </div>

      <div class="flex gap-3">
        <button
          onClick={() => setCount(c => c - 1)}
          class="px-6 py-3 bg-white/10 rounded-xl text-white"
        >
          −
        </button>
        <button
          onClick={() => setCount(c => c + 1)}
          class="px-6 py-3 bg-cyan-500 rounded-xl text-white font-semibold"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;`,
  },
  {
    id: "native",
    label: "Native Bridge",
    icon: "🦀",
    description: "Call Rust from Solid.js using the native command primitive",
    code: `// src/primitives/createNativeCommand.ts
import { createResource } from "solid-js";
import { invoke } from "@tauri-apps/api/core";

export function createNativeCommand<T>(
  command: string,
  payload?: Record<string, unknown>
) {
  return createResource(() =>
    invoke<T>(command, payload)
  );
}

// src-tauri/src/lib.rs
#[tauri::command]
fn get_device_info() -> DeviceInfo {
    DeviceInfo {
        os: std::env::consts::OS.to_string(),
        arch: std::env::consts::ARCH.to_string(),
    }
}

// src/App.tsx — use it in your Solid component
const [deviceInfo] = createNativeCommand<DeviceInfo>(
  "get_device_info"
);

// Reactive — auto-suspends while Rust call is in-flight
<Suspense fallback={<span>Loading...</span>}>
  <p>OS: {deviceInfo()?.os}</p>
  <p>Arch: {deviceInfo()?.arch}</p>
</Suspense>`,
  },
  {
    id: "build",
    label: "Build",
    icon: "🚀",
    description: "Production builds for all target platforms",
    code: `# Desktop release build
pnpm tauri build

# Android release APK / AAB
pnpm tauri android build

# iOS IPA (macOS only)
pnpm tauri ios build

# ─────────────────────────────────────────
# Output sizes (Hello World):
#
#   Desktop (macOS .app):   ~8 MB
#   Android APK:            ~2–5 MB   ← < 1/5 of React Native
#   iOS IPA:                ~3–5 MB
# ─────────────────────────────────────────
#
# The bundle is tiny because Solid Native uses
# the system WebView — no bundled browser engine.`,
  },
];

const QuickStartSection: Component = () => {
  const [activeTab, setActiveTab] = createSignal("install");

  const activeTabData = () => tabs.find((t) => t.id === activeTab()) ?? tabs[0];

  return (
    <section id="quickstart" class="py-24 relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div class="absolute top-1/3 -right-48 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/20 text-sm text-neon-cyan mb-6">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            Quick Start
          </div>
          <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Up and Running in{" "}
            <span class="gradient-text">Minutes</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-400">
            From zero to a running cross-platform mobile app with just a few commands.
          </p>
        </div>

        {/* Code block with tabs */}
        <div class="max-w-4xl mx-auto">
          <div class="glass-card-strong rounded-2xl overflow-hidden">
            {/* Terminal header */}
            <div class="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-neon-rose/60" />
                <div class="w-3 h-3 rounded-full bg-neon-amber/60" />
                <div class="w-3 h-3 rounded-full bg-neon-emerald/60" />
              </div>
              <div class="text-xs text-gray-500 font-mono">solid-native</div>
              <div class="w-16" />
            </div>

            {/* Tab navigation */}
            <div class="flex border-b border-white/10 overflow-x-auto">
              <For each={tabs}>
                {(tab) => (
                  <button
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    class={`flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      activeTab() === tab.id
                        ? "text-neon-cyan border-b-2 border-neon-cyan bg-neon-cyan/5"
                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                )}
              </For>
            </div>

            {/* Description bar */}
            <div class="px-5 py-2.5 bg-neon-cyan/5 border-b border-white/5">
              <p class="text-xs text-gray-400">{activeTabData().description}</p>
            </div>

            {/* Code */}
            <div class="overflow-x-auto">
              <pre class="p-6 text-sm font-mono leading-relaxed text-gray-300 min-h-[300px]">
                <code>{activeTabData().code}</code>
              </pre>
            </div>
          </div>

          {/* Prerequisites note */}
          <div class="mt-6 flex flex-col sm:flex-row gap-4">
            {[
              {
                icon: "🦀",
                title: "Rust Required",
                desc: "Install via rustup.rs",
                href: "https://rustup.rs",
                color: "neon-amber",
              },
              {
                icon: "📦",
                title: "pnpm + Node.js ≥ 18",
                desc: "npm install -g pnpm",
                href: "https://pnpm.io",
                color: "neon-cyan",
              },
              {
                icon: "📱",
                title: "Tauri Mobile Prerequisites",
                desc: "v2.tauri.app/start/prerequisites",
                href: "https://v2.tauri.app/start/prerequisites/",
                color: "neon-violet",
              },
            ].map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 glass-card p-4 rounded-xl flex items-center gap-3 hover:scale-[1.02] transition-all duration-200 group"
              >
                <span class="text-2xl">{item.icon}</span>
                <div>
                  <div class={`text-sm font-semibold ${item.color === "neon-amber" ? "text-neon-amber" : item.color === "neon-violet" ? "text-neon-violet" : "text-neon-cyan"}`}>{item.title}</div>
                  <div class="text-xs text-gray-500 mt-0.5 font-mono">{item.desc}</div>
                </div>
                <svg class="w-4 h-4 text-gray-600 group-hover:text-gray-400 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStartSection;
