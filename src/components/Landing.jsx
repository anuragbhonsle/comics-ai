import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ParallaxHeroImages } from "./ui/parallax-hero-images";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Features from "./Features";
import Faq from "./Faq";
import Contact from "./Contact";

const heroImages = [
  "https://i.pinimg.com/736x/13/e6/93/13e6932c9f6b48c7933b2ba81bd3d656.jpg",
  "https://i.pinimg.com/736x/39/45/53/394553a8feb655fa411fef054e8a9b93.jpg",
  "https://i.pinimg.com/1200x/03/5a/6f/035a6fbf926eb337fb4ff190b17a2851.jpg",
  "https://i.pinimg.com/1200x/e1/e5/77/e1e5774a24bf9bc93f7fc99c75965815.jpg",
  "https://i.pinimg.com/1200x/bb/08/7d/bb087d4c6621476bf01ae6a86f51c014.jpg",
  "https://i.pinimg.com/736x/23/3c/ce/233cced60627b16ab042b973f940ab00.jpg",
];

export default function Landing() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Comic", "Story", "Manga"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <>
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black selection:bg-red-600/20 selection:text-red-500">
        <ParallaxHeroImages images={heroImages} />

        <div className="pointer-events-none absolute inset-0 z-5 bg-linear-to-b from-neutral-950/40 via-transparent to-neutral-950/60" />
        <div className="pointer-events-none absolute inset-0 z-5 bg-[radial-gradient(ellipse_75%_65%_at_50%_45%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_100%)]" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h1 className="mb-4 flex w-full flex-wrap items-center justify-center gap-x-1 text-center text-4xl font-normal leading-[1.3] tracking-wide text-white sm:text-6xl md:text-7xl">
            <span className="font-cursor text-white font-bold drop-shadow-[0_0_18px_rgba(255,255,255,0.4)]">
              Your Next
            </span>

            <span className="relative -mx-2 inline-grid h-[1.35em] overflow-hidden px-3 pb-2 align-bottom">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  aria-hidden={titleNumber !== index}
                  className="col-start-1 row-start-1 whitespace-nowrap text-left font-bold italic text-white  decoration-1  drop-shadow-[0_0_18px_rgba(255,255,255,0.4)]"
                  initial={false}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -60 : 60, opacity: 0 }
                  }
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-8 max-w-md text-md font-sans tracking-widest text-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.12)] sm:text-base md:text-md"
          >
            Tell us what you want to read. AI turns it into personalized comic
            recommendations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/generate"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full  bg-red-600 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:scale-[1.02]  sm:w-auto"
            >
              Get Suggestions
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            {user === null ? (
              <Link
                to="/auth/sign-in"
                className="flex w-full items-center justify-center rounded-full border border-white/10 px-8 py-3 font-medium text-zinc-200 transition-all duration-200 hover:border-white/30 hover:bg-red-600/10 hover:text-white sm:w-auto"
              >
                Sign In
              </Link>
            ) : (
              <Link
                to="/history"
                className="flex w-full items-center justify-center rounded-full border border-white/10 px-8 py-3 font-medium text-zinc-200 transition-all duration-200 hover:border-white/30 hover:bg-red-600/10 hover:text-white sm:w-auto"
              >
                History
              </Link>
            )}
          </motion.div>
        </div>
      </div>
      <Faq />
      <Contact />
    </>
  );
}
