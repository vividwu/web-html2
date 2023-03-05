import {LitElement, html, css} from '../lit-core.min.js';
import { VvFlowControl } from './vv-flow-control.js';
import {CCGetApi} from '../webapi.js';
import { VvTagInput } from './vv-tag-input.js';
import { VvDialog } from '../components/vv-dialog.js?v=0.2'
import { VvTreeview } from './vv-treeview.js';

export class CcDeptSelector extends VvFlowControl {
static get properties() {
  return {
            flowCode: String,
            value: String,
            placeholder: String
    };
}
    static get styles() {
        return [
            css`
.box {
    display: flex;
    height:100%;
}
.border-right {
    border-right: 1px solid #EBEDF3 !important;
}
.left-nav {
    padding: 0;
    flex: 0 0 200px;
    width: 200px;
    max-width: 100%;
}
.right-body {
    width: 100%;
}
.pl-4, .px-4 {
    padding-left: 1rem !important;
}
            `]
}

constructor() {
    super();
    this.type = "cc-deptselector";
    this._value = "";debugger
    //this.addEventListener('input', this.inputHandler);
}
    get value() {
        return this.shadowRoot.getElementById("input")?this.shadowRoot.getElementById("input").value:this._value;
    }
    set value(value) {
        this._value = value;
    }
  render(){
    return html`<vv-tag-input @ve-click="${this.tiClickHandler}"></vv-tag-input>
<vv-dialog title="部门选择" id="deptDialog" width="550" height="400">
<div class="box">
    <div class="border-right left-nav"><vv-treeview @label-click="${(e)=>console.log(e)}"></vv-treeview></div>
    <div class="right-body pl-4">bbb</div>
</div>
</vv-dialog>
`;
  }

  connectedCallback() {
      super.connectedCallback();
  }
  tiClickHandler(e) {
      console.log("ve:", e);
      debugger
      this.renderRoot.getElementById("deptDialog").show = true;
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
      // if(this.formType == "apply") {
      //     CCGetApi('http://101.43.138.169:8880/api/common/billcode_gen/' + this.flowCode).then(res => {
      //         console.log('apply', res);
      //         this.shadowRoot.getElementById("input").value = res;
      //     })
      // }else if(this.formType=="approve"){
      //     CCGetApi('http://' + this.flowCode).then(res => console.log('approve', res))
      // }
  }
}
if(!customElements.get('cc-dept-selector')) {
    window.customElements.define('cc-dept-selector', CcDeptSelector);
}