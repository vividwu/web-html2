import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvIcon } from './vv-icon.js';
export class VvDropdownButton extends LitElement {
    static get properties() {
        return {  id: String,
            menuRoot:String,
            buttonType:String,
            show:  { type: Boolean }
        };
    }
    static get styles() {
        return [coreCss,css`
         :host {
    display: inline-block;
    position: relative;
}
.arrow {
    position: relative;
    font-size: 1em;
    transform: scaleY(0.8);
    pointer-events: none;
    width: 1.8em;
    height: 1.2em;
    fill: currentcolor;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.dropdown-menu.dropdown-menu-sm {
    width: 175px;
}
.dropdown-menu.show {
    display: block;
}
.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {
    right: auto;
    bottom: auto;
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
    box-shadow: 0px 0px 50px 0px rgb(82 63 105 / 15%);
}
.navi {
    padding: 0;
    margin: 0;
    display: block;
    list-style: none;
}
.btn-hover-light-primary:hover:not(.btn-text):not(:disabled):not(.disabled) {
    background-color: #E1F0FF; }
.svg-icon {
    color: #009EF7;
}

        `
        ]
    }
    constructor() {
        super();
        this.type = "dropdown-button";
    }
    get show() {
        return this._show;
    }
    set show(val) {debugger
        //const {x, y, height} = this._target.getBoundingClientRect();
        //console.log("popup show set ",this._target.clientWidth);
        //this.renderRoot.getElementById("popup").width = this._target.clientWidth;
        this._show = val;
        this.renderRoot.getElementById("popup").classList.toggle("show");
        if(this._show){
            this.renderRoot.getElementById("popup").setAttribute("style", "position: absolute; transform: translate3d(-93px, 33px, 0px); top: 0px; left: 0px; will-change: transform;");
        }else {
            this.renderRoot.getElementById("popup").setAttribute("style", "");
        }        //this.requestUpdate();
    }
    // changeAttributes() {debugger
    //     console.log("popup show set changeAttributes");
    //     this.requestUpdate();
    // }
    //
    // changeProperties() {debugger
    //     console.log("popup show set changeProperties");
    // }
    render(){
        return html`${this.renderButton()}
<div id="popup" @click="${this.itemClickHander}" class="dropdown-menu dropdown-menu-sm" x-placement="bottom-end">
	<!--begin::Navigation-->
	<ul class="navi">
		<slot></slot>
	</ul>
	<!--end::Navigation-->
</div>
        `;
    }
    renderButton(){
        if(this.buttonType == "flat"){
            return html`<a href="javascript:;" @click="${this.dropdownButtonClick}" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon">
							<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
															<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
															</g>
														</svg>
						</a>`;
        }else{
            return html `<a href="javascript:;" @click="${this.dropdownButtonClick}" class="btn btn-light btn-sm font-size-sm font-weight-bolder dropdown-toggle text-dark-75">Create
                        <svg class="arrow" viewBox="0 0 1024 1024"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z"></path></svg>
                        </a>`;
        }
    }
    dropdownButtonClick(e) {debugger
        this.show = !this._show;
    }
    itemClickHander(e) {debugger
        console.log('dropdown item popup click',e.target,e.srcElement,e.target.value,e.target.innerText);
        if(e.srcElement.tagName == 'VV-DROPDOWN-ITEM') {
            let event = new CustomEvent('item-click', {
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
         document.addEventListener('mousedown',this.setpop);
    }
    setpop = (ev) => {debugger
    const path = ev.path || (ev.composedPath && ev.composedPath());//debugger
    if(this.show && !path.includes(this) && ev.which == '1' && !path.includes(ev.path.includes(this.renderRoot.getElementById("popup").children[0]))){
        this.show = false;
    }
    console.log('menu mousedown ev',ev.target);
    }
    disconnectedCallback() {
        document.removeEventListener('mousedown', this);
    }
}
if(!customElements.get('vv-dropdown-button')) {
    window.customElements.define('vv-dropdown-button', VvDropdownButton);
}