import { createContext, useState, useMemo } from "react";

export const UserDataContext = createContext({
  userData: [],
  userDataLoading: false,
  setUserData: () => {},
  setUserDataLoading: () => {},
});

export default function UserDataProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [userDataLoading, setUserDataLoading] = useState(false);

  // Memoize context to prevent unnecessary re-renders in consumer components
  const value = useMemo(
    () => ({
      userData,
      userDataLoading,
      setUserData,
      setUserDataLoading,
    }),
    [userData, userDataLoading],
  );

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}
