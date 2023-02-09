import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvOption } from './vv-option.js';
import { VvPopup2 } from './vv-popup.js';
import { VvIcon } from './vv-icon.js';

export class VvSelect extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            // value: String,
            text: String,
            size: String,
            placeholder: String,
            noLabel: { type: Boolean, reflect: true },  /*设置完只写属性Key也可以*/
            open: { type: Boolean, reflect: true },
            multiple: { type: Boolean, reflect: true },
            removable: { type: Boolean, reflect: true },
            myArray: Array };
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
  .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text), .btn.btn-light:not(:disabled):not(.disabled).active,
  .show > .btn.btn-light.dropdown-toggle,
  .show .btn.btn-light.btn-dropdown {
    color: #7E8299;
    background-color: #E4E6EF;
    border-color: #E4E6EF; }
    .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text) i, .btn.btn-light:not(:disabled):not(.disabled).active i,
    .show > .btn.btn-light.dropdown-toggle i,
    .show .btn.btn-light.btn-dropdown i {
      color: #7E8299; }
    .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text) .svg-icon svg g [fill], .btn.btn-light:not(:disabled):not(.disabled).active .svg-icon svg g [fill],
    .show > .btn.btn-light.dropdown-toggle .svg-icon svg g [fill],
    .show .btn.btn-light.btn-dropdown .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #7E8299; }
    .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-light:not(:disabled):not(.disabled).active .svg-icon svg:hover g [fill],
    .show > .btn.btn-light.dropdown-toggle .svg-icon svg:hover g [fill],
    .show .btn.btn-light.btn-dropdown .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text).dropdown-toggle:after, .btn.btn-light:not(:disabled):not(.disabled).active.dropdown-toggle:after,
      .arrow {
    position: relative;
    font-size: 1em;
    transform: scaleY(.8);
    /*margin-left: 0.5em;*/
    pointer-events: none;
    width: 1.8em;
    height: 1.2em;
    fill: currentColor;
    transition: .3s transform cubic-bezier(.645, .045, .355, 1);
}
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

.bootstrap-select .dropdown-menu.inner {
  display: block; }
 
.bootstrap-select .popover-title {
  padding: 10px 15px;
  margin-bottom: 5px; }
  .bootstrap-select .popover-title .close {
    display: none; }
    
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
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none; } }
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

