import {LitElement, html, css} from '../lit-core.min.js';

class PgFormDesign extends LitElement {
    constructor() {
        super();
    }
    static get styles() {
        return [
            css`
.page-wrapper {
  display: flex;
  min-height: 100vh;
  justify-content:center; 
}
        `
        ]
    }
    render(){
        return html`<div id="outlet" class="page-wrapper"><h2>PgFormDesign</h2></div>
    `;
    }
}
window.customElements.define('pg-form-design', PgFormDesign);