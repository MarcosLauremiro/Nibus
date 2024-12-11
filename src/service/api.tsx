import axios from "axios";

const api = axios.create({
  baseURL: "https://nimbus-tms-api-production.up.railway.app",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;