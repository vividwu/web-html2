import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvInput } from '../components/vv-input.js';
import { VvButton } from '../components/vv-button.js';
// import {Sortable} from '../sortable.core.esm-1.15.0.js';
import '../Sortable-1.8.3.js?v=0.1';
import { VvTab } from '../components/vv-tab.js';
import { VvTabContent } from '../components/vv-tab-content.js';
import { VvSelect } from '../components/vv-select.js';
import {VvIcon } from '../components/vv-icon.js'
import { VvEditTable } from '../components/vv-edit-table.js'
import {FormDesignGetConfigByCodeApi,FormDesignGetFieldsApi,QueryString} from '../webapi.js';
import { VvDate } from '../components/vv-date.js';
import { CcUserInfo } from '../components/cc-user-info.js';
import { CcOrderInfo } from '../components/cc-order-info.js?v=0.1';
import { CcDeptSelector } from '../components/cc-dept-selector.js';
import { CcSelect } from '../components/cc-select.js';
import { VvCascader } from '../components/vv-cascader.js';
class PgFormDesign extends LitElement {
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
        `
        ]
    }
    constructor() {
        super();
        this._processName = QueryString("pname");
        this._code = QueryString("code");
        //请求
        FormDesignGetConfigByCodeApi(this._processName,this._code).then(res => {
            console.log('webapi',res);
            FormDesignGetFieldsApi(this._processName).then(res2 => {
                this.__tableConfig = res2.data;
                if(res.control == null) {
                    this.__tableConfig.map(t=>{
                        this._formControls = [{"id": "CardDefault", "title":res.data.formMemo, "type": "card", "child": []}];
                        if(t.category == "main"){
                            t.fields.map(f=>{
                                if(["order_no","emp_id","dept_code"].indexOf(f.name)>=0){
                                    let con = {"id":t.table+"$"+f.name,"type":f.control,"labelName":f.title,"size":12};console.log('a',con);
                                    this._formControls[0].child.push(con);  //default card container
                                }
                            });
                        }
                        // else if(t.category == "detail"){
                        //     let table = {"id":t.table,"type":"table","labelName":t.name,"column":[]};
                        //     t.fields.map(f=>{
                        //         let col = {"type":f.control,"labelName":f.title,"id":t.table+""+f.name};
                        //     table.column.push(col);
                        // });
                        //     this._formControls.push(table);
                        // }
                    });
                    console.log("default controls",this._formControls);
                }
                this.requestUpdate();
            });
        })
        //{"success":true,"message":null,"data":[{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"费用发生部门","value":"occurs_dept_code","required":"y"},{"label":"合计费用","value":"amount","required":"y"},{"label":"报销原因","value":"reason","required":"n"}],"label":"费用报销单主表","value":"fm_fybx_info"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"费用项","value":"item_code","required":"n"},{"label":"发生日期","value":"occurs_time","required":"n"},{"label":"费用项金额","value":"qty","required":"y"}],"label":"费用报销单明细表","value":"fm_fybx_detail"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"经理意见","value":"fm_jingli_yijian","required":"n"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"}],"label":"","value":"fm_test"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"经理意见","value":"fm_jingli_yijian","required":"n"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"}],"label":"1","value":"fm_qingjia"}],"errCode":null,"ext":null};
        // this.__tableConfig = [{
        //     "table": "bx_info",
        //     "name":"报销主表",
        //     "category":"main",
        //     "fields": [{"title": "申请单编号", "name": "order_no", "control": "cc-orderinfo"},
        //         {"title": "申请人ID","name": "emp_id","control": "input"},
        //         {"title": "所在部门编码","name": "dept_code","control": "cc-deptselector"},
        //         {"title": "合计费用","name": "amount","control": "input"}]
        // }
        // ,{
        //     "table": "bx_detail",
        //     "name":"报销明细",
        //     "category":"detail",
        //     "fields": [{"title": "申请单编号", "name": "order_no", "control": "input"},
        //         {"title": "费用项金额","name": "qty","control": "input"},
        //         {"title": "费用发生时间","name": "occurs_time","control": "date"}]
        //   }
        // ];
        this.__tableConfig = [];
        // this._formData = {};  //{"b$c":{"title": "编号","control":"input"},...}
        // let that = this;
        // this.__tableConfig.map(i=>{
        //     let tb = i.table;
        //     i.fields.map(j=>{
        //         that._formData[tb+'$'+j.name] = j;
        //     })
        // });
        this.__conIds = [];
        //
        this._formControls = [];/*[
            {"id":"g1","type":"card","child":[
                {"id":"v1","type":"input","labelName":"bianhao","size":12},
                    {"id":"v4","type":"select","labelName":"gangwei","size":12}
                    ]},
            {"id":"v2","type":"input","labelName":"renyuan","size":12},
                {"id":"Table_1644202096899","type":"table","labelName":"明细表","column":[{"type":"input","labelName":"编号","id":"no"},
                        {"type":"input","labelName":"姓名","id":"name"}]},
                {"id":"g3","type":"card","child":[
                    {"id":"v3","type":"input","labelName":"bumen","size":12}]}]*/
            // let vc = new VvCard();
            // vc.id = "g1";
            // let vi = new VvInput();
            // vi.id = "v1";
            // vi.labelName = "bianhao";
            // vc.child = [];
            // vc.child.push(vi);
            // this._formControls.push(vc);
            //
            // let vi2 = new VvInput();
            // vi2.id = "v2";
            // vi2.labelName = "renyuan";
            // this._formControls.push(vi2);
            //
            // let vc2 = new VvCard();
            // vc2.id = "g2";
            // let vi3 = new VvInput();
            // vi3.id = "v3";
            // vi3.labelName = "bumen";
            // vc2.child = [];
            // vc2.child.push(vi3);
            // this._formControls.push(vc2);
        }
        render(){console.log("pg-form-design render",this._formControls)
            return html`<div class="page-content gray-bg">
        <div class="top-header panel panel-custom panel-white panel-shadow gutter-b">
            <div class="panel-text">page-top</div>
            <vv-button @click="${this.getFormData}">get data</vv-button>
            <vv-button @click="${this.addCard}">add card</vv-button>
            <vv-button @click="${this.exchangeData}">exchange data</vv-button>
        </div>
    
