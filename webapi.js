import request from './request.js'


export const TestApi = () => request.get(`http://10.1.8.109:8899/test/getNodeInfo/Mail/3/Mail1`);// /api/config/process/form/fields_tree?pname=fybx2&code=fybxApply
//auth
export const AuthLoginApi = (params) => request.post(`http://10.12.28.45:8880/oauth/token?grant_type=password&username=`+params.username+'&password='+params.password,{});

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
//flow design
export const FlowDesignTaskScriptListApi = (params) => request.get(`/api/config/process/script/porcess_scripts`,{params});
export const FlowDesignTaskScriptContentApi = (params) => request.get(`/api/config/process/script/content`,{params});

