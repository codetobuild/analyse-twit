import axiosInstance from "../instance";

const url = "/api/twitter/likedTweets";

export const likedTweets = async () => {
  try {
    const response = await axiosInstance({
      method: "GET",
      url: url,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
