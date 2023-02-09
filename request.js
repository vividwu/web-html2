import axios from './axios.min.js'

const axiosOption = {
	headers: {
		Authorization : "bearer "+ window.sessionStorage.getItem("access_token")
    },
    baseURL: 'http://10.12.28.45:8880',
    timeout: 9000
}

// ����һ������
const instance = axios.create(axiosOption);

// �������������
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  // ���������
  return Promise.reject(error);
});

// �����Ӧ������
instance.interceptors.response.use(function (response) {
  // ����Ӧ����
  return response.data;
}, function (error) {
  // ����Ӧ����
  console.log('API��Ӧ����')
  return Promise.reject(error);
});

export default instance;