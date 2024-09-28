import React, { useState, useEffect } from "react";
import useUpdateMainBalance from "../hook/useUpdateInvested";
import { uid } from "../../stores/stores";

const InvestmentModal = ({ isOpen, onClose, investmentPlan }) => {
  const [selectedWallet, setSelectedWallet] = useState("amount");
  const [amountToInvest, setAmountToInvest] = useState("");
  const [investmentData, setInvestmentData] = useState({});
  const [investmentCount, setInvestmentCount] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const { currentBalance } = useUpdateMainBalance(uid.id);

  useEffect(() => {
    // Fetch investment data and count from localStorage
    const storedData = localStorage.getItem("investmentData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setInvestmentData(parsedData);

        let count = 0;
        let totalAmount = 0;
        let topUpCount = 0;

        count += parsedData.topUps || 0;
        totalAmount += parsedData.amount || 0;
        topUpCount += parsedData.topUps || 0;

        setInvestmentCount(count);
        setTotalInvested(totalAmount);
        setTotalCount(topUpCount);
      } catch (e) {
        console.error("Error loading investment data:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (investmentCount > 0) {
      localStorage.setItem("investmentData", JSON.stringify(investmentData));
    }
  }, [investmentData]);

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
      topUps: 1,
    };

    setInvestmentData((prevData) => {
      let updatedData = { ...prevData };
      if (updatedData.amount) {
        updatedData.amount += amount;
        updatedData.topUps += 1;
      } else {
        updatedData = newInvestment;
      }

      setInvestmentCount((prevCount) => prevCount + 1);
      setTotalInvested((prevTotal) => prevTotal + amount);
      setTotalCount((prevCount) => prevCount + 1);

      return updatedData;
    });

    alert(`Investment of $${amount} successful from ${selectedWallet} balance`);
    onClose();
  };

  const getCurrentBalance = (wallet) => {
    return wallet === "amount" ? currentBalance : 500;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateInvestmentReturns();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateInvestmentReturns = () => {
    try {
      setInvestmentData((prevData) => {
        const updatedData = { ...prevData };

        if (updatedData.amount) {
          const { amount, startTime, percentage } = updatedData;
          const timeElapsed = (new Date() - new Date(startTime)) / 3600000;
          const interest = (amount * percentage * timeElapsed) / 100;
          updatedData.amount += interest;
          updatedData.startTime = new Date().toISOString();
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
          onClick={() => {
            setAmountToInvest("");
            onClose();
          }}
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
