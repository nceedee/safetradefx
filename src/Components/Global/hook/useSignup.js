import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";

export const useSignup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { dispatch } = useContext(AuthContext);
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

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: formData.name });
      } else {
        throw new Error("User not authenticated.");
      }

      await setDoc(doc(db, "users", userId), {
        email: user.email,
        displayName: user.name,
        userId: user.id,
      });

      dispatch({ type: "LOGIN", payload: user });
      navigate("/dashboard");
    } catch (error) {
      setIsError(error.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, onSubmit, register, isError, isLoading, errors };
};
