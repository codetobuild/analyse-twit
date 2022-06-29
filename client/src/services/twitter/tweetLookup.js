import axiosInstance from "../instance";

const url = "/api/twitter/tweetLookup";

export const tweetLookup = async (tweetId) => {
  try {
    const response = await axiosInstance({
      method: "GET",
      url: `${url}/${tweetId}`,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
