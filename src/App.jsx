import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import Signup from "./Components/Pages/LandingPage/Signup/Signup";
import Login from "./Components/Pages/LandingPage/Login/Login";
import { useAuth } from "./Components/Global/hook/useAuth";
import LoadingModal from "./Components/Global/LoadingModal/LoadingModal";
import { LoadingProvider, useLoading } from "./Components/Context/LoadingContext";
import { Account } from "./Components/Pages/Dashboard/Account/Account";
import { Invest } from "./Components/Pages/Dashboard/Invest/Invest";
import { MyDeposits } from "./Components/Pages/Dashboard/MyDeposits/MyDeposits";
import { Reinvest } from "./Components/Pages/Dashboard/Reinvest/Reinvest";
import { Withdraw } from "./Components/Pages/Dashboard/Withdraw/Withdraw";
import { TransactionHistory } from "./Components/Pages/Dashboard/TransactionHistory/TransactionHistory";
import { Wallets } from "./Components/Pages/Dashboard/Wallets/Wallets";
import { Settings } from "./Components/Pages/Dashboard/Settings/Settings";
import { Referral } from "./Components/Pages/Dashboard/Referral/Referral";
import ReferralForm from "./Components/Pages/Dashboard/ReferralForm/ReferralForm";
import { About } from "./Components/Pages/LandingPage/About/About";

const AppContent = () => {
  const { RequireAuth } = useAuth();
  const { isLoading, setIsLoading } = useLoading();
  const location = useLocation();

  // Show loading on route change
  useEffect(() => {
    setIsLoading(true);  // Start loading on route change

    // Simulate loading completion (could be data fetching or actual content loading)
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 1 second (you can adjust based on your needs)
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [location, setIsLoading]);

  return (
    <div className="font-montserrat">
      {isLoading && <LoadingModal />} {/* Show the loading modal */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/my-account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route
          path="/invest"
          element={
            <RequireAuth>
              <Invest />
            </RequireAuth>
          }
        />
        <Route
          path="/my-deposits"
          element={
            <RequireAuth>
              <MyDeposits />
            </RequireAuth>
          }
        />
        <Route
          path="/deposit"
          element={
            <RequireAuth>
              <Reinvest />
            </RequireAuth>
          }
        />
        <Route
          path="/withdraw"
          element={
            <RequireAuth>
              <Withdraw />
            </RequireAuth>
          }
        />
        <Route
          path="/transaction-history"
          element={
            <RequireAuth>
              <TransactionHistory />
            </RequireAuth>
          }
        />
        <Route
          path="/wallets"
          element={
            <RequireAuth>
              <Wallets />
            </RequireAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
        <Route
          path="/referral"
          element={
            <RequireAuth>
              <Referral />
            </RequireAuth>
          }
        />

        <Route
          path="*" // Dynamic route for referral form
          element={
          <RequireAuth>
              <Account />
            </RequireAuth>
        }
        />
      </Routes>
    </div>
  );
};

// Main App component
export default function App() {
  return (
    <LoadingProvider>
      <Router>
        <AppContent />
      </Router>
    </LoadingProvider>
  );
}
