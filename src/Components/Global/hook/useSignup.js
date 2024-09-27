import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";

export const useSignup = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    setIsError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const userId = userCredential.user.uid;
      const user = {
        id: userId,
        name: formData.name,
        email: userCredential.user.email || "",
      };

      // Save user details to local storage
      localStorage.setItem("user", JSON.stringify(user));

      // Update user profile
      await updateProfile(auth.currentUser, { displayName: formData.name });

      // Save user data to Firestore
      await setDoc(doc(db, "users", userId), {
        email: user.email,
        displayName: user.name,
        userId: user.id,
      });

      // Dispatch login action
      dispatch({ type: "LOGIN", payload: user });

      // Navigate to dashboard
      navigate( "/my-account" );
      window.location.reload()
    } catch (error) {
      console.error("Signup error:", error);
      setIsError(error.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, onSubmit, register, isError, isLoading, errors };
};
