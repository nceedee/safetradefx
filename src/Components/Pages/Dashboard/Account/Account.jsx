import React, { useRef } from 'react';
import { Header } from '../../../Layout/DashboardLayout/Header/Header';
import { SideBar } from '../../../Layout/DashboardLayout/SideBar/SideBar';
import { FaMoneyCheckAlt, FaHandHoldingUsd } from 'react-icons/fa';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { BalanceCard } from '../../../Global/BalanceCard/BalanceCard';
import { Information } from './Information/Information';
import DoughnutChart from './DoughnutChart/DoughnutChart';

export const Account = () => {
  const cards = [
    {
      icon: <FaMoneyCheckAlt className="text-5xl lg:text-3xl" />,
      text: 'Earned',
      amount: '$0.00',
    },
    {
      icon: <BiMoneyWithdraw className="text-5xl md:text-3xl" />,
      text: 'Withdrawn',
      amount: '$0.00',
    },
    {
      icon: <FaHandHoldingUsd className="text-5xl md:text-3xl" />,
      text: 'Invested',
      amount: '$0.00',
    },
    {
      icon: <RiLuggageDepositFill className="text-5xl md:text-3xl" />,
      text: 'Active Deposits',
      amount: '$0.00',
    },
  ];

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <h1 className="lg:text-4xl font-bold mb-4 text-white text-2xl p-3 lg:p-0">Account</h1>

        {/* Cards section */}
        <div className="flex flex-col lg:flex-row gap-4 py-4"> 
          {/* Map through the cards and display them in a column or row based on screen size */}
          {cards.map((card, index) => (
            <div className="flex-wrap w-[80%] m-auto lg:w-64" key={index}>
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
          <div className="lg:w-[50%] w-full mb-6 lg:mb-0">
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