.bootstrap-select .dropdown-menu.inner {
  display: block; }
  .bootstrap-select .dropdown-menu.inner > li > a {
    display: block;
    position: relative;
    outline: none !important;
    padding: 10px 15px; }
    .bootstrap-select .dropdown-menu.inner > li > a:hover {
      text-decoration: none; }
    .bootstrap-select .dropdown-menu.inner > li > a .bs-icon {
      font-size: 1.3rem;
      vertical-align: middle;
      color: #B5B5C3;
      margin-right: 0.5rem; }
    .bootstrap-select .dropdown-menu.inner > li > a .text {
      color: #3F4254; }
      .bootstrap-select .dropdown-menu.inner > li > a .text small {
        color: #B5B5C3; }
    .bootstrap-select .dropdown-menu.inner > li > a .check-mark {
      color: #7E8299; }
  .bootstrap-select .dropdown-menu.inner > li.selected > a .check-mark {
    top: 50%;
    position: absolute;
    margin-top: -0.4rem;
    font-size: 0.7rem;
    right: 1rem; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .check-mark:before {
      font-family: Ki;
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
      content: ""; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .check-mark:after {
      display: none; }
  .bootstrap-select .dropdown-menu.inner > li.selected > a, .bootstrap-select .dropdown-menu.inner > li:hover > a {
    background: #F3F6F9; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .text, .bootstrap-select .dropdown-menu.inner > li:hover > a .text {
      color: #3F4254; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .bs-icon, .bootstrap-select .dropdown-menu.inner > li:hover > a .bs-icon {
      color: #3F4254; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .check-mark, .bootstrap-select .dropdown-menu.inner > li:hover > a .check-mark {
      color: #7E8299; }
  .bootstrap-select .dropdown-menu.inner > li.divider {
    margin: 10px 0;
    border-bottom: 1px solid #F3F6F9; }
  .bootstrap-select .dropdown-menu.inner > li.hidden {
    display: none; }
  .bootstrap-select .dropdown-menu.inner > li.no-results {
    padding: 10px 15px; }
  .bootstrap-select .dropdown-menu.inner > li.dropdown-header {
    color: #7E8299; }
  .bootstrap-select .dropdown-menu.inner > li.selected > a {
    background: #F3F6F9; }
  .bootstrap-select .dropdown-menu.inner > li.disabled > a {
    opacity: 0.8; }
  .bootstrap-select .dropdown-menu.inner > li.active:not(.selected) > a {
    background: #3699FF; }
    .bootstrap-select .dropdown-menu.inner > li.active:not(.selected) > a .bs-icon,
    .bootstrap-select .dropdown-menu.inner > li.active:not(.selected) > a .text {
      color: #ffffff; }
    .bootstrap-select .dropdown-menu.inner > li.active:not(.selected) > a .check-mark {
      color: #ffffff; }
  .bootstrap-select .dropdown-menu.inner > li.no-results {
    color: #7E8299; }

.bootstrap-select .popover-title {
  padding: 10px 15px;
  margin-bottom: 5px; }
  .bootstrap-select .popover-title .close {
    display: none; }
    
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

  
  .bootstrap-select .dropdown-menu.show {
    width: auto; }
    .dropdown-menu.show {
  display: block; }
  .dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto; }
  
  .bootstrap-select .dropdown-menu {
  min-width: 100%;
  box-sizing: border-box;
}
.bootstrap-select .dropdown-menu.inner {
  position: static;
  float: none;
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
}
        `
        ]
    }
    constructor() {
        super();
        this.type = "select";
        this._value = "";
        this._text = "";
        this.myArray=[1,2,3];
        this.size = "sm"
        this.placeholder = "Full name"
        this.noLabel = false,
        this.open = false
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    render() {
        return html`<div id="vvSelect" style="position: relative;width: 100%;" class="dropdown bootstrap-select form-control form-control-sm dropup ${this.open ? 'show' : ''}">
							<button type="button" tabindex="-1" @click="${this.clickHandler}" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="${this.text}" selected-value="${this.value}">
							<div class="filter-option" style="width:100%;display: flex;overflow:hidden;align-items:center;white-space:nowrap;">
							
							${this.multiple?html`<vv-tag class="label-sm" style="display:inline-flex;align-items:center;" removable>${this.text}</vv-tag>`:html`<span style="height:16px;display:inline-flex;align-items:center;">${this.text}</span>`}
							
							</div>
							${this.removable?html`<vv-icon name="close-circle-fill" @click="${this.clickClearHandler}" style="display: inline-flex;align-items: center;width: 1.25em;font-size: inherit;border: none;background: none;padding: 0px;cursor: pointer;margin-right:8px"></vv-icon>`:''}
							<svg class="arrow" viewBox="0 0 1024 1024"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z"></path></svg>
							</button>
							<vv-popup2 @focus="${this.focusPopupHandler}" @blur="${this.blurPopupHandler}" @option-click="${this.optionClickHander}">
                                <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1" aria-activedescendant="bs-select-1-2" style="max-height: 142.85px; overflow-y: auto; min-height: 0px;">
                                <ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;">
                                <slot></slot>
                                </ul>
							</vv-popup2>
							</div></div>`;
    }
    clickHandler(e) {
        console.log('btn click',e.target);debugger  //
        //this.open = true;debugger
        this.renderRoot.querySelector("vv-popup2").show = true;
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
                value: e.detail.value,
                text: e.detail.text
            }
        });
        this.dispatchEvent(event);

        this.text = e.detail.text;
        this.value = e.detail.value;

        if(!this.multiple) {
            this.renderRoot.querySelector("vv-popup2").show = false;
        }
    }
    connectedCallback() {
        super.connectedCallback();debugger
        document.addEventListener('mousedown',this.setpop);
    }
    setpop = (ev) => {
        const path = ev.path || (ev.composedPath && ev.composedPath());//debugger
        if(!path.includes(this) && ev.which == '1' && !path.includes(ev.path.includes(this.renderRoot.getElementById("vvSelect").children[0]))){
            this.renderRoot.querySelector("vv-popup2").show = false;
        }
        console.log('mousedown ev',ev.target);
        console.log('path',path);
    }
    disconnectedCallback() {
        document.removeEventListener('mousedown', this);
    }
}
if(!customElements.get('vv-select')) {
    window.customElements.define('vv-select', VvSelect);
}