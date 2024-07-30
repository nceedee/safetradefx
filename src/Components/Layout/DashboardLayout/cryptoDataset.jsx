// src/api/cryptoApi.js
import axios from "axios";

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum,ripple,litecoin", // Add more cryptocurrency IDs as needed
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return [];
  }
};
