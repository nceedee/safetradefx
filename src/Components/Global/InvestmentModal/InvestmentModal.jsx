import React, { useState, useEffect } from "react";
import useUpdateMainBalance from "../hook/useUpdateMainBalance";
import { uid } from "../../stores/stores";

const InvestmentModal = ({ isOpen, onClose, investmentPlan }) => {
  const [selectedWallet, setSelectedWallet] = useState("amount");
  const [amountToInvest, setAmountToInvest] = useState("");
  const [investmentData, setInvestmentData] = useState({});
  const [investmentCount, setInvestmentCount] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const { currentBalance } = useUpdateMainBalance(uid.id);

  // Load investment data and count from localStorage
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("investmentData")) || {};
      setInvestmentData(data);

      let count = 0;
      let totalAmount = 0;
      let topUpCount = 0;

      for (const wallet in data) {
        const investments = data[wallet];
        if (investments) {
          count += investments.length;
          totalAmount += investments.reduce(
            (sum, investment) => sum + investment.amount,
            0
          );
          topUpCount += investments.reduce(
            (sum, investment) => sum + investment.topUps,
            0
          );
        }
      }

      setInvestmentCount(count);
      setTotalInvested(totalAmount);
      setTotalCount(topUpCount);
    } catch (e) {
      console.error("Error loading investment data:", e);
      localStorage.setItem("investmentData", JSON.stringify({}));
    }
  }, []);

  // Save investment data and count to localStorage
  useEffect(() => {
    localStorage.setItem("investmentData", JSON.stringify(investmentData));
  }, [investmentData]);

  // Handle investment confirmation
  const handleInvest = () => {
    const amount = parseFloat(amountToInvest);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (amount < investmentPlan.min || amount > investmentPlan.max) {
      alert(
        `Investment amount must be between $${investmentPlan.min} and $${investmentPlan.max}`
      );
      return;
    }

    const currentBalance = getCurrentBalance(selectedWallet);

    if (currentBalance < amount) {
      alert(`Insufficient ${selectedWallet} balance`);
      return;
    }

    const newInvestment = {
      amount,
      startTime: new Date().toISOString(),
      percentage: investmentPlan.percentage,
      plan: investmentPlan.name,
      topUps: 1, // Initial top-up count
    };

    setInvestmentData((prevData) => {
      const updatedData = { ...prevData };
      if (updatedData[selectedWallet]) {
        const existingInvestment = updatedData[selectedWallet];
        existingInvestment.amount += amount;
        existingInvestment.topUps += 1; // Increment top-up count
      } else {
        updatedData[selectedWallet] = newInvestment;
      }

      // Update the total count and total invested amount
      setInvestmentCount((prevCount) => prevCount + 1);
      setTotalInvested((prevTotal) => prevTotal + amount);
      setTotalCount((prevCount) => prevCount + 1);

      return updatedData;
    });

    alert(`Investment of $${amount} successful from ${selectedWallet} balance`);
    onClose();
  };

  // Helper function to get current balance (mocked)
  const getCurrentBalance = (wallet) => {
    return wallet === "amount" ? currentBalance : 500; // Replace with actual balance fetching logic
  };

  // Calculate and update investments periodically
  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateInvestmentReturns();
    }, 60000); // Calculate every minute

    return () => clearInterval(intervalId);
  }, []);

  const calculateInvestmentReturns = () => {
    try {
      setInvestmentData((prevData) => {
        const updatedData = { ...prevData };

        for (const wallet in updatedData) {
          const investment = updatedData[wallet];
          if (investment) {
            const { amount, startTime, percentage } = investment;
            const timeElapsed = (new Date() - new Date(startTime)) / 3600000; // Time in hours
            const interest = (amount * percentage * timeElapsed) / 100;
            investment.amount += interest;
            investment.startTime = new Date().toISOString();
          }
        }

        return updatedData;
      });
    } catch (e) {
      console.error("Error calculating investment returns:", e);
    }
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
          <option value="amount">
            Main Balance (${currentBalance.toLocaleString()})
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
        <div className="mt-4 text-white">
          <h3>Total Investments: {investmentCount}</h3>
          <h3>Total Invested Amount: ${totalInvested.toFixed(2)}</h3>
          <h3>Total Top-ups: {totalCount}</h3>
        </div>
      </div>
    </div>
  );
};

export default InvestmentModal;
