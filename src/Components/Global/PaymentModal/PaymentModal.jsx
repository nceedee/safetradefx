import { useState } from "react";

export const PaymentModal = ({ coin, onClose, onConfirm }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");

  const handleNextStep = () => {
    if (step === 1 && amount) {
      setStep(2);
    }
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
            <p>Send payment to this address:</p>
            <p className="font-mono mt-2 mb-4">{coin.address}</p>
            <button
              className="bg-green-500 p-3 rounded-lg text-white w-full mb-4"
              onClick={onConfirm}
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
