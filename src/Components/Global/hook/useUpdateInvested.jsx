import { useState, useEffect } from "react";

const useUpdatedInvested = (uid) => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCurrentBalance = async (uid) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/invested/${uid}.json`
      );

      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data); // Inspect the data structure

      if (data) {
        const transactions = Object.values(data);
        // console.log("Transactions: ", transactions); // Log the transactions to check
        const latestTransaction = transactions[transactions.length - 1];
        setCurrentBalance(latestTransaction.amount || 0);
      } else {
        setCurrentBalance(0);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      setCurrentBalance(null);
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

export default useUpdatedInvested;
