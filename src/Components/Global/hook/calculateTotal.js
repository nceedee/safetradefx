export const calculateTotal = (targetObject) => {
	// Convert the object to an array of values
	const dataArray = Object.entries(targetObject).map(([key, value]) => ({
		id: key,
		...value,
	}));

	// Calculate the total amount
	const total = dataArray.reduce((acc, curr) => {
		return acc + parseFloat(curr.amount); // Ensure the amount is treated as a number
	}, 0);
	return total;
};
