import { Component, createSignal } from "solid-js";

const LandingNav: Component = () => {
  const [mobileOpen, setMobileOpen] = createSignal(false);

  return (
    <header class="fixed top-0 left-0 right-0 z-50 futuristic-navbar border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" class="flex items-center gap-3 group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center shadow-lg shadow-neon-cyan/20 group-hover:shadow-neon-cyan/40 transition-all duration-300">
              {/* Mobile / phone icon */}
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
              </svg>
            </div>
            <span class="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
              Solid Native
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav class="hidden md:flex items-center gap-1">
            {[
              { label: "Features", href: "#features" },
              { label: "Tech Stack", href: "#stack" },
              { label: "Quick Start", href: "#quickstart" },
              { label: "Architecture", href: "#architecture" },
              { label: "Roadmap", href: "#roadmap" },
            ].map((item) => (
              <a
                href={item.href}
                class="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div class="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/CasperHK/solid-native"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="#quickstart"
              class="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-neon-cyan to-neon-violet hover:from-neon-cyan/90 hover:to-neon-violet/90 rounded-xl shadow-lg shadow-neon-cyan/20 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            class="md:hidden p-2 text-gray-400 rounded-lg hover:bg-white/10 hover:text-white transition-all"
            onClick={() => setMobileOpen(!mobileOpen())}
            aria-label="Toggle menu"
          >
            {mobileOpen() ? (
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen() && (
        <div class="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-1">
          {[
            { label: "Features", href: "#features" },
            { label: "Tech Stack", href: "#stack" },
            { label: "Quick Start", href: "#quickstart" },
            { label: "Architecture", href: "#architecture" },
            { label: "Roadmap", href: "#roadmap" },
          ].map((item) => (
            <a
              href={item.href}
              onClick={() => setMobileOpen(false)}
              class="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          <div class="pt-3 flex flex-col gap-2">
            <a
              href="https://github.com/CasperHK/solid-native"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-xl"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="#quickstart"
              onClick={() => setMobileOpen(false)}
              class="flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-neon-cyan to-neon-violet rounded-xl"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingNav;
