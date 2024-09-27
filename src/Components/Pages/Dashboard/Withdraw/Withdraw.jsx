// Withdraw.jsx
import React, { useState, useEffect } from 'react';
import { Header } from '../../../Layout/DashboardLayout/Header/Header';
import { SideBar } from '../../../Layout/DashboardLayout/SideBar/SideBar';
import { uid } from '../../../stores/stores'; // Assuming uid is available from this store
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useGetWithId } from '../../../Global/hook/useGetWithId'; // Import the hook to get data
import Modal from './Modal/Modal'; // Import the modal component

export const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [walletType, setWalletType] = useState('USDT'); // Default wallet type
  const [walletAddress, setWalletAddress] = useState('');
  const [wallets, setWallets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // Modal message

  // Fetch wallets for the current user from Firebase
  const { data, error, isLoading } = useGetWithId(`wallets`, {
    enabled: !!uid?.id, // Only run if uid.id is available
  });

  useEffect(() => {
    if (data?.data) {
      setWallets(Object.values(data.data)); // Convert the fetched data to an array
    }
  }, [data]);

  // Function to post transaction details to Firebase
  const postTransaction = async (transactionDetails) => {
    try {
      const response = await fetch(`https://tanstack-fetch-default-rtdb.firebaseio.com/transactionHistory/${uid.id}.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to post transaction details');
      }

      const result = await response.json();
      console.log('Transaction posted successfully:', result);
      setModalMessage('Transaction submitted successfully. Status: In Progress');
      setIsModalOpen(true); // Open modal on success
    } catch (error) {
      console.error('Error posting transaction:', error);
      setModalMessage('Error submitting transaction. Please try again.');
      setIsModalOpen(true); // Open modal on error
    }
  };

  // Handle form submission for withdrawing
  const handleWithdraw = async (e) => {
    e.preventDefault();
    if (withdrawAmount.trim() === '' || isNaN(withdrawAmount) || Number(withdrawAmount) <= 0) {
      return alert('Please input a valid withdrawal amount.');
    }

    const walletToUse = selectedWallet || walletAddress;

    if (!walletToUse || walletToUse.trim() === '') {
      return alert('Please select or input a valid wallet address.');
    }

    // Prepare transaction details
    const transactionDetails = {
      walletType: selectedWallet ? wallets.find(wallet => wallet.address === selectedWallet)?.type : walletType,
      amount: withdrawAmount,
      time: new Date().toISOString(),
      status: 'In Progress',
      walletAddress: walletToUse,
    };

    // Post transaction details
    await postTransaction(transactionDetails);

    // Clear the input fields after submission
    setWithdrawAmount('');
    setSelectedWallet('');
    setWalletAddress('');
    setWalletType('USDT'); // Reset to default wallet type if needed
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

          {/* Show loading state */}
          {isLoading && <p className="text-gray-100">Loading wallets...</p>}
          {error && <p className="text-red-500">Error loading wallets. Please try again.</p>}

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

          {/* Modal for transaction status */}
          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            message={modalMessage} 
          />
        </div>
      </SideBar>
    </div>
  );
};
