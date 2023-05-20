import {LitElement, html, css} from '../lit-core.min.js';
import {AuthLoginApi,QueryString} from '../webapi.js?v=0.1';
import '../base64.js'
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
.fv-plugins-icon-container {
    position: relative;
}
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
/**/
h1, h2, h3, h4, h5, h6 {
    margin-top: 0px;
    margin-bottom: 0.5rem;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
.login-content {
    background-color: #F3F5F9;
}
.p-10 {
    padding: 2.5rem !important;
}
.text-right {
    text-align: right !important;
}
.justify-content-center {
    justify-content: center !important;
}
.flex-center {
    justify-content: center;
    align-items: center;
}
.login-form {
    width: 100%;
    max-width: 450px;
}

.font-size-h1-lg {
    font-size: 2rem !important;
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
}
.text-primary {
    color: #3699FF !important;
}
.form-group {
    margin-bottom: 1.75rem;
}

.font-size-h6 {
    font-size: 1.175rem !important;
}
label {
    display: inline-block;
    margin-bottom: 0.5rem;
}
.h-auto {
    height: auto !important;
}
.rounded-lg {
    border-radius: 0.85rem !important;
}
.border-0 {
    border: 0 !important;
}
.pb-7, .py-7 {
    padding-bottom: 1.75rem !important;
}
.pt-7, .py-7 {
    padding-top: 1.75rem !important;
}
.pl-6, .px-6 {
    padding-left: 1.5rem !important;
}
.pr-6, .px-6 {
    padding-right: 1.5rem !important;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 1.3rem + 2px);
    padding: 0.65rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3F4254;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #E4E6EF;
    border-radius: 0.42rem;
    box-shadow: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
input{outline:none;}
.fv-plugins-message-container {
    margin-top: 0.25rem;
}
.mt-n5, .my-n5 {
    margin-top: -1.25rem !important;
}
.justify-content-between {
    justify-content: space-between !important;
}
.fv-plugins-message-container {
    margin-top: 0.25rem;
}
.pb-lg-0, .py-lg-0 {
    padding-bottom: 0 !important;
}
.pb-5, .py-5 {
    padding-bottom: 1.25rem !important;
}
.pb-lg-15, .py-lg-15 {
    padding-bottom: 3.75rem !important;
}

a, button {
    outline: 0 !important;
}
a {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
a {
    color: #3699FF;
    text-decoration: none;
    background-color: transparent;
}
.btn {
    display: inline-block;
    font-weight: normal;
    color: #3F4254;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.65rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.42rem;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn.btn-primary {
    color: #FFFFFF;
    background-color: #3699FF;
    border-color: #3699FF;
}
.btn {
    outline: none !important;
    vertical-align: middle;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
button, select {
    text-transform: none;
}
.pl-8, .px-8 {
    padding-left: 2rem !important;
}
.pr-8, .px-8 {
    padding-right: 2rem !important;
}
.pb-4, .py-4 {
    padding-bottom: 1rem !important;
}
.pt-4, .py-4 {
    padding-top: 1rem !important;
}
.mb-3, .my-3 {
    margin-bottom: 0.75rem !important;
}
.mr-3, .mx-3 {
    margin-right: 0.75rem !important;
}
.mt-3, .my-3 {
    margin-top: 0.75rem !important;
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
				
				<div class="login-content flex-row-fluid d-flex flex-column p-10">
					<!--begin::Top-->
					<!--end::Top-->
					<!--begin::Wrapper-->
					<div class="d-flex flex-row-fluid flex-center">
						<!--begin::Signin-->
						<div class="login-form">
							<!--begin::Form-->
							<div class="form fv-plugins-bootstrap fv-plugins-framework" id="kt_login_singin_form">
								<!--begin::Title-->
								<div class="pb-5 pb-lg-15">
									<h3 class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">Sign In</h3>
									<div class="text-muted font-weight-bold font-size-h4">New Here?
									<a href="custom/pages/login/login-3/signup.html" class="text-primary font-weight-bolder">Create Account</a></div>
								</div>
								<!--begin::Title-->
								<!--begin::Form group-->
								<div class="form-group fv-plugins-icon-container">
									<label class="font-size-h6 font-weight-bolder text-dark">Your Email</label>
									<input class="form-control h-auto py-7 px-6 rounded-lg border-0" type="text" id="username" name="username" autocomplete="off">
								<div class="fv-plugins-message-container"></div></div>
								<!--end::Form group-->
								<!--begin::Form group-->
								<div class="form-group fv-plugins-icon-container">
									<div class="d-flex justify-content-between mt-n5">
										<label class="font-size-h6 font-weight-bolder text-dark pt-5">Your Name</label>
										<a href="custom/pages/login/login-3/forgot.html" class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5">Forgot Password ?</a>
									</div>
									<input class="form-control h-auto py-7 px-6 rounded-lg border-0" type="password" id="password" name="password" autocomplete="off">
								<div class="fv-plugins-message-container"></div></div>
								<!--end::Form group-->
								<!--begin::Action-->
								<div class="pb-lg-0 pb-5">
									<button type="submit" id="kt_login_singin_form_submit_button" @click="${this.loginHandler}" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">Sign In</button>
									
								</div>
								<!--end::Action-->
							<input type="hidden"><div></div></div>
							<!--end::Form-->
						</div>
						<!--end::Signin-->
					</div>
					<!--end::Wrapper-->
				</div>
    `;
    }
    loginHandler() {debugger
        let params = {username:this.renderRoot.getElementById("username").value,password:this.renderRoot.getElementById("password").value};
        AuthLoginApi(params).then(res => {
            console.log('login token',res);debugger
            VvMessage.info("登录成功");
            window.sessionStorage.setItem("access_token", res.data.access_token);  //TODO  是否有必要兼容低版本ie?
            var uiStr = Base64.decode(res.data.access_token.split('.')[1]);
            var tokenObj = eval("("+uiStr+")");
            window.sessionStorage.setItem('user_info','{"uid":'+tokenObj.uid+',"uname":"'+tokenObj.uname+'","displayName":"'+tokenObj.udisplay+'"}');
            var redirect = QueryString("state");
            location.href = (redirect?unescape(redirect):"home");
        }).catch(err => {
            console.log('login err',err)
        });
    }
}
window.customElements.define('pg-login', PgLogin);