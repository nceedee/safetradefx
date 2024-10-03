import { useEffect, useState } from "react";
import { uid } from "../../stores/stores";
import { useGet } from "./useGet";

export const useCalculateInterest = () => {
	const {
		data,
		error,
		isLoading: loadingEarnedInterest,
	} = useGet(`investmentPlan/${uid.id}`);
	const [interestEarned, setInterestEarned] = useState(null);

	useEffect(() => {
		if (!data || error || loadingEarnedInterest) return;

		const principalAmount = parseFloat(data.amount);
		const interestRate = data.interestRate;
		const duration = data.duration; // Duration in hours for interest accrual

		// Load any stored data from localStorage
		const storedInterest =
			parseFloat(localStorage.getItem("interestEarned")) || 0;
		let lastCalculationTime =
			parseInt(localStorage.getItem("lastCalculationTime"), 10) ||
			new Date().getTime();

		// Get current time
		const currentTime = new Date().getTime();

		// Calculate total time elapsed since the last calculation
		let totalTimeElapsedInHours = (currentTime - lastCalculationTime) / 3600000; // Convert ms to hours
		let periodsElapsed = 0;

		// Continue calculating as long as time has passed for at least one duration period
		while (totalTimeElapsedInHours >= duration) {
			periodsElapsed++;
			totalTimeElapsedInHours -= duration;
			lastCalculationTime += duration * 3600000; // Update last calculation time by duration in milliseconds
		}

		// If any periods have passed, calculate interest
		if (periodsElapsed > 0) {
			const newInterestEarned =
				calculateCompoundInterest(
					principalAmount,
					interestRate,
					periodsElapsed
				) - principalAmount;

			// Update total interest (existing interest + new interest)
			const totalInterestEarned = storedInterest + newInterestEarned;
			setInterestEarned(totalInterestEarned.toFixed(2));

			// Store updated values in localStorage
			localStorage.setItem("interestEarned", totalInterestEarned.toFixed(2));
			localStorage.setItem(
				"lastCalculationTime",
				lastCalculationTime.toString()
			);
		}
	}, [data, error, loadingEarnedInterest]);

	return { interestEarned, loadingEarnedInterest };
};

// Compound interest function
const calculateCompoundInterest = (principal, rate, periodsElapsed) => {
	const rateAsDecimal = rate / 100;
	return principal * Math.pow(1 + rateAsDecimal, periodsElapsed);
};
