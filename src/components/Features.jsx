import React, { useState } from "react";
import {
  Sparkles,
  BookOpen,
  Zap,
  Sliders,
  MousePointer2,
  Bookmark,
  Shield,
  Lock,
  Users,
  Heart,
} from "lucide-react";

const avatars = [
  {
    src: "https://i.pinimg.com/736x/56/7f/b2/567fb29ccae3b31e3fb348c32f5e4da8.jpg",
    name: "Aria",
  },
  {
    src: "https://i.pinimg.com/736x/43/ed/43/43ed43e797c079f438baa4164c7a5463.jpg",
    name: "Leo",
  },
  {
    src: "https://i.pinimg.com/1200x/c9/77/2e/c9772e04ebbfa03d6b887ff842001c7c.jpg",
    name: "Kai",
  },
  {
    src: "https://i.pinimg.com/1200x/48/c9/4d/48c94d7e756262440dc770a0f3eb0676.jpg",
    name: "Mina",
  },
];

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-black px-4 py-20 font-sans text-white antialiased overflow-hidden">
      <div className="flex w-full max-w-5xl flex-col gap-2 z-10">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-3xl md:text-5xl">
            Made for Comic Enthusiasts
          </h2>
          <p className="mt-2 text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Gemini-driven prompt curation to real-time sync with fellow readers.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Card 1: AI Workflow Recommendation Pipeline */}
          <div
            className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-red-600/[0.01] shadow-[0_4px_24px_rgba(0,0,0,0.8)] md:col-span-2"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Automated Workflow Process UI */}
            <div className="relative mb-6 flex flex-1 items-center justify-center">
              <div
                className={`bg-black/90 border-white/10 relative flex w-full max-w-sm flex-col rounded-2xl border p-4 backdrop-blur-md shadow-2xl transition-all duration-500 ease-in-out ${
                  hoveredCard === 1
                    ? "border-red-500/30 shadow-[0_0_25px_rgba(239,68,68,0.15)] rounded-2xl scale-[1.02]"
                    : "scale-100"
                }`}
              >
                {/* Step 1: Prompt Input */}
                <div className="bg-red-600/[0.04] relative flex items-center gap-3 rounded-xl border border-white/10 p-3 shadow-sm backdrop-blur-sm z-10">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
                    <Sparkles className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold">
                      Natural Language Prompt
                    </span>
                    <span className="text-zinc-400 text-[11px] font-medium">
                      "Dark fantasy with watercolor art style"
                    </span>
                  </div>
                </div>

                {/* Animated Connector Line 1 */}
                <div className="relative mx-auto h-5 w-px my-0.5 bg-red-600/10 overflow-hidden">
                  <div
                    className={`absolute top-0 w-full bg-red-600 transition-all duration-500 ease-out ${
                      hoveredCard === 1 ? "h-full" : "h-0"
                    }`}
                  />
                </div>

                {/* Step 2: Context Engine Processing */}
                <div className="bg-red-600/[0.04] relative flex items-center gap-3 rounded-xl border border-white/10 p-3 shadow-sm backdrop-blur-sm z-10">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
                    <Sliders className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold">
                      Gemini 1.5 Context Engine
                    </span>
                    <span className="text-zinc-400 text-[11px] font-medium">
                      Extracting tone, chapter length & pacing
                    </span>
                  </div>
                </div>

                {/* Animated Connector Line 2 */}
                <div className="relative mx-auto h-5 w-px my-0.5 bg-red-600/10 overflow-hidden">
                  <div
                    className={`absolute top-0 w-full bg-red-600 transition-all duration-500 ease-out delay-200 ${
                      hoveredCard === 1 ? "h-full" : "h-0"
                    }`}
                  />
                </div>

                {/* Step 3: Match Result */}
                <div className="bg-red-600/[0.04] relative flex items-center gap-3 rounded-xl border border-white/10 p-3 shadow-sm backdrop-blur-sm z-10">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
                    <BookOpen className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold">
                      Curated Series Match
                    </span>
                    <span className="text-zinc-400 text-[11px] font-medium">
                      98.4% Match • Solo Leveling & Tower of God
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-1.5">
              <h3 className="text-white flex items-center gap-2 text-2xl font-bold tracking-tight">
                AI Recommendation Pipeline
                <Zap className="size-5 text-red-500 fill-red-500/20" />
              </h3>
              <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
                Enter your reading preferences in plain English. Our Gemini
                engine processes complex literary tones and visual styles
                instantly.
              </p>
            </div>
          </div>

          {/* Card 2: Security & Private Vault */}
          <div
            className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-red-600/[0.01] shadow-[0_4px_24px_rgba(0,0,0,0.8)] md:col-span-1"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative z-10 flex flex-col gap-1.5">
              <h3 className="text-white text-2xl font-bold tracking-tight">
                Encrypted Vault
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Licensed webcomic indexing with encrypted reader activity logs
                and private bookmark vaults.
              </p>
            </div>

            <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden my-4">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:18px_18px]" />

              {/* Animated Beams on Hover */}
              <div className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 overflow-hidden">
                <div
                  className={`absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-1000 ${
                    hoveredCard === 2 ? "translate-x-full" : "-translate-x-full"
                  }`}
                />
              </div>

              {/* Shield & Lock Graphics */}
              <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="relative flex items-center justify-center">
                  <Shield className="size-36 text-red-500/30 fill-red-500/10 stroke-[1.5]" />
                  <Lock className="absolute size-12 text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Live Reader Co-Op */}
          <div
            className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-red-600/[0.01] shadow-[0_4px_24px_rgba(0,0,0,0.8)] md:col-span-3 md:flex-row md:items-stretch"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative z-10 flex flex-1 flex-col items-start justify-center gap-3 md:pr-6">
              <h3 className="text-white flex items-center gap-2 text-2xl font-bold tracking-tight">
                Live Reader Co-Op
                <Users className="size-6 text-red-500 fill-red-500/20" />
              </h3>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                Read chapters together with friends in real-time rooms.
                Highlight panels, drop instant reaction emojis, and discuss
                theories without spoilers.
              </p>
            </div>

            <div className="relative flex min-h-[220px] w-full flex-1 items-end justify-end overflow-hidden rounded-2xl pt-4 md:pt-0">
              <div className="relative flex w-full flex-col">
                {/* Avatar Stack */}
                <div className="relative z-20 mb-3 flex -space-x-3 px-2">
                  {avatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar.src}
                      alt={avatar.name}
                      className="border-black size-9 rounded-full border-2 object-cover shadow-md transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                  <div className="border-black bg-zinc-900 text-zinc-300 flex size-9 items-center justify-center rounded-full border-2 text-[10px] font-bold shadow-md">
                    +42
                  </div>
                </div>

                {/* Mockup Comic Page Reader UI */}
                <div className="bg-black/80 border-white/10 relative flex min-h-[180px] w-full flex-col gap-3 overflow-hidden rounded-tl-2xl border-t border-l p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Bookmark className="size-3.5 text-red-500" /> Chapter
                      104: The Awakening
                    </span>
                    <span className="text-[10px] text-red-500 bg-red-600/10 border border-red-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Live Sync
                    </span>
                  </div>

                  {/* Comic Panel Wireframes */}
                  <div
                    className={`bg-red-600/10 h-10 rounded-lg border border-white/5 flex items-center px-3 transition-all duration-500 ${
                      hoveredCard === 3 ? "w-full" : "w-[85%]"
                    }`}
                  >
                    <span className="text-[10px] text-zinc-400 italic">
                      "The shadow king rises from the abyss..."
                    </span>
                  </div>

                  <div
                    className={`bg-red-600/5 h-8 rounded-lg border border-white/5 transition-all duration-500 ${
                      hoveredCard === 3 ? "w-[90%]" : "w-full"
                    }`}
                  />

                  {/* Reader Cursor 1 */}
                  <div
                    className={`absolute top-14 left-[20%] z-20 flex flex-col items-start drop-shadow-lg transition-all duration-500 ease-out ${
                      hoveredCard === 3
                        ? "translate-x-8 translate-y-3"
                        : "translate-x-0 translate-y-0"
                    }`}
                  >
                    <MousePointer2 className="size-4 -rotate-12 fill-red-500 text-red-500" />
                    <div className="mt-1 ml-2 rounded-md rounded-tl-none bg-red-600 px-2 py-0.5 text-[9px] font-bold text-white shadow-md">
                      Anurag
                    </div>
                  </div>

                  {/* Reader Cursor 2 */}
                  <div
                    className={`absolute right-[30%] bottom-6 z-20 flex flex-col items-start drop-shadow-lg transition-all duration-500 ease-out ${
                      hoveredCard === 3
                        ? "-translate-x-6 -translate-y-3"
                        : "translate-x-0 translate-y-0"
                    }`}
                  >
                    <MousePointer2 className="size-4 -rotate-12 fill-white text-black" />
                    <div className="mt-1 ml-2 rounded-md rounded-tl-none bg-red-600 px-2 py-0.5 text-[9px] font-bold text-black shadow-md">
                      Elena
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
