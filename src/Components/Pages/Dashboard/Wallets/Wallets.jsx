import React, { useState, useEffect } from 'react';
import { Header } from '../../../Layout/DashboardLayout/Header/Header';
import { SideBar } from '../../../Layout/DashboardLayout/SideBar/SideBar';
import { uid } from '../../../stores/stores'; // Assuming uid is available from this store

export const Wallets = () => {
  const [walletType, setWalletType] = useState('USDT');
  const [walletAddress, setWalletAddress] = useState('');
  const [wallets, setWallets] = useState([]);

  // Load wallets for the current user from localStorage when the component mounts
  useEffect(() => {
    if (uid?.id) {
      const storedWallets = localStorage.getItem(`wallets_${uid.id}`);
      if (storedWallets) {
        setWallets(JSON.parse(storedWallets)); // Load stored wallets
      }
    }
  }, [uid?.id]); // Ensure this runs whenever `uid.id` changes

  // Save wallets for the current user to localStorage whenever the wallets array changes
  useEffect(() => {
    if (uid?.id) {
      localStorage.setItem(`wallets_${uid.id}`, JSON.stringify(wallets));
    }
  }, [wallets, uid?.id]); // Save wallets when `wallets` or `uid.id` changes

  // Handle form submission for adding a new wallet
  const handleAddWallet = (e) => {
    e.preventDefault();
    if (walletAddress.trim() === '') {
      return alert('Please input a valid wallet address');
    }

    // Add the new wallet to the list
    const newWallet = { type: walletType, address: walletAddress };
    setWallets((prevWallets) => [...prevWallets, newWallet]);

    // Reset form fields
    setWalletType('USDT');
    setWalletAddress('');
  };

  // Handle copy to clipboard
  const handleCopy = (walletAddress) => {
    navigator.clipboard.writeText(walletAddress);
    alert(`Copied: ${walletAddress}`);
  };

  // Handle wallet deletion
  const handleDeleteWallet = (addressToDelete) => {
    const updatedWallets = wallets.filter(wallet => wallet.address !== addressToDelete);
    setWallets(updatedWallets); // Update the state with the filtered wallets

    // Update localStorage to remove the deleted wallet
    if (uid?.id) {
      localStorage.setItem(`wallets_${uid.id}`, JSON.stringify(updatedWallets));
    }
  };

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <div className="p-4 lg:p-8 bg-primary1">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 text-white text-center">Add Wallets</h1>

          {/* Form for adding wallets */}
          <form
            onSubmit={handleAddWallet}
            className="mb-6 max-w-full lg:max-w-2xl mx-auto"
          >
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
            {wallets.length === 0 ? (
              <p className="text-white text-center">No wallets added yet.</p>
            ) : (
              <ul className="space-y-4 lg:space-y-2">
                {wallets.map((wallet, index) => (
                  <li
                    key={index}
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
                      <button
                        onClick={() => handleDeleteWallet(wallet.address)}
                        className="text-red-500 hover:underline mt-2 lg:mt-0"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </SideBar>
    </div>
  );
};
