import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReferralForm = () => {
  const [referralName, setReferralName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save the referral name to local storage
    if (referralName) {
      localStorage.setItem("referralname", referralName);
    }

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary2">
      <form 
        onSubmit={handleSubmit} 
        className="bg-primary1 p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-white mb-4 text-center text-lg">Enter Referral Name</h2>
        <input
          type="text"
          value={referralName}
          onChange={(e) => setReferralName(e.target.value)}
          placeholder="Referral Name"
          className="border border-gray-300 p-2 rounded mb-4 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReferralForm;
