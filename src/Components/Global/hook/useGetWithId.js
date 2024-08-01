import axios from "axios";
import { useQuery } from "react-query";
import { API } from "../../constant/constant";
import { uid } from "../../stores/stores"; 

const fetchData = async (url) => {
  return axios.get(`${API}/${url}/${uid.id}.json`);
};

export const useGetWithId = (url, options) => {
  const { data, error, isLoading, isSuccess } = useQuery(
    url,
    () => fetchData(url),
    options
  );

  return { data, error, isLoading, isSuccess };
};
