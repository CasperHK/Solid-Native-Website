import { Component } from "solid-js";

const LandingFooter: Component = () => {
  return (
    <footer class="border-t border-white/10 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/50" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div class="md:col-span-2">
            <a href="/" class="flex items-center gap-3 group mb-4">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center shadow-lg shadow-neon-cyan/20">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
                </svg>
              </div>
              <span class="text-lg font-bold text-white">Solid Native</span>
            </a>
            <p class="text-sm text-gray-500 leading-relaxed max-w-xs mb-4">
              The ultra-lightweight, high-performance cross-platform mobile framework. Built with Solid.js and Tauri 2.0.
            </p>
            <div class="flex items-center gap-3">
              <a
                href="https://github.com/CasperHK/solid-native"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2.5 text-gray-500 hover:text-white glass-card rounded-xl transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul class="space-y-2">
              {[
                { label: "Features", href: "#features" },
                { label: "Tech Stack", href: "#stack" },
                { label: "Quick Start", href: "#quickstart" },
                { label: "Architecture", href: "#architecture" },
                { label: "Roadmap", href: "#roadmap" },
              ].map((link) => (
                <li>
                  <a
                    href={link.href}
                    class="text-sm text-gray-500 hover:text-neon-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul class="space-y-2">
              {[
                { label: "GitHub Repository", href: "https://github.com/CasperHK/solid-native" },
                { label: "Solid.js Docs", href: "https://www.solidjs.com/docs" },
                { label: "Tauri v2 Docs", href: "https://v2.tauri.app" },
                { label: "Rust Prerequisites", href: "https://rustup.rs" },
                { label: "Report an Issue", href: "https://github.com/CasperHK/solid-native/issues" },
              ].map((link) => (
                <li>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-500 hover:text-neon-cyan transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div class="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-600">
            © 2026 Solid Native Contributors. Released under the{" "}
            <a
              href="https://github.com/CasperHK/solid-native/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-neon-cyan transition-colors"
            >
              MIT License
            </a>
            .
          </p>
          <div class="flex items-center gap-2 text-xs text-gray-600">
            <span class="w-2 h-2 rounded-full bg-neon-emerald animate-pulse" />
            Built for developers who ship fast and clean.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
