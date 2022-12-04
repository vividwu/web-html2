import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvInput } from '../components/vv-input.js';
import { VvButton } from '../components/vv-button.js';
import {Sortable} from '../sortable.core.esm-1.15.0.js';
import { VvTab } from '../components/vv-tab.js';
import { VvTabContent } from '../components/vv-tab-content.js';
import { VvSelect } from '../components/vv-select.js';
import {VvIcon } from '../components/vv-icon.js'
import { VvEditTable } from '../components/vv-edit-table.js'
import {TestApi} from '../webapi.js';
import { VvDate } from '../components/vv-date.js';

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
        //请求
        TestApi().then(res => {
            console.log('webapi',res);
            this._formControls = [{"id":"CardDefault","type":"card","child":[]}];
            this.__tableConfig.map(t=>{
                if(t.category == "main"){
                    t.fields.map(f=>{
                        let con = {"id":t.table+"$"+f.name,"type":f.control,"labelName":f.title,"size":12}
                        this._formControls[0].child.push(con);  //default card container
                    });
                }else if(t.category == "detail"){
                    let table = {"id":t.table,"type":"table","labelName":t.name,"column":[]};
                    t.fields.map(f=>{
                        let col = {"type":f.control,"labelName":f.title,"id":t.table+""+f.name};
                        table.column.push(col);
                    });
                    this._formControls.push(table);
                }
            });
            console.log("default controls",this._formControls);
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
        render(){console.log("pg-form-design render")
            return html`<div class="page-content gray-bg">
        <div class="top-header panel panel-custom panel-white panel-shadow gutter-b">
            <div class="panel-text">page-top</div>
            <vv-button @click="${this.getFormData}">get data</vv-button>
        </div>
    
            <div class="main-content">
                <div class="row">
                    <div class="col-lg-12 nested-1" id="nestedDemo"><vv-edit-table></vv-edit-table>
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
            if(!this.__conIds.includes(con.id)){
                this.__conIds.push(con.id);
            }

                if(con.type === 'button'){
                    return html`<vv-button>test</vv-button>`
                }else if (con.type === 'input') {
                    return html`<div id="${con.id}" class="citem nested-1 col-sm-${con.size}">
                    <label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                        <div class="col-sm-9"><vv-input name="${con.id}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></vv-input></div>
                        ${this.selectedId===con.id?html`<vv-icon name="close-circle-fill" color="#ed5565" class="elem-delete"></vv-icon>`:""}
                    </div>`
                }else if (con.type === 'select') {
                    return html`<div id="${con.id}" class="citem nested-1 col-sm-${con.size}">
                    <label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                        <vv-select id="${con.id}" name="${con.id}" labelName="${con.labelName}" class="nested-1 col-sm-${con.size}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></vv-select>
                    </div>`
                }else if (con.type === 'date') {
                    return html`<vv-date id="${con.id}" name="${con.id}" labelName="${con.labelName}" class="nested-1 col-sm-${con.size}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></vv-date>`
                }else if (con.type === 'table') {
                    let column = JSON.stringify(con.column);
                    let tableData = JSON.stringify([{'no':'456','name':'test02','age':18},{'no':'789','name':'test03','age':38}]);
                    return html`<div id="${con.id}" class="citem nested-1" style="position:relative;">
                    <vv-edit-table name="${con.id}" labelName="${con.labelName}" editable column="${column}" data="${tableData}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></vv-edit-table>
                        ${this.selectedId === con.id ? html`<vv-icon name="close-circle-fill" color="#ed5565" class="elem-delete" style="right:3px"></vv-icon>`:""}
                    </div>`
                }else if (con.type === 'card') {
                    if (con.child) {
                    return html`<vv-card id="${con.id}" name="${con.id}" class="nested-1">${con.child.map(i => this.renderFormControl(i) )}</vv-card>`
                }else{
                    return html`<vv-card id="${con.id}" name="${con.id}" class="nested-1"></vv-card>`
                }
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
        console.log(this._formControls,this.__conIds)
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
            ,onUpdate:(evt)=>{this.onUpdateEvent(evt)},  //顶层容器只允许有行的排序
            onRemove:(evt)=>{this.onRemoveEvent(evt)},

            onMove:(evt,originalEvent)=>{this.onMoveEvent(evt,originalEvent)}
        });
        this._formControls.map(c=>{
            if(c.type=="card")
            {
                var card = this.shadowRoot.querySelector('[name="'+c.id+'"]');
                Sortable.create(card, {
                    group: 'nested',
                    draggable: '.nested-1',
                    dataIdAttr: c.id,
                    animation: 150
                    ,//onEnd:this.onEndEvent,
                    onAdd:this.onAddEvent,
                    onUpdate:(evt)=>{this.onUpdateEvent(evt)},
                    onRemove:(evt)=>{this.onRemoveEvent(evt)},

                    onMove:(evt,originalEvent)=>{this.onMoveEvent(evt,originalEvent)}
                });
            }
        });
    }
    fieldClickHandler(table,field,e){debugger
        console.log("fieldClickHandler",field);
        if(field.control == "input"){
            this._formControls.push({"id":table+"$"+field.name,"type":"input","labelName":field.title,"size":12});
        }
        this.requestUpdate();
    }
    conClickHandler(conId,e){debugger
        console.log("conClickHandler",conId);
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
        });
        this.requestUpdate();
    }



    onEndEvent(/**Event*/evt) {debugger
        console.log('end',evt.from,evt.to,evt.oldIndex,evt.newIndex)  //from = to （from/to表示外层）还在一个容器内
    }
    onAddEvent(/**Event*/evt) {debugger
        console.log('add',evt.from,evt.to,evt.oldIndex,evt.newIndex)
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
            if(v1.id === currentContainerId){
            // var swap = v1.child[evt.newIndex];
            // v1.child[evt.newIndex] = v1.child[evt.oldIndex];
            // v1.child[evt.oldIndex] = swap;
            let old = v1.child[evt.oldIndex];
            v1.child.splice(evt.oldIndex,1);
            v1.child.splice(evt.newIndex,0,old);
            return;
        }
    })
    }
    // 元素从列表中移除进入另一个列表
    onRemoveEvent(/**Event*/evt) {debugger
        console.log('remove',evt.from,evt.to,evt.oldIndex,evt.newIndex);
        //跨容器
        if(evt.from.id === "nestedDemo"){  //移入card
            this._formControls.forEach((v,i)=>{
                if(v.id === evt.to.id){  //card数据 加入新的
                v.child.splice(evt.newIndex,0,this._formControls[evt.oldIndex])
            }
        });
            //顶层老的删除
            data.splice(evt.oldIndex,1);
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
    }

    // 拖拽移动的时候
    onMoveEvent(/**Event*/evt, /**Event*/originalEvent) {
        //Card不能嵌套
        if(evt.dragged.id[0] == evt.to.id[0]) {
            console.log("card cannot to nested!");
            return false;
        }
    }
}
window.customElements.define('pg-form-design', PgFormDesign);