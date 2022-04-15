import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://forezon-api.herokuapp.com/api/",
});
