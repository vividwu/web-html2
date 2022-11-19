import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvPopup2 extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            value: String,
            text: String,
            maxHeight:String,
            show:  { type: Boolean }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
            .dropdown-menu.show {
    display: block;
}

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
  
  .dropdown-menu {
  max-width: 100% !important;
  border-top: none !important;
  border: 0;
  box-shadow: 0px 0px 50px 0px rgb(82 63 105 / 15%); }
        `
        ]
    }
    constructor() {
        super();
        this.type = "popup";
        this._show = false
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
    // changeAttributes() {debugger
    //     console.log("popup show set changeAttributes");
    //     this.requestUpdate();
    // }
    //
    // changeProperties() {debugger
    //     console.log("popup show set changeProperties");
    // }
    render(){
        //-134px上翻 38px下翻 left 0px；debugger
        return html`<div id="popup2" @click="${this.clickHandler}" @focus="${this.focusHandler}" @blur="${this.blurHandler}" class="dropdown-menu ${this.show?'show':''}" style="${this.maxHeight?'max-height:'+this.maxHeight+'px;':''}min-height: 0px; overflow:hidden;position: absolute; will-change: transform; top:0px; left:0px; transform: translate3d(0px, 38px, 0px);width:100%" x-placement="top-start">
<slot></slot></div>`;
    }
    blurHandler(e){debugger
        console.log('popup blur',e.target);
    }
    focusHandler(e){debugger
        console.log('popup focus',e.target);
    }
    clickHandler(e) {debugger
        console.log('popup click',e.target);
        if(e.srcElement.tagName == 'VV-OPTION') {
            let event = new CustomEvent('option-click', {
                detail: {
                    value: e.target.value,
                    text: e.target.innerText
                }
            });
            this.dispatchEvent(event);
        }
    }
    connectedCallback() {
        super.connectedCallback();debugger
        // this._target ??= this.previousElementSibling;
        // console.log("popup connectedCallback");
    }
}
if(!customElements.get('vv-popup2')) {
    window.customElements.define('vv-popup2', VvPopup2);
}