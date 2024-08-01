import { useState, useEffect } from "react";
import axios from "axios";

const useUpdateTotalDeposit = (uid) => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCurrentBalance = async (uid) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/totalDeposit/${uid}.json`
      );

      if (response.data) {
        const transactions = Object.values(response.data);
        const latestTransaction = transactions[transactions.length - 1];
        setCurrentBalance(latestTransaction.amount || 0);
      } else {
        setCurrentBalance(0);
      }
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

  return { currentBalance , loading };
};

export default useUpdateTotalDeposit;
