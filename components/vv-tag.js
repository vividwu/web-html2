import {LitElement, html, css} from '../lit-core.min.js';
import { VvIcon } from './vv-icon.js';

export class VvTag extends LitElement {
    static get properties() {
        return {  name: String,
            type: String,
            size: String,
            tagType: String,
            removable: { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            css`
            .text-left {
  text-align: left !important; }

.text-right {
  text-align: right !important; }

.text-center {
  text-align: center !important; }
  
            .label {
  padding: 0;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  font-size: 0.8rem;
  background-color: #EBEDF3;
  color: #3F4254;
  font-weight: 400;
  height: 20px;
  width: 20px;
  font-size: 0.8rem; }
   .label.label-inline {
    width: auto;
    padding: 0.15rem 0.75rem;
    border-radius: 0.42rem; }
              .label.label-light-primary {
    color: #3699FF;
    background-color: #E1F0FF; }
  .label.label-light-warning {
    color: #FFA800;
    background-color: #FFF4DE; }
  .label.label-light-danger {
    color: #F64E60;
    background-color: #FFE2E5; }
    
    :host(.label-sm) {
    height: 16px;
    width: 16px;
    font-size: 0.75rem;
}
        `
        ]
    }
    constructor() {
        super();
        this.type = "tag";
        this.size = "20";
        this.tagType = "primary";
    }
    render(){
        return html`<span class="label label-light-${this.tagType} label-inline"><slot></slot>
            ${this.removable?html`<vv-icon name="close-circle-fill" style="display: inline-flex;align-items: center;width: 1.25em;font-size: inherit;border: none;background: none;padding: 0px;cursor: pointer;margin-left:8px"></vv-icon>`:''}
        </span>`;
    }
    connectedCallback() {
        super.connectedCallback();
    }
}
if(!customElements.get('vv-tag')) {
    window.customElements.define('vv-tag', VvTag);
}