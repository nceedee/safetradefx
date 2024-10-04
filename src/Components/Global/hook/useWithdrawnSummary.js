import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { app } from "../../config/firebase";
import { uid } from "../../stores/stores";

export const useGetWithdrawalSummary = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [totalAmount, setTotalAmount] = useState(0); // For the sum of amounts

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const db = getDatabase(app);
				const withdrawnDataRef = ref(db, `transactionHistory/${uid.id}`);

				const withdrawnDataSnapshot = await get(withdrawnDataRef);

				if (withdrawnDataSnapshot.exists()) {
					const targetObject = withdrawnDataSnapshot.val();

					// Convert the object to an array of values
					const withdrawalsArray = Object.entries(targetObject).map(
						([key, value]) => ({
							id: key,
							...value,
						})
					);

					// Calculate the total amount
					const total = withdrawalsArray.reduce((acc, curr) => {
						return acc + parseFloat(curr.amount); // Ensure the amount is treated as a number
					}, 0);

		 
					setTotalAmount(total);
 
				} else {
					console.log("You haven't deposited yet");
				}
			} catch (error) {
				console.error("Error fetching investment data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { totalAmount, isLoading };
};
