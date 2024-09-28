import { useState, useEffect } from "react";

const useUpdateActiveDeposit = (uid) => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCurrentBalance = async (uid) => {
    setLoading(true);
    console.log(`Fetching balance for UID: ${uid}`);

    try {
      const url = `https://tanstack-fetch-default-rtdb.firebaseio.com/activeDeposit/${uid}.json`;
      console.log(`Fetching from URL: ${url}`);

      const response = await fetch(url);

      console.log(`Response status: ${response.status}`);

      if (!response.ok) {
        throw new Error(`Network response was not OK: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data received:", data); // Log the full data received

      if (data) {
        // Log the full data structure for inspection
        console.log("Full data:", data);

        // Extract the first object's `amount` if the data structure matches
        const transactionKeys = Object.keys(data);
        if (transactionKeys.length > 0) {
          const firstTransaction = data[transactionKeys[0]];
          console.log("First transaction:", firstTransaction.amount);

          // Set the balance using the `amount` field from the transaction
          setCurrentBalance(firstTransaction?.amount || 0);
        } else {
          console.log("No transactions found, setting balance to 0");
          setCurrentBalance(0);
        }
      } else {
        console.log("No data found, setting balance to 0");
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
      console.log(`UID changed or set: ${uid}, fetching balance...`);
      fetchCurrentBalance(uid);
    } else {
      console.log("No UID provided, skipping fetch.");
    }
  }, [uid]);

  return { currentBalance, loading };
};

export default useUpdateActiveDeposit;
