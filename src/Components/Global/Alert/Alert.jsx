import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";

export const AlertError = ({ children, className }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) {
    return null;
  }

  return (
    <div className={className}>
      <Alert severity="error">{children}</Alert>
    </div>
  );
};
