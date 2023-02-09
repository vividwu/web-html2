import {LitElement, html, css} from '../lit-core.min.js';
import {SecHeaderMenu} from './sec-header-menu.js';
import {SecHeaderTopbar} from './sec-header-topbar.js';
import {indexCss} from '../components/vv-css-index.js';
class PgIndex extends LitElement {
    constructor() {
        super();
    }
    static get styles() {
        return [indexCss,
            css`
/*:host {
    padding: 0 25px;
	width: 100%;
    margin-right: auto;
    margin-left: auto;
}
:host {
    max-width: 1340px;
}*/
/*
:host{
flex: 1 0 auto;
display: flex !important;

    padding: 0 25px;
	width: 100%;
    margin-right: auto;
    margin-left: auto;
    
    max-width: 1340px;
}*/
:host{
    max-width: 100%;
    flex: 0 0 100%;
}
.subheader {
    position: fixed;
    height: 54px;
    top: 65px;
    left: 0;
    right: 0;
    transition: top 0.3s ease;
    z-index: 95;
    box-shadow: 0px 10px 30px 0px rgb(82 63 105 / 8%);
    background-color: #ffffff;
    border-top: 1px solid #EBEDF3;
    margin: 0;
}
.wrapper {
    padding-top: 119px;
}
.content-wrapper{
    padding: 0 25px;
	width: 100%;
    margin-right: auto;
    margin-left: auto;
    
    max-width: 1340px;
}
        `
        ]
    }
    render(){
        return html`<!--begin::Wrapper-->
			<div class="d-flex flex-column flex-row-fluid wrapper" style="display:flex;height:100%;flex-direction:column;"><!--begin::Header-->
				<div id="kt_header" class="header header-fixed">
					<!--begin::Container-->
					<div class="container-fluid d-flex align-items-stretch justify-content-between">
						<!--begin::Header Menu Wrapper-->
						<div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
							<!--begin::Header Menu-->
							<sec-header-menu></sec-header-menu>
							<!--end::Header Menu-->
						</div>
						<!--end::Header Menu Wrapper-->
						<!--begin::Topbar-->
						<sec-header-topbar></sec-header-topbar>
						<!--end::Topbar-->
					</div>
					<!--end::Container-->
				</div>
				<!--end::Header-->
				<!--begin::Content-->
				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					<!--begin::Subheader-->
					<div class="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
						<div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
							<!--begin::Info-->
							<div class="d-flex align-items-center flex-wrap mr-1">
								<!--begin::Page Heading-->
								<div class="d-flex align-items-baseline flex-wrap mr-5">
									<!--begin::Page Title-->
									<h5 class="text-dark font-weight-bold my-1 mr-5">Label</h5>
									<!--end::Page Title-->
									<!--begin::Breadcrumb-->
									<ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
										<li class="breadcrumb-item">
											<a href="" class="text-muted">Features</a>
										</li>
										<li class="breadcrumb-item">
											<a href="" class="text-muted">Custom</a>
										</li>
										<li class="breadcrumb-item">
											<a href="" class="text-muted">Label</a>
										</li>
									</ul>
									<!--end::Breadcrumb-->
								</div>
								<!--end::Page Heading-->
							</div>
							<!--end::Info-->
							<!--begin::Toolbar-->
							<!--end::Toolbar-->
						</div>
					</div>
					<!--end::Subheader-->
					<!--begin::Entry-->
						<!--begin::Container-->
						<div class="content-wrapper"><slot></slot></div>
						<!--end::Container-->
					<!--end::Entry-->
				</div>
				<!--end::Content-->
				<!--begin::Footer-->
				<div class="footer bg-white py-4" style="flex:0 0 auto;" id="kt_footer">
					<!--begin::Container-->
					<div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
						<!--begin::Copyright-->
						<div class="text-dark order-2 order-md-1">
							<span class="text-muted font-weight-bold mr-2">2020©</span>
							<a href="http://keenthemes.com/metronic" target="_blank" class="text-dark-75 text-hover-primary">Keenthemes</a>
						</div>
						<!--end::Copyright-->
						<!--begin::Nav-->
						<div class="nav nav-dark">
							<a href="http://keenthemes.com/metronic" target="_blank" class="nav-link pl-0 pr-5">About</a>
							<a href="http://keenthemes.com/metronic" target="_blank" class="nav-link pl-0 pr-5">Team</a>
							<a href="http://keenthemes.com/metronic" target="_blank" class="nav-link pl-0 pr-0">Contact</a>
						</div>
						<!--end::Nav-->
					</div>
					<!--end::Container-->
				</div>
				<!--end::Footer-->
			</div>
			<!--end::Wrapper-->
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        console.log("index.js => do framework in here","router before");
        let act = window.sessionStorage.getItem("user_info");
        if(act == null){
            window.location.href = "/login";
        }
    }
}
window.customElements.define('pg-index', PgIndex);