import { useState, useEffect } from "react";
import axios from "axios";

const useUpdateInterestBalance = (uid) => {
  const [interestCurrentBalance, setInterestCurrentBalance] = useState(0);
  const [InterestLoading, setInterestLoading] = useState(false);

  const fetchCurrentBalance = async (uid) => {
    setInterestLoading(true);
    try {
      const response = await axios.get(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/interestbalance/${uid}.json`
      );

      if (response.data) {
        const transactions = Object.values(response.data);
        const latestTransaction = transactions[transactions.length - 1];
        setInterestCurrentBalance(latestTransaction.amount || 0);
      } else {
        setInterestCurrentBalance(0);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      setInterestCurrentBalance(null); // Handle error state if necessary
    } finally {
      setInterestLoading(false);
    }
  };

  useEffect(() => {
    if (uid) {
      fetchCurrentBalance(uid);
    }
  }, [uid]);

  return { interestCurrentBalance, InterestLoading };
};

export default useUpdateInterestBalance;
