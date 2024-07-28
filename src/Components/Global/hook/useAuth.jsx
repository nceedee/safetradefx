import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../models/useUsers";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../Context/AuthContext";

export const useAuth = () => {
  const setUser = useUser((state) => state.setUser);
  const { currentUser } = useContext(AuthContext);

  const isUserLoggedIn = !!currentUser;

  const RequireAuth = ({ children }) => {
    return isUserLoggedIn ? children : <Navigate to="/login" />;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((responseUser) => {
      if (responseUser) {
        const { displayName, uid, reloadUserInfo } = responseUser;

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
      } else {
        localStorage.setItem("loggedIn", "false");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  return { RequireAuth };
};
