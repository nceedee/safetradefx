import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import About from "./Components/Pages/LandingPage/About/About";
import Plans from "./Components/Pages/LandingPage/Plans/Plans";
import Support from "./Components/Pages/LandingPage/Support/Support";
import Signup from "./Components/Pages/LandingPage/Signup/Signup";
import Login from "./Components/Pages/LandingPage/Login/Login";
import Services from "./Components/Pages/LandingPage/Service/Services";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import { useAuth } from "./Components/Global/hook/useAuth";
import LoadingModal from "./Components/Global/LoadingModal/LoadingModal";
import {
  LoadingProvider,
  useLoading,
} from "./Components/Context/LoadingContext";

const AppContent = () => {
  const { RequireAuth } = useAuth();
  const { isLoading, setIsLoading } = useLoading();
  const location = useLocation();
  const navigationType = useNavigationType();

  React.useEffect(() => {
    if (navigationType === "PUSH") {
      window.location.reload();
    }
  }, [location, navigationType]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default function App() {
  return (
    <LoadingProvider>
      <Router>
        <AppContent />
      </Router>
    </LoadingProvider>
  );
}
