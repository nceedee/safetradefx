import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../config/firebase";
import { uid } from "../../stores/stores";

export const updateWalletBalance = (balance) => {

	const db = getDatabase(app);

	// Reference to the specific user's investment plan
	const investedAmountbRef = ref(db, `mainBalance/${uid.id}`);
	// Update the wallet balance
	update(investedAmountbRef, { balance: balance })
		.then(() => {
			console.log("Wallet balance updated successfully");
		})
		.catch((error) => {
			console.error("Error updating wallet balance:", error);
		});
};

// const makeInvestment = async (amount) => {
// 	const db = getDatabase(app);
// 	const mainBalanceRef = ref(db, `mainBalance/${uid.id}`);
// 	const mainBalanceSnapshot = await get(mainBalanceRef);

// 	if (mainBalanceSnapshot.exists()) {
// 		const currentBalance = mainBalanceSnapshot.val().balance;
// 		if (currentBalance >= amount) {
// 			const newBalance = currentBalance - amount;
// 			await update(mainBalanceRef, { balance: newBalance });
// 			// Update invested amount...
// 			setWalletBalance(newBalance);
// 		} else {
// 			throw new Error("Insufficient balance");
// 		}
// 	} else {
// 		throw new Error("Main balance not initialized");
// 	}
// };
