import React, { useState, useContext } from "react";
import BalanceContext from "../../Context/BalanceContext";

const InvestmentModal = ({ isOpen, onClose }) => {
  const {
    mainBalance,
    interestBalance,
    setMainBalance,
    setInterestBalance,
    totalInvest,
    setTotalInvest,
  } = useContext(BalanceContext);

  const [selectedWallet, setSelectedWallet] = useState("main");
  const [amountToInvest, setAmountToInvest] = useState("");

  const handleInvest = () => {
    const amount = parseFloat(amountToInvest);

    if (selectedWallet === "main") {
      if (mainBalance >= amount) {
        setMainBalance(mainBalance - amount);
        setTotalInvest(totalInvest + amount);
        alert("Investment successful from main balance");
      } else {
        alert("Insufficient main balance");
      }
    } else if (selectedWallet === "interest") {
      if (interestBalance >= amount) {
        setInterestBalance(interestBalance - amount);
        setTotalInvest(totalInvest + amount);
        alert("Investment successful from interest balance");
      } else {
        alert("Insufficient interest balance");
      }
    }
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
          <option value="main">Main Balance - ${mainBalance}</option>
          <option value="interest">
            Interest Balance - ${interestBalance}
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
