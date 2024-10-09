import { get, ref, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/firebase";
import { uid } from "../../stores/stores";

export const useInterest = () => {
	const [lastUpdated, setLastUpdated] = useState(Date.now());
	const [principal, setPrincipal] = useState(0);
	const [rate, setRate] = useState(0);
	const [hoursToUpdate, setHoursToUpdate] = useState(0);
	const [loading, setLoading] = useState(true);
	const [totalEarnedInterest, setTotalEarnedInterest] = useState(0);

	useEffect(() => {
		const fetchInvestmentData = async () => {
			try {
				const dbRef = ref(database, `investmentPlan/${uid.id}`);
				const snapshot = await get(dbRef);

				if (snapshot.exists()) {
					const data = snapshot.val();
					console.log(data);

					setPrincipal(data.amount || 0); // Default to 0 if undefined
					setRate(data.interestRate || 0); // Default to 0 if undefined
					setHoursToUpdate(data.duration || 1); // Default to 1 hour if undefined
					setLastUpdated(data.timeInvested || Date.now()); // Default to current time if undefined
				} else {
					console.error("User hasn't invested yet");
				}

				const totalInterestRef = ref(database, `totalEarn/${uid.id}`);
				const totalInterestSnapshot = await get(totalInterestRef);

				if (totalInterestSnapshot.exists()) {
					setTotalEarnedInterest(
						totalInterestSnapshot.val().totalEarnedInterest || 0
					);
				} else {
					await set(totalInterestRef, { totalEarnedInterest: 0 });
					setTotalEarnedInterest(0);
				}

				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchInvestmentData();
	}, []);

	useEffect(() => {
		if (!loading && principal > 0 && rate > 0 && hoursToUpdate > 0) {
			const updateInterest = async () => {
				const now = Date.now();
				const hoursPassed = (now - lastUpdated) / (1000 * 60 * 60); // Convert milliseconds to hours

				if (hoursPassed >= hoursToUpdate) {
					const periods = Math.floor(hoursPassed / hoursToUpdate);
					const newPrincipal = principal * Math.pow(1 + rate / 100, periods);
					const interestEarned = newPrincipal - principal;

					// Round to two decimal places to avoid floating point inaccuracies
					const roundedInterestEarned = Math.round(interestEarned * 100) / 100;
					const updatedTotalEarnedInterest =
						totalEarnedInterest + roundedInterestEarned;

					try {
						// Update only the earned interest, not the principal itself
						const dbRef = ref(database, `investmentPlan/${uid.id}`);
						await update(dbRef, { timeInvested: now });

						const totalInterestRef = ref(database, `totalEarn/${uid.id}`);
						await update(totalInterestRef, {
							totalEarnedInterest: updatedTotalEarnedInterest,
						});

						// Update the local state to reflect the new interest and principal
						setTotalEarnedInterest(updatedTotalEarnedInterest);
						setLastUpdated(now);

						// Update the principal for display purposes
						setPrincipal(newPrincipal);
					} catch (error) {
						console.error("Error updating data:", error);
					}
				}
			};

			// Run the updateInterest function immediately and at intervals
			updateInterest();
			const interval = setInterval(
				updateInterest,
				hoursToUpdate * 60 * 60 * 1000
			);

			// Clear the interval on cleanup
			return () => clearInterval(interval);
		}
	}, [
		principal,
		lastUpdated,
		rate,
		hoursToUpdate,
		totalEarnedInterest,
		loading,
	]);

	return { totalEarnedInterest, loading };
};
