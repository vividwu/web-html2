import {LitElement, html,css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
import { VvTable } from '../components/vv-table.js';
import { VvInput } from '../components/vv-input.js';
import { VvButton } from '../components/vv-button.js';
import { VvDrawer } from '../components/vv-drawer.js?v=0.2';
import { VvSwitch } from '../components/vv-switch.js';
import { VvAlert } from '../components/vv-alert.js';
import { VvSelect } from '../components/vv-select.js';
import {WorkFlowTodoApi} from '../webapi.js';

class PgFlowTemp extends LitElement {
    static get styles() {
     return [
       coreCss,
       css`
.w-md-700px {
    width: 700px !important;
}
.pt-lg-20, .py-lg-20 {
    padding-top: 5rem !important;
}
.mr-auto, .mx-auto {
    margin-right: auto !important;
}
.ml-auto, .mx-auto {
    margin-left: auto !important;
}
.flex-column-auto {
    flex: none;
}
.pl-10, .px-10 {
    padding-left: 2.5rem !important;
}
.pr-10, .px-10 {
    padding-right: 2.5rem !important;
}

.wizard.wizard-6 .wizard-content .wizard-nav {
    padding: 0;
}
.align-items-md-start {
    align-items: flex-start !important;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps {
    display: flex;
    align-items: center;
}
.flex-md-row {
    flex-direction: row !important;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step {
    padding: 0.75rem 0;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    margin-bottom: 1.5rem;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step[data-wizard-state="current"] {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.flex-grow-1 {
    flex-grow: 1 !important;
}
.pr-lg-7, .px-lg-7 {
    padding-right: 1.75rem !important;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step .wizard-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    min-width: 46px;
    height: 46px;
    border-radius: 12px;
    background-color: #F3F6F9;
    margin-right: 1rem;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step[data-wizard-state="current"] .wizard-icon {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    background-color: #C9F7F5;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step .wizard-icon .wizard-check {
    display: none;
    font-size: 1.4rem;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step[data-wizard-state="current"] .wizard-icon .wizard-check {
    color: #1BC5BD;
    display: none;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step .wizard-icon .wizard-number {
    font-weight: 600;
    color: #3F4254;
    font-size: 1.35rem;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step[data-wizard-state="current"] .wizard-icon .wizard-number {
    color: #1BC5BD;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step .wizard-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.mr-3, .mx-3 {
    margin-right: 0.75rem !important;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step[data-wizard-state="current"] .wizard-label .wizard-title {
    color: #181C32;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {
    color: #181C32;
    font-weight: 600;
    font-size: 1.24rem;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step[data-wizard-state="current"] .wizard-label .wizard-desc {
    color: #B5B5C3;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-desc {
    color: #B5B5C3;
    font-size: 0.925rem;
}

.pl-10, .px-10 {
    padding-left: 2.5rem !important;
}
.pr-10, .px-10 {
    padding-right: 2.5rem !important;
}
.wizard [data-wizard-type="step-content"][data-wizard-state="current"] {
    display: block;
}
.wizard [data-wizard-type="step-content"] {
    display: none;
}
.wizard.wizard-6 .wizard-content .wizard-nav .wizard-steps .wizard-step .wizard-wrapper {
    display: flex;
    align-items: center;
}
.pb-5, .py-5 {
    padding-bottom: 1.25rem !important;
}
.text-center {
    text-align: center !important;
}
.text-md-left {
    text-align: left !important;
}
.pb-lg-12, .py-lg-12 {
    padding-bottom: 3rem !important;
}
.pb-10, .py-10 {
    padding-bottom: 2.5rem !important;
}
.svg-icon svg {
    height: 1.5rem;
    width: 1.5rem;
}
.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.font-size-h2 {
    font-size: 1.75rem !important;
}
.text-dark {
    color: #181C32 !important;
}
.font-size-h4 {
    font-size: 1.35rem !important;
}

.text-muted {
    color: #B5B5C3 !important;
}
.font-weight-bold {
    font-weight: 500 !important;
}

.wizard[data-wizard-state="between"] [data-wizard-type="action-prev"] {
    display: inline-block;
}
.wizard[data-wizard-state="between"] [data-wizard-type="action-next"] {
    display: inline-block;
}
/*dialog*/
.form-box {
    margin-top: 20px;
    border-style: solid solid none;
    border-width: 1px 0px;
    color: inherit;
    border-color: #e7eaec;
    border-image: none;
    padding: 15px 20px 20px 20px;
}
/*table*/
table {
    border-collapse: collapse;
}
.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #3F4254;
    background-color: transparent;
}
th {
    text-align: inherit;
    text-align: -webkit-match-parent;
}
.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #EBEDF3;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #EBEDF3;
}
.table thead th, .table thead td {
  font-weight: 600;
  font-size: 1rem;
  border-bottom-width: 1px;
  padding-top: 1rem;
  padding-bottom: 1rem; }
  .table.table-head-custom thead tr, .table.table-head-custom thead th {
  font-weight: 600;
  color: #B5B5C3 !important;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem; }
  .table.table-vertical-center th, .table.table-vertical-center td {
  vertical-align: middle; }
  .table:not(.table-bordered) thead th, .table:not(.table-bordered) thead td {
  border-top: 0; }
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

        //model dialog
        this._modelDataList = [];
    }
    firstUpdated(changedProperties) {
        // WorkFlowTodoApi({page_num:1,page_size:20}).then(res => {
        //     console.log('todo',res);
        //     this._todoList = JSON.stringify(res.data.list);
        //     this.requestUpdate();
        // });
    }
    render(){
        return html`<div class="card card-custom">
	<div class="card-body p-0">
		<!--begin::Wizard 6-->
		<div class="wizard wizard-6 d-flex flex-column flex-lg-row flex-column-fluid" id="kt_wizard" data-wizard-state="first">
			<!--begin::Container-->
			<div class="wizard-content d-flex flex-column mx-auto py-10 py-lg-20 w-100 w-md-700px">
				<!--begin::Nav-->
				<div class="d-flex flex-column-auto flex-column px-10">
					<!--begin: Wizard Nav-->
					<div class="wizard-nav pb-lg-10 pb-3 d-flex flex-column align-items-center align-items-md-start">
						<!--begin::Wizard Steps-->
						<div class="wizard-steps d-flex flex-column flex-md-row">
							<!--begin::Wizard Step 1 Nav-->
							<div class="wizard-step flex-grow-1 flex-basis-0" data-wizard-type="step" data-wizard-state="current">
								<div class="wizard-wrapper pr-lg-7 pr-5">
									<div class="wizard-icon">
										<i class="wizard-check ki ki-check"></i>
										<span class="wizard-number">1</span>
									</div>
									<div class="wizard-label mr-3">
										<h3 class="wizard-title">Account</h3>
										<div class="wizard-desc">Account details</div>
									</div>
									<span class="svg-icon">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<polygon points="0 0 24 0 24 24 0 24"></polygon>
												<rect fill="#000000" opacity="0.3" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1"></rect>
												<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											</g>
										</svg>
									</span>
								</div>
							</div>
							<!--end::Wizard Step 1 Nav-->
							<!--begin::Wizard Step 2 Nav-->
							<div class="wizard-step flex-grow-1 flex-basis-0" data-wizard-type="step" data-wizard-state="pending">
								<div class="wizard-wrapper pr-lg-7 pr-5">
									<div class="wizard-icon">
										<i class="wizard-check ki ki-check"></i>
										<span class="wizard-number">2</span>
									</div>
									<div class="wizard-label mr-3">
										<h3 class="wizard-title">Address</h3>
										<div class="wizard-desc">Residential address</div>
									</div>
									<span class="svg-icon">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<polygon points="0 0 24 0 24 24 0 24"></polygon>
												<rect fill="#000000" opacity="0.3" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1"></rect>
												<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											</g>
										</svg>
									</span>
								</div>
							</div>
							<!--end::Wizard Step 2 Nav-->
							<!--begin::Wizard Step 3 Nav-->
							<div class="wizard-step flex-grow-1 flex-basis-0" data-wizard-type="step" data-wizard-state="pending">
								<div class="wizard-wrapper">
									<div class="wizard-icon">
										<i class="wizard-check ki ki-check"></i>
										<span class="wizard-number">3</span>
									</div>
									<div class="wizard-label">
										<h3 class="wizard-title">Complete</h3>
										<div class="wizard-desc">Submit form</div>
									</div>
								</div>
							</div>
							<!--end::Wizard Step 3 Nav-->
						</div>
						<!--end::Wizard Steps-->
					</div>
					<!--end: Wizard Nav-->
				</div>
				<!--end::Nav-->
				<!--begin::Form-->
				<form class="px-10 fv-plugins-bootstrap fv-plugins-framework" novalidate="novalidate" id="kt_form">
					<!--begin: Wizard Step 1-->
					<div class="pb-5" data-wizard-type="step-content">
						<!--begin::Title-->
						<div class="pb-10 pb-lg-12 text-center text-md-left">
							<h3 class="font-weight-bolder text-dark font-size-h2">流程定义</h3>
							<div class="text-muted font-weight-bold font-size-h4">Already have an Account ?
							<a href="custom/pages/login/login-4/signin.html" class="text-primary font-weight-bolder">Sign In</a></div>
						</div>
						<!--begin::Title-->
						<!--begin::Form Group-->
						<div class="form-group fv-plugins-icon-container has-success">
							<label class="font-size-h6 font-weight-bolder text-dark">流程名称</label>
							<vv-input name="firstname" placeholder="中文名称"></vv-input>
							<span class="form-text text-muted">Please enter your Address.</span>
						<div class="fv-plugins-message-container"></div></div>
						<!--end::Form Group-->
						<!--begin::Form Group-->
						<div class="form-group fv-plugins-icon-container has-success">
							<label class="font-size-h6 font-weight-bolder text-dark">流程编码</label>
							<vv-input name="firstname" placeholder="英文编码，流程编号前缀"></vv-input>
						<div class="fv-plugins-message-container"></div></div>
						<!--end::Form Group-->
					</div>
					<!--end: Wizard Step 1-->
					<!--begin: Wizard Step 2-->
					<div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
						<!--begin::Title-->
						<div class="pt-lg-0 pt-5 pb-15 text-center text-md-left">
							<h3 class="font-weight-bolder text-dark font-size-h2">模型定义</h3>
							<div class="text-muted font-weight-bold font-size-h4">Have a Different Address ?
							<a href="#" class="text-primary font-weight-bolder">Add Address</a></div>
						</div>
						<!--begin::Title-->
						<!--begin::Row-->
						<div class="row">
							<div class="col-xl-6">
								<!--begin::Input-->
								<div class="form-group fv-plugins-icon-container has-success">
									<label class="font-size-h6 font-weight-bolder text-dark">Address Line 1</label>
									<vv-button @click="${this.modelConfClickHandler}">配置模型</vv-button><vv-button>选择模型</vv-button></div>
								<!--end::Input-->
							</div>
							<div class="col-xl-6">
								<!--begin::Input-->
								<div class="form-group fv-plugins-icon-container has-success">
									<label class="font-size-h6 font-weight-bolder text-dark">Address Line 2</label>
									<input type="text" class="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6" name="address2" placeholder="Address Line 2" value="Address Line 2">
									<span class="form-text text-muted">Please enter your Address.</span>
								<div class="fv-plugins-message-container"></div></div>
								<!--end::Input-->
							</div>
						</div>
						<!--end::Row-->
					</div>
					<!--end: Wizard Step 2-->
					<!--begin: Wizard Step 3-->
					<div class="pb-5" data-wizard-type="step-content">
						<!--begin::Title-->
						<div class="pt-lg-0 pt-5 pb-15 text-center text-md-left">
							<h3 class="font-weight-bolder text-dark font-size-h2">Complete</h3>
							<div class="text-muted font-weight-bold font-size-h4">Complete Your Signup And Become A Member!</div>
						</div>
						<!--end::Title-->
						<!--begin::Section-->
						<h4 class="font-weight-bolder mb-3">Accoun Settings:</h4>
						<div class="text-dark-50 font-weight-bold line-height-lg mb-8">
							<div>Nick Stone</div>
							<div>+12233434-34</div>
							<div>nick.stone@gmail.com</div>
						</div>
						<!--end::Section-->
						<!--begin::Section-->
						<h4 class="font-weight-bolder mb-3">Address Details:</h4>
						<div class="text-dark-50 font-weight-bold line-height-lg mb-8">
							<div>Address Line 1</div>
							<div>Address Line 2</div>
							<div>Melbourne 3000, VIC, Australia</div>
						</div>
						<!--end::Section-->
						<!--begin::Section-->
						<h4 class="font-weight-bolder mb-3">Support Channels:</h4>
						<div class="text-dark-50 font-weight-bold line-height-lg">
							<div>Overnight Delivery with Regular Packaging</div>
							<div>Preferred Morning (8:00AM - 11:00AM) Delivery</div>
						</div>
						<!--end::Section-->
					</div>
					<!--end: Wizard Step 3-->
					<!--begin: Wizard Actions-->
					<div class="d-flex justify-content-between pt-7">
						<div class="mr-2">
							<button type="button" class="btn btn-light-primary font-weight-bolder font-size-h6 pr-8 pl-6 py-4 my-3 mr-3" data-wizard-type="action-prev">
							<span class="svg-icon svg-icon-md mr-2">
								<!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Left-2.svg-->
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<polygon points="0 0 24 0 24 24 0 24"></polygon>
										<rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000)" x="14" y="7" width="2" height="10" rx="1"></rect>
										<path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)"></path>
									</g>
								</svg>
								<!--end::Svg Icon-->
							</span>Previous</button>
						</div>
						<div>
							<button type="button" class="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3" data-wizard-type="action-submit">Submit
							<span class="svg-icon svg-icon-md ml-2">
								<!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Right-2.svg-->
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<polygon points="0 0 24 0 24 24 0 24"></polygon>
										<rect fill="#000000" opacity="0.3" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1"></rect>
										<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
									</g>
								</svg>
								<!--end::Svg Icon-->
							</span></button>
							<button type="button" class="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3" data-wizard-type="action-next">Next
							<span class="svg-icon svg-icon-md ml-2">
								<!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Right-2.svg-->
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<polygon points="0 0 24 0 24 24 0 24"></polygon>
										<rect fill="#000000" opacity="0.3" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1"></rect>
										<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
									</g>
								</svg>
								<!--end::Svg Icon-->
							</span></button>
						</div>
					</div>
					<!--end: Wizard Actions-->
				<div></div><div></div></form>
				<!--end::Form-->
			</div>
			<!--end::Container-->
		</div>
		<!--end::Wizard 6-->
	</div>
	<!--end::Wizard-->
</div>
<vv-drawer id="modelDlg" width="620" title="选择模型">
    <div class="row form-inline form-group">
		<div class="col-sm-4"><vv-input id="tableName" placeholder="模型标识fm_开头"></vv-input></div>
		<div class="col-sm-4"><vv-input id="tableMemo" placeholder="模型描述"></vv-input></div>
		<label class="col-sm-2 control-label" style="">是否主表</label>
		<div class="col-sm-2"><vv-switch id="isMain"/></vv-switch></div>
    </div>
    <div class="form-box row">
        <div class="col-md-5 col-md-offset-7">
		    <vv-button id="dlgRowAdd" @click="${this.addModelDataHandler}">添加数据</vv-button>
		    <vv-button id="dlgRowSave" @click="${this.createNewModelHandler}">保存数据</vv-button>
		</div>
    </div>
    <vv-alert title="模型字段限制">文本-不超过250字符数量；浮点数-不超过2位小数</vv-alert>
    <table class="table table-head-custom table-vertical-center">
        <thead><tr class="text-left"><th>字段ID</th><th>字段描述</th><th>字段类型</th><th>是否必填</th></tr></thead>
        <tbody>
            <tr>
                <td class="pr-0"><vv-input></vv-input></td><td class="pr-0"><vv-input></vv-input></td>
                <td class="pr-0"><vv-select><vv-option value="text">文本</vv-option><vv-option value="int">数值</vv-option></vv-select></td><td class="pr-0"><vv-switch></vv-switch></td>
            </tr>
            ${this._modelDataList.map(i => html`<tr>
                <td class="pr-0"><vv-input value="${i.fieldName}"></vv-input></td><td class="pr-0"><vv-input value="${i.memo}"></vv-input></td>
                <td class="pr-0"><vv-select defaultValue="${i.dataType}"><vv-option value="int">数值</vv-option><vv-option value="nvarchar">文本</vv-option></vv-select></td><td class="pr-0"><vv-switch></vv-switch></td>
            </tr>` ) }
        </tbody>
    </table>
    <div slot="footer"><vv-button>保存模型</vv-button></div>
</vv-drawer>
    `;
    }
    modelConfClickHandler(){
        this.renderRoot.getElementById("modelDlg").show = true;
    }
    addModelDataHandler(){
        this._modelDataList.push({"fieldName":"","memo":"","dataType":"nvarchar","allowNull":true});
        this.requestUpdate();
    }
    createNewModelHandler(){

    }
}
window.customElements.define('pg-flow-temp', PgFlowTemp);