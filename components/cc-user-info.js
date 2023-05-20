import {LitElement, html, css} from '../lit-core.min.js';
import { VvFlowControl } from './vv-flow-control.js';
import {CCGetApi} from '../webapi.js';
import { VvTagInput } from './vv-tag-input.js?v=0.1';

export class CcUserInfo extends VvFlowControl {
static get properties() {
  return {
            flowCode: String,
            value: String,
            placeholder: String
    };
}
constructor() {
    super();
    this.type = "cc-userinfo";
    this._value = "";
    this._rawValue = {};
}
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }

    get rawValue() {
        return this._rawValue;
    }
    set rawValue(value) {
        this._rawValue = value;
    }
  render(){
    return html`<vv-tag-input id="input" disabled></vv-tag-input>`;
  }

  connectedCallback() {
      super.connectedCallback();
  }
  firstUpdated(changedProperties) {debugger
      let user = eval("("+window.sessionStorage.getItem('user_info')+")");
      this._value = user.uid;
      this._rawValue = user;
      if(this.formType == "apply") {
          CCGetApi('http://10.12.28.45:8880/api/user?uid=' + user.uid).then(res => {
              console.log('userinfo', res);
              this.shadowRoot.getElementById("input").value = res.displayName+"-"+res.num;
          })
      }else if(this.formType=="approve"){
          CCGetApi('http://' + this.flowCode).then(res => console.log('approve', res))
      }
  }
}
if(!customElements.get('cc-user-info')) {
    window.customElements.define('cc-user-info', CcUserInfo);
}