import React, { useEffect, useState } from "react";
import { Header } from "../../../Layout/DashboardLayout/Header/Header";
import { SideBar } from "../../../Layout/DashboardLayout/SideBar/SideBar";

export const Referral = () => {
  const [referrer, setReferrer] = useState("");
  const [referralLink, setReferralLink] = useState("");

  useEffect(() => {
    // Retrieve the user object from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    // Check if the user object exists and has a name property
    if (user && user.name) {
      setReferrer(user.name);
      // Construct the referral link
      const link = `https://www.safefx.com/referral?referrer=${user.name}`;
      setReferralLink(link);
    }

    // Retrieve the referral name from local storage (if it was set previously)
    const referralName = localStorage.getItem("referralname");
    if (referralName) {
      setReferrer(referralName);
    }
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      alert("Referral link copied to clipboard!");
    });
  };

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <div className="p-4">
          <div className="bg-primary1 p-4 rounded-lg shadow-md">
            <h2 className="text-white mb-2 text-center text-lg lg:text-xl">Referral Link</h2>
            {referralLink && (
              <div className="flex flex-col lg:flex-row items-center">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-grow p-2 rounded border border-gray-300 mb-2 lg:mb-0 lg:mr-2"
                />
                <button
                  onClick={handleCopyClick}
                  className="bg-blue-500 text-white p-2 rounded w-full lg:w-auto"
                >
                  Copy
                </button>
              </div>
            )}
            {referrer && (
              <p className="mt-2 text-white text-center">
                You have been referred by {referrer}.
              </p>
            )}
          </div>
        </div>
      </SideBar>
    </div>
  );
};
