import axiosInstance from "../instance";

const url = "/api/twitter/tweetTimeline";

export const tweetTimeline = async () => {
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
