import {LitElement, html, css} from '../lit-core.min.js';

export class VvAlert extends LitElement {
static get properties() {
  return { type: String,
            title: String,
            size: String };
}
    static get styles() {
        return [
            css`
:host {
    display: flex;
    max-width: 100%;
    flex: 0 0 100%;}
.alert-warning {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
}
.alert {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
}
        `
        ]
    }
constructor() {
    super();
    this.type = "alert";
	this.size = "sm"
}
  render(){
    return html`<div class="alert alert-warning">
					<span style="font-weight:700;line-height:18px;color:#E6A23C">${this.title}</span>
					<p style="margin:5px 0 0;color:#E6A23C"><slot></slot></p>
				</div>`;
  }

}
window.customElements.define('vv-alert', VvAlert);