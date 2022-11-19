import {LitElement, html, css} from './lit-core.min.js';

export class VvSwitch extends LitElement {
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
        #switch{
            position:absolute;
            clip:rect(0,0,0,0);
        }
        :host(:focus-within) label::after,:host(:active) ::after{ 
            background:var(--themeColor,#3699FF);
        }
        :host(:focus-within) label{ 
            /*box-shadow: 0 0 10px rgba(0,0,0,0.1); */
        }
        :host(:focus-within) #switch,:host(:active) #switch{
            z-index:2
        }
        label{
            cursor:pointer;
            display:flex;
            width:2.4em;
            height:1.2em;
            padding:.125em;
            border-radius:1.2em;
            background:#eee;
            transition:.3s width,.3s height,.3s background-color;
        }
        label::before{
            content:'';
            flex:0;
            transition:.2s cubic-bezier(.12, .4, .29, 1.46) flex;
        }
        label::after{
            content:'';
            width:.4em;
            height:.4em;
            border-radius:1.2em;
            border:.4em solid #fff;
            background:#fff;
            transition:.3s background,.3s padding,.3s width,.3s height,.3s border-radius,.3s border;
            box-shadow: 0 2px 4px 0 rgba(0,35,11,0.2);
        }
        label:active::after{
            padding:0 .3em;
        }
        #switch:checked+label{
            background:var(--themeBackground,var(--themeColor,#3699FF));
        }
        #switch:checked+label::before{
            flex:1;
        }
            `]
    }
    constructor() {
        super();
        this.type = "switch";
    }
    render() {debugger
        return html`<input type="checkbox" id="switch" ${this.checked?"checked":""} @change="${this.changeHandler}"><label for="switch"></label>`
    }
    connectedCallback() {
        super.connectedCallback();
    }
    changeHandler(e) {debugger
        this._switch = this.shadowRoot.getElementById('switch');
        this.shadowRoot.checked = this._switch.checked;
        let event = new CustomEvent('change', {
            detail: {
                checked: this.shadowRoot.checked
            }
        });
        this.dispatchEvent(event);
    }
}
window.customElements.define('vv-switch', VvSwitch);