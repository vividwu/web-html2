import {LitElement, html, css} from '../lit-core.min.js';

export class VvCheckbox extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            checked: { type: Boolean, reflect: true },
            disabled:  { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            css`
        :host{ 
            display:inline-block; 
            -webkit-tap-highlight-color: transparent;
        }
        :host([disabled]){ 
            pointer-events: none; 
            opacity:.6; 
        }
        :host([disabled]) label{ 
            pointer-events: all;  
            cursor: not-allowed; 
        }
*,
*::before,
*::after {
  box-sizing: border-box; }
input, button, select, optgroup, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.checkbox {
    display: flex;
    align-items: center;
    position: relative;
    text-align: left;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    margin: 0;
}
.checkbox-list .checkbox:last-child {
    margin-bottom: 0;
}
label {
    font-size: 1rem;
    font-weight: 400;
    color: #3F4254;
}
button, input {
    overflow: visible;
}
input[type="radio"], input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}
.checkbox > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.checkbox > span {
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 0.42rem;
}
.checkbox > span {
    background-color: #EBEDF3;
    border: 1px solid transparent;
}
.checkbox > input:checked ~ span {
    transition: all 0.3s ease;
    background-color: none;
}
.checkbox > input:checked ~ span {
    background-color: #3699FF;
}
.checkbox > span {
    height: 18px;
    width: 18px;
}
.checkbox > span {
    background-color: #EBEDF3;
    border: 1px solid transparent;
}
.checkbox span {
    margin-right: 0.75rem;
}

.checkbox > span:after {
    content: '';
    border-color: transparent;
    border-style: solid;
    border-width: 0 2px 2px 0/*rtl:ignore*/ !important;
    transform: rotate(45deg)/*rtl:ignore*/;
    margin-top: -2px;
}
.checkbox > input:checked ~ span:after {
    display: block;
}
.checkbox > span:after {
    width: 5px;
    height: 10px;
}
.checkbox > input:checked ~ span:after {
    border-color: #ffffff;
}
            `]
    }
    constructor() {
        super();
        this.type = "checkbox";
		//this._checked = false;
    }
    render() {debugger
        return html`<label class="checkbox"><input id="ckbox" type="checkbox" ?checked=${this.checked} ?disabled="${this.disabled}"  @change="${this.changeHandler}"><span></span><slot></slot></label>`
    }
    get value() {
        return this.checked;  //this.renderRoot.getElementById("switch").getAttribute('checked')!==null;
    }
	/*set checked(value) {
        if(value===null||value===false){
            this.renderRoot.getElementById("switch").removeAttribute('checked');
			this._checked = false;
        }else{
            this.renderRoot.getElementById("switch").setAttribute('checked', '');
			this._checked = true;
        }
    }*/
    connectedCallback() {
        super.connectedCallback();
    }
    changeHandler(e) {debugger
        this._ckbox = this.shadowRoot.getElementById('ckbox');
        this.shadowRoot.checked = this._ckbox.checked;
        let event = new CustomEvent('change', {
            detail: {
                checked: this.shadowRoot.checked,
				value: this.shadowRoot.checked
            }
        });
		/*if(!this.shadowRoot.checked){
            this.renderRoot.getElementById("switch").removeAttribute('checked');
        }else{
            this.renderRoot.getElementById("switch").setAttribute('checked', '');
        }*/
        this.dispatchEvent(event);
		this.checked = this._ckbox.checked;
    }
}
window.customElements.define('vv-checkbox', VvCheckbox);