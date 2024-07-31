import React from "react";

export const TransferForm = () => {
  return (
    <div className="p-6 bg-blue-900 rounded-lg text-white w-full lg:w-2/3 mx-auto">
      <form className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-white mb-1"
            htmlFor="receiver-email"
          >
            Receiver Email Address
          </label>
          <input
            type="email"
            id="receiver-email"
            placeholder="Receiver Email Address"
            className="w-full p-2 rounded bg-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-white mb-1"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amount"
            className="w-full p-2 rounded bg-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-white mb-1"
            htmlFor="wallet"
          >
            Select Wallet
          </label>
          <select
            id="wallet"
            className="w-full p-2 rounded bg-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Main balance</option>
            <option>Other balance</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-white mb-1"
            htmlFor="password"
          >
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            className="w-full p-2 rounded bg-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-700 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

