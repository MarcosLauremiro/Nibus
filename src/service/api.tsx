import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;