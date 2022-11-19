import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvButton extends LitElement {
static get properties() {
  return { type: String,
            value: String,
            size: String,
	        myArray: Array };
}
    static get styles() {
        return [
            coreCss,
            css`
        .btn:not(:disabled):not(.disabled) {
            cursor: pointer;
        }
        .btn.btn-success {
            color: #ffffff;
            background-color: #1BC5BD;
            border-color: #1BC5BD;
        }
        .btn:not(.btn-text) {
            cursor: pointer;
        }
        .btn {
            outline: none !important;
            vertical-align: middle;
            transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .btn-success {
            color: #ffffff;
            background-color: #1BC5BD;
            border-color: #1BC5BD;
            box-shadow: none;
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
        button, [type="button"], [type="reset"], [type="submit"] {
            -webkit-appearance: button;
        }
        
        .btn.btn-success {
  color: #ffffff;
  background-color: #1BC5BD;
  border-color: #1BC5BD; }
  .btn.btn-success i {
    color: #ffffff; }
  .btn.btn-success .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #ffffff; }
  .btn.btn-success .svg-icon svg:hover g [fill] {
    transition: fill 0.3s ease; }
  .btn.btn-success.dropdown-toggle:after {
    color: #ffffff; }
  .btn.btn-success:hover:not(.btn-text):not(:disabled):not(.disabled), .btn.btn-success:focus:not(.btn-text), .btn.btn-success.focus:not(.btn-text) {
    color: #ffffff;
    background-color: #0BB7AF;
    border-color: #0BB7AF; }
    .btn.btn-success:hover:not(.btn-text):not(:disabled):not(.disabled) i, .btn.btn-success:focus:not(.btn-text) i, .btn.btn-success.focus:not(.btn-text) i {
      color: #ffffff; }
    .btn.btn-success:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg g [fill], .btn.btn-success:focus:not(.btn-text) .svg-icon svg g [fill], .btn.btn-success.focus:not(.btn-text) .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #ffffff; }
    .btn.btn-success:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg:hover g [fill], .btn.btn-success:focus:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-success.focus:not(.btn-text) .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-success:hover:not(.btn-text):not(:disabled):not(.disabled).dropdown-toggle:after, .btn.btn-success:focus:not(.btn-text).dropdown-toggle:after, .btn.btn-success.focus:not(.btn-text).dropdown-toggle:after {
      color: #ffffff; }
  .btn.btn-success.disabled, .btn.btn-success:disabled {
    color: #ffffff;
    background-color: #1BC5BD;
    border-color: #1BC5BD; }
    .btn.btn-success.disabled i, .btn.btn-success:disabled i {
      color: #ffffff; }
    .btn.btn-success.disabled .svg-icon svg g [fill], .btn.btn-success:disabled .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #ffffff; }
    .btn.btn-success.disabled .svg-icon svg:hover g [fill], .btn.btn-success:disabled .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-success.disabled.dropdown-toggle:after, .btn.btn-success:disabled.dropdown-toggle:after {
      color: #ffffff; }
  .btn.btn-success:not(:disabled):not(.disabled):active:not(.btn-text), .btn.btn-success:not(:disabled):not(.disabled).active,
  .show > .btn.btn-success.dropdown-toggle,
  .show .btn.btn-success.btn-dropdown {
    color: #ffffff;
    background-color: #0BB7AF;
    border-color: #0BB7AF; }
    .btn.btn-success:not(:disabled):not(.disabled):active:not(.btn-text) i, .btn.btn-success:not(:disabled):not(.disabled).active i,
    .show > .btn.btn-success.dropdown-toggle i,
    .show .btn.btn-success.btn-dropdown i {
      color: #ffffff; }
    .btn.btn-success:not(:disabled):not(.disabled):active:not(.btn-text) .svg-icon svg g [fill], .btn.btn-success:not(:disabled):not(.disabled).active .svg-icon svg g [fill],
    .show > .btn.btn-success.dropdown-toggle .svg-icon svg g [fill],
    .show .btn.btn-success.btn-dropdown .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #ffffff; }
    .btn.btn-success:not(:disabled):not(.disabled):active:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-success:not(:disabled):not(.disabled).active .svg-icon svg:hover g [fill],
    .show > .btn.btn-success.dropdown-toggle .svg-icon svg:hover g [fill],
    .show .btn.btn-success.btn-dropdown .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-success:not(:disabled):not(.disabled):active:not(.btn-text).dropdown-toggle:after, .btn.btn-success:not(:disabled):not(.disabled).active.dropdown-toggle:after,
    .show > .btn.btn-success.dropdown-toggle.dropdown-toggle:after,
    .show .btn.btn-success.btn-dropdown.dropdown-toggle:after {
      color: #ffffff; }
      
              .btn-sm, .btn-group-sm > .btn {
            padding: 0.55rem 0.75rem;
            font-size: 0.925rem;
            line-height: 1.35;
            border-radius: 0.42rem;
        }
        `
        ]
    }
constructor() {
    super();
    this.type = "button";
	this.value = "VvButton";
	this.myArray=[1,2,3];
	this.size = "sm"
}
  render(){
    return html`<button type="reset" class="btn btn-success mr-2 btn-${this.size}"><slot></slot></button>`;
  }
  clickHandler(e) {
    console.log(e.target);
  }

}
window.customElements.define('vv-button', VvButton);