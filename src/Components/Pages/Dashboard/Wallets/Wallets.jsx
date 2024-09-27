import React, { useState, useEffect } from 'react';
import { Header } from '../../../Layout/DashboardLayout/Header/Header';
import { SideBar } from '../../../Layout/DashboardLayout/SideBar/SideBar';
import { usePost } from '../../../Global/hook/usePost'
import { useGetWithId } from '../../../Global/hook/useGetWithId'; // Make sure the path is correct
import { uid } from '../../../stores/stores';

export const Wallets = () => {
  const [walletType, setWalletType] = useState('USDT');
  const [walletAddress, setWalletAddress] = useState('');
  const { data: walletsData } = useGetWithId(`wallets`, {
    enabled: !!uid?.id // Only fetch if uid.id is available
  });

  const { post: addWallet } = usePost();

  // Handle form submission for adding a new wallet
  const handleAddWallet = async (e) => {
    e.preventDefault();
    if (walletAddress.trim() === '') {
      return alert('Please input a valid wallet address');
    }

    // Prepare the new wallet object
    const newWallet = { type: walletType, address: walletAddress };
    
    // Post the new wallet to the server
    await addWallet(`wallets`, newWallet);

    // Reset form fields
    setWalletType('USDT');
    setWalletAddress('');
    window.location.reload()
  };

  // Handle copy to clipboard
  const handleCopy = (walletAddress) => {
    navigator.clipboard.writeText(walletAddress);
    alert(`Copied: ${walletAddress}`);
  };

 


  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <div className="p-4 lg:p-8 m-4 lg:m-0 rounded-md bg-primary1">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 text-white text-center">Add Wallets</h1>

          {/* Form for adding wallets */}
          <form onSubmit={handleAddWallet} className="mb-6 max-w-full lg:max-w-2xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-100 mb-2">Select Wallet Type</label>
              <select
                value={walletType}
                onChange={(e) => setWalletType(e.target.value)}
                className="w-full lg:w-1/2 p-2 border rounded bg-white"
              >
                <option value="USDT">USDT</option>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="TRX">TRON (TRX)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-100 mb-2">Wallet Address</label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full lg:w-1/2 p-2 border rounded bg-white"
                placeholder="Enter wallet address"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Wallet
            </button>
          </form>

          {/* Display added wallets */}
          <div className="mt-6">
            <h2 className="text-lg lg:text-xl font-semibold mb-4 text-white">Added Wallets</h2>
            {walletsData && walletsData.data ? (
              <ul className="space-y-4 lg:space-y-2">
                {Object.entries(walletsData.data).map(([key, wallet]) => (
                  <li
                    key={key}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-2 border rounded bg-white max-w-full lg:max-w-2xl mx-auto"
                  >
                    <div className="mb-2 lg:mb-0 w-full lg:w-auto text-left lg:text-left">
                      <p className="font-semibold">{wallet.type} Wallet</p>
                      <p className="text-sm text-gray-700 break-all">{wallet.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleCopy(wallet.address)}
                        className="text-blue-500 hover:underline mt-2 lg:mt-0"
                      >
                        Copy
                      </button>
                      
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white text-center">No wallets added yet.</p>
            )}
          </div>
        </div>
      </SideBar>
    </div>
  );
};
