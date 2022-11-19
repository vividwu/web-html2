import axios from './axios.min.js'

const axiosOption = {
	headers: {
		Authorization : `bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUsInVkaXNwbGF5Ijoi5ZC05LyfMiIsInVuYW1lIjoid3V3ZWkyX20iLCJ1bnVtIjoiQ1kwMTI3NDYiLCJleHAiOjE2NjczMDEwMTZ9.T0b5KS6RY4IVmpfYFi3IFg58K7kN-4luyvaQ0Y08VB6E-_n98uw4JYFx1PrMDUEL_SaXSfpoOC_MWb5CJgil3J79SK6WZivo2o6Kv3kWs8A83Yc4hi0HxL4Ux-byNE5N33Ey5iBJ2gjqVEL3-uwpax11vQuKGp80UBl23BvEg2I`
    },
    baseURL: 'http://101.43.138.169:8880',
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