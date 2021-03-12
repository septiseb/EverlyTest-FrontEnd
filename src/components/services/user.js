import axios from "axios";

const userInfo = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/user",
  withCredentials: true,
});

const getTest = async (id) => {
  const servicePost = await userInfo.get(`/user-profile/${id}`);
  return servicePost;
};

const createTest = async (obj) => {
  const servicePost = await userInfo.post(`/user-profile/create-test`, obj);
  return servicePost;
};

const AllTest = async (obj) => {
  const servicePost = await userInfo.get("/tests");
  return servicePost;
};

const addIDToTest = async (id, obj) => {
  const servicePost = await userInfo.post(
    `/user-profile/create-test/${id}`,
    obj
  );
  return servicePost;
};

const editIDToTest = async (id, obj) => {
  const servicePost = await userInfo.put(`/user-profile/edit-test/${id}`, obj);
  return servicePost;
};

const eraseTest = async (id) => {
  const servicePost = await userInfo.delete(`/delete-group-test/${id}`);
  return servicePost;
};

const getDetailGrades = async (id) => {
  const servicePost = await userInfo.get(`/user-profile/details/${id}`);
  return servicePost;
};

const getExamAndIdTest = async (id) => {
  const servicePost = await userInfo.get(`/user-profile/edit-test/${id}`);
  return servicePost;
};

const sendEmail = async (id, email) => {
  const servicePost = await userInfo.post(`/send-email/${id}`, {
    testerEmail: email,
  });
  return servicePost;
};

const getUserInfo = async (id) => {
  const servicePost = await userInfo.get(`/user-profile-info/${id}`);
  return servicePost;
};

const INFO_USER = {
  getTest,
  createTest,
  AllTest,
  addIDToTest,
  eraseTest,
  getDetailGrades,
  getExamAndIdTest,
  editIDToTest,
  sendEmail,
  getUserInfo,
};

export default INFO_USER;
