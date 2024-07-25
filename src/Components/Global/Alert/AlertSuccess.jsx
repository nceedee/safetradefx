import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";

export const AlertSuccess = ({ children }) => {
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
        <div>
            <Alert severity="success">{children}</Alert>
        </div>
    );
};
