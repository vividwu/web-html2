import {LitElement, html, css} from '../lit-core.min.js';
import { VvSwitch } from '../components/vv-switch.js?v=0.2';
import { VvButton } from '../components/vv-button.js';

class PgControls extends LitElement {
    constructor() {
        super();
    }
    static get styles() {
        return [
            css``]
    }
    render(){
        return html`<vv-switch id="sw" checked @change="${(e)=>console.log('sw',e)}"></vv-switch><vv-button @click="${(e)=>console.log('vv',this.renderRoot.getElementById('sw').value)}">asd</vv-button>`;
    }
}
window.customElements.define('pg-controls', PgControls);