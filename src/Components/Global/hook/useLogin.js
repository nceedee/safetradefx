// useLogin.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { auth } from "../../config/firebase";

export const useLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

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

      dispatch({ type: "LOGIN", payload: user });
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.message);
      setIsLoading(false);
    }
  };

  return { handleSubmit, onSubmit, errors, isLoading, register, message };
};
