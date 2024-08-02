import { useState, useEffect } from "react";
import axios from "axios";

const useUpdateTotalDeposit = (uid) => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCurrentBalance = async (uid) => {
    setLoading(true);
    try {
      // Fetch balance from userbalance endpoint
      const userBalanceResponse = await axios.get(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/userbalance/${uid}.json`
      );

      // Calculate total user balance
      let userBalance = 0;
      if (userBalanceResponse.data) {
        const transactions = Object.values(userBalanceResponse.data);
        userBalance = transactions.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );
      }

      // Fetch balance from totalDeposit endpoint
      const totalDepositResponse = await axios.get(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/totalDeposit/${uid}.json`
      );

      let totalDeposit = 0;
      if (totalDepositResponse.data) {
        const transactions = Object.values(totalDepositResponse.data);
        totalDeposit = transactions.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );
      }

      // Get the amount from local storage
      const investmentData =
        JSON.parse(localStorage.getItem("investmentData")) || {};
      const localStorageAmount = investmentData.amount || 0;

      // Combine all amounts
      const combinedBalance = userBalance + totalDeposit + localStorageAmount;

      setCurrentBalance(combinedBalance);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setCurrentBalance(null); // Handle error state if necessary
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uid) {
      fetchCurrentBalance(uid);
    }
  }, [uid]);

  return { currentBalance, loading };
};

export default useUpdateTotalDeposit;
