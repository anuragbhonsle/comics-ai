import { AuthView } from "@neondatabase/neon-js/auth/react/ui";
import { useParams } from "react-router-dom";

export function Auth() {
  const { pathname } = useParams();
  return (
    <div className="flex justify-center pt-22">
      <AuthView
        pathname={pathname}
        className="bg-black font-mono text-red-500 [&_button]:cursor-pointer
        [&_input]:rounded-full font-bold [&_input]:border-2"
      />
    </div>
  );
}
