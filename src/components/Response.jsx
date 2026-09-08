import { useContext } from "react";
import { ResponseContext } from "../context/ResponseContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AuthContext } from "../context/AuthContext";
import { LoaderCircle, Library, StarIcon } from "lucide-react";
import { UserDataContext } from "../context/UserDataContext";
import { MarkdownComponent } from "./MarkdownComponent";

function SkeletonPanels() {
  return (
    <div className="w-full animate-pulse space-y-3 pt-2">
      <div className="h-4 w-1/3 rounded bg-zinc-800" />
      <div className="h-3 w-full rounded bg-zinc-900" />
      <div className="h-3 w-5/6 rounded bg-zinc-900" />
      <div className="h-24 w-full rounded-lg bg-zinc-900" />
      <div className="h-3 w-2/3 rounded bg-zinc-900" />
    </div>
  );
}

export default function Response() {
  const responseCtx = useContext(ResponseContext);
  const authCtx = useContext(AuthContext);

  return (
    <div className="pt-20 flex min-h-screen w-full justify-center bg-black px-4 py-10">
      <div className="relative w-full max-w-4xl rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-6 sm:p-8">
        {/* Header matched perfectly to QuestionForm layout */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500">
              <StarIcon className="h-3 w-3" />
              AI response
            </span>
            <h1 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              {responseCtx.response
                ? "Your Recommendations"
                : "Recommendations"}
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              {responseCtx.response
                ? "Tailored titles curated based on your preferences."
                : "Your personalized web comic recommendations will appear here."}
            </p>
          </div>
          <Library className="hidden h-6 w-6 text-zinc-700 sm:block" />
        </div>

        <div className="border-t border-zinc-900 pt-6">
          {responseCtx.response ? (
            <div className="text-sm font-normal leading-relaxed text-zinc-200">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={MarkdownComponent}
              >
                {responseCtx.response}
              </ReactMarkdown>
            </div>
          ) : responseCtx.loading ? (
            <div className="flex flex-col items-center gap-6 py-8 text-center">
              <div className="flex items-center gap-3">
                <LoaderCircle className="h-5 w-5 animate-spin text-red-500" />
                <p className="text-base font-semibold text-zinc-200 sm:text-lg">
                  AI is analyzing your preferences...
                </p>
              </div>
              <SkeletonPanels />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
              <p className="text-lg font-semibold text-zinc-300 sm:text-xl">
                {authCtx.user ? "Ready to create?" : "Guest mode."}
              </p>
              <p className="text-sm text-zinc-500">
                Fill out the preferences form to get your recommendations.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
