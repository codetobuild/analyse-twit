import axiosInstance from "../instance";

const url = "/api/twitter/myFollowers";

export const myFollowers = async () => {
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
