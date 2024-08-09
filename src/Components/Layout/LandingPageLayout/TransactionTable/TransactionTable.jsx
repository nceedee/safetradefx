import React from "react";

const transactions = [
  {
    date: "2024-08-07 15:00:04",
    btc: "0.00226504",
    address: "bc1qd3fkjy40mgkrzp5znvq7athxd4dz0uf6gar8dw",
  },
  {
    date: "2024-08-07 15:00:04",
    btc: "0.00941103",
    address: "TAonHMVYCPELEcBKfmxGEfRC1wTEtUqHvK",
  },
  {
    date: "2024-08-07 15:00:04",
    btc: "0.01250000",
    address: "0xAD14546bD843b6b288FF9543F6D055f96cdb06Bc",
  },
  {
    date: "2024-08-07 15:00:04",
    btc: "0.00562000",
    address: "DLErnVRNxUgdB99Xc9uaVvBKovt85WiSUD",
  },
  {
    date: "2024-08-07 15:00:04",
    btc: "0.00421000",
    address: "ltc1qvn9r4dja6pmpzl889zumz2p9rctkzuzxruf8tc",
  },
];

const TransactionTable = () => {
  return (
    <div className="bg-blue-100 p-6">
      <div className="container mx-auto p-1 lg:p-4 lg:w-[70%] w-[90%] m-auto">
        <h1 className="text-4xl font-bold text-center mb-8">PAYOUT</h1>
        <div className="overflow-x-auto p-1  lg:p-4 rounded-lg shadow-lg">
          <h2 className="text-[20px] lg:text-2xl bg-blue-900 text-white font-bold text-center py-4 rounded-t-lg w-full">
            Deposit and withdrawals history
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-4 px-6 border-b border-gray-200">DATE</th>
                  <th className="py-4 px-6 border-b border-gray-200">BTC</th>
                  <th className="py-4 px-6 border-b border-gray-200">
                    ADDRESS
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-4 px-6 border-b border-gray-200">
                      {transaction.date}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {transaction.btc}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 break-all">
                      {transaction.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
