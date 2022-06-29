import axiosInstance from "../instance";

const url = "/api/twitter/tweetLinkingUsers";

export const tweetLinkingUsers = async (tweetId) => {
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
