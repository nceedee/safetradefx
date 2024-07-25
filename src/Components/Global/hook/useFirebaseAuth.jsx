import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useFirebaseAuth = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return userId;
};
