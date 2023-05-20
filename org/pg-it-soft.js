import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvDialog } from '../components/vv-dialog.js';
import { VvButton } from '../components/vv-button.js';
import { VvInput } from '../components/vv-input.js';
import { VvTreeview } from '../components/vv-treeview.js';
import { VvDropdownButton } from '../components/vv-dropdown-button.js';
import { VvDropdownItem } from '../components/vv-dropdown-item.js';
import { VvUpload } from '../components/vv-upload.js?v=0.1';
import { VvTable } from '../components/vv-table.js';
import {GetSoftListApi} from '../webapi.js';
import { VvTag } from '../components/vv-tag.js';
import { VvPagination } from '../components/vv-pagination.js?v=0.1';

class PgItSoft extends LitElement {
    static get properties() {
        return {  successList: Array
        };
    }
    constructor() {
        super();
        this.successList = [];
        this._todoList = [];
        let that = this;
        this._colums = [{labelName:'工号',id:'empNo'}
            ,{labelName:'软件名称',id:'softName'},
            {labelName:'软件版本',id:'softVersion'}
            ];
        this._template = "";
        this._currentRowInfo = {};
    }
    static get styles() {
        return [
            coreCss,css`
            .pager{flex: 0 0 100%;}
        `
        ]
    }
    render(){
        return html`<vv-card title="查询员工安装软件">
    <div class="form-group row">
        <label class="col-sm-1 col-form-label text-sm-right">上传Excel</label>
        <div class="col-sm-11">
        <vv-upload text="点击上传" uploadingText="上传中..." addMoreText="上传更多" data="${this._todoList}" @vesuccess="${this.uploadOkHandler}" url="http://10.12.28.45:10380/oauth/it/soft/import/123"></vv-upload>
        <span>仅支持ZIP格式</span>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-1 col-form-label text-sm-right">工号</label>
        <div class="col-sm-2"><vv-input id="empNo"></vv-input></div>
        <label class="col-sm-1 col-form-label text-sm-right">软件名称</label>
        <div class="col-sm-2"><vv-input id="softName"></vv-input></div>
        <label class="col-sm-1 col-form-label text-sm-right">版本号</label>
        <div class="col-sm-2"><vv-input id="softVersion"></vv-input></div>
        <div class="col-sm-3"><vv-button @click="${this.getListClickHandler}">查询</vv-button></div>
    </div>
    <div class="form-group row">
    <div class="col-sm-12 pt-2">${this.successList.map(i => html`<vv-tag class="mr-2" tagType="warning">${i}</vv-tag>`)}</div>
    </div>
    <div class="form-group row">
        <vv-table id="todoTable" data="${this._todoList}"></vv-table>
        <div class="text-center pager">
        <vv-pagination id="pager" pagesize=10 @change="${this.changeHandler}"></vv-pagination></div>
    </div>
</vv-card>
`;
    }
    firstUpdated(changedProperties) {
        this.renderRoot.getElementById("todoTable").setColumn(this._colums);
    }
    uploadOkHandler(e){
        debugger
        console.log("upload data",e);
        this._todoList = JSON.stringify(e.detail.value);
        this.requestUpdate();
    }
    getListClickHandler(){
        this.getPageData(1);
    }
    getPageData(current){
        GetSoftListApi({empNo:this.renderRoot.getElementById("empNo").value,
            softName:this.renderRoot.getElementById("softName").value,
            softVersion:this.renderRoot.getElementById("softVersion").value,pagenum:current,pagesize:10}).then(res => {
            if(res.data.list)
            {
                this._todoList = JSON.stringify(res.data.list);
                this.renderRoot.getElementById("pager").total = res.data.total;
                this.requestUpdate();
            }
        })
    }
    changeHandler(e){
        this.getPageData(e.detail.current);
    }
}
window.customElements.define('pg-it-soft', PgItSoft);