import React, { useState, useEffect } from "react";
import useUpdateMainBalance from "../hook/useUpdateMainBalance";
import useUpdateInterestBalance from "../hook/useUpdateInterestBalance";
import { uid } from "../../stores/stores";

const InvestmentModal = ({ isOpen, onClose, investmentPlan }) => {
  const { currentBalance } = useUpdateMainBalance(uid.id);
  const { interestCurrentBalance } = useUpdateInterestBalance(uid.id);

  const [selectedWallet, setSelectedWallet] = useState("amount");
  const [amountToInvest, setAmountToInvest] = useState("");
  const [currentBalanceState, setCurrentBalanceState] = useState(null);

  useEffect(() => {
    if (selectedWallet === "amount") {
      setCurrentBalanceState(currentBalance);
    } else if (selectedWallet === "interest") {
      setCurrentBalanceState(interestCurrentBalance);
    }
  }, [selectedWallet, currentBalance, interestCurrentBalance]);

  useEffect(() => {
    const investmentData =
      JSON.parse(localStorage.getItem("investmentData")) || {};
    if (investmentData[selectedWallet]) {
      setAmountToInvest(investmentData[selectedWallet].toString());
    }
  }, [selectedWallet]);

  const handleInvest = () => {
    const amount = parseFloat(amountToInvest);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Check if amount is within the investment plan range
    if (amount < investmentPlan.min || amount > investmentPlan.max) {
      alert(
        `Investment amount must be between $${investmentPlan.min} and $${investmentPlan.max}`
      );
      return;
    }

    // Check if current balance is sufficient
    if (currentBalanceState < amount) {
      alert(`Insufficient ${selectedWallet} balance`);
      return;
    }

    // Retrieve existing investment data from local storage
    const investmentData =
      JSON.parse(localStorage.getItem("investmentData")) || {};

    // Update investment amount
    if (investmentData[selectedWallet]) {
      investmentData[selectedWallet] += amount;
    } else {
      investmentData[selectedWallet] = amount;
    }

    // Save updated investment data back to local storage
    localStorage.setItem("investmentData", JSON.stringify(investmentData));

    alert(`Investment of $${amount} successful from ${selectedWallet} balance`);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-[#0f143a] p-6 rounded-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Confirm Investment
        </h2>
        <select
          className="mb-4 w-full p-2 bg-[#202b5d] text-white rounded-md"
          value={selectedWallet}
          onChange={(e) => setSelectedWallet(e.target.value)}
        >
          <option value="main">
            Main Balance -{" "}
            {currentBalance !== null
              ? `$${currentBalance.toLocaleString()}.00`
              : "loading..."}
          </option>
          <option value="interest">
            Interest Balance -{" "}
            {interestCurrentBalance !== null
              ? `$${interestCurrentBalance.toLocaleString()}.00`
              : "loading..."}
          </option>
        </select>
        <input
          type="number"
          className="mb-4 w-full p-2 bg-[#202b5d] text-white rounded-md"
          placeholder="Enter amount to invest"
          value={amountToInvest}
          onChange={(e) => setAmountToInvest(e.target.value)}
        />
        <button
          id="investButton"
          className="bg-[#609c46] text-white p-3 rounded-md w-full mb-2"
          onClick={handleInvest}
        >
          Confirm Investment
        </button>
        <button
          className="bg-red-500 text-white p-3 rounded-md w-full"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InvestmentModal;
