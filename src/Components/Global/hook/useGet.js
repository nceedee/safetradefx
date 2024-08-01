import axios from "axios";
import { useQuery } from "react-query";
import { API } from "../../constant/constant"; 

const fetchData = async (url) => {
  return axios.get(`${API}/${url}.json`);
};

export const useGet = (url, options) => {
  const { data, error, isLoading } = useQuery(
    url,
    () => fetchData(url),
    options
  );

  return { data: data?.data, error, isLoading };
};
