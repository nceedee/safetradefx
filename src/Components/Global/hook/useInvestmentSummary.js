import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { app } from "../../config/firebase";
import { uid } from "../../stores/stores";

export const useInvestmentSummary = (id) => {
	const [walletBalance, setWalletBalance] = useState(0);
	const [investedAmount, setInvestedAmount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const db = getDatabase(app);
				const walletBalancedbRef = ref(db, `invested/${uid.id}`);
				const investedAmountbRef = ref(db, `investmentPlan/${uid.id}`);

				const [walletBalancesnapshot, investedAmountsnapshot] =
					await Promise.all([get(walletBalancedbRef), get(investedAmountbRef)]);

				if (walletBalancesnapshot.exists()) {
					const targetObject = walletBalancesnapshot.val();
					setWalletBalance(targetObject.amount);
				} else {
					console.log("You haven't deposited yet");
				}

				if (investedAmountsnapshot.exists()) {
					const targetObject = investedAmountsnapshot.val();
					setInvestedAmount(Number(targetObject.amount));
				} else {
					console.log("You haven't invested yet");
				}
			} catch (error) {
				console.error("Error fetching investment data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);
	return {
		walletBalance,
		investedAmount,
		isLoading,
	};
};
