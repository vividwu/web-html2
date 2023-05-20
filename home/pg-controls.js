import {LitElement, html, css} from '../lit-core.min.js';
import { VvTab } from '../components/vv-tab.js?v=0.2';
import { VvButton } from '../components/vv-button.js';
import { VvCheckbox } from '../components/vv-checkbox.js?v=0.1';
import { VvCard } from '../components/vv-card.js';
import { CcDeptSelector } from '../components/cc-dept-selector.js?v=0.2';
import {OuGetDeptTreeByPIdApi} from '../webapi.js';
import { VvTreeview } from '../components/vv-treeview.js?v=0.16';
import { VvIcon } from '../components/vv-icon.js';
import { VvPagination } from '../components/vv-pagination.js?v=0.1';
import {Sortable} from '../sortable.core.esm-1.15.0.js';

class PgControls extends LitElement {
    constructor() {
        super();
        this._treeData = [];
        OuGetDeptTreeByPIdApi().then(res => {
            if(res){
                let data = this.flat2tree(res,"id","parentId","name","children","fullPathName");
                console.log("tree",data);
                this._treeData = JSON.stringify(data)
                this.requestUpdate();
            }
        })
    }
    static get properties() {
        return {fullpath: String}
    }
    static get styles() {
        return [
            css`
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
}
.dept-selected-text{
    display:inline-flex;align-items: center;margin-left:10px;
}
div{
        border-color: red;
        border-width: 1px;
    }
            `]
    }
    render(){
        return html`<vv-card><cc-dept-selector></cc-dept-selector><vv-pagination pagesize="10" id="pager" @change="${this.changeHandler}"></vv-pagination><vv-button @click="${this.setPageHandler}">set page</vv-button></vv-card>
<br>
<div id="nestedDemo" class="list-group col nested-sortable list-group-item nested-1">
                        <div id="g1" class="list-group-item nested-1 nested-sortable" style="background-color: red">Item 1.1
                            <div id="1.1.1" class="nested-1 list-group-item">
                                Item 1.1.1
                            </div>
                            <div id="1.1.2" class="nested-1 list-group-item">
                                Item 1.1.2
                            </div>
                            <div id="1.1.3" class="nested-1 list-group-item">
                                Item 1.1.3
                            </div>
                        </div>
                        <div id="1.2" class="list-group-item nested-1 list-group-item">Item 1.2</div>
                        <div  id="1.3" class="list-group-item nested-1 list-group-item">Item 1.3</div>
                        <div id="g4" class="list-group-item nested-1 nested-sortable" style="background-color: blue">Item 1.4
                            <div  id="1.4.1"class="nested-1 list-group-item">
                                Item 1.4.1
                            </div>
                            <div id="1.4.2" class="nested-1 list-group-item">
                                Item 1.4.2
                            </div>
                            <div id="1.4.3" class="nested-1 list-group-item">
                                Item 1.4.3
                            </div>
                        </div>
                        <div id="1.5" class="list-group-item nested-1 list-group-item">Item 1.5</div>
                    </div>
`;
    }
    firstUpdated(changedProperties) {
        debugger
        console.log("form design first update...");
        let con = this.shadowRoot.getElementById('nestedDemo');
        Sortable.create(con, {
            group: 'nested',
            draggable: '.nested-1',
            animation: 150
            // ,onUpdate:(evt)=>{this.onUpdateEvent(evt)},  //顶层容器只允许有行的排序
            // onRemove:(evt)=>{this.onRemoveEvent(evt)},
            ,
            onMove: this.onMoveHandler
        });
        let g1 = this.shadowRoot.getElementById("g1");
        Sortable.create(g1, {
            group: 'nested',
            draggable: '.nested-1',
            dataIdAttr: 'data-g1',
            animation: 150,

            onMove:this.onMoveHandler
        });
        let g4 = this.shadowRoot.getElementById("g4");
        Sortable.create(g4, {
            group: 'nested',
            draggable: '.nested-1',
            dataIdAttr: 'data-g4',
            animation: 150,

            onMove:this.onMoveHandler
        });
    }
    onMoveHandler(evt) {
        console.log("mmmm",evt);
        if(evt.dragged.id[0] == evt.to.id[0]) {
            console.log("card cannot to nested!");
            evt.stopPropagation();
            return false;
        }
    }
    onMoveEvent(/**Event*/evt, /**Event*/originalEvent) {
        //Card不能嵌套
        // if(evt.dragged.id[0] == evt.to.id[0]) {
        //     console.log("card cannot to nested!");
        //     evt.stopPropagation();
        //     originalEvent.stopPropagation();
        //     return false;
        // }
        return false;
    }
    onEndEvent(/**Event*/evt) {debugger
        console.log('end',evt.from,evt.to,evt.oldIndex,evt.newIndex)  //from = to （from/to表示外层）还在一个容器内
        evt.stopPropagation();
        return false;
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
    lclickHandler(e){
        console.log(e);
        this.fullpath = e.detail.ext;
    }
    setPageHandler(){
        this.renderRoot.getElementById("pager").total = 155;
        this.renderRoot.getElementById("pager").current = 3;
    }
    changeHandler(e){
        console.log("change",e);
    }
}
window.customElements.define('pg-controls', PgControls);