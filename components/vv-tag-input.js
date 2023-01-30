import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvIcon } from './vv-icon.js';
import { VvTag } from './vv-tag.js';
export class VvTagInput extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            value: String,
            text: String,
            size: String,
            placeholder: String,
            open: { type: Boolean, reflect: true },
            multiple: { type: Boolean, reflect: true },
            removable: { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
            :host {
            display:flex;flex-direction:row;padding:0px;
            flex: 0 0 100%;
            max-width: 100%;}
.bootstrap-select.show > .dropdown-toggle.btn-light, .bootstrap-select.show > .dropdown-toggle.btn-secondary {
  border-color: #69b3ff !important; }
  
  .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 98;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #3F4254;
  text-align: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.42rem;
  box-shadow: 0px 0px 50px 0px rgb(82 63 105 / 15%); }
  
  .content .bootstrap-select .dropdown-menu {
  z-index: 93; }
  
  .bootstrap-select .dropdown-menu {
  max-width: 100% !important;
  border-top: none !important;
  border: 0;
  box-shadow: 0px 0px 50px 0px rgb(82 63 105 / 15%); }
  
  .btn.btn-light {
  color: #7E8299;
  background-color: #F3F6F9;
  border-color: #F3F6F9; }
  .btn.btn-light i {
    color: #7E8299; }
  .btn.btn-light .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #7E8299; }
  .btn.btn-light .svg-icon svg:hover g [fill] {
    transition: fill 0.3s ease; }
  .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled), .btn.btn-light:focus:not(.btn-text), .btn.btn-light.focus:not(.btn-text) {
    color: #7E8299;
    background-color: #E4E6EF;
    border-color: #E4E6EF; }
    .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled) i, .btn.btn-light:focus:not(.btn-text) i, .btn.btn-light.focus:not(.btn-text) i {
      color: #7E8299; }
    .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg g [fill], .btn.btn-light:focus:not(.btn-text) .svg-icon svg g [fill], .btn.btn-light.focus:not(.btn-text) .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #7E8299; }
    .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg:hover g [fill], .btn.btn-light:focus:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-light.focus:not(.btn-text) .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled).dropdown-toggle:after, .btn.btn-light:focus:not(.btn-text).dropdown-toggle:after, .btn.btn-light.focus:not(.btn-text).dropdown-toggle:after {
      color: #7E8299; }
  .btn.btn-light.disabled, .btn.btn-light:disabled {
    color: #7E8299;
    background-color: #F3F6F9;
    border-color: #F3F6F9; }
    .btn.btn-light.disabled i, .btn.btn-light:disabled i {
      color: #7E8299; }
    .btn.btn-light.disabled .svg-icon svg g [fill], .btn.btn-light:disabled .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #7E8299; }
    .btn.btn-light.disabled .svg-icon svg:hover g [fill], .btn.btn-light:disabled .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-light.disabled.dropdown-toggle:after, .btn.btn-light:disabled.dropdown-toggle:after {
      color: #7E8299; }
  .bootstrap-select > .dropdown-toggle:focus {
    outline: none !important;
    border-color: #69b3ff !important; }
  .bootstrap-select > .dropdown-toggle:before {
    width: auto; }
  .bootstrap-select > .dropdown-toggle.btn-light, .bootstrap-select > .dropdown-toggle.btn-secondary {
    background: #ffffff !important;
    color: #3F4254;
    border-color: #E4E6EF !important;
    box-shadow: none; }
    .bootstrap-select > .dropdown-toggle.btn-light.focus, .bootstrap-select > .dropdown-toggle.btn-light.active, .bootstrap-select > .dropdown-toggle.btn-secondary.focus, .bootstrap-select > .dropdown-toggle.btn-secondary.active {
      border-color: #E4E6EF !important; }
    .bootstrap-select > .dropdown-toggle.btn-light.disabled, .bootstrap-select > .dropdown-toggle.btn-light:disabled, .bootstrap-select > .dropdown-toggle.btn-secondary.disabled, .bootstrap-select > .dropdown-toggle.btn-secondary:disabled {
      background: #F3F6F9 !important;
      opacity: 1; }
    .bootstrap-select > .dropdown-toggle.btn-light .filter-option, .bootstrap-select > .dropdown-toggle.btn-secondary .filter-option {
      color: #3F4254; }
      .bootstrap-select > .dropdown-toggle.btn-light .filter-option .bs-icon, .bootstrap-select > .dropdown-toggle.btn-secondary .filter-option .bs-icon {
        color: #3F4254;
        margin-right: 0.1rem; }
  .bootstrap-select > .dropdown-toggle.bs-placeholder {
    color: #B5B5C3; }
    .bootstrap-select > .dropdown-toggle.bs-placeholder.btn {
      color: #ffffff; }
    
    .btn {
  outline: none !important;
  vertical-align: middle;
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn i {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn:hover:not(.btn-text), .btn:focus:not(.btn-text), .btn.focus {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
    .btn:hover:not(.btn-text) i, .btn:focus:not(.btn-text) i, .btn.focus i {
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn.disabled, .btn:disabled {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
    .btn.disabled i, .btn:disabled i {
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn:not(:disabled):not(.disabled):active:not(.btn-text), .btn:not(:disabled):not(.disabled).active,
  .show > .btn.dropdown-toggle {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
    .btn:not(:disabled):not(.disabled):active:not(.btn-text) i, .btn:not(:disabled):not(.disabled).active i,
    .show > .btn.dropdown-toggle i {
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn:focus:not(.btn-shadow):not(.btn-shadow-hover) {
    box-shadow: none !important; }
  .btn.btn-square {
    border-radius: 0; }
  .btn.btn-pill {
    border-radius: 2rem; }
  .btn.btn-text {
    cursor: text; }
  .btn:not(.btn-text) {
    cursor: pointer; }
  .btn.btn-borderless {
    border-color: transparent; }
    .btn-light {
  color: #181C32;
  background-color: #F3F6F9;
  border-color: #F3F6F9;
  box-shadow: none; }
  .btn-light:hover {
    color: #181C32;
    background-color: #dae3ec;
    border-color: #d1dde8; }
  .btn-light:focus, .btn-light.focus {
    color: #181C32;
    background-color: #dae3ec;
    border-color: #d1dde8;
    box-shadow: 0 0 0 0.2rem rgba(210, 213, 219, 0.5); }
  .btn-light.disabled, .btn-light:disabled {
    color: #181C32;
    background-color: #F3F6F9;
    border-color: #F3F6F9; }
  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,
  .show > .btn-light.dropdown-toggle {
    color: #181C32;
    background-color: #d1dde8;
    border-color: #c9d6e4; }
    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,
    .show > .btn-light.dropdown-toggle:focus {
      box-shadow: 0 0 0 0.2rem rgba(210, 213, 219, 0.5); }
      .btn {
  display: inline-block;
  font-weight: normal;
  color: #3F4254;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.55rem 1rem;/*0.65*/
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.42rem;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; }
  .btn:hover {
    color: #3F4254;
    text-decoration: none; }
  .btn:focus, .btn.focus {
    outline: 0;
    box-shadow: none; }
  .btn.disabled, .btn:disabled {
    opacity: 0.6;
    box-shadow: none; }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer; }
    .btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {
      box-shadow: none; }
      .bootstrap-select > .dropdown-toggle {
  position: relative;
  outline: none !important;
  padding: 0.55rem 1rem;/*0.65*/
  border-radius: 0.42rem; }
  .bootstrap-select > .dropdown-toggle:focus {
    outline: none !important;
    border-color: #69b3ff !important; }
  .bootstrap-select > .dropdown-toggle:before {
    width: auto; }
  .bootstrap-select > .dropdown-toggle.btn-light, .bootstrap-select > .dropdown-toggle.btn-secondary {
    background: #ffffff !important;
    color: #3F4254;
    border-color: #E4E6EF !important;
    box-shadow: none; }
    .bootstrap-select > .dropdown-toggle.btn-light.focus, .bootstrap-select > .dropdown-toggle.btn-light.active, .bootstrap-select > .dropdown-toggle.btn-secondary.focus, .bootstrap-select > .dropdown-toggle.btn-secondary.active {
      border-color: #E4E6EF !important; }
    .bootstrap-select > .dropdown-toggle.btn-light.disabled, .bootstrap-select > .dropdown-toggle.btn-light:disabled, .bootstrap-select > .dropdown-toggle.btn-secondary.disabled, .bootstrap-select > .dropdown-toggle.btn-secondary:disabled {
      background: #F3F6F9 !important;
      opacity: 1; }
    .bootstrap-select > .dropdown-toggle.btn-light .filter-option, .bootstrap-select > .dropdown-toggle.btn-secondary .filter-option {
      color: #3F4254; }
      .bootstrap-select > .dropdown-toggle.btn-light .filter-option .bs-icon, .bootstrap-select > .dropdown-toggle.btn-secondary .filter-option .bs-icon {
        color: #3F4254;
        margin-right: 0.1rem; }
  .bootstrap-select > .dropdown-toggle.bs-placeholder {
    color: #B5B5C3; }
    .bootstrap-select > .dropdown-toggle.bs-placeholder.btn {
      color: #ffffff; }
    
    select.bs-select-hidden,
.bootstrap-select > select.bs-select-hidden,
select.selectpicker {
  display: none !important;
}
.bootstrap-select {
  width: 220px \\0;
  /*IE9 and below*/
  vertical-align: middle;
}
.bootstrap-select > .dropdown-toggle {
  position: relative;
  width: 100%;
  text-align: right;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}

.bootstrap-select > .dropdown-toggle.bs-placeholder,
.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder:active {
  color: #999;
}
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:active {
  color: rgba(255, 255, 255, 0.5);
}
.bootstrap-select > select {
  position: absolute !important;
  bottom: 0;
  left: 50%;
  display: block !important;
  width: 0.5px !important;
  height: 100% !important;
  padding: 0 !important;
  opacity: 0 !important;
  border: none;
  z-index: 0 !important;
}
.bootstrap-select > select.mobile-device {
  top: 0;
  left: 0;
  display: block !important;
  width: 100% !important;
  z-index: 2 !important;
}

.form-inline .bootstrap-select,
.form-horizontal .bootstrap-select,
.form-group .bootstrap-select {
  margin-bottom: 0;
}
.form-group-lg .bootstrap-select.form-control,
.form-group-sm .bootstrap-select.form-control {
  padding: 0;
}
.form-group-lg .bootstrap-select.form-control .dropdown-toggle,
.form-group-sm .bootstrap-select.form-control .dropdown-toggle {
  height: 100%;
  font-size: inherit;
  line-height: inherit;
  border-radius: inherit;
}
.bootstrap-select.form-control-sm .dropdown-toggle,
.bootstrap-select.form-control-lg .dropdown-toggle {
  font-size: inherit;
  line-height: inherit;
  border-radius: inherit;
}
/*.bootstrap-select.form-control-sm .dropdown-toggle {
  padding: 0.25rem 0.5rem;
}*/
.bootstrap-select.form-control-lg .dropdown-toggle {
  padding: 0.5rem 1rem;
}
.form-inline .bootstrap-select .form-control {
  width: 100%;
}
.bootstrap-select.disabled,
.bootstrap-select > .disabled {
  cursor: not-allowed;
}
.bootstrap-select.form-control {
    margin-bottom: 0;
    padding: 0;
    border: none;
}
        `
        ]
    }
    constructor() {
        super();
        this.type = "tag-input";
        this._value = "";
        this.size = "sm"
        this.placeholder = "Full name"
        this.open = false
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    render() {
        return html`<div id="vvTagInput" style="position: relative;width: 100%;" class="dropdown bootstrap-select form-control form-control-sm">
							<button type="button" tabindex="-1" @click="${this.clickHandler}" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="${this.text}" selected-value="${this.value}">
							<div class="filter-option" style="width:100%;display: flex;">
							
							${this._value?html`<vv-tag class="label-sm" style="display:inline-flex;align-items:center;" removable>${this._value}</vv-tag>`:html`<span style="height:16px;display:inline-flex;align-items:center;"></span>`}
							
							</div>
							</button>
						
							</div>`;
    }
    clickHandler(e) {
        console.log('btn click',e.target);debugger  //
        if(e.target.nodeName == "VV-TAG"){
            return false;
        }
        //this.open = true;debugger
        //this.renderRoot.querySelector("vv-popup2").show = true;
        let event = new CustomEvent('ve-click', {
            detail: {
                value: e.detail.value
            }
        });
        this.dispatchEvent(event);
    }
    clickClearHandler(e) {
        console.log('clear',e.target);  //
    }
    blurPopupHandler(e){debugger
        console.log('popup blur',e.target);  //点option先触发
        // if(e.target.tagName == 'VV-OPTION' && this.renderRoot.querySelector("vv-popup").show){
        // }else{
        // this.renderRoot.querySelector("vv-popup").show = false;}
        //this.open = false;
    }
    focusPopupHandler(e) {debugger
        console.log('popup focus', e.target);
    }
    optionClickHander(e){debugger
        console.log('select fire popup click event:',e);
        let event = new CustomEvent('change', {
            detail: {
                value: e.detail.value
            }
        });
        this.dispatchEvent(event);
        
        this._value = e.detail.value;

        if(!this.multiple) {
            this.renderRoot.querySelector("vv-popup2").show = false;
        }
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        document.removeEventListener('mousedown', this);
    }
}
if(!customElements.get('vv-tag-input')) {
    window.customElements.define('vv-tag-input', VvTagInput);
}