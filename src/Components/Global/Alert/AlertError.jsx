import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";

const AlertError = ({ children, className }) => {
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
    <div
      className={`${className} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
    >
      <Alert severity="error">{children}</Alert>
    </div>
  );
};

const AlertSuccess = ({ children, className }) => {
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
    <div
      className={`${className} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
    >
      <Alert severity="success">{children}</Alert>
    </div>
  );
};

export { AlertError, AlertSuccess };
