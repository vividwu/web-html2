import {LitElement, html, css} from '../lit-core.min.js';
import { VvCard } from '../components/vv-card.js';

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
      <h2>Home</h2><vv-card><span>aaaa</span></vv-card>
    `;
    }
}
window.customElements.define('pg-home', PgHome);