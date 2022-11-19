import request from './request.js'


export const TestApi = () => request.get(`/api/config/process/form/fields_tree?pname=fybx2&code=fybxApply`);