import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
export class SecFlowTaskScript extends LitElement {
    static get properties() {
        return {  id: String,
            scriptName:String
        };
    }
    static get styles() {
        return [coreCss,css`
        `
        ]
    }
    constructor() {
        super();
        this._show = false;
        this.type = "flow-task-script";
    }
    get show() {
        return this._show;
    }
    set show(val) {
        console.log("popup show set ",this._target.clientWidth);
        this.renderRoot.getElementById("popup").width = this._target.clientWidth;
        this._show = val;
        this.requestUpdate();
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
        return html``;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {

    }
}
if(!customElements.get('sec-flow-task-script')) {
    window.customElements.define('sec-flow-task-script', SecFlowTaskScript);
}