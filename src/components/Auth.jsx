import { AuthView } from "@neondatabase/neon-js/auth/react/ui";
import { useParams } from "react-router-dom";

export function Auth() {
  const { pathname } = useParams();
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <AuthView
        pathname={pathname}
        className="
          w-full max-w-sm rounded-2xl border border-white/10  p-3 text-white shadow-xl

          [&>div]:gap-2 [&_form]:gap-2 [&_form]:space-y-2

          [&_h1]:text-lg [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-0.5
          [&_p]:text-xs [&_p]:text-white/50

          [&_div:has(>label)]:gap-1 [&_div:has(>label)]:space-y-1
          [&_label]:text-xs [&_label]:font-medium [&_label]:text-white/70

          [&_input]:w-full [&_input]:rounded-md [&_input]:border [&_input]:border-white/15
          [&_input]:bg-white/5 [&_input]:px-2.5 [&_input]:py-1.5 [&_input]:text-xs
          [&_input]:text-white [&_input]:placeholder-white/30 [&_input]:outline-none
          [&_input]:transition-colors [&_input:focus]:border-red-400


          [&_button]:w-full [&_button]:cursor-pointer [&_button]:rounded-md
          [&_button]:text-xs [&_button]:font-semibold [&_button]:transition-colors

          [&_button[type='submit']]:border [&_button[type='submit']]:border-red-400
          [&_button[type='submit']]:bg-red-400 [&_button[type='submit']]:py-2
          [&_button[type='submit']]:text-neutral-950
          [&_button[type='submit']:hover]:bg-red-300

          [&_a]:text-xs [&_a]:text-red-400 [&_a]:transition-colors [&_a:hover]:text-red-300
        "
      />
    </div>
  );
}
