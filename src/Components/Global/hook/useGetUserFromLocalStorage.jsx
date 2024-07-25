import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const useGetUserFromLocalStorage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDetail = window.localStorage.getItem("user");
    const parsedUser = JSON.parse(userDetail);

    if (parsedUser) {
      setUser(parsedUser);
    } else {
      // Redirect to login if no user is found
      window.location.href = "/login"; // Use window.location.href for redirection
    }
  }, []);

  return user;
};
