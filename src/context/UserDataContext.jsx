import { createContext, useState } from "react";

export const UserDataContext = createContext({
  userData: [],
  userDataLoading: false,
  setUserData: () => {},
  setUserDataLoading: () => {},
});

export default function UserDataProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [userDataLoading, setUserDataLoading] = useState(false);

  const userDataCtx = {
    userData,
    userDataLoading,
    setUserData,
    setUserDataLoading,
  };

  return (
    <UserDataContext.Provider value={userDataCtx}>
      {children}
    </UserDataContext.Provider>
  );
}
