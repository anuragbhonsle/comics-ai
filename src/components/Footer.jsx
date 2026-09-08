import { Fragment } from "react";
import { Link } from "react-router-dom";
import FluidWave from "./FluidWave";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";

const UTILITY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const HOVER =
  "transition-colors duration-150 ease-out hover:text-white text-white/80";
const MUTED = "text-zinc-400";

export default function Footer({
  contactLabel = "Reach me at:",
  contactEmail = "anuragkbhonsle@gmail.com",
  contactEmailHref = "mailto:anuragkbhonsle@gmail.com",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Generate", href: "/generate" },
    { label: "Library", href: "/library" },
    { label: "History", href: "/history" },
  ],
  brandName = "ComicsAI",
  onScrollToTop,
}) {
  const handleScrollToTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {/* WebGL Fluid/Flame Shader Canvas */}
      <FluidWave color="#CC0E0E" />

      {/* Top Gradient Overlay to blend canvas with page above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />

      <div className="relative mx-auto flex min-h-[min(85vh,50rem)] w-full max-w-[96rem] flex-col px-6 pt-10 sm:px-10 sm:pt-24 md:pt-32">
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-8">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-light tracking-wide text-zinc-400">
              {contactLabel}
            </span>
            <a
              href={contactEmailHref}
              className={`text-lg font-medium text-zinc-500 ${HOVER}`}
            >
              <span>{contactEmail}</span>
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={handleScrollToTop}
                className={`text-lg font-medium ${MUTED} ${HOVER}`}
              >
                {link.label}
              </Link>
            ))}
            <span className="text-white/50 text-2xl">|</span>
            <a
              href="https://github.com/anuragbhonsle/comics-ai"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full font-bold etransition-all duration-200 active:scale-98 text-sm hover:scale-105"
            >
              <IconBrandGithub className="h-6 w-6 text-white/50 hover:text-white" />
            </a>
            <a
              href="https://x.com/Anuraaaag7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full font-bold transition-all duration-200 active:scale-98 text-sm hover:scale-105"
            >
              <IconBrandX className="h-6 w-6 text-white/50 hover:text-white" />
            </a>
          </nav>
        </div>

        {/* Brand Display Header */}
        <div className="flex flex-1 items-center py-16">
          <h2 className="text-[clamp(3.5rem,12.5vw,10.5rem)] font-bold leading-[0.92] tracking-tight text-white/90 animate-pulse [animation-duration:4s]">
            {brandName}
          </h2>
        </div>

        {/* Footer Sub-bar */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 pb-8 text-xs ${MUTED}`}
        >
          <span className="flex flex-wrap items-center gap-2.5">
            {brandName} &copy; {new Date().getFullYear()}
          </span>

          <span className="flex flex-wrap items-center gap-2.5">
            {UTILITY_LINKS.map((link, index) => (
              <Fragment key={link.href}>
                {index > 0 && (
                  <span aria-hidden="true" className="text-white/45">
                    &middot;
                  </span>
                )}
                <Link
                  to={link.href}
                  onClick={handleScrollToTop}
                  className={HOVER}
                >
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
