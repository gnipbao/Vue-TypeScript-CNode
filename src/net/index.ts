import axios from "axios";
import config from "./config";

let pending: Array<{
  url: string;
  cancel: Function;
}> = [];
const cancelToken = axios.CancelToken;
const removePending = (config: any) => {
  for (let p in pending) {
    let item: any = p;
    let list: any = pending[p];
    if (list.url === config.url + "&request_type=" + config.method) {
      list.cancel();
      pending.splice(item, 1);
    }
  }
};

const service = axios.create(config);

service.interceptors.request.use(
  config => {
    removePending(config);
    config.cancelToken = new cancelToken(c => {
      pending.push({
        url: config.url + "&request_type=" + config.method,
        cancel: c
      });
    });
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {
    removePending(res.config);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
