import { useState } from "react";
import emailjs from "emailjs-com";

export const PaymentModal = ({ coin, onClose, onConfirm }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");

  const chargePercentage = 5; // 5% charge
  const charge = (amount * chargePercentage) / 100;
  const totalPayment = parseFloat(amount) + charge;

  const handleNextStep = () => {
    if (step === 1 && amount) {
      setStep(2);
    }
  };

  const handleConfirmPayment = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const emailParams = {
      user_name: user.name,
      user_email: user.email,
      user_id: user.id,
      coin_name: coin.name,
      amount,
      charge: charge.toFixed(2),
      total_payment: totalPayment.toFixed(2),
      coin_address: coin.address,
    };

    emailjs
      .send(
        "safetradefx", // Replace with your EmailJS service ID
        "safetradefx_template", // Replace with your EmailJS template ID
        emailParams,
        "6_kKoseNaTUNdJbv3" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Failed to send email.", error);
      });

    onConfirm(totalPayment);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-[#202b5d] p-8 rounded-lg text-white w-full max-w-md mx-4">
        <h2 className="text-2xl mb-6">{coin.name} Payment</h2>

        {step === 1 && (
          <div>
            <p className="mb-4">
              Please enter the amount to deposit in {coin.name}:
            </p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 w-full mb-4 rounded-md text-black"
              placeholder="Enter amount"
            />
            <button
              className="bg-blue-500 p-3 rounded-lg text-white w-full"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mb-4">Please confirm your payment:</p>
            <p className="mb-2">
              Amount: {amount} {coin.name}
            </p>
            <p className="mb-2">
              Charges: {charge.toFixed(2)} {coin.name}
            </p>
            <p className="mb-4">
              Total Payment: {totalPayment.toFixed(2)} {coin.name}
            </p>
            <p>Send payment to this address:</p>
            <p className="font-mono mt-2 mb-4">{coin.address}</p>
            <button
              className="bg-green-500 p-3 rounded-lg text-white w-full mb-4"
              onClick={handleConfirmPayment}
            >
              Confirm Payment
            </button>
          </div>
        )}

        <button
          className="bg-red-500 p-3 mt-3 rounded-lg text-white w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
