import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"; 
import { auth, db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";

export const useSignup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const queryClient = useQueryClient();

  const onSubmit = async (formData) => {
    setIsLoading(true);
    setIsError(null);

    try {
      console.log("Form Data:", formData);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log("User Credential:", userCredential);

      const userId = userCredential.user.uid;
      const user = {
        id: userId,
        name: formData.name,
        email: userCredential.user.email || "",
        password: "", // Ensure sensitive data is not stored here
      };

      console.log("User:", user);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: formData.name });
      } else {
        throw new Error("User not authenticated."); // Handle case where currentUser is null
      }

      // Save the user to Cloud Firestore
      await setDoc(doc(db, "users", userId), {
        email: user.email,
        displayName: user.name,
        userId: user.id,
      });

      console.log("User posted successfully.");

      dispatch({ type: "LOGIN", payload: user });
      navigate("/dashboard");
      window.location.reload(); // Optional: Refresh the page
    } catch (error) {
      console.error("Signup Error:", error);
      setIsError(error.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        queryClient.invalidateQueries("user");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [queryClient]);

  return { handleSubmit, onSubmit, register, isError, isLoading };
};
