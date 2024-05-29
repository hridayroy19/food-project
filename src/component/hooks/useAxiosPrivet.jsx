import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";

const axiosPrivate = axios.create({
  // baseURL: "http://localhost:6001",
  baseURL: "http://localhost:6001",
});

const useAxiosPrivet = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(Authcontext);

  axiosPrivate.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosPrivate.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};

export default useAxiosPrivet;
