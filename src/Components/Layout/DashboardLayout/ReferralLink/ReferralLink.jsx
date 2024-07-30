import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

const ReferralLink = ({ className }) => {
  // Retrieve the user object from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  // Get the user's name from the user object and replace spaces with hyphens
  const userName = user?.name?.replace(/\s+/g, "-") || "guest"; // Use 'guest' as a default value if the user name is not found

  // Snackbar state
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    const referralLink = `https://safetradefx.vercel.app/signup/${userName}`;
    navigator.clipboard.writeText(referralLink);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div
      className={`bg-[#202b5d] w-full lg:w-auto p-2 lg:p-14 rounded-md ${className}`}
    >
      <h1 className="text-white text-lg">Referral Link</h1>
      <div className="mt-2 flex flex-row items-center border-[1px] border-[#0f143a] rounded-md pr-4 lg:pr-2">
        <p className="w-[100%] text-wrap text-[16px] p-1 lg:p-2 bg-transparent text-gray-500 truncate">{`https://safetradefx.vercel.app/signup/${userName}`}</p>
        <button
          onClick={handleCopy}
          className="ml-2 p-2 text-white bg-blue-500 rounded-sm"
        >
          <FaCopy />
        </button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Referral link copied"
        action={action}
      />
    </div>
  );
};

export default ReferralLink;
