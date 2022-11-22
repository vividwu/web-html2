import {LitElement, html} from '../lit-core.min.js';

class FlowPage extends LitElement {
    constructor() {
        super();
    }
    render(){
        return html`
      <p>
        flow page
      </p>
    `;
    }
}
window.customElements.define('flow-page', FlowPage);