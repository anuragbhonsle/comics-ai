import axios from "axios";
import { useContext, useState } from "react";
import { ResponseContext } from "../context/ResponseContext";
import dotenv from "dotenv";
import {
  MoveRightIcon,
  Sparkles,
  Palette,
  CheckCircle2,
  Ruler,
  CalendarClock,
  PenLine,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const API_URL = import.meta.env.VITE_API_URL;
const GENRES = [
  "Action",
  "Drama",
  "Comedy",
  "Romance",
  "Fantasy",
  "Thriller",
  "Horror",
  "Martial Arts",
  "School",
  "Sci-Fi",
  "Slice of Life",
  "Supernatural",
];
const TONES = [
  "Dark",
  "Serious",
  "Funny",
  "Wholesome",
  "Emotional",
  "Inspirational",
];
const STATUSES = ["Ongoing", "Completed"];
const LENGTHS = [
  "Short (<100 Chapters)",
  "Medium (100–300 Chapters)",
  "Long (300+ Chapters)",
];
const RELEASES = ["2023+", "2018–2022", "2010–2017", "Before 2010"];

export default function QuestionForm() {
  const [formData, setFormData] = useState({
    genre: "",
    tone: "",
    status: "",
    length: "",
    release: "",
    extra: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const responseCtx = useContext(ResponseContext);
  const authCtx = useContext(AuthContext);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const prompt = `
Recommend web comics based on the following preferences.

Genre: ${formData.genre || "Any"}
Tone: ${formData.tone || "Any"}
Status: ${formData.status || "Any"}
Length: ${formData.length || "Any"}
Release Period: ${formData.release || "Any"}

Additional Preferences:
${formData.extra || "None"}

Requirements:
- Recommend at most 5 web comics.
- Explain why each recommendation matches.
- Mention genres.
- Mention whether it is ongoing or completed.
- Mention approximate chapter count.
- Keep each description concise.
`;

    try {
      setSubmitting(true);
      responseCtx.setLoading(true);
      navigate("/library");
      let aiResponse;
      if (authCtx.user) {
        aiResponse = await axios.post(
          `${API_URL}/api/recommend`,
          { message: prompt },
          { headers: { Authorization: `Bearer ${authCtx.session.token}` } },
        );
      } else {
        aiResponse = await axios.post(`${API_URL}/api/guest`, {
          message: prompt,
        });
      }

      responseCtx.setResponse(aiResponse.data.reply);
    } catch (error) {
      console.error(error);
    } finally {
      console.log(authCtx.user);
      responseCtx.setLoading(false);
      setSubmitting(false);
    }
    setFormData({
      genre: "",
      tone: "",
      status: "",
      length: "",
      release: "",
      extra: "",
    });
  }

  const fieldWrap = "group relative";
  const labelStyle =
    "mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 transition-colors group-focus-within:text-red-500";
  const selectStyle =
    "peer w-full h-11 appearance-none rounded-lg border border-zinc-800 bg-zinc-950 pl-3 pr-9 text-sm text-white outline-none transition-colors duration-150 hover:border-zinc-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20";

  function Select({ name, value, placeholder, options }) {
    return (
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className={selectStyle}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transition-colors peer-focus:text-red-500"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="pt-20 flex min-h-screen w-full items-center justify-center bg-black px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-4xl rounded-2xl border border-zinc-800 bg-black p-6 shadow-[0_0_60px_-15px_rgba(239,68,68,0.15)] sm:p-8"
      >
        {/* comic-panel corner marks — signature detail */}
        <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-red-500/70 rounded-tl-sm" />
        <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-red-500/70 rounded-tr-sm" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-red-500/70 rounded-bl-sm" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-red-500/70 rounded-br-sm" />

        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500">
            <Sparkles className="h-3 w-3" />
            Panel Picks
          </span>
          <h1 className="mt-2 font-mono text-md font-bold text-white sm:text-2xl">
            Find Your Next Web Comic
          </h1>
          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            Choose your preferences and let AI recommend something you'll love.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className={fieldWrap}>
            <label className={labelStyle}>
              <Palette className="h-3 w-3" /> Genre
            </label>
            <Select
              name="genre"
              value={formData.genre}
              placeholder="Any Genre"
              options={GENRES}
            />
          </div>

          <div className={fieldWrap}>
            <label className={labelStyle}>
              <PenLine className="h-3 w-3" /> Tone
            </label>
            <Select
              name="tone"
              value={formData.tone}
              placeholder="Any Tone"
              options={TONES}
            />
          </div>

          <div className={fieldWrap}>
            <label className={labelStyle}>
              <CheckCircle2 className="h-3 w-3" /> Status
            </label>
            <Select
              name="status"
              value={formData.status}
              placeholder="Doesn't Matter"
              options={STATUSES}
            />
          </div>

          <div className={fieldWrap}>
            <label className={labelStyle}>
              <Ruler className="h-3 w-3" /> Length
            </label>
            <Select
              name="length"
              value={formData.length}
              placeholder="Any Length"
              options={LENGTHS}
            />
          </div>

          <div className={`${fieldWrap} sm:col-span-2`}>
            <label className={labelStyle}>
              <CalendarClock className="h-3 w-3" /> Release Period
            </label>
            <Select
              name="release"
              value={formData.release}
              placeholder="Any Time"
              options={RELEASES}
            />
          </div>
        </div>

        <div className="group relative mt-5">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 transition-colors group-focus-within:text-red-500">
              Additional Preferences
            </label>
            <span className="text-[11px] text-zinc-600">
              {formData.extra.length}/300
            </span>
          </div>
          <textarea
            name="extra"
            rows={1}
            maxLength={300}
            value={formData.extra}
            onChange={handleChange}
            placeholder="Example: Similar to Lookism, overpowered main character, amazing fights, little romance..."
            className="w-full resize-none rounded-xl border bg-zinc-950 px-4 py-3 text-sm outline-none transition-colors duration-150 placeholder:text-zinc-600 hover:border-zinc-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="group mt-6 flex w-full items-center justify-center rounded-full bg-red-500 py-3 text-sm font-semibold text-white transition-all duration-150 hover:scale-[1.01] hover:bg-red-400 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          {submitting ? "Finding your comics…" : "Recommend Web Comics"}
          {!submitting && (
            <MoveRightIcon className="ml-2 inline-block h-4 w-4 align-middle transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </button>
      </form>
    </div>
  );
}
