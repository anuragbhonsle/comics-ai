import { createContext, useEffect, useState } from "react";
import { authClient } from "../lib/auth";

export const AuthContext = createContext({
  user: null,
  session: null,
});

export default function AuthProvider({ children }) {
  const [neonUser, setNeonUser] = useState(null);
  const [neonUserSession, setNeonUserSession] = useState(null);
  useEffect(() => {
    async function loadUser() {
      try {
        const result = await authClient.getSession();

        if (result.data?.user) {
          setNeonUser(result.data.user);
          setNeonUserSession(result.data.session);
        } else {
          setNeonUser(null);
        }
      } catch (err) {
        console.error(err);
        setNeonUser(null);
      }
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user: neonUser, session: neonUserSession }}>
      {children}
    </AuthContext.Provider>
  );
}
