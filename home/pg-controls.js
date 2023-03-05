import {LitElement, html, css} from '../lit-core.min.js';
import { VvTab } from '../components/vv-tab.js?v=0.2';
import { VvButton } from '../components/vv-button.js';
import { VvCheckbox } from '../components/vv-checkbox.js?v=0.1';
import { VvCard } from '../components/vv-card.js';
import { CcDeptSelector } from '../components/cc-dept-selector.js?v=0.1';
import {OuGetDeptTreeByPIdApi} from '../webapi.js';
import { VvTreeview } from '../components/vv-treeview.js?v=0.123';

class PgControls extends LitElement {
    constructor() {
        super();
        this._treeData = [];
        OuGetDeptTreeByPIdApi().then(res => {
            if(res){
                let data = this.flat2tree(res,"id","parentId","name","children");
                console.log("tree",data);
                this._treeData = JSON.stringify(data)
                this.requestUpdate();
            }
        })
    }
    static get styles() {
        return [
            css``]
    }
    render(){
        return html`<vv-card><vv-treeview data="${this._treeData}" id="tv"></vv-treeview></vv-card>`;
    }
    flat2tree(jsonData,idKey,pidKey,txtKey,newChildKey){
        newChildKey = newChildKey == undefined?"nodes":newChildKey;
        var result = [], temp = {}, i = 0, j = 0, len = jsonData.length
        for(; i < len; i++){
            temp[jsonData[i][idKey]] = jsonData[i] // 以id作为索引存储元素，可以无需遍历直接定位元素
        }
        for(; j < len; j++){
            var currentElement = jsonData[j]
            currentElement["label"] = currentElement[txtKey]  //设置显示字段 text 树控件固定绑定
            currentElement["id"] = currentElement[idKey]  //id 树控件固定绑定
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
window.customElements.define('pg-controls', PgControls);