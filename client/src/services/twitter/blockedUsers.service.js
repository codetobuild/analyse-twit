import axiosInstance from "../instance";

const url = "/api/twitter/blockedUsers";

export const blockedUsers = async () => {
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
