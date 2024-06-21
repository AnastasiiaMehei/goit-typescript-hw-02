import axios, { AxiosResponse } from "axios";
import { Image } from "./components/types";
interface ResponseData {
  total: number;
  total_page: number;
  results: Image[];
}
axios.defaults.baseURL = "https://api.unsplash.com/search";
export const getImages = async (
  topic: string,
  currentPage: number
): Promise<Image[]> => {
  const response = await axios.get<ResponseData>("/photos", {
    params: {
      client_id: "-7i_jnQlSjDuNkJ4shZWckNEJtBVks9schHspWR86Vg",
      query: topic,
      page: currentPage,
      per_page: 12,
    },
  });
  return response.data.results;
};
