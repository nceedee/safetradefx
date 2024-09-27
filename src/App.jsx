import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import Signup from "./Components/Pages/LandingPage/Signup/Signup";
import Login from "./Components/Pages/LandingPage/Login/Login";
import { useAuth } from "./Components/Global/hook/useAuth";
import LoadingModal from "./Components/Global/LoadingModal/LoadingModal";
import {
  LoadingProvider,
  useLoading,
} from "./Components/Context/LoadingContext";
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
          path="/reinvest"
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
          path="/referrer/" // emeka na here you go do  the routerfor referal =?:name 
          element={<ReferralForm />}
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
