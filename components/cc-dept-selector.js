import {LitElement, html, css} from '../lit-core.min.js';
import { VvFlowControl } from './vv-flow-control.js';
import {OuGetDeptTreeByPIdApi} from '../webapi.js';
import { VvTagInput } from './vv-tag-input.js';
import { VvDialog } from '../components/vv-dialog.js?v=0.4'
import { VvTreeview } from './vv-treeview.js';

export class CcDeptSelector extends VvFlowControl {
static get properties() {
  return {
            flowCode: String,
            value: String,
            fullpath: String
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
    max-width: 100%;overflow: auto;
}
.left-nav::-webkit-scrollbar {
    width:8px;
    height:8px;
}
.left-nav::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 5px;
}
.left-nav::-webkit-scrollbar-thumb:hover {
    background:#9f9f9f;
}
.right-body {
    width: 100%;
}
.pl-4, .px-4 {
    padding-left: 1rem !important;
}

.node-circle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    width: 28px;
    height: 28px;background-color:#ffa459;color:#fff;
            }
.dept-selected-view{
    display:flex;background-color:#f0f4ff;padding:2px 10px;border-radius:10px;flex: 0 0 100%;
    overflow:hidden;white-space:nowrap;
}
.dept-selected-text{
    display:inline-flex;align-items: center;margin-left:10px;
}
            `]
}

constructor() {
    super();
    this.type = "cc-deptselector";
    this._treeData = [];
    this._nid = "";
    this._value;
    this._rawValue;
    //this.addEventListener('input', this.inputHandler);
}
    get value() {
        return this._nid; //{ id: this._id, text: this.fullpath };  //return this.shadowRoot.getElementById("input")?this.shadowRoot.getElementById("input").value:this._value;
    }
    set value(value) {
        this._value = value;
    }

    get rawValue() {
        return { id: this._nid, text: this.fullpath };
    }
    set rawValue(value) {
        //this._rawValue = value;
    }
  render(){
    return html`<vv-tag-input id="input" @ve-click="${this.tiClickHandler}"></vv-tag-input>
<vv-dialog title="部门选择" id="deptDialog" width="550" height="400">
<div class="box">
    <div class="border-right left-nav"><vv-treeview data="${this._treeData}" id="tv" @label-click="${this.labelClickHandler}"></vv-treeview></div>
    <div class="right-body pl-4">
        ${this.fullpath?html`<div class="dept-selected-view" @click="${this.selectedHandler}"><vv-icon class="node-circle" name="apartment"></vv-icon><span class="dept-selected-text">${this.fullpath}</span></div>`:``}
    </div>
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
      OuGetDeptTreeByPIdApi().then(res => {
          if(res){
              let data = this.flat2tree(res,"id","parentId","name","children","fullPathName");
              console.log("tree",data);
              this._treeData = JSON.stringify(data)
              this.requestUpdate();
          }
      })
  }
  selectedHandler(e) {debugger
      this.renderRoot.getElementById("input").value = this.fullpath;
      this.renderRoot.getElementById("deptDialog").show = false;
  }
  labelClickHandler(e){debugger
      this._nid = e.detail.id;
      this.fullpath = e.detail.ext;
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
    flat2tree(jsonData,idKey,pidKey,txtKey,newChildKey,extKey){
        newChildKey = newChildKey == undefined?"nodes":newChildKey;
        var result = [], temp = {}, i = 0, j = 0, len = jsonData.length
        for(; i < len; i++){
            temp[jsonData[i][idKey]] = jsonData[i] // 以id作为索引存储元素，可以无需遍历直接定位元素
        }
        for(; j < len; j++){
            var currentElement = jsonData[j]
            currentElement["label"] = currentElement[txtKey];  //设置显示字段 text 树控件固定绑定
            currentElement["id"] = currentElement[idKey]  //id 树控件固定绑定
            currentElement["ext"] = currentElement[extKey];
            if(currentElement["id"] == 7){
                currentElement["state"] = {"selected":true};
            }
            var tempCurrentElementParent = temp[currentElement[pidKey]] // 临时变量里面的当前元素的父元素
            if (tempCurrentElementParent) { // 如果存在父元素
                if (!tempCurrentElementParent[newChildKey]) { // 如果父元素没有chindren键
                    tempCurrentElementParent[newChildKey] = [] // 设上父元素的children键
                }
                tempCurrentElementParent[newChildKey].push(currentElement) // 给父元素加上当前元素作为子元素
            } else { // 不存在父元素，意味着当前元素是一级元素
                result.push(currentElement);
            }
        }
        return result;
    }
}
if(!customElements.get('cc-dept-selector')) {
    window.customElements.define('cc-dept-selector', CcDeptSelector);
}