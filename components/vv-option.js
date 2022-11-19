import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvIcon } from './vv-icon.js';

export class VvOption extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            value: String,
            text: String,
            selected:  { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
li {
  position: relative;
}
    li a {
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
 li > a {
    display: block;
    position: relative;
    outline: none !important;/**/
    padding: 10px 15px; }
    
    li > a:hover {
      text-decoration: none; }
    li > a .bs-icon {
      font-size: 1.3rem;
      vertical-align: middle;
      color: #B5B5C3;
      margin-right: 0.5rem; }
    li > a .text {
      color: #3F4254; }
      li > a .text small {
        color: #B5B5C3; }
    li > a .check-mark {
      color: #7E8299; }
  li.selected > a .check-mark {
    top: 50%;
    position: absolute;
    margin-top: -0.4rem;
    font-size: 0.7rem;
    right: 1rem; }
    li.selected > a .check-mark:before {
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
    li.selected > a .check-mark:after {
      display: none; }
  li.selected > a, li:hover > a {
    background: #F3F6F9; }
    li.selected > a .text, li:hover > a .text {
      color: #3F4254; }
    li.selected > a .bs-icon, li:hover > a .bs-icon {
      color: #3F4254; }
    li.selected > a .check-mark, li:hover > a .check-mark {
      color: #7E8299; }
 li.divider {
    margin: 10px 0;
    border-bottom: 1px solid #F3F6F9; }
  li.hidden {
    display: none; }
  li.no-results {
    padding: 10px 15px; }
  li.dropdown-header {
    color: #7E8299; }
  li.selected > a {
    background: #F3F6F9; }
  li.disabled > a {
    opacity: 0.8; }
  li.active:not(.selected) > a {
    background: #3699FF; }
    li.active:not(.selected) > a .bs-icon,
    li.active:not(.selected) > a .text {
      color: #ffffff; }
    li.active:not(.selected) > a .check-mark {
      color: #ffffff; }
  li.no-results {
    color: #7E8299; }

        `
        ]
    }
    constructor() {
        super();
        this.type = "option";
        this.value = "VVOption";
        this.text = "VVOption"
        this.selected = false
    }
    render(){
        return html`<li class="${this.selected?'selected active':''}" option-value="${this.value}">
            <a role="option" style="display: flex" class="dropdown-item ${this.selected?'selected active':''}" id="bs-select-1-2" tabindex="0" aria-setsize="3" aria-posinset="3" aria-selected="true">
													<vv-icon name="check" size="20" style="display: inline-flex;align-items: center;margin-right:8px"></vv-icon>
													<span class="text" style="display: inline-flex;align-items: center;">
															<slot></slot>
														</span></a>
														</li>`;
    }
    clickHandler(e) {debugger
        console.log(e.target,this.value);
    }
}
if(!customElements.get('vv-option')) {
    window.customElements.define('vv-option', VvOption);
}