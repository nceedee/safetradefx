import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../../base/models/useUser";
import { auth } from "../../../config/firebase";
import { AuthContext } from "../../context/AuthContext";

export const useAuth = () => {
  const setUser = useUser((state) => state.setUser);
  const { currentUser } = useContext(AuthContext);

  const isUserLoggedIn = !!localStorage.getItem("loggedIn");

  const RequireAuth = ({ children }) => {
    return currentUser || isUserLoggedIn ? children : <Navigate to="/login" />;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((responseUser) => {
      if (responseUser) {
        const displayName = responseUser.displayName;
        const uid = responseUser.uid;
        const reloadUserInfo = responseUser.reloadUserInfo;

        const user = {
          uid,
          displayName,
          email: reloadUserInfo.email,
          createdAt: reloadUserInfo.createdAt,
          emailVerified: reloadUserInfo.emailVerified,
          lastLoginAt: reloadUserInfo.lastLoginAt,
          lastRefreshAt: reloadUserInfo.lastRefreshAt,
          photoUrl: reloadUserInfo.photoUrl,
        };

        localStorage.setItem("loggedIn", "true");
        setUser(user);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [setUser]);

  return { RequireAuth };
};
