import {LitElement, html, css} from '../lit-core.min.js';
import { VvCard } from '../components/vv-card.js';
import { VvDialog } from '../components/vv-dialog.js';
import { VvButton } from '../components/vv-button.js';
import { VvInput } from '../components/vv-input.js';
class PgHome extends LitElement {
    constructor() {
        super();
    }
    static get styles() {
        return [
            css`
        `
        ]
    }
    render(){
        return html`
      <h2>Home</h2><vv-card><span>aaaa</span><vv-button @click="${this.openDialogClick}">弹出</vv-button>
      <vv-dialog title="编辑内容" id="myDialog">
      <vv-input></vv-input>
      <div slot="footer"><vv-button>close</vv-button></div></vv-dialog></vv-card>
    `;
    }
    openDialogClick(){
        this.renderRoot.getElementById("myDialog").show = true;
    }
}
window.customElements.define('pg-home', PgHome);