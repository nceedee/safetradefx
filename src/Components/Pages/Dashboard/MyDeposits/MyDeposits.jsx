import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../../Layout/DashboardLayout/Header/Header';
import { SideBar } from '../../../Layout/DashboardLayout/SideBar/SideBar';
import { uid } from '../../../stores/stores';

export const MyDeposits = () => {
  const [deposits, setDeposits] = useState([]);
  const [filteredDeposits, setFilteredDeposits] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Fetch deposit history from Firebase
  const fetchDeposits = async () => {
    try {
      const response = await axios.get(
        `https://tanstack-fetch-default-rtdb.firebaseio.com/depositHistory/${uid.id}.json`
      );

      if (response.data) {
        const depositsArray = Object.entries(response.data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setDeposits(depositsArray);
        setFilteredDeposits(depositsArray);
      }
    } catch (error) {
      console.error('Error fetching deposit history:', error);
    }
  };

  useEffect(() => {
    if (uid) {
      fetchDeposits();
    }
  }, [uid]);

  // Filter deposits based on date range
  const handleFilter = () => {
    const filtered = deposits.filter((deposit) => {
      const depositDate = new Date(deposit.timestamp);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return depositDate >= start && depositDate <= end;
    });
    setFilteredDeposits(filtered);
  };

  return (
    <div className='bg-secondary2 min-h-screen'>
      <Header />
      <SideBar>
        <div className="p-6 rounded-md bg-primary1 ">
          <h2 className="text-lg font-bold mb-4 text-white">My Deposits</h2>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block text-gray-200 text-sm font-bold mb-2">
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <button
              onClick={handleFilter}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Filter
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Date</th>
                  <th className="py-2 px-4 border-b text-left">Message</th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredDeposits.map((deposit) => (
                  <tr key={deposit.id}>
                    <td className="py-2 px-4 border-b">{new Date(deposit.timestamp).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border-b">{deposit.message}</td>
                    <td className="py-2 px-4 border-b">Success</td>
                  </tr>
                ))}
                {filteredDeposits.length === 0 && (
                  <tr>
                    <td colSpan="3" className="text-center py-2">No deposits found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </SideBar>
    </div>
  );
};
