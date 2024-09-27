import React, { useEffect } from "react";

const ReferralHandler = () => {
  useEffect(() => {
    // Parse URL for referral name
    const params = new URLSearchParams(window.location.search);
    const referrer = params.get("referrer");

    // Save to local storage if exists
    if (referrer) {
      localStorage.setItem("referralname", referrer);
      // Optionally redirect to a different page
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return null; // This component doesn't need to render anything
};
