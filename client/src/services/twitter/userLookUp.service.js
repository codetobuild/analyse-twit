import axiosInstance from "../instance";

const url = "/api/twitter/userLookup";

export const userLookUp = async (username) => {
  try {
    const response = await axiosInstance({
      method: "GET",
      url: `${url}/${username}`,
      data: {
        username: username,
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
