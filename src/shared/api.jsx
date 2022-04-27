import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use(async (config) => {
  config.headers["content-type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["Accept"] = "*/*";
  // 토큰 부분
  return config;
});

instance.interceptors.response.use(
  async (response) => {
    if (response.data.status) {
      const { config } = response;
      console.log("api쪽", config);
      const originalRequest = config;

      // 원래는 여기서 토큰을 넣어야함
      const userInfo = response.data.user;
      localStorage.setItem("chat-app-user", JSON.stringify(userInfo));

      // axios.defaults.headers.common.authorization = `Bearer ${newAccessToken}`;
      // originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
      return axios(originalRequest);
    }
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    console.log("에러쪽", status, config);
    if (!status) {
      alert("에러입니다");
    }
  }
);

export default instance;

// axios
// export const userApi = {
//   // 회원가입
//   signup: (data) =>
//     instance.post("/api/auth/register", {
//       username: data.username,
//       email: data.email,
//       password: data.password,
//     }),
//   login: (data) =>
//     instance.post("/api/auth/login", {
//       email: data.email,
//       password: data.password,
//     }),
// };
