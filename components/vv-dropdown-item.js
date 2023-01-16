import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvIcon } from './vv-icon.js';
export class VvDropdownItem extends LitElement {
    static get properties() {
        return {  id: String,
            header:{ type: Boolean, reflect: true },
            icon:String,
            value:String,
            show:  { type: Boolean }
        };
    }
    static get styles() {
        return [coreCss,css`
:host{
padding: 0;
    display: block;
    list-style: none;
}
:host([header]){
    padding: 0.75rem 1.5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navi-link {
    transition: all 0.15s ease;
    color: #3F4254;
}
.navi-link {
    font-size: 1rem;
}
.navi-link {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    border-radius:0.475rem;
}

.navi-icon {
    line-height: 0;
    flex-shrink: 0;
}
.navi-icon {
    flex: 0 0 2rem;
}
.navi-icon {
    transition: all 0.15s ease;
}

.navi-text {
    color: #3F4254;
}
.navi-text {
    transition: all 0.15s ease;
}
.navi-text {
    font-size: 1rem;
}
.navi-text {
    flex-grow: 1;
}

.navi-icon i {
    color: #B5B5C3;
}
.navi-icon i {
    transition: all 0.15s ease;
}
.navi-icon i {
    font-size: 1.25rem;
}


.navi-link:hover {
  background-color: #F3F6F9; }

.navi-link:hover .navi-text{
transition: all 0.15s ease;color: #3699FF; }
.navi-link:hover .navi-icon{
transition: all 0.15s ease;color: #3699FF; }
.navi-link:hover svg g [fill] {
    transition: fill 0.3s ease;color: #3699FF; }
.navi-link:hover .navi-arrow {
      transition: all 0.15s ease; }
        `
        ]
    }
    constructor() {
        super();
        this.type = "dropdown-item";
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
        return html`${this.header?html`<span class="text-primary text-uppercase font-weight-bold font-size-sm"><slot></slot></span>` : html`
    <a href="javascript:;" class="navi-link"><span class="navi-icon">
    	<i>
    	    <vv-icon class="navi-icon" name="${this.icon}"></vv-icon>
        </i>
    </span>
    <span class="navi-text"><slot></slot></span></a>`}`;
    }

    focusHandler(e){debugger
        console.log('popup focus',e.target);
    }
    connectedCallback() {
        super.connectedCallback();debugger
        // this._target ??= this.previousElementSibling;
    }
}
if(!customElements.get('vv-dropdown-item')) {
    window.customElements.define('vv-dropdown-item', VvDropdownItem);
}