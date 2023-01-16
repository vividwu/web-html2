import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvDialog } from '../components/vv-dialog.js';
import { VvButton } from '../components/vv-button.js';
import { VvInput } from '../components/vv-input.js';
import { VvTreeview } from '../components/vv-treeview.js';
import { VvDropdownButton } from '../components/vv-dropdown-button.js';
import { VvDropdownItem } from '../components/vv-dropdown-item.js';
import { VvUpload } from '../components/vv-upload.js?id=1';
import { VvTable } from '../components/vv-table.js';
import {SendMailGetNodeApi,SendMailTestNodeApi} from '../webapi.js';
import { VvTag } from '../components/vv-tag.js';
class PgSendMail extends LitElement {
    static get properties() {
        return {  successList: Array
        };
    }
    constructor() {
        super();
        this.successList = [];
        this._todoList = [];
        let that = this;
        this._colums = [{labelName:'工号',id:'工号'}
            ,{labelName:'邮箱',id:'邮箱'},
            {labelName:'用餐天数',id:'用餐天数'},{labelName:'考勤到21点天数',id:'考勤到21点天数'}
            ,{labelName:'个人需交费份数',id:'个人需交费份数'} ,{labelName:'应缴纳金额',id:'应缴纳金额'}
            ,{labelName:'操作',id:'id',render:function(row){debugger
                    return html`<a href="javascript:void();" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3" @click="${()=>{that.previewDialogClick(row)}}">预览</a>`;
                }
            }];
        this._template = "";
        this._currentRowInfo = {};
    }
    static get styles() {
        return [
            coreCss,css`
        `
        ]
    }
    render(){
        return html`<vv-card title="美餐付费邮件">
    <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10"><vv-button @click="${this.templateDialogClick}">查看邮件模板</vv-button></div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label text-sm-right">发件人邮箱</label>
        <div class="col-sm-4"><vv-input value="wanghong@cyou-inc.com" disabled></vv-input></div>
        <label class="col-sm-2 col-form-label text-sm-right">邮件标题</label>
        <div class="col-sm-4"><vv-input id="subjectTxt" placeholder="【晚餐待自付】xx-xx月晚餐自付缴费通知"></vv-input></div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label text-sm-right">上传Excel</label>
        <div class="col-sm-10"><vv-upload text="点击上传" uploadingText="上传中..." addMoreText="上传更多" data="${this._todoList}" @vesuccess="${this.uploadOkHandler}"></vv-upload></div>
    </div>
    <div class="form-group row">
    <label class="col-sm-2 col-form-label text-sm-right">已发送</label>
    <div class="col-sm-10 pt-2">${this.successList.map(i => html`<vv-tag class="mr-2" tagType="warning">${i}</vv-tag>`)}</div>
    </div>
    <div class="form-group row">
        <vv-table id="todoTable" data="${this._todoList}"></vv-table>
    </div>
</vv-card>
<vv-dialog title="邮件内容预览" id="templateDialog">
<div id="templateMail"></div>
</vv-dialog>
<vv-dialog title="邮件内容预览" id="previewDialog">
<div id="previewMail"></div>
<div slot="footer"><vv-button @click="${this.sendMailHandler}">发送</vv-button></div></vv-dialog>
`;
    }
    previewDialogClick(row){
        this.renderRoot.getElementById("previewDialog").show = true;
        console.log("row",row);
        this._currentRowInfo = row;
        let newTemp = this._template;
        this._colums.forEach(function(v,i){debugger
            newTemp = newTemp.replace("${"+v.labelName+"}",row[v.labelName]);
        });
        this.renderRoot.getElementById("previewMail").innerHTML = newTemp;
    }
    templateDialogClick(){
        this.renderRoot.getElementById("templateDialog").show = true;
    }
    firstUpdated(changedProperties) {
        this.renderRoot.getElementById("todoTable").setColumn(this._colums);
        SendMailGetNodeApi({}).then(res => {
            console.log('template',res);debugger
            this._template = res.data.template;
            this.renderRoot.getElementById("templateMail").innerText = this._template;
            //this.requestUpdate();
        });
    }
    uploadOkHandler(e){
        debugger
        console.log("upload data",e);
        this._todoList = JSON.stringify(e.detail.value);
        this.requestUpdate();
    }
    sendMailHandler(){
        if(this.renderRoot.getElementById("subjectTxt").value.length == 0){
            VvMessage.error("请填写邮件标题！");
            return;
        }
        let params = [];
        params.push({"from":"wanghong@cyou-inc.com","to":this._currentRowInfo["邮箱"],"title":this.renderRoot.getElementById("subjectTxt").value,"data":this._currentRowInfo });
        console.log("params",params);
        SendMailTestNodeApi(params).then(res => {
            console.log('send mail',res);debugger
            VvMessage.info("发送成功");
            this.renderRoot.getElementById("previewDialog").show = false;
            this.successList.push(this._currentRowInfo["工号"]);
            this.requestUpdate();
        });
    }
}
window.customElements.define('pg-send-mail', PgSendMail);