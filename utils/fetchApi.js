import axios from "axios";

export const baseUrl = "https:/bayut.p.rapidapi.com";

export const fetchApi = async () => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "8a5fa1f1ddmsh0da6e9434aee3afp1e8a55jsn16a369a1aa78",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
