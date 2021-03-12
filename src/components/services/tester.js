import axios from "axios";

const testerInfo = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/tester",
  withCredentials: true,
});

const checkTester = async (obj) => {
  const servicePost = await testerInfo.post("/login-tester", obj);
  return servicePost;
};

const getTesterInfo = async (id) => {
  const servicePost = await testerInfo.get(`/tester/${id}`);
  return servicePost;
};

const getExamForTester = async (idTester, idTest) => {
  const servicePost = await testerInfo.get(`/tester/${idTester}/${idTest}`);
  return servicePost;
};

const postExamForTester = async (obj, idTester, idTest) => {
  const servicePost = await testerInfo.post(
    `/tester/${idTester}/${idTest}`,
    obj
  );
  return servicePost;
};

const TESTER_INFO = {
  checkTester,
  getTesterInfo,
  getExamForTester,
  postExamForTester,
};

export default TESTER_INFO;
