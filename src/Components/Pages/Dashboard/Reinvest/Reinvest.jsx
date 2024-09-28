import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Header } from "../../../Layout/DashboardLayout/Header/Header";
import { SideBar } from "../../../Layout/DashboardLayout/SideBar/SideBar";
import { InvestCard } from "../Invest/InvestCard/InvestCard";

export const Reinvest = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("USDT TRC20");
  const [transactionHash, setTransactionHash] = useState("");
  const [step, setStep] = useState(1);
  const formRef = useRef(null);

  const addresses = {
    "USDT TRC20": "TAonHMVYCPELEcBKfmxGEfRC1wTEtUqHvK",
    "Tron (TRX)": "TAonHMVYCPELEcBKfmxGEfRC1wTEtUqHvK",
    Bitcoin: "bc1qd3fkjy40mgkrzp5znvq7athxd4dz0uf6gar8dw",
    Ethereum: "0xAD14546bD843b6b288FF9543F6D055f96cdb06Bc",
    BNB: "0xAD14546bD843b6b288FF9543F6D055f96cdb06Bc",
  };

  const handleCopy = (address) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        alert("Address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const addressToDisplay = addresses[paymentMethod];

  const plans = [
    {
      planName: "Starter Plan",
      minDeposit: 50.0,
      maxDeposit: 999.0,
      interestRate: 5,
      duration: 20,
    },
    {
      planName: "Mini Plan",
      minDeposit: 250.0,
      maxDeposit: 1500.0,
      interestRate: 7.3,
      duration: 24,
    },
    {
      planName: "Professional Plan",
      minDeposit: 1500.0,
      maxDeposit: 3000.0,
      interestRate: 9.99,
      duration: 40,
    },
    {
      planName: "Promo Plan",
      minDeposit: 3000.0,
      maxDeposit: 9000.0,
      interestRate: 9,
      duration: 10,
    }
  ];

  const handlePlanChange = (e) => {
    const selected = plans.find((plan) => plan.planName === e.target.value);
    setSelectedPlan(selected);
    setInvestmentAmount(selected.minDeposit); // Set default to minDeposit
    setStep(1); // Reset step to first step

    // Check if formRef exists before attempting to scroll
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProceed = () => {
    if (
      investmentAmount < selectedPlan.minDeposit ||
      investmentAmount > selectedPlan.maxDeposit
    ) {
      alert(
        `Please enter an amount between ${selectedPlan.minDeposit} and ${selectedPlan.maxDeposit}.`
      );
      return;
    }
    setStep(2); // Move to the next step
  };

  const sendEmail = () => {
    const emailParams = {
      amount: `User made a payment of ${investmentAmount} using ${paymentMethod}. The transaction hash for confirmation is ${transactionHash}. the plan user invested in is ${selectedPlan.planName}`,
    };

    emailjs
      .send(
        "payout_safetradefx", // Replace with your EmailJS service ID
        "template_9vpl2ia", // Replace with your EmailJS template ID
        emailParams,
        "6_kKoseNaTUNdJbv3" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("There was an issue sending the email.");
        }
      );
  };

  const handleTransactionSubmit = () => {
    alert(`Transaction hash submitted: ${transactionHash}`);
    sendEmail(); // Trigger the email sending
  };

  return (
    <div className="bg-secondary2 min-h-screen">
      <Header />
      <SideBar>
        <section>
          <div className="container p-4 mx-auto">
            <h2 className="lg:text-2xl text-2xl font-bold text-white mb-8">
              Choose Your Deposit Plan
            </h2>
            {/* Render InvestCards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <InvestCard
                  key={index}
                  planName={plan.planName}
                  minDeposit={plan.minDeposit}
                  maxDeposit={plan.maxDeposit}
                  interestRate={plan.interestRate}
                  duration={plan.duration}
                  isSelected={selectedPlan?.planName === plan.planName}
                  onChange={handlePlanChange}
                />
              ))}
            </div>

            {/* Investment Form */}
            {selectedPlan && (
              <div
                ref={formRef}
                className="mt-12 p-6 bg-primary1 text-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">
                  Selected Plan: {selectedPlan.planName}
                </h3>
                <label className="block mb-2">Enter Investment Amount:</label>
                <input
                  type="number"
                  className="border p-2 text-black rounded w-full mb-4"
                  value={investmentAmount}
                  min={selectedPlan.minDeposit}
                  max={selectedPlan.maxDeposit || undefined}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                />

                <label className="block mb-2">Payment Method:</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="border p-2 rounded w-full mb-4 text-black"
                >
                  <option value="USDT TRC20">USDT TRC20</option>
                  <option value="Tron (TRX)">Tron (TRX)</option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="BNB">BNB</option>
                </select>

                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg"
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              </div>
            )}

            {/* Payment Step */}
            {step === 2 && (
              <div className="mt-12 p-6 bg-primary1 text-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Payment Details</h3>
                <p className="mb-4">
                  To instantly fund your account, kindly deposit to the{" "}
                  {paymentMethod} address below:
                </p>
                <p
                  className="bg-secondary2 text-white p-4 rounded-lg mb-6 overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer"
                  onClick={() => handleCopy(addressToDisplay)}
                >
                  {addressToDisplay}
                </p>

                <h3 className="text-xl font-bold mb-4">
                  Investment Information
                </h3>
                <ul className="flex flex-col gap-4">
                  <li className="font-bold">
                    Plan:{" "}
                    <span className="font-normal text-gray-200 font-mono">
                      {selectedPlan.planName}
                    </span>
                  </li>
                  <li className="font-bold">
                    Profit:{" "}
                    <span className="font-normal text-gray-200 font-mono">
                      {(
                        (investmentAmount * selectedPlan.interestRate) /
                        100
                      ).toFixed(2)}
                    </span>
                  </li>
                </ul>

                <label className="block mb-2">Transaction Hash:</label>
                <input
                  type="text"
                  className="border p-2 text-black rounded w-full mb-4"
                  value={transactionHash}
                  onChange={(e) => setTransactionHash(e.target.value)}
                />

                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg"
                  onClick={handleTransactionSubmit}
                >
                  Submit Transaction Hash
                </button>
              </div>
            )}
          </div>
        </section>
      </SideBar>
    </div>
  );
};


