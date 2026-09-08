import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
export const API_URL = import.meta.env.VITE_API_URL;
export default function Contact({
  heading = "Join Our Newsletter",
  subheading = "To get personal recommendations from us or just chat about comics and creative work.",
  placeholder = "Enter your email address...",
  buttonText = "Subscribe",
  disclaimer = "Zero spam. Just cool comic recommendations and periodic updates.",
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function handleSendEmail(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post(`${API_URL}/api/contact`, { email });
      setEmail("");
      setSuccess(true);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Something went wrong! Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative mx-auto mt-28 mb-10 w-full max-w-5xl overflow-hidden rounded-[2rem] bg-red-600 px-6 py-16 text-center text-white shadow-2xl sm:rounded-[2.5rem] md:px-12 md:py-16 lg:py-20">
      {/* Decorative Background Rings - Top Left */}
      <div className="pointer-events-none absolute top-0 left-0 opacity-15">
        <div className="absolute top-0 left-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-white sm:h-[400px] sm:w-[400px]" />
        <div className="absolute top-0 left-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-white sm:h-[480px] sm:w-[480px]" />
        <div className="absolute top-0 left-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-white sm:h-[560px] sm:w-[560px]" />
      </div>

      {/* Decorative Background Rings - Bottom Right */}
      <div className="pointer-events-none absolute right-0 bottom-0 opacity-15">
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full border-[1.5px] border-white sm:h-[400px] sm:w-[400px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] translate-x-1/2 translate-y-1/2 rounded-full border-[1.5px] border-white sm:h-[480px] sm:w-[480px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full border-[1.5px] border-white sm:h-[560px] sm:w-[560px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="mb-4 max-w-xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          {heading}
        </h2>

        {subheading && (
          <p className="mb-3 max-w-xl text-balance text-lg text-red-100 sm:text-xl">
            {subheading}
          </p>
        )}

        <form
          onSubmit={handleSendEmail}
          className="mx-auto mt-6 mb-2 flex w-full flex-col items-center gap-3 sm:mt-8 sm:max-w-xl sm:flex-row sm:gap-0 sm:rounded-full sm:bg-zinc-950 sm:p-2 sm:shadow-2xl sm:ring-1 sm:ring-white/10"
        >
          <input
            type="email"
            placeholder={placeholder}
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 w-full rounded-full border border-white/10 bg-black px-6 text-base text-white placeholder-zinc-400 outline-none focus:ring-2  disabled:opacity-50 sm:flex-1 sm:rounded-none sm:rounded-l-full sm:border-none sm:bg-transparent sm:focus:ring-0"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-2 shrink-0 rounded-full bg-white px-8 text-base font-bold text-zinc-950 shadow-md transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 sm:w-auto"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin text-zinc-950" />
                <span>Subscribing...</span>
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>

        {/* Feedback Messages Placed Below the Input Form */}
        {error && (
          <p className="mt-2 text-sm font-semibold text-zinc-950 bg-white/90 px-4 py-1.5 rounded-full shadow-sm">
            {error}
          </p>
        )}

        {success && (
          <p className="mt-2 text-sm font-bold text-white bg-zinc-950/80 px-4 py-1.5 rounded-full border border-emerald-500/30">
            Thanks for joining! Check your inbox soon.
          </p>
        )}
      </div>
    </div>
  );
}
