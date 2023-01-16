import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvInput } from '../components/vv-input.js';
import { VvButton } from '../components/vv-button.js';
import { VvTab } from '../components/vv-tab.js';
import { VvTabContent } from '../components/vv-tab-content.js';
import { VvSelect } from '../components/vv-select.js';
import {VvIcon } from '../components/vv-icon.js'
import { VvEditTable } from '../components/vv-edit-table.js'
import {TestApi} from '../webapi.js';
import '../jsplumb2.6.8.js';

class PgFlowDesign extends LitElement {
    static get properties() {
        return {
            id: String,
            selectedId: String
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
:host {
  display: flex;
  width: 100%;
  min-height: 68vh;
  justify-content:center; 
}
.page-content {
  flex: 1;
  max-width: 1290px; /*1340*/
}
.main-content{
	min-height: 50vh;
}
.page-side {
  /* 两个边栏的宽度设为20em 
  flex: 0 0 20em;*/
  width: 300px;
}
.property {
    margin-left:25px;
}

.panel {
    position: relative;
    padding: 0.75rem 1.25rem;
    /*margin-bottom: 1rem;*/
    border: 1px solid transparent;
    border-radius: 0.42rem;
}
.panel.panel-custom.panel-white {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #3F4254;
}
.panel.panel-custom.panel-shadow {
    box-shadow: 0px 0px 30px 0px rgb(82 63 105 / 5%);
}
.panel.panel-custom {
    display: flex;
    align-items: stretch;
    padding: 1.5rem 2rem;
}
.panel.panel-custom .alert-text {
    align-self: center;
    flex-grow: 1;
}
.panel.panel-custom.panel-white .panel-text {
    color: #3F4254;
}
/*竖条，暂时不用*/
.module-title {
    width: 3px;
    height: 12px;
    display: inline-block;
    margin-top: 5px;
    margin-right: 4px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    background-color: #0068ff;
}
/*box*/
    .node-circle {
                display: inline-flex;
    justify-content: center;
    align-items: center;
                border-radius: 50%;

                width: 50px;
                height: 50px;font-weight: 400;color: #ffffff;
    
    position: absolute; /*drag*/
            }
.node-begin{
    background-color: #3699FF;
}
.node-end{
    background-color: #3699FF;
}
.node-box {
    width: 100%;
    height: 100%;
    border: 2px solid #29a568;
    border-radius: 8px;
    background-color: #ffffff;
    width: 100px;
    height: 50px;

    position: absolute; /*drag*/
}
.node-info-icon {
    color:#29a568;
    bottom: 6px;
    right: 6px;
}
.svg-inline--fa.fa-w-16 {
    width: 1em;
}
.svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
}
.node-desc {
    text-align: center;
    margin-top: -4px;
}

 .item {
      position: absolute;
      height: 80px;
      width: 80px;
      border: 1px solid blue;
    }
/*
.icon-delete{
    right:4px;
    color: #7d838f;
    border: 1px solid #7d838f;
    background-color: #ffffff;
    border-radius: 4px;
    height: 1.25rem;
    width: 1.25rem;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: -12px;
}*/
        `
        ]
    }
    constructor() {
        super();
        //init link
        this._commonAll = {
            isSource: true,
            isTarget: true,
            /*connector: ['Flowchart'],*/
            endpoint: ["Dot", {radius: 5}],
            endpointStyle : { fill:"#fc5531" },
            paintStyle: {
                stroke: "#fc2f49",
                strokeWidth: 1,  /*连线粗细*/
            },
            connector: ["Flowchart", {
                stub: [40, 60],
                gap: 5,
                cornerRadius: 5,
                alwaysRespectStubs: true
            }],
            connectorOverlays: [["Arrow", {width: 10, length: 10, location: 1,foldback: 1,}]],
            connectionsDetachable: true,
        };
        this._commonBegin = {
            isSource: true,
            /*connector: ['Flowchart'],*/
            endpoint: ["Dot", {radius: 5}],
            endpointStyle : { fill:"#fc5531" },
            paintStyle: {
                stroke: "#fc2f49",
                strokeWidth: 1,  /*连线粗细*/
            },
            connector: ["Flowchart", {
                stub: [40, 60],
                gap: 5,
                cornerRadius: 5,
                alwaysRespectStubs: true
            }],
            connectorOverlays: [["Arrow", {width: 10, length: 10, location: 1,foldback: 1,}]],
            connectionsDetachable: true,
        };
        this._commonEnd = {
            isTarget: true,
            /*connector: ['Flowchart'],*/
            endpoint: ["Dot", {radius: 5}],
            endpointStyle : { fill:"#fc5531" },
            paintStyle: {
                stroke: "#fc2f49",
                strokeWidth: 1,  /*连线粗细*/
            },
            connector: ["Flowchart", {
                stub: [40, 60],
                gap: 5,
                cornerRadius: 5,
                alwaysRespectStubs: true
            }],
            connectorOverlays: [["Arrow", {width: 10, length: 10, location: 1,foldback: 1,}]],
            connectionsDetachable: true,
        };
        //
        this._flowData = { nodes:[{"id":"begin","key":"begin","type":"begin","pt":"10px","pl":"10px"},
                {"id":"end","key":"end","type":"end","pt":"10px","pl":"850px"},
                {"id":"taskDriectLeader","key":"taskDriectLeader","type":"task","desc":"直接上级审批","pt":"10px","pl":"160px"},
                {"id":"taskHrbp","key":"taskHrbp","type":"task","desc":"HRBP审批","pt":"10px","pl":"380px"},
                {"id":"taskCEO","key":"taskCEO","type":"task","desc":"CEO审批","pt":"10px","pl":"650px"}],
            links:[{"from":"begin","to":"taskDriectLeader","desc":""},
                {"from":"taskDriectLeader","to":"taskHrbp","desc":"标签"},
                {"from":"taskHrbp","to":"taskCEO","desc":">10天"},
                {"from":"taskCEO","to":"end","desc":""}] }
        //请求
        TestApi().then(res => {
            console.log('webapi',res);
            this._flowElems = this._flowData.nodes;
            this.requestUpdate();
        })
        //{"success":true,"message":null,"data":[{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"费用发生部门","value":"occurs_dept_code","required":"y"},{"label":"合计费用","value":"amount","required":"y"},{"label":"报销原因","value":"reason","required":"n"}],"label":"费用报销单主表","value":"fm_fybx_info"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"费用项","value":"item_code","required":"n"},{"label":"发生日期","value":"occurs_time","required":"n"},{"label":"费用项金额","value":"qty","required":"y"}],"label":"费用报销单明细表","value":"fm_fybx_detail"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"经理意见","value":"fm_jingli_yijian","required":"n"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"}],"label":"","value":"fm_test"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"经理意见","value":"fm_jingli_yijian","required":"n"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"}],"label":"1","value":"fm_qingjia"}],"errCode":null,"ext":null};
        this.__tableConfig = [{
            "table": "bx_info",
            "name":"报销主表",
            "category":"main",
            "fields": [{"title": "申请单编号", "name": "order_no", "control": "input"},
                {"title": "申请人ID","name": "emp_id","control": "input"},
                {"title": "所在部门编码","name": "dept_code","control": "select"},
                {"title": "合计费用","name": "amount","control": "input"}]
        }
        ,{
            "table": "bx_detail",
            "name":"报销明细",
            "category":"detail",
            "fields": [{"title": "申请单编号", "name": "order_no", "control": "input"},
                {"title": "费用项金额","name": "qty","control": "input"},
                {"title": "费用发生时间","name": "occurs_time","control": "date"}]
          }
        ];
        this._formData = {};  //{"b$c":{"title": "编号","control":"input"},...}
        let that = this;
        this.__tableConfig.map(i=>{
            let tb = i.table;
            i.fields.map(j=>{
                that._formData[tb+'$'+j.name] = j;
            })
        });
        this.__conIds = [];
        //
        this._flowElems = [];
        }
        render(){console.log("pg-flow-design render2")
            return html`<div class="page-content gray-bg">
        <div class="top-header panel panel-custom panel-white panel-shadow gutter-b">
            <div class="panel-text">page-top</div>
            <vv-button @click="${this.getFormData}">get data</vv-button>
            <vv-button @click="${this.addNode}">add node</vv-button>
        </div>
    
            <div class="main-content">
                <div class="row">
                    <div class="col-lg-12"><vv-card><div class="m-5" style="height:350px">
                        ${this._flowElems.map(i => this.renderFlowElem(i) )}</div></vv-card>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-side property panel panel-custom panel-white panel-shadow gutter-b">
            <vv-tab activekey="c2">
                <vv-tab-content key="c1" name="Active1">
                   ${this.__tableConfig.map(i => this.renderDbFieldItem(i))}
                </vv-tab-content>
                <vv-tab-content key="c2" name="Active2">
                    ${this._flowElems.map(i => this.renderProperty(i) )}
                </vv-tab-content>
            </vv-tab>
        </div>
        `;
        }
        renderFlowElem(con){
            // data.fields.map(field => {debugger
            if(!this.__conIds.includes(con.id)){
                this.__conIds.push(con.id);
            }

                if(con.type === 'begin'){
                    return html`<div id="begin" class="node-begin node-circle" style="left:${con.pl}">开始</div>`
                }else if(con.type === 'end'){
                    return html`<div id="end" class="node-end node-circle" style="left:${con.pl}">结束</div>`
                }else{
                    return html`<div id="${con.id}" class="node-box" style="left:${con.pl}">
        <div class="node-info-icon"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16"><path data-v-4928a906="" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg></div>
        <div class="node-desc">${con.desc}</div>
      </div>`
                }
        // });
    }
    renderProperty(con){debugger
        if (con.type === 'card'){
            if (con.child) {
                return con.child.map(i => this.renderPropertyItems(i) );
            }else {
                return '';
            }
        }
        // if(con.id === this.selectedId){
        //     return this.renderPropertyItems(con);
        // }
        return this.renderPropertyItems(con);
    }
    renderPropertyItems(con){debugger
        if(con.id != this.selectedId){ return ''; }
        return Object.keys(con).map(key => {
            if(key === "id"){
                return html`<div class="form-group row"><label>控件ID:</label><vv-input disabled value="${con[key]}"></vv-input></div>`
            }else if(key === "labelName"){
                return html`<div class="form-group row"><label>标签名:</label><vv-input noLabel value="${con[key]}" @veinput="${(e)=>{this.propertyInputHandler('labelName',con,e)}}"></vv-input></div>`
            }else if(key === "size"){
                return html`<div class="form-group row"><label>栅格格数:</label><vv-select noLabel @change="${(e)=>{this.propertyInputHandler('size',con,e)}}" value="${con[key]}"><vv-option value="2">2</vv-option><vv-option value="4">4</vv-option><vv-option value="6">6</vv-option><vv-option value="8">8</vv-option><vv-option value="12">12</vv-option></vv-select></div>`
            }else if(key === "column"){debugger
                return html`<div class="row mb-5">
                    ${con["column"].map(i=> html`<a href="javascript:;" class="btn btn-sm font-weight-bolder btn-light-primary mb-2 mr-2">${i.labelName}</a>`)}
                    </div>`
            }
        });
    }
    renderDbFieldItem(item){
        return html`<div class="row mb-5"><span class="bullet bullet-bar bg-primary"></span><div class="font-weight-bolder ml-2">${item.name}</div></div>
	           <div class="row mb-5">
	             ${item.fields.map(i => html`<a href="javascript:;" @click="${(e)=>{this.fieldClickHandler(item.table,i,e)}}" class="btn btn-sm font-weight-bolder btn-light-${this.__conIds.indexOf(item.table+"$"+i.name)>-1?"gray":"primary"} mb-2 mr-2">${i.title}</a>`)}
               </div>`
    }
    getFormData(){
        console.log(jsPlumb.getAllConnections(),this._flowElems,this.__conIds)
    }
    shouldUpdate(changedProperties) {  //有配置才更新
        console.log("flow design should update2");
        if(this._flowElems.length == 0)
            return false;
        else
            return true;
    }
    jsPlumbRender(){
        let that = this;
        jsPlumb.ready(() => {
            setTimeout(function() {
                jsPlumb.bind('connection', function (info) {
                    console.log('connect event', info);
                    that.addConnectionActionsOverlay(info.connection);
                });
                //
                that._flowData.links.map(c=>{
                    jsPlumb.connect({
                        source: that.renderRoot.getElementById(c.from),
                        target: that.renderRoot.getElementById(c.to),
                        endpoint: ["Dot", {radius: 5}],
                        paintStyle: {
                            stroke: "#fc2f49",
                            strokeWidth: 1,  /*连线粗细*/
                        },
                        connector: ["Flowchart", {
                            stub: [40, 60],
                            gap: 5,
                            cornerRadius: 5,
                            alwaysRespectStubs: true
                        }],
                        overlays: [["Arrow", {width: 10, length: 10, location: 1}]],
                        connectionsDetachable: true,
                    },{anchor: ['Left', 'Right']});
            });
                that._flowData.nodes.map(c=>{
                    if(c.type == "begin"){
                    jsPlumb.addEndpoint(that.renderRoot.getElementById('begin'), { anchor: 'Right' }, that._commonBegin);
                }else if(c.type == "end"){
                    jsPlumb.addEndpoint(that.renderRoot.getElementById('end'), { anchor: 'Left' }, that._commonEnd);
                }else {
                    jsPlumb.addEndpoint(that.renderRoot.getElementById(c.id), {anchor: 'Right'}, that._commonAll);
                    jsPlumb.addEndpoint(that.renderRoot.getElementById(c.id), {anchor: 'Left'}, that._commonAll);
                    jsPlumb.addEndpoint(that.renderRoot.getElementById(c.id), {anchor: 'Top'}, that._commonAll);
                    jsPlumb.addEndpoint(that.renderRoot.getElementById(c.id), {anchor: 'Bottom'}, that._commonAll);
                }
                jsPlumb.draggable(that.renderRoot.getElementById(c.id));
            });
                //

                //
            },100);
    });
        this._flowElems.map(c=>{

        });
    }
    firstUpdated(changedProperties) {debugger
        console.log("flow design first update...");
        //this.jsPlumbRender();
    }
    updated(changedProperties) {
        console.log("flow design update2");
        this.jsPlumbRender();
    }
    addConnectionActionsOverlay(conn) {debugger
        if (conn.getOverlay('OVERLAY_CONNECTION_ACTIONS_ID')) {
            return; // avoid free floating actions when moving connection from one node to another
        }
        let desc="";
        this._flowData.links.map(c=>{
            //conn.getOverlay(c.id)
            if(conn.sourceId==c.from && conn.targetId==c.to){
                desc = c.desc;
            }
        });

        conn.addOverlay([
            'Label',
            {
                id: 'OVERLAY_CONNECTION_ACTIONS_ID',  //connection-actions
                label: '<div style="margin-bottom:20px">'+desc+'</div>',
                cssClass: 'connection-actions',
                //location:[0.5,0.5],
                visible: true,
                events: {
                    mousedown: function (labelOverlay, originalEvent) {
                        debugger
                        var element = originalEvent.target;
                        if (element.classList.contains('delete') || (element.parentElement && element.parentElement.classList.contains('delete'))) {
                            //onDelete();
                            console.log('onDelete', element)
                        } else if (element.classList.contains('add') || (element.parentElement && element.parentElement.classList.contains('add'))) {
                            //onAdd();
                            console.log('onAdd', element)
                        }
                    }
                }
            }
        ]);
    }
    addNode(){
        this._flowData.nodes.push({"id":"task_"+new Date().getTime(),"key":"task_"+new Date().getTime(),"type":"task","desc":"task","pt":"100px","pl":"300px"});
        this.requestUpdate();
    }
    fieldClickHandler(table,field,e){debugger
        console.log("fieldClickHandler",field);
        if(field.control == "input"){
            this._flowElems.push({"id":table+"$"+field.name,"type":"input","labelName":field.title,"size":12});
        }
        this.requestUpdate();
    }
    conClickHandler(conId,e){debugger
        console.log("conClickHandler",conId);
        this.selectedId = conId;
    }
    propertyInputHandler(prop,con,e){debugger
        console.log("propertyInputHandler",con,e);
        this._flowElems.forEach((v,i)=>{
            if(v.id == con.id){
                this._flowElems[i][prop] = e.detail.value;
            }
            if(v.child){
                this._flowElems[i].child.forEach((v2,i2)=>{
                    if(v2.id == con.id){
                        this._flowElems[i].child[i2][prop] = e.detail.value;
                    }
                })
            }
        });
        this.requestUpdate();
    }
}
window.customElements.define('pg-flow-design', PgFlowDesign);