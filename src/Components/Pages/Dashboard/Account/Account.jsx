import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaHandHoldingUsd, FaMoneyCheckAlt } from "react-icons/fa";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BalanceCard } from "../../../Global/BalanceCard/BalanceCard";
import { useCalculateInterest } from "../../../Global/hook/useCalculateInterest";
import { useInvestmentSummary } from "../../../Global/hook/useInvestmentSummary";
import useUpdateWithdrawn from "../../../Global/hook/useUpdateWithdrawn";
import { useGetWithdrawalSummary } from "../../../Global/hook/useWithdrawnSummary";
import { Header } from "../../../Layout/DashboardLayout/Header/Header";
import { SideBar } from "../../../Layout/DashboardLayout/SideBar/SideBar";
import { uid } from "../../../stores/stores";
import DoughnutChart from "./DoughnutChart/DoughnutChart";
import { Information } from "./Information/Information";

export const Account = () => {
	const userId = uid?.id || "";
	const { currentBalance, loading } = useUpdateWithdrawn();
	const { interestEarned, loadingEarnedInterest } = useCalculateInterest();
	const { walletBalance, investedAmount, isLoading } =
		useInvestmentSummary(userId);
 
	const { isLoading: loadingWithdrawnAmount, totalAmount } =
		useGetWithdrawalSummary();

	const cards = [
		{
			icon: <FaMoneyCheckAlt className="text-5xl lg:text-3xl" />,
			text: "Earned",
			amount: loadingEarnedInterest
				? "Loading..."
				: `$${new Intl.NumberFormat("en-US", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
				  }).format(interestEarned || 0.0)}`,
		},
		{
			icon: <BiMoneyWithdraw className="text-5xl md:text-3xl" />,
			text: "Withdrawn",
			amount: loadingWithdrawnAmount
				? "Loading..."
				: `$${new Intl.NumberFormat("en-US", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
				  }).format(totalAmount || 0.0)}`,
		},
		{
			icon: <FaHandHoldingUsd className="text-5xl md:text-3xl" />,
			text: "Invested",
			amount: isLoading
				? "Loading..."
				: `$${new Intl.NumberFormat("en-US", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
				  }).format(investedAmount || 0.0)}`,
		},
		{
			icon: <RiLuggageDepositFill className="text-5xl md:text-3xl" />,
			text: "Active Deposits",
			amount: isLoading
				? "Loading..."
				: `$${new Intl.NumberFormat("en-US", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
				  }).format(walletBalance || 0.0)}`,
		},
	];

	return (
		<div className="bg-secondary2 min-h-screen">
			<Header />
			<SideBar>
				<h1 className="lg:text-4xl font-bold mb-4 text-white text-2xl p-3 lg:p-0">
					Account
				</h1>

				{/* Cards section */}
				<div className="flex flex-col lg:flex-row gap-4 py-4">
					{/* Map through the cards and display them in a column or row based on screen size */}
					{cards.map((card, index) => (
						<div className="flex-wrap m-auto w-[90%] lg:w-64" key={index}>
							<BalanceCard
								icon={card.icon}
								text={card.text}
								amount={card.amount}
							/>
						</div>
					))}
				</div>

				{/* Information and DoughnutChart section */}
				<div className="flex flex-col mb-10 lg:flex-row lg:space-x-6 w-full">
					{/* Information Section */}
					<div className="lg:w-[50%] w-full  mb-6 lg:mb-0">
						<Information />
					</div>

					{/* Doughnut Chart Section */}
					<div className="lg:w-[50%] w-[90%] m-auto bg-primary1 rounded-2xl p-4">
						<DoughnutChart />
					</div>
				</div>
			</SideBar>
		</div>
	);
};
