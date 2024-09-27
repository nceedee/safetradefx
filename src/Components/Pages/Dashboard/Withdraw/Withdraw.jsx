import React, { useState, useEffect } from 'react';
import { Header } from '../../../Layout/DashboardLayout/Header/Header';
import { SideBar } from '../../../Layout/DashboardLayout/SideBar/SideBar';
import { uid } from '../../../stores/stores'; // Assuming uid is available from this store
import { Link } from 'react-router-dom'; // Import Link for navigation

export const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [walletType, setWalletType] = useState('USDT'); // Default wallet type
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

  // Handle form submission for withdrawing
  const handleWithdraw = (e) => {
    e.preventDefault();
    if (withdrawAmount.trim() === '' || isNaN(withdrawAmount) || Number(withdrawAmount) <= 0) {
      return alert('Please input a valid withdrawal amount.');
    }

    const walletToUse = selectedWallet || walletAddress;
    const walletNameToUse = selectedWallet 
      ? wallets.find(wallet => wallet.address === selectedWallet)?.type 
      : walletType;

    if (!walletToUse || walletToUse.trim() === '') {
      return alert('Please select or input a valid wallet address.');
    }

    // Here you can implement the logic to process the withdrawal using the selected wallet.
    alert(`Processing withdrawal of ${withdrawAmount} to ${walletNameToUse} wallet: ${walletToUse}`);
  };

  // Handle wallet selection or input
  const handleWalletChange = (e) => {
    setSelectedWallet(e.target.value);
    setWalletAddress(''); // Clear wallet address when a saved wallet is selected
  };

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <div className="p-4 lg:p-8 bg-primary1">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 text-white text-center">Withdraw Funds</h1>

          {/* Form for withdrawing */}
          <form onSubmit={handleWithdraw} className="mb-6 max-w-full lg:max-w-2xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-100 mb-2">Withdrawal Amount</label>
              <input
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full lg:w-1/2 p-2 border rounded bg-white"
                placeholder="Enter withdrawal amount"
              />
            </div>

            {/* If saved wallets are available, allow selection */}
            {wallets.length > 0 ? (
              <div className="mb-4">
                <label className="block text-gray-100 mb-2">Select Wallet</label>
                <select
                  value={selectedWallet}
                  onChange={handleWalletChange}
                  className="w-full lg:w-1/2 p-2 border rounded bg-white"
                >
                  <option value="">Select a wallet</option>
                  {wallets.map((wallet, index) => (
                    <option key={index} value={wallet.address}>
                      {wallet.type} - {wallet.address}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              // If no saved wallets, show a message with a link to /wallets to add a wallet
              <div className="mb-4">
                <p className="text-gray-100 mb-2">
                  No wallets found. Please{' '}
                  <Link to="/wallets" className="text-blue-400 underline">
                    add a wallet
                  </Link>{' '}
                  before proceeding.
                </p>
              </div>
            )}

            {/* Wallet type selection */}
            <div className="mb-4">
              <label className="block text-gray-100 mb-2">Wallet Type</label>
              <select
                value={walletType}
                onChange={(e) => setWalletType(e.target.value)}
                className="w-full lg:w-1/2 p-2 border rounded bg-white"
                disabled={selectedWallet} // Disable if a wallet is selected
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
                disabled={selectedWallet} // Disable if a wallet is selected
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={withdrawAmount.trim() === '' || (wallets.length === 0 && walletAddress.trim() === '')}
            >
              Withdraw
            </button>
          </form>
        </div>
      </SideBar>
    </div>
  );
};
