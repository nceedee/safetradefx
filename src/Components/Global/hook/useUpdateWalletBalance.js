import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../config/firebase";
import { uid } from "../../stores/stores";

export const updateWalletBalance = (balance) => {

	const db = getDatabase(app);

	// Reference to the specific user's investment plan
	const investedAmountbRef = ref(db, `invested/${uid.id}`);
	// Update the wallet balance
	update(investedAmountbRef, { amount: balance })
		.then(() => {
			console.log("Wallet balance updated successfully");
		})
		.catch((error) => {
			console.error("Error updating wallet balance:", error);
		});
};
 