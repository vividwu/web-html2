import request from './request.js'


export const TestApi = () => request.get(`/api/config/process/form/fields_tree?pname=fybx2&code=fybxApply`);

export const CCGetApi = (url) => request.get(url);

//flow todo
export const WorkFlowTodoApi = (params) => request.get(`/api/workflow/todo`,{params});
//flow complete
export const WorkFlowCompleteApi = (params) => request.get(`/api/workflow/complete_list`,{params});
//flow mylist
export const WorkFlowMyListApi = (params) => request.get(`/api/workflow/my_list`,{params});
//send mail
export const SendMailGetNodeApi = (params) => request.get(`http://10.12.28.45:8899/test/getNodeInfo/Mail/3/Mail1`,{});
export const SendMailTestNodeApi = (params) => request.post(`http://10.12.28.45:8899/test/exec/node`,params);