import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvInput extends LitElement {
static get properties() {
  return {  id: String,
            type: String,
            value: String,
            size: String,
            labelName: String,
            placeholder: String,
            muted: String,
            noLabel:  { type: Boolean, reflect: true },  /*设置完只写属性Key也可以*/
	        myArray: Array };
}
    static get styles() {
        return [
            coreCss,
            css`
          :host {
            display:flex;flex-direction:row;padding:0px;
            flex: 0 0 100%;
            max-width: 100%;}
        `
        ]
    }
constructor() {
    super();
    this.type = "input";
	//this.value = "VVInput";
	this.myArray=[1,2,3];
	this.size = "sm"
    this.labelName = "Full Name:"
    this.placeholder = "Full name"
    this.muted = "Please enter your full name"
    this.noLabel = false,
    this._value = "";
    this.addEventListener('input', this.inputHandler);
}
    get value() {
        return this.shadowRoot.getElementById("input")?this.shadowRoot.getElementById("input").value:this._value;
    }
    set value(value) {
        this._value = value;
    }
  render(){console.log(this.noLabel);debugger
    return html`${this.noLabel?this.withOutLabel():this.withLabel()}`;
  }
  withLabel(){
    return html`<label class="col-sm-3 col-form-label text-sm-right">${this.labelName}</label><div class="col-sm-9">
        <input id="input" type="email" class="form-control form-control-sm" placeholder="${this.placeholder}" value="${this._value}"/>
        <span class="form-text text-muted">${this.muted}</span>
        </div>`
  }
  withOutLabel(){
      return html`<input id="input" type="email" class="form-control form-control-sm" placeholder="${this.placeholder}" value="${this._value}"/>`
  }
  clickHandler(e) {
    console.log(e.target);
  }
  connectedCallback() {
      super.connectedCallback();debugger
      // this.dispatchEvent(new CustomEvent('input',{  //初始化set value ，input dom未创建
      //     detail:{
      //         value:this.shadowRoot.getElementById("input")?this.shadowRoot.getElementById("input").value:this._value
      //     }
      // }));
  }
  inputHandler(e) {debugger
      let event = new CustomEvent('veinput', {
          detail: {
              value: e.target.value
          }
      });
      this.dispatchEvent(event);
      this._value = e.target.value;
  }
}
if(!customElements.get('vv-input')) {
    window.customElements.define('vv-input', VvInput);
}