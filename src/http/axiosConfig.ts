import Axios from 'axios';

const axios = Axios.create({
  baseURL: ' https://easy-mock.com/mock/5cb343e6bc34df60b08c29f4',
  timeout: 1000,
});

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  const { data, status } = response;
  if (data.code === 0) {
    if (status === 200) {
      return data;
    } else {
      alert(data.msg);
      return Promise.reject(data);
    }
  } else {
    alert(data.msg);
    return Promise.reject(data);
  }
}, function (error) {
  return Promise.reject(error);
});
export default axios;
