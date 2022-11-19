import {LitElement, html, css} from './lit-core.min.js';
import { coreCss } from './vv-css.js';
import PerfectScrollbar from './perfect-scrollbar.esm-1.5.3.js';

export class VvDrawer extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            value: String,
            text: String,
            show:  { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
              /*ki.css*/
  @font-face {
  font-family: "Ki";
  src: url("/assets/plugins/global/fontsKi.eot");
  src: url("/assets/plugins/global/Ki.eot?#iefix") format("embedded-opentype"),
       url("/assets/plugins/global/.woff") format("woff"),
       url("/assets/plugins/global/.ttf") format("truetype"),
       url("/assets/plugins/global/.svg#Ki") format("svg");
  font-weight: normal;
  font-style: normal;
}
.ki {
    font-size: 1rem;
}
.ki:before {
    font-family: "Ki";
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: 1;
    text-decoration: inherit;
    text-rendering: optimizeLegibility;
    text-transform: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
}
  .ki-close:before { content: "\\f130"; }
  /*end ki.css*/

.btn.btn-hover-primary:hover:not(.btn-text):not(:disabled):not(.disabled), .btn.btn-hover-primary:focus:not(.btn-text), .btn.btn-hover-primary.focus:not(.btn-text) {
  color: #FFFFFF !important;
  background-color: #3699FF !important;
  border-color: #3699FF !important; }
  .btn.btn-hover-primary:hover:not(.btn-text):not(:disabled):not(.disabled) i, .btn.btn-hover-primary:focus:not(.btn-text) i, .btn.btn-hover-primary.focus:not(.btn-text) i {
    color: #FFFFFF !important; }
  .btn.btn-hover-primary:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg g [fill], .btn.btn-hover-primary:focus:not(.btn-text) .svg-icon svg g [fill], .btn.btn-hover-primary.focus:not(.btn-text) .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #FFFFFF !important; }
  .btn.btn-hover-primary:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg:hover g [fill], .btn.btn-hover-primary:focus:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-hover-primary.focus:not(.btn-text) .svg-icon svg:hover g [fill] {
    transition: fill 0.3s ease; }
  .btn.btn-hover-primary:hover:not(.btn-text):not(:disabled):not(.disabled).dropdown-toggle:after, .btn.btn-hover-primary:focus:not(.btn-text).dropdown-toggle:after, .btn.btn-hover-primary.focus:not(.btn-text).dropdown-toggle:after {
    color: #FFFFFF !important; }

.btn.btn-hover-primary:not(:disabled):not(.disabled):active:not(.btn-text), .btn.btn-hover-primary:not(:disabled):not(.disabled).active,
.show > .btn.btn-hover-primary.dropdown-toggle,
.show .btn.btn-hover-primary.btn-dropdown {
  color: #FFFFFF !important;
  background-color: #3699FF !important;
  border-color: #3699FF !important; }
  .btn.btn-hover-primary:not(:disabled):not(.disabled):active:not(.btn-text) i, .btn.btn-hover-primary:not(:disabled):not(.disabled).active i,
  .show > .btn.btn-hover-primary.dropdown-toggle i,
  .show .btn.btn-hover-primary.btn-dropdown i {
    color: #FFFFFF !important; }
  .btn.btn-hover-primary:not(:disabled):not(.disabled):active:not(.btn-text) .svg-icon svg g [fill], .btn.btn-hover-primary:not(:disabled):not(.disabled).active .svg-icon svg g [fill],
  .show > .btn.btn-hover-primary.dropdown-toggle .svg-icon svg g [fill],
  .show .btn.btn-hover-primary.btn-dropdown .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #FFFFFF !important; }
  .btn.btn-hover-primary:not(:disabled):not(.disabled):active:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-hover-primary:not(:disabled):not(.disabled).active .svg-icon svg:hover g [fill],
  .show > .btn.btn-hover-primary.dropdown-toggle .svg-icon svg:hover g [fill],
  .show .btn.btn-hover-primary.btn-dropdown .svg-icon svg:hover g [fill] {
    transition: fill 0.3s ease; }
  .btn.btn-hover-primary:not(:disabled):not(.disabled):active:not(.btn-text).dropdown-toggle:after, .btn.btn-hover-primary:not(:disabled):not(.disabled).active.dropdown-toggle:after,
  .show > .btn.btn-hover-primary.dropdown-toggle.dropdown-toggle:after,
  .show .btn.btn-hover-primary.btn-dropdown.dropdown-toggle:after {
    color: #FFFFFF !important; }

.btn.btn-hover-primary.btn-clean {
  border: 0 !important; }
              
              .offcanvas,
.offcanvas-mobile {
  flex-shrink: 0 !important; }
  .offcanvas .offcanvas-header.offcanvas-header-navs,
  .offcanvas-mobile .offcanvas-header.offcanvas-header-navs {
    position: relative; }
    .offcanvas .offcanvas-header.offcanvas-header-navs .offcanvas-close,
    .offcanvas-mobile .offcanvas-header.offcanvas-header-navs .offcanvas-close {
      position: absolute;
      top: 0;
      right: 0; }
  .offcanvas .offcanvas-content .offcanvas-demo,
  .offcanvas-mobile .offcanvas-content .offcanvas-demo {
    border: 5px solid #EBEDF3; }
    .offcanvas .offcanvas-content .offcanvas-demo.offcanvas-demo-active,
    .offcanvas-mobile .offcanvas-content .offcanvas-demo.offcanvas-demo-active {
      border: 5px solid #3699FF; }

.offcanvas {
  background-color: #ffffff;
  box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.25); }

@media (max-width: 991.98px) {
  .offcanvas-mobile {
    background-color: #ffffff;
    box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.25);
    overflow: auto; } }

.offcanvas {
  z-index: 1001;
  position: fixed;
  top: 0;
  bottom: 0;
  transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;
  left: -395px;
  width: 375px; }
  .offcanvas.offcanvas-on {
    transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;
    left: 0; }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .offcanvas {
      transition: none !important; } }
      
            .offcanvas.offcanvas-right {
  right: -395px;
  left: auto; }
  .offcanvas.offcanvas-right.offcanvas-on {
    transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;
    right: 0;
    left: auto; }

.offcanvas-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 1000;
  animation: animation-offcanvas-fade-in .6s ease 1; }

@keyframes animation-offcanvas-fade-in {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

.offcanvas {
  background: #ffffff;
  box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.25); }

.offcanvas-overlay {
  background: rgba(0, 0, 0, 0.1); }

@media (max-width: 425px) {
  .offcanvas {
    width: 90% !important; } }

@media (max-width: 991.98px) {
  [data-offcanvas-offcanvas=on] {
    overflow: hidden !important; } }

@media (max-width: 991.98px) {
  .offcanvas-mobile {
    z-index: 1001;
    position: fixed;
    top: 0;
    bottom: 0;
    transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;
    left: -395px;
    width: 375px; }
    .offcanvas-mobile.offcanvas-mobile-on {
      transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;
      left: 0; } }
  @media screen and (max-width: 991.98px) and (-ms-high-contrast: active), (max-width: 991.98px) and (-ms-high-contrast: none) {
    .offcanvas-mobile {
      transition: none !important; } }

@media (max-width: 991.98px) {
  .offcanvas-mobile.offcanvas-mobile-right {
    right: -395px;
    left: auto; }
    .offcanvas-mobile.offcanvas-mobile-right.offcanvas-mobile-on {
      transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;
      right: 0;
      left: auto; }
  .offcanvas-mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    z-index: 1000;
    animation: animation-offcanvas-fade-in .6s ease 1; }
  @keyframes animation-offcanvas-fade-in {
    from {
      opacity: 0; }
    to {
      opacity: 1; } }
  .offcanvas-mobile {
    background: #ffffff;
    box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.25); }
  .offcanvas-mobile-overlay {
    background: rgba(0, 0, 0, 0.1); } }

@media (max-width: 425px) {
  .offcanvas-mobile {
    width: 90% !important; } }

@media (max-width: 991.98px) {
  [data-offcanvas-offcanvas-mobile=on] {
    overflow: hidden !important; } }
        `
        ]
    }
    constructor() {
        super();
        this.type = "drawer";
        this.show = false
    }
    render(){debugger
        return html`<div id="kt_demo_panel" class="offcanvas offcanvas-right p-10 ${this.show?'offcanvas-on':''}">
    <!--begin::Header-->
    <div class="offcanvas-header d-flex align-items-center justify-content-between pb-7" kt-hidden-height="47" style="">
    <h4 class="font-weight-bold m-0">Select A Demo</h4>
        <a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_demo_panel_close">
            <i class="ki ki-close icon-xs text-muted"></i>
        </a>
    </div>
    <!--end::Header-->
    <!--begin::Content-->
    <div class="offcanvas-content">
    <!--begin::Wrapper-->
    <div id="container" class="offcanvas-wrapper mb-5 scroll-pull scroll" style="overflow: hidden;">

    <slot></slot>

</div>
<!--end::Wrapper-->
<!--begin::Purchase-->
<div class="offcanvas-footer" kt-hidden-height="38" style="">
    <a href="#" target="_blank" class="btn btn-block btn-danger btn-shadow font-weight-bolder text-uppercase">Buy Metronic Now!</a>
</div>
<!--end::Purchase-->
</div>
<!--end::Content-->
</div>
${this.show?html`<div class="offcanvas-overlay"></div>`:''}`;}
    connectedCallback() {debugger
        super.connectedCallback();
        console.log('drawer connectedCallback');
    }
    clickHandler(e) {debugger
        console.log('popup click',e.target);
    }
    firstUpdated(changedProperties) {
        debugger
        console.log('drawer firstUpdated');
        const ps = new PerfectScrollbar(this.renderRoot.querySelector("#container"), {//'#container' supperScollx:true 取消横向滚动条
            suppressScrollX : true
        });
        let ch = (window.screen.height - 175 - 47 - 38)+"px";
        console.log('drawer body height',ch);
        this.renderRoot.querySelector("#container").style.height = ch;
    }
}
window.customElements.define('vv-drawer', VvDrawer);