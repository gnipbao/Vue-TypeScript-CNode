/**
 * config for net request
 * https://github.com/axios/axios
 */
import { AxiosResponse, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/",
  transformResponse: [
    function(data: AxiosResponse) {
      return data;
    }
  ],
  // timeout
  timeout: 30000,
  // cros token
  withCredentials: true,
  responseType: "json",
  // xsrf
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxRedirects: 5,
  maxContentLength: 2000,
  validateStatus: function(status: number) {
    return status >= 200 && status < 300;
  }
};

export default axiosConfig;
