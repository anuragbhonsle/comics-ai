import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Sparkles, ArrowRight } from "lucide-react";
import bg from "../../public/bg.gif";

export default function Landing() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/generate");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden selection:bg-red-500/20 selection:text-red-300">
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bg}')`,
          filter: `
      saturate(1.4)
      contrast(1.4)
      brightness(0.9)
      blur(0px)
      hue-rotate(0deg)
    `,
        }}
      />
      {/* Dark overlay so text stays legible on top of the gif */}
      <div className="absolute inset-0 bg-black/85" />
      {/* Optional accent glow, kept subtle on top of overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#d21f2f]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-6 mx-auto max-w-4xl text-center flex flex-col items-center">
        <>
          <style>{`
        @keyframes premiumBlurReveal {
          0% {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes subtleGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

          <h1
            className="whitespace-nowrap font-bold tracking-tight text-zinc-100 mb-6"
            style={{
              fontFamily:
                "'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              letterSpacing: "-0.035em",
              fontSize: "clamp(1.6rem, 5.2vw, 4.5rem)",
              lineHeight: 1.05,
              animation:
                "premiumBlurReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              opacity: 0,
            }}
          >
            <span
              className="text-transparent bg-clip-text bg-linear-to-r from-[#f8f5f5] via-[#ff4554] to-[#f2efef] font-mono"
              style={{
                backgroundSize: "200% auto",
                animation: "subtleGradientShift 6s ease-in-out infinite",
              }}
            >
              Your Next Webcomic
            </span>
          </h1>
        </>

        <p className="animate-fade-in-up whitespace-nowrap text-zinc-200 text-sm sm:text-base md:text-lg mb-10 leading-relaxed font-sans">
          Find your next obsession. AI understands your taste and uncovers
          comics you'll love.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            to="/generate"
            className="group flex items-center justify-center gap-2 bg-[#d21f2f] hover:bg-[#b91c29] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200 w-full sm:w-auto font-mono"
          >
            Get Suggestions
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/auth/sign-in"
            className="flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-zinc-200 hover:text-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto font-mono"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
