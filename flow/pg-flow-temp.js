import {LitElement, html,css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvTable } from '../components/vv-table.js';
import {WorkFlowTodoApi} from '../webapi.js';

class PgFlowTemp extends LitElement {
    static get styles() {
     return [
       coreCss,
       css`
            `]
    }
    constructor() {
        super();
        this._todoTab = true;
        this._approvedTab = false;
        this._applyedTab = false;
        // this._tableColumns = JSON.stringify([{labelName:'流程编号',id:'orderNo'},{labelName:'流程名称',key:'processDisplayName'},
        //     {labelName:'流程启动时间',id:'orderCreateTime'},{labelName:'当前任务名称',id:'taskName'}
        //     ,{labelName:'任务创建时间',id:'taskCreateTime'},{labelName:'当前任务名称',id:'taskName'}]);
        this._todoList = [];
    }
    firstUpdated(changedProperties) {
        // WorkFlowTodoApi({page_num:1,page_size:20}).then(res => {
        //     console.log('todo',res);
        //     this._todoList = JSON.stringify(res.data.list);
        //     this.requestUpdate();
        // });
    }
    render(){
        return html`
    `;
    }
}
window.customElements.define('pg-flow-temp', PgFlowTemp);