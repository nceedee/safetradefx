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
  const cardRef = useRef(null); // Reference to the cards container
  const cards = [
    {
      icon: <FaMoneyCheckAlt className="text-5xl md:text-3xl" />,
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

  // Function to scroll cards left
  const scrollLeft = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({ left: -cardRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  // Function to scroll cards right
  const scrollRight = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({ left: cardRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <h1 className="lg:text-4xl font-bold mb-4 text-white text-2xl p-3 lg:p-0">Account</h1>

        

        {/* Cards section with horizontal scrolling */}
        <div
          ref={cardRef}
          className="flex overflow-hidden py-4" // Use overflow-hidden to only show one card
        >
          {/* Map through the cards and display one at a time */}
          {cards.map((card, index) => (
            <div className="flex-shrink-0 w-full lg:w-64 flex gap-4" key={index}>
              <BalanceCard
              
                icon={card.icon}
                text={card.text}
                amount={card.amount}
              />
            </div>
          ))}
        </div>
        {/* Arrow controls for scrolling */}
        <div className="flex items-center justify-center  lg:hidden">
          <button onClick={scrollLeft} className="bg-primary1 text-white p-2 rounded-l">
            ◀
          </button>
          <button onClick={scrollRight} className="bg-primary1 text-white p-2 rounded-r">
            ▶
          </button>
        </div>

        {/* Information and DoughnutChart section */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 w-full ">
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
