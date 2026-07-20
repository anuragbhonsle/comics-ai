import { AccountView } from "@neondatabase/neon-js/auth/react/ui";
import { useParams } from "react-router-dom";

export function Account() {
  const { pathname } = useParams();
  return (
    <div className="pt-20 px-6 bg-black min-h-screen">
      <AccountView
        pathname={pathname}
        className="[&_button]:cursor-pointer
        [&_input]:rounded-full font-bold [&_input]:border-2 font-mono text-red-500"
      />
    </div>
  );
}
