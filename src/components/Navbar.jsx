import { UserButton } from "@neondatabase/neon-js/auth/react";

import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import { Cat, Home, HomeIcon, Library, Undo2, Zap } from "lucide-react";

export default function Navbar() {
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  const linkClass = (path) => {
    const isActive = location.pathname === path;
    return `relative text-sm font-bold tracking-wide transition-colors duration-200 py-1 ${
      isActive ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
    }`;
  };

  return (
    <header className="z-50 fixed top-0 inset-x-0 bg-transparent ">
      {/* 1. Changed "flex justify-between" to "grid grid-cols-3" */}
      <div className="mx-auto grid grid-cols-3 h-16 max-w-7xl items-center px-6">
        {/* 2. Left Column: Wrapped in flex + justify-start */}
        <div className="flex justify-start">
          <Link
            to={authCtx.user ? "/generate" : "/"}
            className="inline-flex flex-row items-center gap-1 group justify-center"
          >
            <Cat
              color="white"
              strokeWidth={1.3}
              className="h-6 w-6 text-white shrink-0"
            />
            <span className="text-2xl text-white tracking-widest font-light leading-none">
              comics.ai
            </span>
          </Link>
        </div>

        {/* 3. Middle Column: Added "justify-center" so links are dead-center */}
        <nav className="hidden md:flex justify-center items-center gap-8">
          <Link to="/" className={linkClass("/")}>
            <Home />
            {location.pathname === "/" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-white " />
            )}
          </Link>

          <Link to="/generate" className={linkClass("/generate")}>
            <Zap />
            {location.pathname === "/generate" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-white " />
            )}
          </Link>

          <Link to="/library" className={linkClass("/library")}>
            <Library />
            {location.pathname === "/library" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-white" />
            )}
          </Link>
          <Link to="/history" className={linkClass("/history")}>
            <Undo2 />
            {location.pathname === "/history" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-white" />
            )}
          </Link>
        </nav>

        {/* 4. Right Column: Wrapped in flex + justify-end */}
        <div className="flex justify-end items-center gap-4">
          <UserButton
            variant="ghost"
            size="sm"
            className="
    flex cursor-pointer items-center justify-between gap-2
    rounded-full border border-transparent px-3 py-1.5
    text-sm font-medium text-white
    transition-all duration-150
    hover:scale-105 hover:border-red-400/50 hover:bg-red-400/10 hover:text-red-300
  "
            classNames={{
              trigger: {
                base: "cursor-pointer",
              },
              content: {
                base: "z-50 min-w-[220px] rounded-xl border border-white/10 bg-neutral-950 text-white shadow-lg",
                menuItem:
                  "text-white/80 hover:bg-white/5 hover:text-white rounded-lg cursor-pointer",
                separator: "bg-white/10",
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
