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
  Redo2,
  Undo2,
} from "lucide-react";
import { MarkdownComponent } from "./MarkdownComponent";
import { UserDataContext } from "../context/UserDataContext";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const API_URL = import.meta.env.VITE_API_URL;

function PanelCorners() {
  return (
    <>
      <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 rounded-tl-sm border-l-2 border-t-2 border-red-500/70" />
      <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 rounded-tr-sm border-r-2 border-t-2 border-red-500/70" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-bl-sm border-b-2 border-l-2 border-red-500/70" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 rounded-br-sm border-b-2 border-r-2 border-red-500/70" />
    </>
  );
}

export default function ChatHistory() {
  const { userData, userDataLoading, setUserData, setUserDataLoading } =
    useContext(UserDataContext);
  const { user, session } = useContext(AuthContext);

  const [openId, setOpenId] = useState(null);
  const [maxi, setMaxi] = useState(false);

  // Track the previous length to detect when an item is added
  const prevLengthRef = useRef(userData?.length || 0);

  useEffect(() => {
    const currentLength = userData?.length || 0;

    // Only run if user is logged in AND an item was added (current > previous)
    // Or on initial mount if userData is empty
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

    // Update ref to track current length for next render
    prevLengthRef.current = currentLength;
  }, [userData?.length, user, session?.token, setUserData, setUserDataLoading]);

  const displayData = maxi ? userData : userData?.slice(0, 3);

  return (
    <div className="min-h-screen w-full bg-black px-4 pb-16 pt-20 sm:px-6">
      <div className="relative mx-auto w-full max-w-3xl rounded-2xl  bg-black p-6  sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-900 pb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
              <BookOpenText className="h-3 w-3" />
              History
            </span>
            <h1 className="mt-2  text-xl font-bold text-white sm:text-2xl">
              Previous Recommendations
            </h1>
          </div>
          <Undo2 className="hidden h-6 w-6 text-zinc-700 sm:block" />
        </div>

        {user ? (
          <div className="flex flex-col items-center gap-2 py-4 text-center">
            {userDataLoading && (
              <Loader2 className="m-2 h-8 w-8 animate-spin text-red-400" />
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-16 text-center">
            <p className=" text-xl font-semibold text-zinc-200 sm:text-2xl">
              Guest mode.
            </p>
            <p className="text-sm text-zinc-500">
              Sign in to view your past recommendations here.
            </p>
          </div>
        )}

        {userData?.length > 0 && (
          <div className="space-y-4">
            {displayData?.map((chat) => {
              const isOpen = openId === chat.id;

              return (
                <div
                  key={chat.id}
                  className="rounded-xl border border-zinc-800"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : chat.id)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left hover:bg-zinc-950"
                  >
                    <div>
                      <p className="text-xs text-zinc-500">Prompt</p>
                      <p className="line-clamp-1 font-semibold text-zinc-200">
                        {chat.prompt}
                      </p>
                    </div>

                    {isOpen ? (
                      <Minimize2 className="text-red-400" />
                    ) : (
                      <Maximize2 className="text-red-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-zinc-900 p-5 text-lg font-semibold leading-relaxed text-zinc-200">
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
            {userData.length > 3 && (
              <div className="flex items-center justify-center">
                {maxi ? (
                  <ChevronUp
                    className="h-8 w-8 cursor-pointer text-red-400 hover:scale-105"
                    onClick={() => setMaxi((prev) => !prev)}
                  />
                ) : (
                  <ChevronDown
                    className="h-8 w-8 cursor-pointer text-red-400 hover:scale-105"
                    onClick={() => setMaxi((prev) => !prev)}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
