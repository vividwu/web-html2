import {LitElement, html, css} from '../lit-core.min.js';

export class VvTitle extends LitElement {
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
.mb-5, .my-5 {
    margin-bottom: 1.25rem !important;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12.5px;
    margin-left: -12.5px;
}
.bullet {
    display: inline-block;
    background-color: #E4E6EF;
    width: 10px;
    height: 2px;
    border-radius: 2rem;
}
.bullet.bullet-bar {
    width: 4px;
    height: auto;
}
.bg-primary{
    background-color: #3699FF !important;
}
.bg-success {
    background-color: #1BC5BD !important;
}
.font-weight-bolder {
    font-weight: 600 !important;
}
.ml-2, .mx-2 {
    margin-left: 0.5rem !important;
}
        `
        ]
    }
constructor() {
    super();
    this.type = "title";
	this.size = "sm"
}
  render(){
    return html`<div class="row"><span class="bullet bullet-bar bg-primary"></span><div class="font-weight-bolder ml-2">${this.title}</div></div>`;
  }

}
window.customElements.define('vv-title', VvTitle);