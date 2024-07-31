import React, { createContext, useState, useEffect } from "react";

// Define the context with the necessary values and state setters
const BalanceContext = createContext({
  mainBalance: 2,
  interestBalance: 0,
  totalDeposit: 0,
  totalEarn: 0,
  totalInvest: 0,
  totalPayout: 0,
  totalReferralBonus: 0,
  totalTicket: 0,
  setMainBalance: () => {},
  setInterestBalance: () => {},
  setTotalDeposit: () => {},
  setTotalEarn: () => {},
  setTotalInvest: () => {},
  setTotalPayout: () => {},
  setTotalReferralBonus: () => {},
  setTotalTicket: () => {},
});

export const BalanceContextProvider = ({ children }) => {
  const [mainBalance, setMainBalance] = useState(2);
  const [interestBalance, setInterestBalance] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalEarn, setTotalEarn] = useState(0);
  const [totalInvest, setTotalInvest] = useState(0);
  const [totalPayout, setTotalPayout] = useState(0);
  const [totalTicket, setTotalTicket] = useState(0);
  const [totalReferralBonus, setTotalReferralBonus] = useState(0);

  // This effect can be used to initialize data if needed, for now, it's just an example
  useEffect(() => {
    // Example effect to update balances or fetch initial data if required
    const fetchData = async () => {
      // Fetch data and set initial states here
    };

    fetchData();
  }, []);

  return (
    <BalanceContext.Provider
      value={{
        mainBalance,
        interestBalance,
        totalDeposit,
        totalEarn,
        totalInvest,
        totalPayout,
        totalReferralBonus,
        totalTicket,
        setTotalTicket,
        setMainBalance,
        setInterestBalance,
        setTotalDeposit,
        setTotalEarn,
        setTotalInvest,
        setTotalPayout,
        setTotalReferralBonus,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContext;
