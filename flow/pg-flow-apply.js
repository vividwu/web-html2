import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvInput } from '../components/vv-input.js';
import { VvButton } from '../components/vv-button.js';
import { VvTab } from '../components/vv-tab.js';
import { VvTabContent } from '../components/vv-tab-content.js';
import { VvSelect } from '../components/vv-select.js';
import {VvIcon } from '../components/vv-icon.js'
import { CcOrderInfo } from '../components/cc-order-info.js'
import {TestApi} from '../webapi.js';

class PgFlowApply extends LitElement {
    static get properties() {
        return {
            id: String
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
        this._formControls = [];
        //请求
        TestApi().then(res => {
            console.log('webapi',res) ;
            this._formControls = [
                {"id":"g1","type":"card","child":[{"id":"bx_info$bill_code","type":"cc-orderinfo","labelName":"单据编号","size":12},{"id":"v1","type":"input","labelName":"bianhao","size":12},{"id":"v4","type":"select","labelName":"gangwei","size":12}]},
                {"id":"v2","type":"input","labelName":"renyuan","size":12},
                {"id":"g3","type":"card","child":[{"id":"v3","type":"input","labelName":"bumen","size":12}]}];
            this.requestUpdate();
        });
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
    render(){console.log("pg-flow-apply render")
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
            return html`<div class="citem col-sm-${con.size}">
                <label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                    <div class="col-sm-9"><vv-input name="${con.id}"></vv-input></div>
                </div>`
        }else if (con.type === 'cc-orderinfo') {
            return html`<div class="citem col-sm-${con.size}">
                <label class="col-sm-3 col-form-label text-sm-right">${con.labelName}</label>
                    <div class="col-sm-9"><cc-order-info name="${con.id}" formType="apply" flowCode="bx2"></cc-order-info></div>
                </div>`
        }else if (con.type === 'select') {
            return html`<vv-select name="${con.id}" labelName="${con.labelName}" class="nested-1 col-sm-${con.size}"></vv-select>`
        }else if (con.type === 'card') {
            if (con.child) {
                return html`<vv-card name="${con.id}" class="nested-1">${con.child.map(i => this.renderFormControl(i) )}</vv-card>`
            }else{
                return html`<vv-card name="${con.id}" class="nested-1"></vv-card>`
            }
        }
        // });
    }

    getFormData(){
        console.log(this._formControls,this.__conIds)
    }
    firstUpdated(changedProperties) {debugger

    }
}
window.customElements.define('pg-flow-apply', PgFlowApply);