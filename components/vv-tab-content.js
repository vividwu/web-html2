import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvTabContent extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            value: String,
            label: String,
            key: String,
            name: String,
            disabled:  { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
.active {
    display: block;
}
.tab-pane {
    display: none;
}
.fade:not(.show) {
    opacity: 0;
}
.fade {
    transition: opacity 0.15s linear;
}
.show{ display:inline-block; }
            `]
    }
    constructor() {
        super();
        this.type = "tab-content";
    }
    render() {debugger
        let akey = this.parentElement.activekey;
        return html`<div style="width: 100%;height: 100%;transition: .8s;" id="tp1" role="tabpanel" key="${this.key}" class="${this.key==akey?'tab-pane fade active show':'tab-pane fade'}"><slot></slot></div>`
    }
    connectedCallback() {
        super.connectedCallback();
    }
}
if(!customElements.get('vv-tab-content')) {
    window.customElements.define('vv-tab-content', VvTabContent);
}