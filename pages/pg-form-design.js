import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvInput } from '../components/vv-input.js';
import { VvButton } from '../components/vv-button.js';
import {Sortable} from '../sortable.core.esm-1.15.0.js';
import { VvTab } from '../components/vv-tab.js';
import { VvTabContent } from '../components/vv-tab-content.js';
import { VvSelect } from '../components/vv-select.js';

import {TestApi} from '../webapi.js';

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
        TestApi().then(res => console.log('webapi',res) )
        //{"success":true,"message":null,"data":[{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"费用发生部门","value":"occurs_dept_code","required":"y"},{"label":"合计费用","value":"amount","required":"y"},{"label":"报销原因","value":"reason","required":"n"}],"label":"费用报销单主表","value":"fm_fybx_info"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"费用项","value":"item_code","required":"n"},{"label":"发生日期","value":"occurs_time","required":"n"},{"label":"费用项金额","value":"qty","required":"y"}],"label":"费用报销单明细表","value":"fm_fybx_detail"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"经理意见","value":"fm_jingli_yijian","required":"n"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"}],"label":"","value":"fm_test"},{"children":[{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"},{"label":"经理意见","value":"fm_jingli_yijian","required":"n"},{"label":"申请单编号","value":"order_no","required":"y"},{"label":"申请人ID","value":"emp_id","required":"y"},{"label":"所在部门编码","value":"dept_code","required":"y"}],"label":"1","value":"fm_qingjia"}],"errCode":null,"ext":null};
        this.__tableConfig = [{
            "table": "bx_info",
            "name":"报销主表",
            "fields": [{"title": "申请单编号", "name": "order_no", "control": "input"}, {
                "title": "申请人ID",
                "name": "emp_id",
                "control": "input"
            }]
        }];
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
        this._formControls = [
            {"id":"g1","type":"card","child":[{"id":"v1","type":"input","labelName":"bianhao","size":12},{"id":"v4","type":"select","labelName":"gangwei","size":12}]},
            {"id":"v2","type":"input","labelName":"renyuan","size":12},
            {"id":"g3","type":"card","child":[{"id":"v3","type":"input","labelName":"bumen","size":12}]}]
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
                <div class="col-lg-12 nested-1" id="nestedDemo">
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
                return html`<vv-input name="${con.id}" labelName="${con.labelName}" class="nested-1 col-sm-${con.size}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></vv-input>`
            }else if (con.type === 'select') {
                return html`<vv-select name="${con.id}" labelName="${con.labelName}" class="nested-1 col-sm-${con.size}" @click="${(e)=>{this.conClickHandler(con.id,e)}}"></vv-select>`
            }else if (con.type === 'card') {
                if (con.child) {
                    return html`<vv-card name="${con.id}" class="nested-1">${con.child.map(i => this.renderFormControl(i) )}</vv-card>`
                }else{
                    return html`<vv-card name="${con.id}" class="nested-1"></vv-card>`
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
            if(key === "labelName"){
                return html`<div class="form-group row"><label>标签名:</label><vv-input noLabel value="${con[key]}" @veinput="${(e)=>{this.propertyInputHandler('labelName',con,e)}}"></vv-input></div>`
            }else if(key === "size"){
            return html`<div class="form-group row"><label>栅格格数:</label><vv-select noLabel @change="${(e)=>{this.propertyInputHandler('size',con,e)}}" value="${con[key]}"><vv-option value="2">2</vv-option><vv-option value="4">4</vv-option><vv-option value="6">6</vv-option><vv-option value="8">8</vv-option><vv-option value="12">12</vv-option></vv-select></div>`
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
    firstUpdated(changedProperties) {debugger
        let con = this.shadowRoot.getElementById('nestedDemo');
        Sortable.create(con, {
            group: 'nested',
            draggable: '.nested-1',
            animation: 150
            // ,onUpdate:onUpdateEvent,  //顶层容器只允许有行的排序
            // onRemove:onRemoveEvent,
            //
            // onMove:onMoveEvent
        });
        var g1 = this.shadowRoot.querySelector('[name="g1"]');
        Sortable.create(g1, {
            group: 'nested',
            draggable: '.nested-1',
            dataIdAttr: 'data-g1',
            animation: 150
            // ,onEnd:onEndEvent,
            // onMove:onMoveEvent,
            // onAdd:onAddEvent,
            // onUpdate:onUpdateEvent,
            // onRemove:onRemoveEvent,
            //
            // onMove:onMoveEvent
        });

        var g2 = this.shadowRoot.querySelector('[name="g2"]');
        Sortable.create(g2, {
            group: 'nested',
            draggable: '.nested-1',
            dataIdAttr: 'data-g2',
            animation: 150
            // ,onEnd:onEndEvent,
            // onMove:onMoveEvent,
            // onAdd:onAddEvent,
            // onUpdate:onUpdateEvent,
            // onRemove:onRemoveEvent,
            //
            // onMove:onMoveEvent
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
}
window.customElements.define('pg-form-design', PgFormDesign);