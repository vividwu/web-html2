import {LitElement, html, css} from '../lit-core.min.js';

class PgLogin extends LitElement {
    constructor() {
        super();
    }
    static get styles() {
        return [
            css`
:host {
    display: flex;
    max-width: 100%;
    flex: 0 0 100%;}
.login-aside {
    width: 100%;
    max-width: 600px;
}
.login-aside {
    background-color: #ffffff;
    box-shadow: 0px 0px 40px rgb(177 187 208 / 15%);
}
.flex-row-auto {
    flex: 0 0 auto;
}
.flex-column {
    flex-direction: column !important;
}

.flex-column-auto {
    flex: none;
}
.pt-lg-40, .py-lg-40 {
    padding-top: 10rem !important;
}
.pt-15, .py-15 {
    padding-top: 3.75rem !important;
}

.text-center {
    text-align: center !important;
}
.pt-lg-25, .py-lg-25 {
    padding-top: 6.25rem !important;
}
.max-h-70px {
    max-height: 70px !important;
}
img {
    vertical-align: middle;
    border-style: none;
}
.line-height-xl {
    line-height: 1.75 !important;
}
.font-size-h4 {
    font-size: 1.35rem !important;
}
.text-dark-50 {
    color: #7E8299 !important;
}
.font-weight-bolder {
    font-weight: 600 !important;
}

.pb-10, .py-10 {
    padding-bottom: 2.5rem !important;
}

.login-aside .aside-img {
    min-height: 550px !important;
    background-size: 630px;
}
.flex-row-fluid {
    flex: 1 auto;
    -ms-flex: 1 0 0px;
    min-width: 0;
}
.bgi-position-x-center {
    background-position-x: center;
}
.bgi-no-repeat {
    background-repeat: no-repeat;
}
.d-flex {
    display: flex !important;
}
.login-bg{
    background-position-y: calc(100% + 5rem);
    background-image: url(assets/svg/login-visual-5.svg)
}
            `]
    }
    render(){
        return html`<div class="login-aside d-flex flex-column flex-row-auto">
					<!--begin::Aside Top-->
					<div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
						<!--begin::Aside header-->
						<a href="#" class="login-logo text-center pt-lg-25 pb-10">
							<img src="assets/media/logos/logo-1.png" class="max-h-70px" alt="">
						</a>
						<!--end::Aside header-->
						<!--begin::Aside Title-->
						<h3 class="font-weight-bolder text-center font-size-h4 text-dark-50 line-height-xl">User Experience &amp; Interface Design
						<br>Strategy SaaS Solutions</h3>
						<!--end::Aside Title-->
					</div>
					<!--end::Aside Top-->
					<!--begin::Aside Bottom-->
					<div class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center" style="background-position-y: calc(100%+5rem); background-image: url(assets/svg/login-visual-5.svg)"></div>
					<!--end::Aside Bottom-->
				</div>
    `;
    }
}
window.customElements.define('pg-login', PgLogin);