import { get, getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { app } from "../../config/firebase";
import { uid } from "../../stores/stores";
import { calculateTotal } from "./calculateTotal";

export const useTransactionManager = () => {
	const [walletBalance, setWalletBalance] = useState(0);
	const [investedAmount, setInvestedAmount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const db = getDatabase(app);
				const userIdPath = `/${uid.id}`;
				const activeDepositRef = ref(db, `activeDeposit${userIdPath}`);
				const investedAmountRef = ref(db, `investmentPlan${userIdPath}`);
				const mainBalanceRef = ref(db, `mainBalance${userIdPath}`);

				const [
					activeDepositSnapshot,
					investedAmountSnapshot,
					mainBalanceSnapshot,
				] = await Promise.all([
					get(activeDepositRef),
					get(investedAmountRef),
					get(mainBalanceRef),
				]);

				const totalDeposits = activeDepositSnapshot.exists()
					? calculateTotal(activeDepositSnapshot.val())
					: 0;

				const currentInvestedAmount = investedAmountSnapshot.exists()
					? Number(investedAmountSnapshot.val().amount)
					: 0;

				const mainBalance = mainBalanceSnapshot.exists()
					? mainBalanceSnapshot.val().balance
					: totalDeposits;

				if (!mainBalanceSnapshot.exists())
					await set(mainBalanceRef, { balance: totalDeposits });

				setWalletBalance(mainBalance);
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
