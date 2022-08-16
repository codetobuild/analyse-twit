import axiosInstance from "../instance";

const url = "/api/twitter/searchTweetByKeyword";

export const searchTweetKeyword = async (keyword) => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: `${url}/${keyword}`,
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  };
