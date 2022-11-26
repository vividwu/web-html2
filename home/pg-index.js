import {LitElement, html, css} from '../lit-core.min.js';

class PgIndex extends LitElement {
    constructor() {
        super();
    }
    static get styles() {
        return [
            css`
:host {
    padding: 0 25px;
	width: 100%;
    margin-right: auto;
    margin-left: auto;
}
:host {
    max-width: 1340px;
}
        `
        ]
    }
    render(){
        return html`
      <slot></slot>
    `;
    }
}
window.customElements.define('pg-index', PgIndex);