import { UserButton } from "@neondatabase/neon-js/auth/react";
import { Kanban } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import download from "../../public/download.webp";

export default function Navbar() {
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  const linkClass = (path) => {
    const isActive = location.pathname === path;
    return `relative text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
      isActive ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
    }`;
  };

  return (
    <header className="z-50 fixed top-0 inset-x-0 bg-black shadow-[0_1px_0_rgba(255,255,255,0.08)]">
      {/* 1. Changed "flex justify-between" to "grid grid-cols-3" */}
      <div className="mx-auto grid grid-cols-3 h-16 max-w-7xl items-center px-6">
        {/* 2. Left Column: Wrapped in flex + justify-start */}
        <div className="flex justify-start">
          <Link
            to={authCtx.user ? "/generate" : "/"}
            className="flex items-center gap-3 group "
          >
            <div className="flex h-8 w-8 items-center justify-center bg-[#d21f2f] border-2 border-black text-black transition-transform duration-150 group-hover:-translate-y-px group-hover:translate-x-px">
              <img src={download} alt="logo" />
            </div>
            <span className="text-lg text-zinc-100 tracking-wide font- font-bold">
              WebComicsAI
            </span>
          </Link>
        </div>

        {/* 3. Middle Column: Added "justify-center" so links are dead-center */}
        <nav className="hidden md:flex justify-center items-center gap-8">
          {authCtx.user === null && (
            <Link to="/" className={linkClass("/")}>
              Home
              {location.pathname === "/" && (
                <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#d21f2f] " />
              )}
            </Link>
          )}

          <Link to="/generate" className={linkClass("/generate")}>
            Generate
            {location.pathname === "/generate" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#d21f2f] " />
            )}
          </Link>

          <Link to="/library" className={linkClass("/library")}>
            Library
            {location.pathname === "/library" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#d21f2f]" />
            )}
          </Link>
          <Link to="/history" className={linkClass("/history")}>
            History
            {location.pathname === "/history" && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#d21f2f]" />
            )}
          </Link>
        </nav>

        {/* 4. Right Column: Wrapped in flex + justify-end */}
        <div className="flex justify-end items-center gap-4">
          <UserButton
            variant="ghost"
            size="sm"
            className="rounded-full text-md font-medium text-white hover:scale-103 transition-all duration-150 hover:border-white hover:bg-red-500 hover:no-underline  flex items-center justify-between cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
