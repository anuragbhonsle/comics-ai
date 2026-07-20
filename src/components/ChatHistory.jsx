import { useContext, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import dotenv from "dotenv";
import {
  BookOpenText,
  ChevronDown,
  ChevronUp,
  Loader2,
  Maximize2,
  Minimize2,
  Redo2,
} from "lucide-react";
import { MarkdownComponent } from "./MarkdownComponent";
import { UserDataContext } from "../context/userDataContext";
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
  const userDataCtx = useContext(UserDataContext);
  const authCtx = useContext(AuthContext);
  const [openId, setOpenId] = useState(null);
  const [maxi, setMaxi] = useState(false);

  async function fetchUserData() {
    try {
      userDataCtx.setUserDataLoading(true);
      const userdata = await axios.get(`${API_URL}/api/userdata`, {
        headers: {
          Authorization: `Bearer ${authCtx.session.token}`,
        },
      });
      userDataCtx.setUserData(userdata.data);
      userDataCtx.setUserDataLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      userDataCtx.setUserDataLoading(false);
    }
  }

  const displayData = maxi
    ? userDataCtx.userData
    : userDataCtx.userData.slice(0, 3);

  return (
    // page wrapper — mirrors Response.jsx so both routes align under the navbar the same way
    <div className="min-h-screen w-full bg-black px-4 pb-16 pt-20 sm:px-6">
      <div className="relative mx-auto w-full max-w-3xl rounded-2xl border border-zinc-800 bg-black p-6 shadow-[0_0_60px_-15px_rgba(239,68,68,0.15)] sm:p-8">
        <PanelCorners />

        <div className="mb-6 flex items-center justify-between border-b border-zinc-900 pb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500">
              <BookOpenText className="h-3 w-3" />
              History
            </span>
            <h1 className="mt-2 font-mono text-xl font-bold text-white sm:text-2xl">
              Previous Recommendations
            </h1>
          </div>
          <Redo2 className="hidden h-6 w-6 text-zinc-700 sm:block" />
        </div>

        {authCtx.user ? (
          <div className="flex flex-col items-center gap-2 py-4 text-center">
            <p className="text-white font-bold font-mono text-2xl">
              Fetch User Data
            </p>
            <button
              disabled={userDataCtx.userDataLoading}
              className="group mt-2 flex w-30 items-center justify-center rounded-full bg-red-500 py-3 text-sm font-semibold text-white transition-all duration-150 hover:scale-[1.01] hover:bg-red-400 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              onClick={fetchUserData}
            >
              {userDataCtx.userDataLoading ? "Fetching..." : "Fetch"}
            </button>
            {userDataCtx.userDataLoading === true && (
              <Loader2 className="h-8 w-8 text-red-500 animate-spin m-2" />
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-16 text-center">
            <p className="font-mono text-xl font-semibold text-zinc-200 sm:text-2xl">
              Guest mode.
            </p>
            <p className="text-sm text-zinc-500">
              Sign in to view your past recommendations here.
            </p>
          </div>
        )}

        {userDataCtx.userData?.length > 0 && (
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
                      <Minimize2 className="text-red-500" />
                    ) : (
                      <Maximize2 className="text-red-500" />
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
            {userDataCtx.userData.length > 3 && (
              <div className="flex items-center justify-center">
                {maxi ? (
                  <ChevronUp
                    className="h-8 w-8 text-red-500 cursor-pointer hover:scale-105"
                    onClick={() => setMaxi((prev) => !prev)}
                  />
                ) : (
                  <ChevronDown
                    className="h-8 w-8 text-red-500 cursor-pointer hover:scale-105"
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
