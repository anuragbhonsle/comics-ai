import { useContext, useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  BookOpenText,
  ChevronDown,
  ChevronUp,
  Loader2,
  Maximize2,
  Minimize2,
  Undo2,
} from "lucide-react";
import { MarkdownComponent } from "./MarkdownComponent";
import { UserDataContext } from "../context/UserDataContext";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const API_URL = import.meta.env.VITE_API_URL;

export default function ChatHistory() {
  const { userData, userDataLoading, setUserData, setUserDataLoading } =
    useContext(UserDataContext);
  const { user, session } = useContext(AuthContext);

  const [openId, setOpenId] = useState(null);
  const [maxi, setMaxi] = useState(false);

  const prevLengthRef = useRef(userData?.length || 0);

  useEffect(() => {
    const currentLength = userData?.length || 0;

    if (!user || !session?.token) return;

    if (currentLength > prevLengthRef.current || currentLength === 0) {
      async function fetchUserData() {
        try {
          setUserDataLoading(true);
          const response = await axios.get(`${API_URL}/api/userdata`, {
            headers: {
              Authorization: `Bearer ${session.token}`,
            },
          });
          setUserData(response.data);
        } catch (err) {
          console.error("Failed to fetch user data:", err);
        } finally {
          setUserDataLoading(false);
        }
      }

      fetchUserData();
    }

    prevLengthRef.current = currentLength;
  }, [userData?.length, user, session?.token, setUserData, setUserDataLoading]);

  const displayData = maxi ? userData : userData?.slice(0, 3);

  return (
    <div className="pt-20 flex min-h-screen w-full justify-center bg-black px-4 py-10">
      <div className="relative w-full max-w-4xl rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-6 sm:p-8">
        {/* Header matched to QuestionForm and Response */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500">
              <BookOpenText className="h-3 w-3" />
              History
            </span>
            <h1 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Previous Recommendations
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              {user
                ? "Browse your saved AI recommendation prompts and results."
                : "Sign in to view your saved history."}
            </p>
          </div>
          <Undo2 className="hidden h-6 w-6 text-zinc-700 sm:block" />
        </div>

        <div className="border-t border-zinc-900 pt-6">
          {userDataLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-red-500" />
              <p className="mt-3 text-sm text-zinc-500">
                Loading your history…
              </p>
            </div>
          ) : !user ? (
            <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
              <p className="text-lg font-semibold text-zinc-300 sm:text-xl">
                Guest mode.
              </p>
              <p className="text-sm text-zinc-500">
                Sign in to view your past recommendations here.
              </p>
            </div>
          ) : userData?.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
              <p className="text-lg font-semibold text-zinc-300 sm:text-xl">
                No saved history yet.
              </p>
              <p className="text-sm text-zinc-500">
                Generated recommendations will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {displayData?.map((chat) => {
                const isOpen = openId === chat.id;

                return (
                  <div
                    key={chat.id}
                    className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/60 transition-all hover:border-zinc-700"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : chat.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-zinc-900/50"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                          Prompt
                        </p>
                        <p className="mt-0.5 line-clamp-1 text-sm font-medium text-zinc-200">
                          {chat.prompt}
                        </p>
                      </div>

                      <div className="shrink-0 text-red-500">
                        {isOpen ? (
                          <Minimize2 className="h-4 w-4" />
                        ) : (
                          <Maximize2 className="h-4 w-4" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-zinc-900 bg-zinc-950/90 p-5 text-sm leading-relaxed text-zinc-200">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={MarkdownComponent}
                        >
                          {chat.response}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                );
              })}

              {userData?.length > 3 && (
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => setMaxi((prev) => !prev)}
                    className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-red-500 hover:text-red-300 transition-colors"
                  >
                    <span>{maxi ? "Show Less" : "Show All"}</span>
                    {maxi ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