            <div class="main-content">
                <div class="row">
                    <div class="col-lg-12 nested-1" id="nestedDemo">
                        <!--<vv-edit-table></vv-edit-table>-->
                        ${this._formControls.map(i => this.renderFormControl(i) )}
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
                    ${this._formControls.map(i => this.renderProperty(i) )}
                </vv-tab-content>
            </vv-tab>
        </div>
        `;
        }
        renderFormControl(con){
            // data.fields.map(field => {debugger
            if(!this.__conIds.includes(con.id)){  //处理已布局字段禁用
                if(con.type == 'table'){
                    con.column.map(c =>{
                        if(!this.__conIds.includes(c.id)){
                            this.__conIds.push(c.id);
                        }
                    })
                }else {
                    this.__conIds.push(con.id);
                }
            }

                if(con.type === 'button'){
                    return html`<vv-button>test</vv-button>`
                }else if (con.type === 'input') {
                    return html`<div id="${con.id}" class="citem nested-1 col-sm-${con.size}">
                    <label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                        <div class="col-sm-9"><vv-input name="${con.id}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></vv-input></div>
                        ${this.selectedId===con.id?html`<vv-icon name="close-circle-fill" color="#ed5565" class="elem-delete"></vv-icon>`:""}
                    </div>`
                }else if (con.type === 'cc-select') {
                    return html`<div id="${con.id}" class="citem nested-1 col-sm-${con.size}">
                    <label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                        <div class="col-sm-9"><cc-select id="${con.id}" name="${con.id}" @click="${(e)=>{this.conClickHandler(con.id,e)}}" dataurl="${con.dataurl}"></cc-select></div>
                        ${this.selectedId === con.id ? html`<vv-icon name="close-circle-fill" color="#ed5565" class="elem-delete"></vv-icon>`:""}
                                    </div>`
                }else if (con.type === 'date') {
                    return html`<div id="${con.id}" class="citem nested-1 col-sm-${con.size}">
                    <label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                        <div class="col-sm-9"><vv-date id="${con.id}" name="${con.id}" labelName="${con.labelName}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></vv-date></div>
                        ${this.selectedId===con.id?html`<vv-icon name="close-circle-fill" color="#ed5565" class="elem-delete"></vv-icon>`:""}
                        </div>`
                }else if (con.type === 'table') {
                    let column = JSON.stringify(con.column);
                    let tableData = JSON.stringify([{'no':'456','name':'test02','age':18},{'no':'789','name':'test03','age':38}]);
                    return html`<div id="${con.id}" class="citem nested-1" style="position:relative;">
                    <vv-edit-table name="${con.id}" labelName="${con.labelName}" editable design column="${column}" data="${tableData}" @title-click="${(e,column)=>{ this.tableTitleClickHandler(e,column,con.id) }}" @column-remove="${(e,column)=>{ this.tableColumnRemoveHandler(e,column,con.id) }}" @pre-render="${(e)=>{this.tablePreRender(e)}}"></vv-edit-table>
                        ${this.selectedId === con.id ? html`<vv-icon name="close-circle-fill" color="#ed5565" class="elem-delete" style="right:3px"></vv-icon>`:""}
                    </div>`
                }else if (con.type === 'cc-userinfo') {
                    return html`<div id="${con.id}" class="citem nested-1 col-sm-${con.size}"><label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                                <div class="col-sm-9"><cc-user-info name="${con.id}" flowCode="${this._processName}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></cc-user-info></div>`;
                }else if (con.type === 'cc-orderinfo') {
                    return html`<div id="${con.id}" class="citem nested-1 col-sm-${con.size}"><label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                                <div class="col-sm-9"><cc-order-info name="${con.id}" flowCode="${this._processName}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></cc-order-info></div>`;
                }else if (con.type === 'cc-deptselector') {
                    return html`<div id="${con.id}" class="citem nested-1 col-sm-${con.size}"><label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                                <div class="col-sm-9"><cc-dept-selector name="${con.id}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></cc-dept-selector></div>`;
                }else if (con.type === 'card') {
                    if (con.child) {
                        return html`<vv-card id="${con.id}" title="${con.title}" name="${con.id}" class="nested-1" @click="${(e)=>{this.conClickHandler(con.id,e)}}">${con.child.map(i => this.renderFormControl(i) )}</vv-card>`
                    }else{
                        return html`<vv-card id="${con.id}" title="${con.title}" name="${con.id}" class="nested-1"></vv-card>`
                    }
            }
        // });
    }
    renderProperty(con){debugger
        if(this.selectedId && this.selectedId.startsWith("Card")){
            return this.renderPropertyItems(con);
        }
        if (con.type === 'card'){
            if (con.child) {
                return con.child.map(i => this.renderPropertyItems(i) );
            }else {
                return '';
            }
        }
        if(con.id === this.selectedId){  //外部
            return this.renderPropertyItems(con);
        }
        if(con.type === 'table'){
            return con.column.map(i => this.renderPropertyItems(i) );
        }
        //return this.renderPropertyItems(con);
    }
    renderPropertyItems(con){debugger
        if(con.id != this.selectedId){ return ''; }
        return Object.keys(con).map(key => {
            if(key === "id"){
                return html`<div class="form-group row"><label>控件ID:</label><vv-input disabled value="${con[key]}"></vv-input></div>`
            }else if(key === "labelName"){
                return html`<div class="form-group row"><label>标签名:</label><vv-input value="${con[key]}" @veinput="${(e)=>{this.propertyInputHandler('labelName',con,e)}}"></vv-input></div>`
            }else if(key === "size"){
                return html`<div class="form-group row"><label>栅格格数:</label><vv-select @change="${(e)=>{this.propertyInputHandler('size',con,e)}}" value="${con[key]}" defaultValue="${con[key]}"><vv-option value="2">2</vv-option><vv-option value="3">3</vv-option><vv-option value="4">4</vv-option><vv-option value="6">6</vv-option><vv-option value="8">8</vv-option><vv-option value="12">12</vv-option></vv-select></div>`
            }else if(key === "dataurl"){
                return html`<div class="form-group row"><label>数据API地址:</label><vv-input value="${con[key]}" @veinput="${(e)=>{this.propertyInputHandler('dataurl',con,e)}}"></vv-input><vv-icon name="bug"></vv-icon></div>`
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
	             ${item.fields.map(i => html`<a href="javascript:;" @click="${(e)=>{this.fieldClickHandler(item.category,item.table,item.name,i,e)}}" class="btn btn-sm font-weight-bolder btn-light-${this.__conIds.indexOf(item.table+"$"+i.name)>-1?"gray":"primary"} mb-2 mr-2">${i.title}</a>`)}
               </div>`
    }
    getFormData(){debugger
        console.log(this._formControls,this.__conIds);
        let root = this.renderRoot.getElementById("nestedDemo");
        let data = [];
        for(var i=0; i<root.children.length; i++){
            if(root.children[i].type == "card"){
                let card = JSON.parse(JSON.stringify(this.getFormControlsData(root.children[i].id)));
                card.child = [];
                for(var j=0; j<root.children[i].children.length; j++){
                    let con = this.getFormControlsData(root.children[i].children[j].id);
                    card.child.push(con);
                }
                data.push(card);
            }else{
                let con = this.getFormControlsData(root.children[i].id);
                data.push(con);
            }
        }
        console.log("get data",data);
    }
    getFormControlsData(id){
        let con;
        this._formControls.forEach((v,i)=>{debugger
            if(v.type == 'card' && v.child.length>0){
                if(v.id == id){
                    con = v;
                    return;
                }
                v.child.forEach((v2,i2)=>{debugger
                    if(v2.id == id){
                        con = v2;
                        return;
                    }
                })
            }else{
                if(v.id == id){
                    con = v;
                }
            }
        });
        return con;
    }
    shouldUpdate(changedProperties) {  //有配置才更新
        console.log("form design should update");
        if(this._formControls.length == 0)
            return false;
        else
            return true;
    }
    firstUpdated(changedProperties) {debugger
        console.log("form design first update...");
        let con = this.shadowRoot.getElementById('nestedDemo');
        Sortable.create(con, {
            group: 'nested',
            draggable: '.nested-1',
            animation: 150
            // ,onUpdate:(evt)=>{this.onUpdateEvent(evt)},  //顶层容器只允许有行的排序
            // onRemove:(evt)=>{this.onRemoveEvent(evt)},
            ,
            onMove:this.onMoveEvent
        });
        this._formControls.map(c=>{
            if(c.type=="card"){
                var card = this.shadowRoot.querySelector('[name="'+c.id+'"]');
                Sortable.create(card, {
                    group: 'nested',
                    draggable: '.nested-1',
                    dataIdAttr: c.id,
                    animation: 150
                    // ,onEnd:(evt)=>{this.onEndEvent(evt)},
                    // onAdd:this.onAddEvent
                    // onUpdate:(evt)=>{this.onUpdateEvent(evt)},
                    // onRemove:(evt)=>{this.onRemoveEvent(evt)},
                    ,
                    onMove:this.onMoveEvent
                });
            }
        });
    }
    fieldClickHandler(category,tableId,tableName,field,e){debugger
        console.log("fieldClickHandler",category,tableName,field);
        if(category === 'main'){
            this.fieldMainClickHandler(tableId,tableName,field,e);
        }else if(category === 'detail'){
            this.fieldDetailClickHandler(tableId,tableName,field,e);
        }else{
            VvMessage.error('unkown model category:'+category);
        }
    }
    fieldMainClickHandler(tableId,tableName,field,e){
        let con = {"id":tableId+"$"+field.name,"type":field.control,"labelName":field.title,"size":12};
        if(["cc-select"].indexOf(field.control)>=0){
            con.dataurl = "";
        }
        // if(field.control == "input"){
        this._formControls.push(con);
        // }
        this.selectedId = con.id;
        //this.requestUpdate();
    }
    fieldDetailClickHandler(tableId,tableName,field,e){
        //"column":[{"type":"input","labelName":"编号","id":"no"}
        let con = {"id":tableId+"$"+field.name,"type":field.control,"labelName":field.title,"size":12};
        if(["cc-select"].indexOf(field.control)>=0){
            con.dataurl = "";
        }
        // if(field.control == "input"){
        let hasTable = false;
        this._formControls.map(c=>{
            if(c.type == 'table' && c.id == tableId){
                hasTable = true;
                c.column.push(con);
            }
        })
        if(!hasTable){
            this._formControls.push({"id":tableId,"type":"table","labelName":tableName,"size":12,"column":[con]});
        }

        // }
        this.selectedId = con.id;
    }
    conClickHandler(conId,e){debugger
        console.log("conClickHandler",conId);
        e.stopPropagation();
        if(e.target.type === undefined){
            return;
        }
        this.selectedId = conId;
    }
    propertyInputHandler(prop,con,e){debugger
        console.log("propertyInputHandler",con,e);
        this._formControls.forEach((v,i)=>{
            if(v.id == con.id){
                this._formControls[i][prop] = e.detail.value;
            }
            if(v.child){
                this._formControls[i].child.forEach((v2,i2)=>{
                    if(v2.id == con.id){
                        this._formControls[i].child[i2][prop] = e.detail.value;
                    }
                })
            }
            if(v.type == 'table'){
                this._formControls[i].column.forEach((v2,i2)=>{
                    if(v2.id == con.id){
                        this._formControls[i].column[i2][prop] = e.detail.value;
                    }
                })
            }
        });
        this.requestUpdate();
    }



    onEndEvent(/**Event*/evt) {debugger
        console.log('end',evt.from,evt.to,evt.oldIndex,evt.newIndex)  //from = to （from/to表示外层）还在一个容器内
        evt.stopPropagation();
        return false;
    }
    onAddEvent(/**Event*/evt) {debugger
        console.log('add',evt.from,evt.to,evt.oldIndex,evt.newIndex)
        evt.stopPropagation();
        return false;
    }
    // 列表内元素顺序更新的时候触发
    onUpdateEvent(/**Event*/evt) {debugger
        // same properties as onEnd
        console.log('update',evt.from,evt.to,evt.oldIndex,evt.newIndex);
        var currentContainerId = evt.from.id;
        // 交换
        // old < new  删 -》加
        // old > new  加 -》删
        if(currentContainerId === "nestedDemo"){
            // var swap = data[evt.newIndex];
            // data[evt.newIndex] = data[evt.oldIndex];
            // data[evt.oldIndex] = swap;
            let old = this._formControls[evt.oldIndex];
            this._formControls.splice(evt.oldIndex,1);
            this._formControls.splice(evt.newIndex,0,old);
            return;
            // v.child.splice(evt.newIndex,0,data[evt.oldIndex]);  //加
            // data.splice(evt.oldIndex,1);  //删
            return;
        }
        this._formControls.forEach((v1,i1)=>{
            if(v1.id === currentContainerId){console.log(v1,currentContainerId)
                // var swap = v1.child[evt.newIndex];
                // v1.child[evt.newIndex] = v1.child[evt.oldIndex];
                // v1.child[evt.oldIndex] = swap;
                let old = v1.child[evt.oldIndex];
                v1.child.splice(evt.oldIndex,1);
                v1.child.splice(evt.newIndex,0,old);
                return;
            }
        })
        console.log('up',this._formControls)
    }
    // 元素从列表中移除进入另一个列表
    onRemoveEvent(/**Event*/evt) {debugger
        console.log('remove',evt.from,evt.to,evt.oldIndex,evt.newIndex);
        //跨容器
        if(evt.from.id === "nestedDemo"){  //移入card
            this._formControls.forEach((v,i)=>{console.log('f1',v);
                if(v.id === evt.to.id){  //card数据 加入新的
                    v.child.splice(evt.newIndex,0,this._formControls[evt.oldIndex])
                }
            });console.log('f2',this._formControls);
            //顶层老的删除
            this._formControls.splice(evt.oldIndex,1);
            return;
        }
        if(evt.to.id === "nestedDemo"){  //移出card
            var oldData;
            this._formControls.forEach((v,i)=>{
                if(v.id === evt.from.id){  //card数据 删除老的
                    oldData = v.child[evt.oldIndex]
                    v.child.splice(evt.oldIndex,1);
                }
            });
            this._formControls.splice(evt.newIndex,0,oldData);
            return;
        }
        //crad内互移
        // if(evt.from.id.startsWith("Card") && evt.to.id.startsWith("Card")){  //card移入card
        //     var oldData;
        //     this._formControls.forEach((v,i)=>{
        //             if(v.id === evt.from.id){  //card数据 删除老的
        //             oldData = v.child[evt.oldIndex]
        //             v.child.splice(evt.oldIndex,1);
        //         }
        //     });
        //     this._formControls.forEach((v,i)=>{
        //         if(v.id === evt.to.id){  //card数据 加入新的
        //             v.child.splice(evt.newIndex,0,oldData);
        //         }
        //     });
        //     return;
        // }
    }

    // 拖拽移动的时候
    onMoveEvent(/**Event*/evt) {console.log("card cannot!w",evt.dragged.id , evt.to.id,evt.dragged.children[0].tagName);
        //Card不能嵌套
        if((evt.dragged.children.length>0&&evt.dragged.children[0].tagName=="VV-EDIT-TABLE") && evt.to.id.indexOf("Card")==0/*evt.dragged.id[0] == evt.to.id[0]*/) {
            console.log("card cannot to nested!");
            evt.stopPropagation();
            return false;
        }
    }
    onMoveEvent_nowork(/**Event*/evt, /**Event*/originalEvent) {console.log("card cannot!nw",evt.dragged.id , evt.to.id);
        //Card不能嵌套
        if(evt.dragged.id[0] == evt.to.id[0]) {
            console.log("card cannot to nested!");
            evt.stopPropagation();
            originalEvent.stopPropagation();
            return false;
        }
    }

    addCard(){
        let card = {"id": "Card"+new Date().getTime(), "title":"新卡片", "type": "card", "child": []};
        this._formControls.push(card);
        this.selectedId = card.id;
        this.addNewControlDom(card);
    }
    addNewControlDom(dom){
        let that = this;
        setTimeout(function() {
            let card = that.shadowRoot.querySelector('[name="'+dom.id+'"]');
            Sortable.create(card, {
                group: 'nested',
                draggable: '.nested-1',
                dataIdAttr: dom.id,
                animation: 150
                // ,onEnd:(evt)=>{that.onEndEvent(evt)},
                // onAdd:that.onAddEvent
                // onUpdate:(evt)=>{that.onUpdateEvent(evt)},
                // onRemove:(evt)=>{that.onRemoveEvent(evt)},
                ,
                onMove:that.onMoveEvent
            });
        },200);
    }
    exchangeData(){debugger
        console.log('before',this._formControls)
        let idx0 = this._formControls[0].child[0];
        let idx2 = this._formControls[0].child[2];
        this._formControls[0].child[0] = idx2;
        this._formControls[0].child[2] = idx0;
        console.log('after',this._formControls)
    }
    tableTitleClickHandler(e,col,tableId){debugger
        console.log(e,col);
        this.selectedId = e.detail.column.id;
    }
    tableColumnRemoveHandler(e,col,tableId){
        console.log(e,col);
        let tidx = 0;
        let that = this;
        this._formControls.map(c=>{
            if(c.type == 'table' && c.id == tableId){
                debugger//c.column.delete(con);
                let cidx = 0;
                c.column.map(f =>{
                    if(f.id == e.detail.column.id){
                        c.column.splice(cidx, 1);
                    }
                    cidx++;
                });
                if(c.column.length == 0){  //table hasn't any column,remove table layout
                    that._formControls.splice(tidx, 1);
                }
                tidx++;
            }
        })
        debugger
        this.__conIds.splice(this.__conIds.indexOf(e.detail.column.id), 1);
        this.selectedId = '';
    }
    tablePreRender(e){

    }
}
window.customElements.define('pg-form-design', PgFormDesign);