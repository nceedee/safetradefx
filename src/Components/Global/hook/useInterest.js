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
			const dbRef = ref(database, `investmentPlan/${uid.id}`);
			const snapshot = await get(dbRef);

			if (snapshot.exists()) {
				const data = snapshot.val();
				setPrincipal(data.amount || 0);
				setRate(data.interestRate || 0);
				setHoursToUpdate(data.duration || 0);
				setLastUpdated(data.lastUpdated || Date.now());
			} else {
				console.error("No data found for the user");
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
		};

		fetchInvestmentData();
	}, []);

	useEffect(() => {
		if (loading || hoursToUpdate === 0 || rate === 0) return;

		const updateInterest = async () => {
			const now = Date.now();
			const hoursPassed = (now - lastUpdated) / (1000 * 60 * 60); // Milliseconds to hours

			if (hoursPassed >= hoursToUpdate) {
				const periods = Math.floor(hoursPassed / hoursToUpdate);
				const newPrincipal = principal * Math.pow(1 + rate / 100, periods);
				const interestEarned = newPrincipal - principal;
				const updatedTotalEarnedInterest = totalEarnedInterest + interestEarned;

				const dbRef = ref(database, `investmentPlan/${uid.id}`);
				await update(dbRef, { principal: newPrincipal, lastUpdated: now });

				const totalInterestRef = ref(database, `totalEarn/${uid.id}`);
				await update(totalInterestRef, {
					totalEarnedInterest: updatedTotalEarnedInterest,
				});

				setTotalEarnedInterest(updatedTotalEarnedInterest);
				setPrincipal(newPrincipal);
				setLastUpdated(now);
			}
		};

		updateInterest();

		const interval = setInterval(
			updateInterest,
			hoursToUpdate * 60 * 60 * 1000
		);

		return () => clearInterval(interval);
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
