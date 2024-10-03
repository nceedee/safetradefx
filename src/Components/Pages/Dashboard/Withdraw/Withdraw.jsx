import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGet } from "../../../Global/hook/useGet";
import { useGetWithId } from "../../../Global/hook/useGetWithId";
import { updateWalletBalance } from "../../../Global/hook/useUpdateWalletBalance";
import { Header } from "../../../Layout/DashboardLayout/Header/Header";
import { SideBar } from "../../../Layout/DashboardLayout/SideBar/SideBar";
import { uid } from "../../../stores/stores";
import Modal from "./Modal/Modal";

export const Withdraw = () => {
	const { data: activeDeposit, isLoading: loadingActiveDeposit } = useGet(
		`invested/${uid.id}`
	);
	const [withdrawAmount, setWithdrawAmount] = useState(0);
	const [selectedWallet, setSelectedWallet] = useState("");
	const [walletType, setWalletType] = useState("USDT");
	const [walletAddress, setWalletAddress] = useState("");
	const [wallets, setWallets] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState("");
	const [walletBalance, setWalletBalance] = useState(0);

	useEffect(() => {
		if (loadingActiveDeposit) return;
		console.log(activeDeposit.amount);
		setWalletBalance(activeDeposit.amount);
	}, [loadingActiveDeposit]);

	const { data, error, isLoading } = useGetWithId(`wallets`, {
		enabled: !!uid?.id,
	});

	useEffect(() => {
		if (data?.data) {
			setWallets(Object.values(data.data));
		}
	}, [data]);

	const postTransaction = async (transactionDetails) => {
		try {
			const response = await fetch(
				`https://tanstack-fetch-default-rtdb.firebaseio.com/transactionHistory/${uid.id}.json`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(transactionDetails),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to post transaction details");
			}

			const result = await response.json();
			// console.log('Transaction posted successfully:', result);
			setModalMessage(
				"Transaction submitted successfully. Status: In Progress"
			);
			setIsModalOpen(true);
			sendEmail(transactionDetails);
		} catch (error) {
			// console.error('Error posting transaction:', error);
			setModalMessage("Error submitting transaction. Please try again.");
			setIsModalOpen(true);
		}
	};

	const user = JSON.parse(localStorage.getItem("user"));

	const sendEmail = (transactionDetails) => {
		const templateParams = {
			amount: `${user.name} with email of ${user.email} wants to withdraw ${transactionDetails.amount} ${transactionDetails.walletType} with address of ${transactionDetails.walletAddress}. UserId is ${user.id}`,
		};

		// console.log('Sending email with params:', templateParams); // Log parameters being sent

		emailjs
			.send(
				"payout_safetradefx",
				"template_9vpl2ia",
				templateParams,
				"6_kKoseNaTUNdJbv3"
			)
			.then((response) => {
				// console.log('Email sent successfully:', response.status, response.text);
			})
			.catch((error) => {
				// console.error('Error sending email:', error);
				setModalMessage("Error sending email. Please try again later.");
				setIsModalOpen(true);
			});
	};

	const handleWithdraw = async (e) => {
		e.preventDefault();
		if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
			return alert("Please input a valid withdrawal amount.");
		}

		const walletToUse = selectedWallet || walletAddress;

		if (!walletToUse || walletToUse.trim() === "") {
			return alert("Please select or input a valid wallet address.");
		}

		const transactionDetails = {
			walletType: selectedWallet
				? wallets.find((wallet) => wallet.address === selectedWallet)?.type
				: walletType,
			amount: withdrawAmount,
			time: new Date().toISOString(),
			status: "In Progress",
			walletAddress: walletToUse,
		};

		if (isLoading) return;
		if (walletBalance === 0 || walletBalance < withdrawAmount) {
			alert(`Insufficient Balance`);
		} else {
			const updatedWalletBalance = walletBalance - withdrawAmount;
			await updateWalletBalance(updatedWalletBalance);

			await postTransaction(transactionDetails);

			setWithdrawAmount("");
			setSelectedWallet("");
			setWalletAddress("");
			setWalletType("USDT");
		}
	};

	console.log(walletBalance);

	const handleWalletChange = (e) => {
		setSelectedWallet(e.target.value);
		setWalletAddress("");
	};

	return (
		<div className="bg-secondary2 min-h-screen">
			<Header />
			<SideBar>
				<div className="p-4 m-4 lg:m-0 rounded-md lg:p-8 bg-primary1">
					<h1 className="text-xl lg:text-2xl font-bold mb-4 text-white text-center">
						Withdraw Funds
					</h1>
					{isLoading && <p className="text-gray-100">Loading wallets...</p>}
					{error && (
						<p className="text-red-500">
							Error loading wallets. Please try again.
						</p>
					)}
					<form
						onSubmit={handleWithdraw}
						className="mb-6 max-w-full lg:max-w-2xl mx-auto">
						<div className="mb-4">
							<label className="block text-gray-100 mb-2">
								Withdrawal Amount
							</label>
							<input
								type="number"
								value={withdrawAmount}
								onChange={(e) => setWithdrawAmount(e.target.value)}
								className="w-full lg:w-1/2 p-2 border rounded bg-white"
								placeholder="Enter withdrawal amount"
							/>
						</div>

						{wallets.length > 0 ? (
							<div className="mb-4">
								<label className="block text-gray-100 mb-2">
									Select Wallet
								</label>
								<select
									value={selectedWallet}
									onChange={handleWalletChange}
									className="w-full lg:w-1/2 p-2 border rounded bg-white">
									<option value="">Select a wallet</option>
									{wallets.map((wallet, index) => (
										<option key={index} value={wallet.address}>
											{wallet.type} - {wallet.address}
										</option>
									))}
								</select>
							</div>
						) : (
							<div className="mb-4">
								<p className="text-gray-100 mb-2">
									No wallets found. Please{" "}
									<Link to="/wallets" className="text-blue-400 underline">
										add a wallet
									</Link>{" "}
									before proceeding.
								</p>
							</div>
						)}

						<div className="mb-4">
							<label className="block text-gray-100 mb-2">Wallet Type</label>
							<select
								value={walletType}
								onChange={(e) => setWalletType(e.target.value)}
								className="w-full lg:w-1/2 p-2 border rounded bg-white"
								disabled={selectedWallet}>
								<option value="USDT">USDT</option>
								<option value="Bitcoin">Bitcoin</option>
								<option value="Ethereum">Ethereum</option>
								<option value="TRX">TRON (TRX)</option>
							</select>
						</div>

						<div className="mb-4">
							<label className="block text-gray-100 mb-2">Wallet Address</label>
							<input
								type="text"
								value={walletAddress}
								onChange={(e) => setWalletAddress(e.target.value)}
								className="w-full lg:w-1/2 p-2 border rounded bg-white"
								placeholder="Enter wallet address"
								disabled={selectedWallet}
							/>
						</div>

						<button
							type="submit"
							className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
							disabled={
								withdrawAmount <= 0 &&
								wallets.length === 0 &&
								walletAddress.trim() === ""
							}>
							Withdraw
						</button>
					</form>

					<Modal
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						message={modalMessage}
					/>
				</div>
			</SideBar>
		</div>
	);
};
