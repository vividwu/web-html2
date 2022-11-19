import {LitElement, html} from '../lit-core.min.js';

class PgHome extends LitElement {
    constructor() {
        super();
    }
    render(){
        return html`<h2>home</h2>
      <slot></slot>
    `;
    }
}
window.customElements.define('pg-home', PgHome);