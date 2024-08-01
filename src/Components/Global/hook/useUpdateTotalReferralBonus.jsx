import axios from "axios";
import { useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { uid } from "../../stores/stores";
import BalanceContext from "../../Context/BalanceContext";

export const useUpdateTotalReferralBonus = () => {
  const [newBalance, setNewBalance] = useState(0);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const balanceContext = useContext(BalanceContext);
  const date = `${new Date().getMinutes()}:${new Date().getSeconds()}`;

  const handleUpdateBalance = async (formData) => {
    setLoading(true);

    try {
      const newBalanceValue =
        Number(formData.amount) + balanceContext.totalReferralBonus;

      setNewBalance(newBalanceValue);

      await axios.post(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/totalReferralBonus/${uid.id}.json`,
        {
          amount: newBalanceValue,
        }
      );
      await axios.post(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/transactionHistory/${uid.id}.json`,
        {
          deposit: `You just received a referral bonus of $${Number(
            formData.amount
          ).toLocaleString()} in your account at ${date}. Your total referral bonuses are now $${newBalanceValue.toLocaleString()}`,
        }
      );

      queryClient.invalidateQueries("addedbet");
      balanceContext.setTotalReferralBonus(newBalanceValue);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error updating total referral bonuses:", error);
      setLoading(false);
    }
  };

  return { handleUpdateBalance, loading, newBalance, success };
};
