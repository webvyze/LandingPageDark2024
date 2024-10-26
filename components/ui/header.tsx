"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          
          {/* Site branding: Logo on the left */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Placeholder for any future content in the center */}
          <div className="flex-1"></div>

          {/* Company Name: Webvyze on the right with padding and smaller font */}
          <div className="text-right pr-1">
            <h1
              className="text-2xl font-semibold animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-clip-text text-transparent"
            >
              WebVyze
            </h1>
          </div>

        </div>
      </div>
    </header>
  );
}
