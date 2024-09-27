import React, { useEffect, useState } from 'react';
import { uid } from '../../../stores/stores';
import { Header } from '../../../Layout/DashboardLayout/Header/Header';
import { SideBar } from '../../../Layout/DashboardLayout/SideBar/SideBar';
import { getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { auth } from '../../../config/firebase';

export const Settings = () => {
  const [walletType, setWalletType] = useState('USDT');
  const [walletAddress, setWalletAddress] = useState('');
  const [walletsData, setWalletsData] = useState({});
  const [isEditing, setIsEditing] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const firebaseUrl = 'https://tanstack-fetch-default-rtdb.firebaseio.com/wallets';

  // Fetch wallets data on component mount
  const fetchWallets = async () => {
    try {
      const response = await fetch(`${firebaseUrl}/${uid.id}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch wallets: ${response.statusText}`);
      }
      const data = await response.json();
      setWalletsData(data || {});
    } catch (error) {
      console.error('Error fetching wallets:', error);
    }
  };

  // Function to handle password change
  const handlePasswordChange = async () => {
    const currentUser = auth.currentUser;
    const credential = EmailAuthProvider.credential(currentUser.email, oldPassword);

    try {
      await reauthenticateWithCredential(currentUser, credential);

      if (newPassword !== confirmPassword) {
        alert("New passwords do not match.");
        return;
      }

      await updatePassword(currentUser, newPassword);
      alert('Password changed successfully');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Error changing password. Please check your old password and try again.");
    }
  };

  useEffect(() => {
    fetchWallets();
  }, [uid.id]);

  const handleSaveWallet = async (e) => {
    e.preventDefault();
    if (walletAddress.trim() === '') {
      return alert('Please input a valid wallet address');
    }

    const newWallet = { type: walletType, address: walletAddress };

    try {
      if (isEditing) {
        // Update existing wallet
        const response = await fetch(`${firebaseUrl}/${uid.id}/${isEditing}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWallet),
        });

        if (!response.ok) {
          throw new Error(`Failed to update wallet: ${response.statusText}`);
        }

        alert('Wallet updated successfully!');
      } else {
        // Add new wallet
        const response = await fetch(`${firebaseUrl}/${uid.id}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWallet),
        });

        if (!response.ok) {
          throw new Error(`Failed to add wallet: ${response.statusText}`);
        }

        alert('Wallet added successfully!');
      }

      setWalletType('USDT');
      setWalletAddress('');
      setIsEditing(null);
      await fetchWallets();
    } catch (error) {
      console.error('Error saving wallet:', error);
      alert('Error saving wallet. Please try again.');
    }
  };

  const handleDeleteWallet = async (walletId) => {
    try {
      const response = await fetch(`${firebaseUrl}/${uid.id}/${walletId}.json`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete wallet: ${response.statusText}`);
      }

      alert('Wallet deleted successfully!');
      await fetchWallets();
    } catch (error) {
      console.error('Failed to delete wallet:', error);
      alert('Error deleting wallet. Please try again.');
    }
  };

  const handleEditWallet = (walletId, wallet) => {
    setWalletType(wallet.type);
    setWalletAddress(wallet.address);
    setIsEditing(walletId);
  };

  const handleCopy = (walletAddress) => {
    navigator.clipboard.writeText(walletAddress);
    alert(`Copied: ${walletAddress}`);
  };

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        
        
        <div className="mb-6">
          <h3 className="text-md font-semibold text-white">Change Password</h3>
          <input
            type="password"
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded mt-2 w-full"
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded mt-2 w-full"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded mt-2 w-full"
          />
          <button
            onClick={handlePasswordChange}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Change Password
          </button>
        </div>

        <div className="p-4 lg:p-8 m-4 lg:m-0 rounded-md bg-primary1">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 text-white text-center">Manage Wallets</h1>
          <form onSubmit={handleSaveWallet} className="mb-6 max-w-full lg:max-w-2xl mx-auto">
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
              {isEditing ? 'Update Wallet' : 'Add Wallet'}
            </button>
          </form>

          <div className="mt-6">
            <h2 className="text-lg lg:text-xl font-semibold mb-4 text-white">Your Wallets</h2>
            {walletsData ? (
              <ul className="space-y-4 lg:space-y-2">
                {Object.entries(walletsData).map(([key, wallet]) => (
                  <li key={key} className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-2 border rounded bg-white max-w-full lg:max-w-2xl mx-auto">
                    <div className="mb-2 lg:mb-0 w-full lg:w-auto text-left lg:text-left">
                      <p className="font-semibold">{wallet.type} Wallet</p>
                      <p className="text-sm text-gray-700 break-all">{wallet.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditWallet(key, wallet)}
                        className="text-yellow-500 hover:underline mt-2 lg:mt-0"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteWallet(key)}
                        className="text-red-500 hover:underline mt-2 lg:mt-0"
                      >
                        Delete
                      </button>
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
              <p className="text-white">No wallets found.</p>
            )}
          </div>
        </div>
      </SideBar>
    </div>
  );
};
