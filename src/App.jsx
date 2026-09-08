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
import { NeonAuthUIProvider } from "@neondatabase/auth-ui";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
          >
            <BrowserRouter>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Landing />} />
                  <Route path="/generate" element={<QuestionForm />} />
                  <Route path="/library" element={<Response />} />
                  <Route path="/history" element={<ChatHistory />} />
                  <Route path="/auth/:pathname" element={<Auth />} />
                  <Route path="/account/:pathname" element={<Account />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </NeonAuthUIProvider>
        </ResponseProvider>
      </UserDataProvider>
    </AuthProvider>
  );
}

export default App;
