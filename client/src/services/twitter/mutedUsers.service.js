import axiosInstance from "../instance";

const url = "/api/twitter/mutedUsers";

export const mutedUsers = async (userId) => {
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
