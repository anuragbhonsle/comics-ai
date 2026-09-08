import { UserButton } from "@neondatabase/neon-js/auth/react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import {
  Cat,
  Home,
  HomeIcon,
  Library,
  Sparkle,
  Undo2,
  Zap,
} from "lucide-react";

export default function Navbar() {
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass = (path) => {
    const isActive = location.pathname === path;
    return `relative text-sm font-bold tracking-wide transition-colors duration-200 py-1 ${
      isActive ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
    }`;
  };

  return (
    <header className="z-50 fixed top-0 inset-x-0 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto grid grid-cols-3 h-16 max-w-7xl items-center px-6">
        {/* Left Column: Brand Logo */}
        <div className="flex justify-start">
          <Link
            to={authCtx.user ? "/generate" : "/"}
            onClick={handleScrollToTop}
            className="inline-flex flex-row items-center group justify-center"
          >
            <img
              src="/logo.png"
              alt="ComicsAI"
              className="w-14 h-14 object-cover"
            />
            <span className="text-2xl text-white tracking-widest font-light leading-none">
              ComicsAI
            </span>
          </Link>
        </div>

        {/* Middle Column: Nav Links */}
        <nav className="hidden md:flex justify-center items-center gap-8">
          <Link to="/" onClick={handleScrollToTop} className={linkClass("/")}>
            <Home />
            {location.pathname === "/" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-red-600" />
            )}
          </Link>

          <Link
            to="/generate"
            onClick={handleScrollToTop}
            className={linkClass("/generate")}
          >
            <Zap />
            {location.pathname === "/generate" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-red-600" />
            )}
          </Link>

          <Link
            to="/library"
            onClick={handleScrollToTop}
            className={linkClass("/library")}
          >
            <Library />
            {location.pathname === "/library" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-red-600" />
            )}
          </Link>

          <Link
            to="/history"
            onClick={handleScrollToTop}
            className={linkClass("/history")}
          >
            <Undo2 />
            {location.pathname === "/history" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-red-600" />
            )}
          </Link>
        </nav>

        {/* Right Column: User Button */}
        <div className="flex justify-end items-center gap-4">
          <UserButton
            variant="link"
            size="sm"
            className="
              flex cursor-pointer items-center justify-between gap-2
              rounded-full border border-transparent px-3 py-1.5
              text-sm font-medium text-white
              transition-all duration-150
              hover:scale-105 hover:border-red-500 hover:bg-red-600/50 hover:text-red-300
            "
            classNames={{
              trigger: {
                base: "cursor-pointer",
              },
              content: {
                base: "z-50 min-w-[220px] rounded-xl border border-white/10 bg-neutral-950 text-white shadow-lg p-2",
                menuItem:
                  "text-white/80 hover:bg-red-600/5 hover:text-white rounded-lg cursor-pointer",
                separator: "bg-red-600/10",
              },
              footer: {
                base: "border-t border-white/10",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
