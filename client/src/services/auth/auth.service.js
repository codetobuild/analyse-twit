import axiosInstance from "../instance";

export const authUser = async () => {
  try {
    const response = await axiosInstance({
      url: "/api/auth",
      method: "GET",
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance({
      url: "/api/auth/logout",
      method: "GET",
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
