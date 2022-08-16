import axios from "axios";

console.log("url", process.env.REACT_APP_BASE_API_URL)

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

export default instance;
