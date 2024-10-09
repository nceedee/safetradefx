import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database as db } from "../../config/firebase";
import { uid } from "../../stores/stores";

export const useTransactionManager = () => {
	const [walletBalance, setWalletBalance] = useState(0);
	const [investedAmount, setInvestedAmount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const userIdPath = `/${uid.id}`;
				const activeDepositRef = ref(db, `invested${userIdPath}`);
				const investedAmountRef = ref(db, `investmentPlan${userIdPath}`);

				const [activeDepositSnapshot, investedAmountSnapshot] =
					await Promise.all([get(activeDepositRef), get(investedAmountRef)]);

				const activeDeposit = activeDepositSnapshot.exists()
					? activeDepositSnapshot.val().amount
					: 0;

				const currentInvestedAmount = investedAmountSnapshot.exists()
					? Number(investedAmountSnapshot.val().amount)
					: 0;
				setWalletBalance(activeDeposit);
				setInvestedAmount(currentInvestedAmount);
			} catch (error) {
				console.error("Error fetching investment data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { walletBalance, investedAmount, isLoading };
};
