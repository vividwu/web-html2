import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
export class SecHeaderTopbar extends LitElement {
    static get properties() {
        return {  id: String,
            menuRoot:String,
            menuSub1:String,
                show:  { type: Boolean }
        };
    }
    static get styles() {
        return [coreCss,css`
.btn.btn-icon.btn-lg, .btn-group-lg > .btn.btn-icon {
    height: calc(1.5em + 1.65rem + 2px);
    width: calc(1.5em + 1.65rem + 2px);
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn.btn-clean {
    color: #B5B5C3;
    background-color: transparent;
    border-color: transparent;
}
.btn.btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: calc(1.5em + 1.3rem + 2px);
    width: calc(1.5em + 1.3rem + 2px);
}
.btn.btn-icon .svg-icon {
    margin: 0;
    padding: 0;
}
.btn.btn-lg .svg-icon, .btn-group-lg > .btn .svg-icon {
    margin-right: 0.75rem;
}
.btn .svg-icon {
    margin-right: 0.5rem;
}
.btn.btn-lg .svg-icon svg, .btn-group-lg > .btn .svg-icon svg {
    height: 20px;
    width: 20px;
}

.svg-icon.svg-icon-xl svg {
    height: 2rem !important;
    width: 2rem !important;
}
.btn .svg-icon svg {
    height: 18px;
    width: 18px;
}
.svg-icon svg {
    height: 1.5rem;
    width: 1.5rem;
}
svg {
    overflow: hidden;
    vertical-align: middle;
}
.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.svg-icon.svg-icon-primary svg g [fill] {
    transition: fill 0.3s ease;
    fill: #3699FF !important;
}
.btn.btn-clean .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.topbar {
    display: flex;
    align-items: stretch;
    padding: 0;
}
.topbar .dropdown {
    display: flex;
    align-items: stretch;
}
:host{
    display: flex;
}
.dropup, .dropright, .dropdown, .dropleft {
    position: relative;
}
.topbar .topbar-item {
    display: flex;
    align-items: center;
}
.pulse {
    position: relative;
}
.pulse.pulse-primary .pulse-ring {
    border-color: rgba(54, 153, 255, 0.75);
}
.pulse .pulse-ring {
    display: block;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    position: absolute;
    animation: animation-pulse 3.5s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    border-width: 3px;
    border-style: solid;
    border-color: #E4E6EF;
}
@keyframes animation-pulse {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0.0; }
  60% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0.0; }
  65% {
    opacity: 1; }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0.0; } }
.w-auto {
    width: auto !important;
}
.w-auto {
    width: auto !important;
}

.align-items-center {
    align-items: center !important;
}
.font-size-base {
    font-size: 1rem;
}
.text-muted {
    color: #B5B5C3 !important;
}
.font-weight-bold {
    font-weight: 500 !important;
}
.d-none {
    display: none !important;
}
.d-md-inline {
    display: inline !important;
}
.text-dark-50 {
    color: #7E8299 !important;
}
.font-weight-bolder {
    font-weight: 600 !important;
}
.mr-3, .mx-3 {
    margin-right: 0.75rem !important;
}
.symbol {
    display: inline-block;
    flex-shrink: 0;
    position: relative;
    border-radius: 0.42rem;
}
.symbol.symbol-lg-35 .symbol-label {
    width: 35px;
    height: 35px;
}
.symbol .symbol-label {
    width: 50px;
    height: 50px;
}
.symbol.symbol-25 .symbol-label {
    width: 25px;
    height: 25px;
}
.symbol.symbol-light-success .symbol-label {
    background-color: #C9F7F5;
    color: #1BC5BD;
}
.symbol .symbol-label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #3F4254;
    background-color: #F3F6F9;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 0.42rem;
}
.font-size-h5 {
    font-size: 1.25rem !important;
}
        `
        ]
    }
    constructor() {
        super();
        this.type = "header-toolbar";
    }
    // get show() {
    //     return this._show;
    // }
    // set show(val) {debugger
    //     const {x, y, height} = this._target.getBoundingClientRect();
    //     console.log("popup show set ",this._target.clientWidth);
    //     //this.renderRoot.getElementById("popup").width = this._target.clientWidth;
    //     this._show = val;
    //     this.requestUpdate();
    // }

    render(){
        return html`<div class="topbar">
								<!--begin::Search-->
								<div class="dropdown" id="kt_quick_search_toggle">
									<!--begin::Toggle-->
									<div class="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
										<div class="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
											<span class="svg-icon svg-icon-xl svg-icon-primary">
												<!--begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg-->
												<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
														<path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" />
													</g>
												</svg>
												<!--end::Svg Icon-->
											</span>
										</div>
									</div>
									<!--end::Toggle-->
									<!--begin::Dropdown-->
									<!--end::Dropdown-->
								</div>
								<!--end::Search-->
								<!--begin::Notifications-->
								<div class="dropdown">
									<!--begin::Toggle-->
									<div class="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
										<div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">
											<span class="svg-icon svg-icon-xl svg-icon-primary">
												<!--begin::Svg Icon | path:assets/media/svg/icons/Code/Compiling.svg-->
												<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3" />
														<path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000" />
													</g>
												</svg>
												<!--end::Svg Icon-->
											</span>
											<span class="pulse-ring"></span>
										</div>
									</div>
									<!--end::Toggle-->
									<!--begin::Dropdown-->
									<!--end::Dropdown-->
								</div>
								<!--end::Notifications-->
								<!--begin::Cart-->
								<!--end::Cart-->
								<!--begin::Quick panel-->
								<div class="topbar-item">
									<div class="btn btn-icon btn-clean btn-lg mr-1" id="kt_quick_panel_toggle">
										<span class="svg-icon svg-icon-xl svg-icon-primary">
											<!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
													<path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
												</g>
											</svg>
											<!--end::Svg Icon-->
										</span>
									</div>
								</div>
								<!--end::Quick panel-->
								<!--begin::Languages-->
								<!--end::Languages-->
								<!--begin::User-->
								<div class="topbar-item">
									<div class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
										<span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
										<span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Sean</span>
										<span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
											<span class="symbol-label font-size-h5 font-weight-bold">S</span>
										</span>
									</div>
								</div>
								<!--end::User-->
							</div>`;
    }
    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {

    }
}
if(!customElements.get('sec-header-topbar')) {
    window.customElements.define('sec-header-topbar', SecHeaderTopbar);
}