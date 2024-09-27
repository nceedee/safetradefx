import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Information = () => {
  const [userIP, setUserIP] = useState('');
  
  // Fetching user data from localStorage
  const userData = localStorage.getItem('user');
  const user = JSON.parse(userData);
  const username = user?.name || 'No Username';
  const email = user?.email || 'No Email';
  
  // Fetching user's public IP address
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setUserIP(response.data.ip);
      } catch (error) {
        console.error('Failed to fetch IP address:', error);
      }
    };
    
    fetchIP();
  }, []);

  return (
    <div className="p-6 bg-secondary2">
      <h2 className="text-2xl font-bold mb-4 text-white">User Information</h2>

      {/* Key-Value Pair Format */}
      <div className="bg-primary1 p-4 lg:text-[16px] text-[12px] rounded-lg flex space-y-6 flex-col">
        <div className="mb-2 text-white">
          <strong>Username:</strong> {username}
        </div>
        <div className="mb-2 text-white">
          <strong>Email:</strong> {email}
        </div>
        <div className="mb-2 text-white">
          <strong>Last IP:</strong> {userIP || 'Fetching IP...'}
        </div>
        <div className="mb-2 text-white">
          <strong>Upline:</strong> No Upline
        </div>
        
      </div>
    </div>
  );
};
