import {LitElement, html, css} from '../lit-core.min.js';
import { VvFlowControl } from './vv-flow-control.js';
import {CCGetApi} from '../webapi.js';
import { VvSelect } from './vv-select.js';
export class CcSelect extends VvFlowControl {
static get properties() {
  return {
            flowCode: String,
            value: String,
            options: { type: Array, reflect: true },
            placeholder: String
    };
}
constructor() {
    super();
    this.type = "cc-select";
    this.options = [];
    this._value = "";debugger
}
    get value() {
        return this.shadowRoot.getElementById("select")?this.shadowRoot.getElementById("select").value:this._value;
    }
    set value(value) {
        this._value = value;
    }
  render(){
    return html`<vv-select id="select" value="${this._value}">${this.options.map((v,i) => html`<vv-option value="${v.value}">${v.label}</vv-option>`)}</vv-select>`;
  }

  connectedCallback() {
      super.connectedCallback();
  }
  firstUpdated(changedProperties) {debugger
      if(this.formType == "apply") {  //office_tools
          if(this.dataurl) {  //http://10.12.28.45:8880/api/common/dictionary/leave_type
              CCGetApi(this.dataurl).then(res => {
                  console.log('apply select', res);
                  this.options = res;
                  this.requestUpdate();
              //this.shadowRoot.getElementById("input").value = res;
            })
          }
      }else if(this.formType=="approve"){
          // CCGetApi('http://' + this.flowCode).then(res => console.log('approve', res))
      }
  }
}
if(!customElements.get('cc-select')) {
    window.customElements.define('cc-select', CcSelect);
}