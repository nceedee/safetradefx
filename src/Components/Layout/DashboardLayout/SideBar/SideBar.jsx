import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../DashboardHeader/menuLink";
import BalanceContext from "../../../Context/BalanceContext";

const SideBar = () =>
{
  const balanceContext = useContext(BalanceContext)
  return (
    <div className="border border-gray-300 px-6 py-8 w-full md:w-[300px] rounded-lg bg-[#202b5d] text-white">
      <div className="p-4 flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Account Balance</p>
          <button className="bg-[#609c46] text-xs p-1 rounded-sm">USD</button>
        </div>
        <div className="flex justify-between items-center">
          <p>Main Balance</p>
          <p>{`$${balanceContext.mainBalance}.00`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Interest Balance</p>
          <p>{`$${balanceContext.interestBalance}.00`}</p>
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
