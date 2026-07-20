import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const MarkdownComponent = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="my-4 overflow-hidden rounded-xl border border-zinc-700 text-sm"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code
        className="rounded-md border border-zinc-700/50 bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-zinc-300"
        {...props}
      >
        {children}
      </code>
    );
  },

  p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,

  h1: ({ children }) => (
    <h2 className="mt-8 mb-4 border-b border-zinc-900 pb-2 text-2xl font-bold text-red-500">
      {children}
    </h2>
  ),

  h2: ({ children }) => (
    <h2 className="mt-8 mb-4 border-b border-zinc-900 pb-2 text-xl font-bold text-red-500">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-6 mb-3 text-lg font-semibold text-red-500">{children}</h3>
  ),

  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 marker:text-red-500/70">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 marker:text-red-500/70">
      {children}
    </ol>
  ),

  li: ({ children }) => <li className="pl-2">{children}</li>,

  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-red-500/40 pl-4 italic text-zinc-400">
      {children}
    </blockquote>
  ),

  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-zinc-800">
      <table className="min-w-full divide-y divide-zinc-800">{children}</table>
    </div>
  ),

  th: ({ children }) => (
    <th className="bg-zinc-950 px-4 py-3 text-left text-sm font-semibold text-zinc-300">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="border-t border-zinc-900 px-4 py-3 text-sm text-zinc-300">
      {children}
    </td>
  ),
};
