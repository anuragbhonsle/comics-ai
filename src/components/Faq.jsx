import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const defaultComicsAiFaqs = [
  {
    id: "item-1",
    question: "How does the AI engine match webcomics to my taste?",
    answer:
      "Our backend passes your prompt, genre selections, pacing, and tone preferences to Google Gemini. Gemini analyzes thousands of indexed webcomics to find exact plot matches, visual styles, and hidden gems tailored to your prompt.",
  },
  {
    id: "item-2",
    question: "Do I need an account to get recommendations?",
    answer:
      "Nope! You can use our guest mode immediately to get custom recommendations. Creating an account lets you save your recommendation history, build favorite lists, and store custom preference presets.",
  },
  {
    id: "item-3",
    question: "Can I search using extremely specific or niche prompts?",
    answer:
      'Yes! You can enter prompts like "Solo Leveling vibes, weak-to-strong MC, dark fantasy, completed status, under 100 chapters" and the AI will parse those exact constraints.',
  },
  {
    id: "item-4",
    question: "What filters can I apply alongside custom prompts?",
    answer:
      "You can filter by Genre (Action, Romance, Sci-Fi, etc.), Tone (Dark, Wholesome, Comedic), Publication Status (Ongoing/Completed), Chapter Length, and Release Era.",
  },
  {
    id: "item-5",
    question: "Where do the webcomic links and details come from?",
    answer:
      "Each recommendation includes direct links to official publishing platforms (such as WEBTOON, Tapas, Kakao, or Tappytoon), along with synopsis breakdowns, match percentages, and key tropes.",
  },
  {
    id: "item-6",
    question: "Is ComicsAI free to use?",
    answer:
      "Yes, ComicsAI is completely free for both guest and registered readers to discover their next webcomic binge.",
  },
];

export default function ComicsAiFaqSection({
  badge = "FAQ",
  title = (
    <>
      Everything you <br />
      need to know <br />
      about ComicsAI.
    </>
  ),
  faqs = defaultComicsAiFaqs,
  className = "",
}) {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-black px-4 mt-20 text-white">
      <section
        className={`mx-auto w-full max-w-6xl border-y border-dashed border-zinc-900 md:border-x ${className}`}
      >
        <div className="relative grid grid-cols-1 md:grid-cols-12">
          {/* Left Column - Heading */}
          <div className="flex flex-col justify-start border-b border-dashed border-zinc-800 p-8 md:col-span-4 md:border-b-0 md:border-r md:p-12 lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="relative md:col-span-8 lg:col-span-7">
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden w-px border-l border-dashed border-zinc-800 md:block" />
            <div className="w-full">
              {faqs.map((faq, index) => {
                const isOpen = openId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="border-b border-dashed border-zinc-800 px-6 last:border-b-0 md:px-8"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      className="group flex w-full items-center py-6 text-left hover:no-underline md:py-8 focus:outline-none"
                    >
                      <div className="flex flex-1 items-center gap-6">
                        <span className="text-xs font-semibold tracking-widest text-red-500/80">
                          Q{index + 1}
                        </span>
                        <span className="text-base font-medium text-zinc-100 transition-colors group-hover:text-white md:text-lg">
                          {faq.question}
                        </span>
                      </div>
                      <div className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-red-600/5 text-zinc-400 transition-all group-hover:border-red-500/40 group-hover:bg-red-600/10 group-hover:text-red-500">
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8 pl-[3.25rem] pr-12">
                          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
