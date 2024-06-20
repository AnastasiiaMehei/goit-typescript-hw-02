import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/search";
export const getImages = async (topic, currentPage) => {
  const response = await axios.get("/photos", {
    params: {
      client_id: "-7i_jnQlSjDuNkJ4shZWckNEJtBVks9schHspWR86Vg",
      query: topic,
      page: currentPage,
      per_page: 12,
    },
  });
  return response.data.results;
};
