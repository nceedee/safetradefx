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
import AddFund from "./Components/Pages/Dashboard/AddFund";
import Badges from "./Components/Pages/Dashboard/Badges";
import FundHistory from "./Components/Pages/Dashboard/FundHistory";
import InvestHistory from "./Components/Pages/Dashboard/InvestHistory";
import MyReferral from "./Components/Pages/Dashboard/MyReferral";
import Payout from "./Components/Pages/Dashboard/Payout";
import PayoutHistory from "./Components/Pages/Dashboard/PayoutHistory";
import ReferralBonus from "./Components/Pages/Dashboard/ReferralBonus";
import SupportTicket from "./Components/Pages/Dashboard/SupportTicket";
import Transaction from "./Components/Pages/Dashboard/Transaction";
import Transfer from "./Components/Pages/Dashboard/Transfer";

const AppContent = () => {
  const { RequireAuth } = useAuth();
  const { isLoading } = useLoading();
  const location = useLocation();
  const navigationType = useNavigationType();

  React.useEffect(() => {
    if (navigationType === "PUSH") {
      window.location.reload();
    }
  }, [location, navigationType]);

  return (
    <div className="font-montserrat">
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
        <Route
          path="/add-fund"
          element={
            <RequireAuth>
              <AddFund />
            </RequireAuth>
          }
        />
        <Route
          path="/badges"
          element={
            <RequireAuth>
              <Badges />
            </RequireAuth>
          }
        />
        <Route
          path="/fund-history"
          element={
            <RequireAuth>
              <FundHistory />
            </RequireAuth>
          }
        />
        <Route
          path="/invest-history"
          element={
            <RequireAuth>
              <InvestHistory />
            </RequireAuth>
          }
        />
        <Route
          path="/my-referral"
          element={
            <RequireAuth>
              <MyReferral />
            </RequireAuth>
          }
        />
        <Route
          path="/payout"
          element={
            <RequireAuth>
              <Payout />
            </RequireAuth>
          }
        />
        <Route
          path="/payout-history"
          element={
            <RequireAuth>
              <PayoutHistory />
            </RequireAuth>
          }
        />
        <Route
          path="/referral-bonus"
          element={
            <RequireAuth>
              <ReferralBonus />
            </RequireAuth>
          }
        />
        <Route
          path="/support-ticket"
          element={
            <RequireAuth>
              <SupportTicket />
            </RequireAuth>
          }
        />
        <Route
          path="/transaction"
          element={
            <RequireAuth>
              <Transaction />
            </RequireAuth>
          }
        />
        <Route
          path="/transfer"
          element={
            <RequireAuth>
              <Transfer />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
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
