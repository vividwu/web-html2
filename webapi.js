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
//it
export const GetSoftListApi = (params) => request.get(`http://10.12.28.45:10380/oauth/it/soft/data/list`,{params});
//flow design
export const FlowDesignTaskScriptListApi = (params) => request.get(`/api/config/process/script/porcess_scripts`,{params});
export const FlowDesignTaskScriptContentApi = (params) => request.get(`/api/config/process/script/content`,{params});
export const FlowDesignRunTestScriptApi = (params) => request.post(`api/config/process/script/test`,params);
export const FlowDesignProcessByNameApi = (pname) => request.get('/api/config/process/'+pname,{});
export const FlowDesignRunScriptLogApi = (params) => request.get('/api/config/process/script/log',{params});
//form design
export const FormDesignGetConfigByCodeApi = (pname,code) => request.get('/api/form/config/code?pname='+pname+'&code='+code,{});
export const FormDesignGetFieldsApi = (pname) => request.get('/api/config/process/form/fields_tree_v2?pname='+pname,{});
//temp
export const FlowTempCreateDefineApi = (params) => request.post(`/api/config/process/define/create`,params);
export const FlowProcessConfigInfoApi = (pname) => request.get('/api/config/process/'+pname,{});
export const FlowProcessTableListApi = (pname) => request.get('/api/config/process/model/table_list?pname='+pname,{});
export const FlowProcessFormListApi = (pname) => request.get('/api/config/process/form/table_list?pname='+pname,{});
export const FlowTempCreateModelApi = (params) => request.post(`/api/config/process/model/create`,params);
export const FlowTempCreateFormApi = (params) => request.post(`/api/config/process/form/create`,params);
//ou
export const OuGetDeptTreeByPIdApi = () => request.get('/dept/list/all');
//apply
export const FlowApplyGetConfigApi = (pname) => request.get('/api/form/config/start/'+pname,{});

export const QueryString = (item) => {
    var result = location.href.match(new RegExp("[\?\&]" + item + "=([^\&]+)","i"));
    if(result == null || result.length < 1){
        return "";
    }
    return result[1];
}

