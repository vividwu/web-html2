import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvFlowControl extends LitElement {
    static get properties() {
        return {
            id: String,
            type: String,
            size: String,
            formType: String,  //apply approve view
            hide: {type: Boolean, reflect: true}
        }
    }

    static get styles() {
        return [
            coreCss,
            css`
          :host {
            display: flex;
    max-width: 100%;
    flex: 0 0 100%;}
        `
        ]
    }

    constructor() {
        super();
    }

    render() {
    }

    connectedCallback() {
        super.connectedCallback();
    }
}
if(!customElements.get('vv-flow-control')) {
    window.customElements.define('vv-flow-control', VvFlowControl);
}