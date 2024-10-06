import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { Header } from "../../../Layout/DashboardLayout/Header/Header";
import { SideBar } from "../../../Layout/DashboardLayout/SideBar/SideBar";
import { uid } from "../../../stores/stores";

const addresses = {
  "USDT TRC20": "TAonHMVYCPELEcBKfmxGEfRC1wTEtUqHvK",
  "Tron (TRX)": "TAonHMVYCPELEcBKfmxGEfRC1wTEtUqHvK",
  Bitcoin: "bc1qd3fkjy40mgkrzp5znvq7athxd4dz0uf6gar8dw",
  Ethereum: "0xAD14546bD843b6b288FF9543F6D055f96cdb06Bc",
  BNB: "0xAD14546bD843b6b288FF9543F6D055f96cdb06Bc",
};

export const Reinvest = () => {
  const [walletType, setWalletType] = useState("");
  const [amount, setAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [copied, setCopied] = useState(false);
  
  const user = JSON.parse(localStorage.getItem("user"));

  const handlePaymentDone = () => {
    const transactionDetails = {
      walletType,
      walletAddress: addresses[walletType],
      amount,
    };

    sendEmail(transactionDetails);
  };

  const sendEmail = (transactionDetails) => {
    const templateParams = {
      amount: `${user.name} with email of ${user.email} made a deposit of ${transactionDetails.amount} ${transactionDetails.walletType} with address of ${transactionDetails.walletAddress}. UserId is ${user.id}. Please confirm and deposit to the user copying the userid and pasting the amount.`,
    };

    emailjs
      .send(
        "payout_safetradefx",
        "template_9vpl2ia",
        templateParams,
        "6_kKoseNaTUNdJbv3"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setModalMessage("Your deposit will be looked into.");
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setModalMessage("Error sending email. Please try again later.");
        setIsModalOpen(true);
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(addresses[walletType]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copy state after 2 seconds
  };

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Deposit Form</h2>
          <form className="space-y-4">
            {/* Wallet selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Wallet
              </label>
              <select
                value={walletType}
                onChange={(e) => setWalletType(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">-- Select Wallet --</option>
                {Object.keys(addresses).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>

            {/* Display wallet address */}
            {walletType && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Wallet Address
                </label>
                <div className="flex items-center space-x-4 mt-2">
                  <input
                    type="text"
                    value={addresses[walletType]}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCopy}
                    className="ml-2"
                  >
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>
            )}

            {/* Deposit amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Deposit Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Payment done button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handlePaymentDone}
              className="w-full mt-4"
            >
              Payment Done
            </Button>
          </form>
        </div>
      </SideBar>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Deposit Confirmation
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {modalMessage}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsModalOpen(false)}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

