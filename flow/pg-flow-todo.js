import {LitElement, html,css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvTable } from '../components/vv-table.js';
import {WorkFlowTodoApi} from '../webapi.js';

class PgFlowTodo extends LitElement {
    static get styles() {
     return [
       coreCss,
       css`
.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav.nav-pills .nav-item {
    margin-right: 0.25rem;
}
.nav .nav-link {
    display: flex;
    align-items: center;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    padding: 0.75rem 1.5rem;
    color: #7E8299;
}
.nav-pills .nav-link {
    border-radius: 0.42rem;
}
.nav.nav-pills .nav-link {
    color: #B5B5C3;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    position: relative;
}
.nav.nav-pills .show > .nav-link, .nav.nav-pills .nav-link.active {
    color: #ffffff;
    background-color: #3699FF;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.nav.nav-pills .nav-link:after {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.nav-link:hover:not(.active) {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    color: #3699FF;
}
.nav-item a:hover {
  text-decoration: none; }
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
        WorkFlowTodoApi({page_num:1,page_size:20}).then(res => {
            console.log('todo',res);
            this._todoList = JSON.stringify(res.data.list);
            this.requestUpdate();
        });
    }
    render(){
        return html`
      <vv-card notitleborder title="我的流程">
        <div slot="card-toolbar">
			<ul class="nav nav-pills nav-pills-sm nav-dark-75">
				<li class="nav-item">
					<a class="nav-link py-2 px-4 ${this._todoTab?'active':''}" @click="${this.todoTabClick}" href="javascript:;">待审批</a>
				</li>
				<li class="nav-item">
					<a class="nav-link py-2 px-4 ${this._approvedTab?'active':''}" @click="${this.approvedTabClick}" href="javascript:;">已审批</a>
				</li>
				<li class="nav-item">
					<a class="nav-link py-2 px-4 ${this._applyedTab?'active':''}" @click="${this.applyedTabClick}" href="javascript:;">已提交</a>
				</li>
			</ul>
	    </div>
	    <vv-table id="todoTable" data="${this._todoList}" @pre-render="${this.tablePreRender}"></vv-table>
      </vv-card>
    `;
    }
    todoTabClick(){
        this._todoTab = true;
        this._approvedTab = false;
        this._applyedTab = false;
    }
    approvedTabClick(){
        this._todoTab = false;
        this._approvedTab = true;
        this._applyedTab = false;
        this.requestUpdate();
    }
    applyedTabClick(){
        this._todoTab = false;
        this._approvedTab = false;
        this._applyedTab = true;
    }
    tablePreRender(e){
        this.renderRoot.getElementById("todoTable").setColumn([{labelName:'流程编号',id:'orderNo'}
        ,{labelName:'流程名称',id:'processDisplayName'},
            {labelName:'流程启动时间',id:'orderCreateTime'},{labelName:'当前任务名称',id:'taskName'}
            ,{labelName:'任务创建时间',id:'taskCreateTime'}
            ,{labelName:'操作',id:'id',render:function(row){
                    return html`<a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
									<span class="svg-icon svg-icon-md svg-icon-primary">
										<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<rect x="0" y="0" width="24" height="24"></rect>
												<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"></path>
												<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
											</g>
										</svg>
										<!--end::Svg Icon-->
									</span>
								</a>`;
                }
            }])
    }
}
window.customElements.define('pg-flow-todo', PgFlowTodo);