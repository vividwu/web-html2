import request from './request.js'


export const TestApi = () => request.get(`/api/config/process/form/fields_tree?pname=fybx2&code=fybxApply`);

export const CCGetApi = (url) => request.get(url);

//apply todo
export const WorkFlowTodoApi = (params) => request.get(`/api/workflow/todo`,{params});