// TransactionHistory.jsx
import React, { useEffect, useState } from 'react';
import { Header } from '../../../Layout/DashboardLayout/Header/Header';
import { SideBar } from '../../../Layout/DashboardLayout/SideBar/SideBar';
import { uid } from '../../../stores/stores'; // Assuming uid is available from this store
import LoadingModal from '../../../Global/LoadingModal/LoadingModal';

export const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterDate, setFilterDate] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      if (!uid?.id) return; // Exit if uid.id is not available

      try {
        const response = await fetch(`https://tanstack-fetch-default-rtdb.firebaseio.com/transactionHistory/${uid.id}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch transaction history');
        }
        const data = await response.json();

        // Transform data into an array if necessary
        const transactions = data ? Object.entries(data).map(([id, transaction]) => ({
          id,
          ...transaction,
        })) : [];

        setTransactionHistory(transactions);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactionHistory();
  }, [uid?.id]); // Run effect when uid.id changes

  useEffect(() => {
    if (filterDate) {
      const filtered = transactionHistory.filter(transaction =>
        new Date(transaction.time).toLocaleDateString() === new Date(filterDate).toLocaleDateString()
      );
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactionHistory);
    }
  }, [filterDate, transactionHistory]);

  // Loading and error handling
  if (isLoading) return <LoadingModal/>
  if (error) return <p className="text-red-500">Error fetching transactions: {error.message}</p>;

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <div className="p-4 lg:p-8 mb-10 bg-primary1">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 text-white text-center">Transaction History</h1>

          {/* Date Filter */}
          <div className="my-4">
            <label htmlFor="date" className="block text-white mb-2">Filter by Date:</label>
            <input
              type="date"
              id="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="p-2 rounded border border-gray-300 text-black"
            />
          </div>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            {filteredTransactions.length === 0 ? (
              <p className="text-white text-center">No records found.</p>
            ) : (
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-600">Wallet Type</th>
                    <th className="py-3 px-4 text-left text-gray-600">Amount</th>
                    <th className="py-3 px-4 text-left text-gray-600">Date</th>
                    <th className="py-3 px-4 text-left text-gray-600">Status</th>
                    <th className="py-3 px-4 text-left text-gray-600">Wallet Address</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map(({ id, walletType, amount, time, status, walletAddress }) => (
                    <tr key={id} className="border-b hover:bg-gray-100">
                      <td className="py-2 px-4">{walletType}</td>
                      <td className="py-2 px-4">{amount}</td>
                      <td className="py-2 px-4">{new Date(time).toLocaleString()}</td>
                      <td className="py-2 px-4">{status}</td>
                      <td className="py-2 px-4">{walletAddress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </SideBar>
    </div>
  );
};
