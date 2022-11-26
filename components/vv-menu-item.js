import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvMenuItem extends LitElement {
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
            padding: 0px;
            display: flex;
    flex-grow: 1;
    margin: 0;
    list-style: none !important;
            }
        `
        ]
    }
    constructor() {
        super();
        this.type = "menuitem";
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
        return html`<li class="menu-item"><slot></slot></li>`;
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
if(!customElements.get('vv-menu-item')) {
    window.customElements.define('vv-menu-item', VvMenuItem);
}