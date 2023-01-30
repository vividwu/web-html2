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
import { VvTagInput } from '../components/vv-tag-input.js?v=0.1'
import { VvDialog } from '../components/vv-dialog.js'


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
    
    /*position: absolute; drag*/
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

    /*position: absolute; drag*/
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
/*sharp*/
.sharp{position: absolute; /*drag*/}
.node-diamond { width:32px;height:32px;background-color:#ffa500;transform:rotate(45deg);-ms-transform:rotate(45deg); /*Internet Explorer*/   
-moz-transform:rotate(45deg); /*Firefox*/   -webkit-transform:rotate(45deg); /*Safari和Chrome*/   -o-transform:rotate(45deg); /*Opera*/  
  }
.node-diamond span{
 transform: rotate(-45deg);
        position: absolute;
        top: 6px;
        left: 12px;font-weight: bold;
    font-size: 1rem;
}
        `
        ]
    }
    constructor() {
        super();
        //init link
        this._commonAll = {
            isSource: true,
            isTarget: true,
            maxConnections: -1,
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
        //links 每一根连线
        this._flowData = { nodes:[{"id":"begin","key":"begin","type":"begin","pt":"120px","pl":"10px"},
                {"id":"end","key":"end","type":"end","pt":"120px","pl":"850px"},
                {"id":"taskDriectLeader","key":"taskDriectLeader","type":"task","desc":"直接上级审批","pt":"120px","pl":"160px"},
                {"id":"taskHrbp","key":"taskHrbp","type":"task","desc":"HRBP审批","pt":"120px","pl":"380px"},
                {"id":"taskCEO","key":"taskCEO","type":"task","desc":"CEO审批","pt":"120px","pl":"650px"}],
            links:[{"id":"con_2","from":"begin","to":"taskDriectLeader","desc":"","spp":"Right","tpp":"Left"},
                {"id":"con_3","from":"taskDriectLeader","to":"taskHrbp","desc":"标签","spp":"Right","tpp":"Left"},
                {"id":"con_4","from":"taskHrbp","to":"taskCEO","desc":">10天","spp":"Right","tpp":"Left"},
                {"id":"con_5","from":"taskCEO","to":"end","desc":"","spp":"Right","tpp":"Left"}] };  /*{"nodes":[{"id":"begin","key":"begin","type":"begin","desc":"开始","pt":"112.25px","pl":"10px"},{"id":"end","key":"end","type":"end","desc":"结束","pt":"112.25px","pl":"850px"},{"id":"taskDriectLeader","key":"taskDriectLeader","type":"task","desc":"直接上级审批","pt":"112.25px","pl":"160px"},{"id":"taskHrbp","key":"taskHrbp","type":"task","desc":"HRBP审批","pt":"112.25px","pl":"380px"},{"id":"taskCEO","key":"taskCEO","type":"task","desc":"CEO审批","pt":"112.25px","pl":"650px"},{"id":"task_1674894467038","key":"task_1674894467038","type":"task","desc":"task","pt":"247px","pl":"520px"}],"links":[{"id":"con_1","from":"begin","to":"taskDriectLeader","desc":"","endpoints":["Right","Left"]},{"id":"con_11","from":"taskDriectLeader","to":"taskHrbp","desc":"标签","endpoints":["Right","Left"]},{"id":"con_21","from":"taskHrbp","to":"taskCEO","desc":">10天","endpoints":["Right","Left"]},{"id":"con_31","from":"taskCEO","to":"end","desc":"","endpoints":["Right","Left"]},{"id":"con_69","from":"begin","to":"taskDriectLeader","desc":"","endpoints":["Right","Left"]},{"id":"con_79","from":"taskDriectLeader","to":"taskHrbp","desc":"标签","endpoints":["Right","Left"]},{"id":"con_89","from":"taskHrbp","to":"taskCEO","desc":">10天","endpoints":["Right","Left"]},{"id":"con_99","from":"taskCEO","to":"end","desc":"","endpoints":["Right","Left"]},{"id":"con_148","from":"taskHrbp","to":"task_1674894467038","desc":"","endpoints":["Bottom","Left"]},{"id":"con_153","from":"task_1674894467038","to":"taskCEO","desc":"","endpoints":["Right","Bottom"]}]}*/
        //请求
        this._flowLinks = [];//this._flowData.links;
        this._jsPlumb = null;
        console.log("init elems",this._flowElems)
        TestApi().then(res => {  //云服停了
            console.log('webapi',res);
            this._flowElems = [];//this._flowData.nodes;
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
            <vv-button @click="${this.saveFormData}">save data</vv-button>
            <vv-button @click="${this.addNode}">add node</vv-button>
            <vv-button @click="${this.addDecision}">add Decision</vv-button>
        </div>
    
            <div class="main-content">
                <div class="row">
                    <div class="col-lg-12"><vv-card><vv-tag-input @ve-click="${this.tiClickHandler}" value="abc.vsd"></vv-tag-input><div class="m-5" style="height:350px">
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
                <vv-tab-content key="c3" name="Active3">
                    ${this._flowLinks.map(i => this.renderLinkProperty(i) )}
                </vv-tab-content>
            </vv-tab>
        </div>
        <!--script dialog-->
    <vv-dialog id="taskScDialog" width="650">
        <vv-tab activekey="tc1">
                <vv-tab-content key="tc1" name="ActiveTc1">
                    <div class="form-group row"><label>步骤编号:</label><vv-input></vv-input></div>
                    <div class="form-group row">
                    <div class="col-sm-4"><vv-select></vv-select></div><div class="col-sm-4"><vv-input></vv-input></div><div class="col-sm-4"><vv-button @click="${this.addNewTaskScriptNameHandle}">新增</vv-button></div>
                    </div>
                </vv-tab-content>
                <vv-tab-content key="tc2" name="ActiveTc2">
                    <vv-input></vv-input>
                </vv-tab-content>
            </vv-tab>
    </vv-dialog>
        `;
        }
        renderFlowElem(con){
            // data.fields.map(field => {debugger
            if(!this.__conIds.includes(con.id)){
                this.__conIds.push(con.id);
            }

                if(con.type === 'begin'){
                    return html`<div id="begin" class="sharp node-begin node-circle" datatype="begin" style="top:${con.pt};left:${con.pl}" @click="${(e)=>{this.conClickHandler('begin',e)}}">开始</div>`
                }else if(con.type === 'end'){
                    return html`<div id="end" class="sharp node-end node-circle" datatype="end" style="top:${con.pt};left:${con.pl}" @click="${(e)=>{this.conClickHandler('end',e)}}">结束</div>`
                }else if(con.type === 'decision'){
                    return html`<div id="${con.id}" class="sharp"><div class="node-diamond" datatype="decision" style="top:${con.pt};left:${con.pl}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"><span>X</span></div></div>`
                }else{
                    return html`<div id="${con.id}" class="sharp node-box" datatype="task" style="top:${con.pt};left:${con.pl}" @click="${(e)=>{this.conClickHandler(con.id,e)}}">
        <div class="node-info-icon"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg></div>
        <div class="node-desc">${con.desc}</div>
      </div>`
                }
        // });
    }
    renderProperty(con){debugger
        if(con.id != this.selectedId){ return ''; }
        return Object.keys(con).map(key => {
            if(key === "id"){
                return html`<div class="form-group row"><label>步骤编号:</label><vv-input disabled value="${con[key]}"></vv-input></div>`
            }else if(key === "desc"){
                return html`<div class="form-group row"><label>步骤名称:</label><vv-input value="${con[key]}" @veinput="${(e)=>{this.propertyInputHandler('desc',con,e)}}"></vv-input></div>`
            }else if(key === "size"){
                return html`<div class="form-group row"><label>候选人脚本:</label><vv-select @change="${(e)=>{this.propertyInputHandler('size',con,e)}}" value="${con[key]}"><vv-option value="2">2</vv-option><vv-option value="4">4</vv-option><vv-option value="6">6</vv-option><vv-option value="8">8</vv-option><vv-option value="12">12</vv-option></vv-select></div>`
            }else if(key === "column"){debugger
                return html`<div class="row mb-5">
                    ${con["column"].map(i=> html`<a href="javascript:;" class="btn btn-sm font-weight-bolder btn-light-primary mb-2 mr-2">${i.labelName}</a>`)}
                    </div>`
            }
        });
    }

    renderLinkProperty(con){debugger
        if(con.id != this.selectedId){ return ''; }
        return Object.keys(con).map(key => {
            if(key === "id"){
            return html`<div class="form-group row"><label>连线ID:</label><vv-input disabled value="${con[key]}"></vv-input></div>`
        }else if(key === "desc"){
            return html`<div class="form-group row"><label>连线标签:</label><vv-input value="${con[key]}" @veinput="${(e)=>{this.propertyInputLinkHandler('desc',con,e)}}"></vv-input></div>`
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
    saveFormData() {
        let that = this;
        let flowElems = {nodes:[],links:[]};
        this.renderRoot.querySelectorAll(".sharp").forEach(function (element, index) {
            flowElems.nodes.push({
                id: element.id, key: element.id, type: element.getAttribute("datatype"), desc: element.innerText,
                pt: that.getStyle(element, "top"), pl: that.getStyle(element, "left")
            });
        });
        jsPlumb.getAllConnections().forEach(function (element, index) {
            let label = element.getOverlay("OVERLAY_CONNECTION_ACTIONS_ID").label;
            flowElems.links.push({
                id: element.id,
                from: element.sourceId,
                to: element.targetId,
                desc: label.replace('<div title="双击删除连线" style="margin-bottom:20px">',"").replace('</div>',""),
                spp: that.getAnchorType(element.endpoints[0].anchor), tpp: that.getAnchorType(element.endpoints[1].anchor)
            });
        });
        console.log(JSON.stringify(flowElems));
    }
    getStyle(ele,attr){
        return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele)[attr]; // 非ie
    }
    getAnchorType(anchor){
        if(anchor.x == 0.5 && anchor.y == 0){
            return "Top";
        }else if(anchor.x == 0.5 && anchor.y == 1){
            return "Bottom";
        }else if(anchor.x == 0 && anchor.y == 0.5){
            return "Left";
        }else if(anchor.x == 1 && anchor.y == 0.5){
            return "Right";
        }else{
            return "";
        }
    }
    shouldUpdate(changedProperties) {  //有配置才更新
        console.log("flow design should update2",this._flowElems.length);
        // if(this._flowElems.length == 0)
        //     return false;
        // else
            return true;
    }
    jsPlumbRender(){
        let that = this;
        jsPlumb.ready(() => {
            setTimeout(function() {
                jsPlumb.bind('connection', function (info) {debugger
                    console.log('connect event', info);
                    let con=info.connection;
                    that.addConnectionActionsOverlay(con);
                });
                jsPlumb.bind('click', function (conn, originalEvent) {debugger
                    console.log("click event:",conn.id);
                    that.selectedId = conn.id;
                })
                //
                that._flowData.links.map(c=>{
                    debugger
                    let conn = jsPlumb.connect({
                        source: that.renderRoot.getElementById(c.from),
                        target: that.renderRoot.getElementById(c.to),
                        //cid: c.id,  no work
                        endpoint: ["Dot", {radius: 5}],
                        paintStyle: {
                            stroke: "#fc2f49",
                            strokeWidth: 1,  /*连线粗细*/
                        },
                        maxConnections: -1,
                        connector: ["Flowchart", {
                            stub: [40, 60],
                            gap: 5,
                            cornerRadius: 5,
                            alwaysRespectStubs: true
                        }],
                        overlays: [["Arrow", {width: 10, length: 10, location: 1}]],
                        connectionsDetachable: true,
                    },{anchor: [c.spp,c.tpp]});
                conn.id = c.id;
            });
                that._flowData.nodes.map(c=>{
                    if(c.type == "begin"){
                    jsPlumb.addEndpoint(that.renderRoot.getElementById('begin'), { anchor: 'Right' }, that._commonBegin);
                }else if(c.type == "end"){
                    jsPlumb.addEndpoint(that.renderRoot.getElementById('end'), { anchor: 'Left' }, that._commonEnd);
                } else {
                    jsPlumb.addEndpoint(that.renderRoot.getElementById(c.id), {anchor: 'Right'}, that._commonAll);
                    jsPlumb.addEndpoint(that.renderRoot.getElementById(c.id), {anchor: 'Left'}, that._commonAll);
                    jsPlumb.addEndpoint(that.renderRoot.getElementById(c.id), {anchor: 'Top'}, that._commonAll);
                    jsPlumb.addEndpoint(that.renderRoot.getElementById(c.id), {anchor: 'Bottom'}, that._commonAll);
                }
                jsPlumb.draggable(that.renderRoot.getElementById(c.id));
            });
                //
                that._jsPlumb = jsPlumb.getInstance();
                //
            },100);
    });
        this._flowElems.map(c=>{

        });
    }
    firstUpdated(changedProperties) {debugger
        console.log("flow design first update2...");
    }
    updated(changedProperties) {
        console.log("flow design update2");
        // if(!this._jsPlumb)
        //     this.jsPlumbRender();
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
                label: '<div title="双击删除连线" style="margin-bottom:20px">'+desc+'</div>',
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
    addEndpointSharp(newNode){
        let that = this;
        setTimeout(function() {
            jsPlumb.addEndpoint(that.renderRoot.getElementById(newNode.id), {anchor: 'Right'}, that._commonAll);
            jsPlumb.addEndpoint(that.renderRoot.getElementById(newNode.id), {anchor: 'Left'}, that._commonAll);
            jsPlumb.addEndpoint(that.renderRoot.getElementById(newNode.id), {anchor: 'Top'}, that._commonAll);
            jsPlumb.addEndpoint(that.renderRoot.getElementById(newNode.id), {anchor: 'Bottom'}, that._commonAll);
            jsPlumb.draggable(that.renderRoot.getElementById(newNode.id));
        },200);
    }
    addNode(){
        let newNode = {"id":"task_"+new Date().getTime(),"key":"task_"+new Date().getTime(),"type":"task","desc":"task","pt":"100px","pl":"300px"};
        this._flowData.nodes.push(newNode);
        this.requestUpdate();
        this.addEndpointSharp(newNode);
    }
    addDecision(){
        let newNode = {"id":"dec_"+new Date().getTime(),"key":"dec_"+new Date().getTime(),"type":"decision","pt":"100px","pl":"300px"};
        this._flowData.nodes.push(newNode);
        this.requestUpdate();
        this.addEndpointSharp(newNode);
    }
    tiClickHandler(e){
        console.log("ve:",e);
        this.renderRoot.getElementById("taskScDialog").show = true;
    }
    addNewTaskScriptNameHandle(){

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
        });
        this.requestUpdate();
    }
    propertyInputLinkHandler(prop,con,e){debugger
        console.log("propertyInputLinkHandler",con,e);
        this._flowLinks.forEach((v,i)=>{
                if(v.id == con.id){
                this._flowLinks[i][prop] = e.detail.value;
            }
        });
        jsPlumb.getAllConnections().forEach(function (element, index) {
            if(element.id == con.id) {
                element.getOverlay("OVERLAY_CONNECTION_ACTIONS_ID").setLabel('<div title="双击删除连线" style="margin-bottom:20px">' + e.detail.value + '</div>');
            }
        });
    }
    disconnectedCallback() {
        if(this._jsPlumb) {
            this._jsPlumb.clear();
        }
        super.disconnectedCallback();
    }
}
window.customElements.define('pg-flow-design', PgFlowDesign);