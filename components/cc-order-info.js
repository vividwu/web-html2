import {LitElement, html, css} from '../lit-core.min.js';
import { VvFlowControl } from './vv-flow-control.js';
import {CCGetApi} from '../webapi.js';

export class CcOrderInfo extends VvFlowControl {
static get properties() {
  return {
            flowCode: String,
            value: String,
            placeholder: String
    };
}
constructor() {
    super();
    this.type = "cc-orderinfo";
    this._value = "";debugger
    this.addEventListener('input', this.inputHandler);
}
    get value() {
        return this.shadowRoot.getElementById("input")?this.shadowRoot.getElementById("input").value:this._value;
    }
    set value(value) {
        this._value = value;
    }
  render(){
    return html`<input id="input" type="email" disabled class="form-control form-control-sm" placeholder="${this.placeholder}" title="${this.formType}" value="${this._value}"/>`;
  }

  connectedCallback() {
      super.connectedCallback();
  }
  inputHandler(e) {debugger
      let event = new CustomEvent('ceinput', {
          detail: {
              value: e.target.value
          }
      });
      this.dispatchEvent(event);
      this._value = e.target.value;
  }
  firstUpdated(changedProperties) {debugger
      if(this.formType == "apply") {
          CCGetApi('http://101.43.138.169:8880/api/common/billcode_gen/' + this.flowCode).then(res => {
              console.log('apply', res);
              this.shadowRoot.getElementById("input").value = res;
          })
      }else if(this.formType=="approve"){
          CCGetApi('http://' + this.flowCode).then(res => console.log('approve', res))
      }
  }
}
if(!customElements.get('cc-order-info')) {
    window.customElements.define('cc-order-info', CcOrderInfo);
}