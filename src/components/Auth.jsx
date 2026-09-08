import { AuthView } from "@neondatabase/auth-ui";
import { useParams } from "react-router-dom";

export function Auth() {
  const { pathname } = useParams(); // match your route's param name exactly
  return (
    <div className="flex min-h-170 w-full items-center justify-center px-4 ">
      <AuthView
        pathname={pathname}
        className="w-full max-w-sm cursor"
        classNames={{
          base: "rounded-3xl border border-white/40 shadow-xl",
          title: "text-xl font-bold",
          description: "text-xs text-white/50",
          footerLink: "text-red-500 hover:text-red-300",
          form: {
            input: "focus:border-red-500",
            button:
              "bg-red-600 text-white hover:bg-red-600 border border-red-500",
          },
        }}
      />
    </div>
  );
}
