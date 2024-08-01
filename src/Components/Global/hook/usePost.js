import axios from "axios";
import { useState } from "react";
import { API } from "../../constant/constant"; 
import { uid } from "../../stores/stores";

export const usePost = () => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const post = async (url, payload) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API}/${url}/${uid.id}.json`,
        payload
      );
      setData(response);
      setOnSuccess(true);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const del = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `${API}/addedbet/${uid.id}/${id}.json`
      );
      setData(response);
      setOnSuccess(true);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, onSuccess, post, del };
};
