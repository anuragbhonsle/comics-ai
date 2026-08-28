import { AccountView } from "@neondatabase/neon-js/auth/react/ui";
import { useParams } from "react-router-dom";

export function Account() {
  const { pathname } = useParams();
  return (
    <div className="pt-20 px-6  min-h-screen">
      <AccountView
        pathname={pathname}
        className="[&_button]:cursor-pointer
        [&_input]:rounded-full font-light [&_input]:border text-white-400"
      />
    </div>
  );
}
