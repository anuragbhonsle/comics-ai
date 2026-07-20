import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import ResponseProvider from "./context/ResponseContext";
import UserDataProvider from "./context/UserDataContext";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import QuestionForm from "./components/QuestionForm";
import Response from "./components/Response";
import { authClient } from "./lib/auth";
import { Auth } from "./components/Auth";
import { Account } from "./components/Account";
import { useContext } from "react";
import ChatHistory from "./components/ChatHistory";
import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react/ui";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <AuthProvider>
      <UserDataProvider>
        <ResponseProvider>
          <NeonAuthUIProvider
            emailOTP
            authClient={authClient}
            defaultTheme="dark"
            className="bg-black"
          >
            <BrowserRouter>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/generate" element={<QuestionForm />} />
                  <Route path="/library" element={<Response />} />
                  <Route path="/history" element={<ChatHistory />} />
                  <Route path="/auth/:pathname" element={<Auth />} />
                  <Route path="/account/:pathname" element={<Account />} />
                </Route>

                <Route path="/" element={<Landing />} />
              </Routes>
            </BrowserRouter>
          </NeonAuthUIProvider>
        </ResponseProvider>
      </UserDataProvider>
    </AuthProvider>
  );
}

export default App;
