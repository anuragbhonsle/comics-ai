import { useContext } from "react";
import { ResponseContext } from "../context/ResponseContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AuthContext } from "../context/AuthContext";
import { LoaderCircle, Sparkles, BookOpenText, Library } from "lucide-react";
import { UserDataContext } from "../context/UserDataContext";
import axios from "axios";
import ChatHistory from "./ChatHistory";
import { MarkdownComponent } from "./MarkdownComponent";

function SkeletonPanels() {
  return (
    <div className="w-full animate-pulse space-y-3">
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
  const userDataCtx = useContext(UserDataContext);

  return (
    <div className="min-h-screen w-full bg-black px-4 pb-16 pt-20 sm:px-6">
      <div className="relative mx-auto w-full max-w-3xl rounded-2xl  bg-black p-6  sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-900 pb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
              <Sparkles className="h-3 w-3" />
              Panel Picks
            </span>
            <h1 className="mt-2  text-xl font-bold text-white sm:text-2xl">
              {responseCtx.response
                ? "Your Recommendations"
                : "Recommendations"}
            </h1>
          </div>
          <Library className="hidden h-6 w-6 text-zinc-700 sm:block" />
        </div>

        {responseCtx.response ? (
          <div className="text-lg font-semibold leading-relaxed text-zinc-200">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={MarkdownComponent}
            >
              {responseCtx.response}
            </ReactMarkdown>
          </div>
        ) : responseCtx.loading ? (
          <div className="flex flex-col items-center gap-6 py-10 text-center">
            <div className="flex items-center gap-3">
              <LoaderCircle className="h-6 w-6 animate-spin text-red-400" />
              <p className=" text-lg font-semibold text-zinc-200 sm:text-xl">
                AI is analyzing your preferences...
              </p>
            </div>
            <SkeletonPanels />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-16 text-center">
            <p className=" text-xl font-semibold text-zinc-200 sm:text-2xl">
              {authCtx.user ? "Ready to create?" : "Guest mode."}
            </p>
            <p className="text-sm text-zinc-500">
              Fill out the form to get your recommendations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
