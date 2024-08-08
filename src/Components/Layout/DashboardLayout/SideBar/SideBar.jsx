import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../DashboardHeader/menuLink";
import BalanceContext from "../../../Context/BalanceContext";
import useUpdateMainBalance from "../../../Global/hook/useUpdateMainBalance";
import { uid } from "../../../stores/stores";
import useUpdateInterestBalance from "../../../Global/hook/useUpdateInterestBalance";
import useUpdateTotalEarn from "../../../Global/hook/useUpdateTotalEarn";

const SideBar = () => {
  const balanceContext = useContext( BalanceContext );
    const { currentBalance: earncurrentBalance } = useUpdateTotalEarn(uid.id);

  const { currentBalance, loading } = useUpdateMainBalance(uid.id);
  const { interestCurrentBalance, InterestLoading } = useUpdateInterestBalance(
    uid.id
  );

  const [localEarnAmount, setLocalEarnAmount] = useState(null);

  useEffect(() => {
    // Fetch data from local storage and parse it
    const storedData = localStorage.getItem("investmentData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setLocalEarnAmount(parsedData.amount); // Assuming 'amount' is the field you need
    }
  }, []);

  // Use local storage amount if available, otherwise use the fetched balance
  const earnAmount =
    localEarnAmount !== null ? localEarnAmount : earncurrentBalance;


  return (
    <div className="border border-gray-300 px-6 py-8 w-full md:w-[300px] rounded-lg bg-[#202b5d] text-white">
      <div className="p-4 flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Account Balance</p>
          <button className="bg-[#609c46] text-xs p-1 rounded-sm">USD</button>
        </div>
        <div className="flex justify-between items-center">
          <p>Main Balance</p>
          <p>{`$${
            currentBalance.toLocaleString() !== null
              ? currentBalance.toLocaleString()
              : "loading..."
          }.00`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Interest Balance</p>
          <p>{`$${
            interestCurrentBalance.toLocaleString() !== null
              ? interestCurrentBalance.toLocaleString()
              : "loading..."
          }.00`}</p>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <button className="bg-[#609c46] text-white w-full rounded-sm p-2">
            <Link to="/add-fund">Deposit</Link>
          </button>
          <button className="bg-[#202b5d] text-white w-full rounded-sm p-2">
            <Link to="/plan">Invest</Link>
          </button>
        </div>
      </div>
      <div className="mt-4  ">
        {menuItems.map((val, key) => (
          <Link
            key={key}
            to={val.path}
            className="flex items-center space-x-4 text-white p-4 hover:bg-[#303a65] rounded-lg transition-colors"
          >
            <div>{val.icon}</div>
            <p>{val.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
