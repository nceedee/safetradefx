import { useState, useEffect } from "react";
import axios from "axios";

const useUpdateMainBalance = (uid) => {
  const [ticketcurrentBalance, setTicketCurrentBalance] = useState(0);
  const [ticketloading, setTicketLoading] = useState(false);

  const fetchCurrentBalance = async (uid) => {
    setTicketLoading(true);
    try {
      const response = await axios.get(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/totalTicket/${uid}.json`
      );

      if (response.data) {
        const transactions = Object.values(response.data);
        const latestTransaction = transactions[transactions.length - 1];
        setTicketCurrentBalance(latestTransaction.amount || 0);
      } else {
        setTicketCurrentBalance(0);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      setTicketCurrentBalance(null); // Handle error state if necessary
    } finally {
      setTicketLoading(false);
    }
  };

  useEffect(() => {
    if (uid) {
      fetchCurrentBalance(uid);
    }
  }, [uid]);

  return { ticketcurrentBalance, ticketloading };
};

export default useUpdateMainBalance;
