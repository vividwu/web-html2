import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvSubMenu extends LitElement {
    static get properties() {
        return {  id: String,
            show:  { type: Boolean }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
           :host{
           display: block;
    animation: header-menu-submenu-fade-in 0.3s ease 1, header-menu-submenu-move-down 0.3s ease-out 1;
    padding: 20px 0px;
    right: auto;
    left: 0;
    background-color: #ffffff;
    box-shadow: 0px 15px 50px 0px rgb(82 63 105 / 15%);
    border-radius: 4px;
    width: 275px;
    margin: 0 auto;
    z-index: 98;
    position: absolute;
    top: 100%;
    transform: translateZ(0);
    -webkit-transform-style: preserve-3d; 
           }
    .menu-nav > .menu-item .menu-submenu .menu-subnav {
    list-style: none !important;
    padding: 0;
    margin: 0;
}        
        `
        ]
    }
    constructor() {
        super();
        this.type = "submenu";
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
        return html`<ul class="menu-subnav"><slot></slot></ul>`;
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
if(!customElements.get('vv-sub-menu')) {
    window.customElements.define('vv-sub-menu', VvSubMenu);
}