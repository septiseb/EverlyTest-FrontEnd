import axios from "axios";

const serviceAuth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
  withCredentials: true,
});

const signup = async (obj) => {
  const servicePost = await serviceAuth.post("/signup", obj);
  return servicePost;
};

const login = async (obj) => {
  const response = await serviceAuth.post("/login", obj);
  return response;
};

const logout = async () => {
  const response = await serviceAuth.post("/logout", {});
  return response;
};

const AUTH_SERVICE = { signup, login, logout };

export default AUTH_SERVICE;
