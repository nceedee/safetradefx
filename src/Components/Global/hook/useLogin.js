// useLogin.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"; // Adjust path as needed
import { auth } from "../../config/firebase";

export const useLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  // Check if dispatch is undefined
  if (dispatch === undefined) {
    console.error(
      "Dispatch function is undefined. Ensure AuthContextProvider is correctly provided."
    );
  }

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = {
        id: userCredential.user.uid,
        name: userCredential.user.displayName || "",
        email: userCredential.user.email || "",
      };

      if (dispatch) {
        dispatch({ type: "LOGIN", payload: user });
        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(user));
      }

      navigate("/my-account");
      window.location.reload();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, onSubmit, errors, isLoading, register, message };
};
