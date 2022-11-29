import request from './request.js'


export const TestApi = () => request.get(`/api/config/process/form/fields_tree?pname=fybx2&code=fybxApply`);

export const CCGetApi = (url) => request.get(url);

//flow todo
export const WorkFlowTodoApi = (params) => request.get(`/api/workflow/todo`,{params});
//flow complete
export const WorkFlowCompleteApi = (params) => request.get(`/api/workflow/complete_list`,{params});
//flow mylist
export const WorkFlowMyListApi = (params) => request.get(`/api/workflow/my_list`,{params});
