import { createContext, useEffect, useState } from "react";

export const ResponseContext = createContext({
  response: "",
  loading: false,
  setResponse: () => {},
  setLoading: () => {},
});

export default function ResponseProvider({ children }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ResponseContext.Provider
      value={{
        response,
        setResponse,
        loading,
        setLoading,
      }}
    >
      {children}
    </ResponseContext.Provider>
  );
}
