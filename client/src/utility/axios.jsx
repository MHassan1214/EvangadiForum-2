import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4500", // api url
  baseURL:"https://evangadiforum-2.onrender.com", // api url
  // baseURL: "https://vast-plum-scallop-slip.cyclic.app",

  withCredentials: true,
});

export default instance;