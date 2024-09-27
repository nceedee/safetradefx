import React from 'react';

export function InvestCard(props) {
  return (
    <div className="bg-primary1 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <input
        type="radio"
        name="plan"
        value={props.planName}
        checked={props.isSelected}
        onChange={props.onChange}
        className="mr-3 scale-150  text-primary"
      />
      <h3 className="text-2xl font-semibold text-white mb-4">
        {props.planName}
      </h3>
      <ul className="text-white space-y-2 mb-6">
        <li>
          <span className="text-gray-300">Min Deposit: </span>
          <span className="text-lg">{props.minDeposit} USD</span>
        </li>
        <li>
          <span className="text-gray-300">Max Deposit: </span>
          <span className="text-lg">{props.maxDeposit} USD</span>
        </li>
        <li>
          <span className="text-gray-300">Interest Rate: </span>
          <span className="text-lg">{props.interestRate}%</span>
        </li>
        <li>
          <span className="text-gray-300">Duration: </span>
          <span className="text-lg">{props.duration} hours</span>
        </li>
          </ul>
          
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors">
        Invest
      </button>
    </div>
  );
}
