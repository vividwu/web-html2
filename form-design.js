import {LitElement, html} from './lit-core.min.js';
import { VvButton } from './vv-button.js';
import { VvInput } from './vv-input.js';
import { VvCard } from './vv-card.js';
import { VvSelect } from './vv-select.js';
import { VvOption } from './vv-option.js';
import { VvDrawer } from './vv-drawer.js';
import { VvIcon } from './vv-icon.js';
import { VvTag } from './vv-tag.js';
import { VvTable } from './vv-table.js';
import {VvDate} from './vv-date.js'
import {VvTab} from './vv-tab.js'
import {VvTabContent} from './vv-tab-content.js'
import {VvSwitch} from './vv-switch.js'

import  './xy-select.js';
import  './xy-option.js';
import  './xy-button.js';

import './form-draw.js';
import {Sortable} from './sortable.core.esm-1.15.0.js'

class FormDesign extends LitElement {
    static get properties() {
        return { myProp: String,
            myArray: Array,
            tableColumns: { type: Array, reflect: true},
            tableData: { type: Array, reflect: true } };
    }
    constructor() {
        super();
        this.myProp="user";
        this.myArray=[1,2,3];
    }
    render(){
        console.log('render design');
        return html`<div id="con123"><ul id="items"><li>item 1</li><li>item 2</li><li>item 3</li></ul>
<vv-card id="dragGroup" title="drag card container">
<vv-input value="drag1" class="" noLabel labelName="测试标签"></vv-input>
<vv-input value="drag1" class="col-sm-12 vv-control-wapper" noLabel labelName="测试标签"></vv-input>
<vv-input value="drag2" class="col-sm-4 vv-control-wapper" noLabel="true"></vv-input>
<vv-input value="drag3" class="col-sm-4 vv-control-wapper" noLabel="false"></vv-input>
<vv-input value="drag4" class="col-sm-4 vv-control-wapper"></vv-input>
<vv-input value="drag5" class="col-sm-4 vv-control-wapper"></vv-input>
<vv-select class="col-sm-4" maxHeight="233.25">
<vv-option value="t1">test01</vv-option><vv-option value="t2">test02</vv-option><vv-option value="t3">test03</vv-option>
<vv-option value="t4">test04</vv-option><vv-option value="t5">test05</vv-option><vv-option value="t6">test06</vv-option>
</vv-select>
<vv-select class="col-sm-4" multiple>
<vv-option value="t1">mu1</vv-option><vv-option value="t2">mu2</vv-option><vv-option value="t3">mu3</vv-option>
</vv-select>
<vv-date id="mydate" class="col-sm-4"></vv-date>
</vv-card>
<vv-icon name="user"></vv-icon><vv-icon name="message" color="#1E90FF"></vv-icon><vv-icon name="user" size="40"></vv-icon>
<vv-icon path="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.9-5.3 0.1-12.7-6.4-12.7z"></vv-icon>
<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024" style="font-size:20px" width="20px">
<path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.9-5.3 0.1-12.7-6.4-12.7z"></path>
</svg>
<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024" style="font-size:20px" width="20px">
<use id="use" xlink:href="/assets/plugins/global/fonts/icon.svg#icon-user"></use>
</svg>
<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024" style="font-size:20px" width="20px">
<use id="use" xlink:href="/assets/plugins/global/fonts/icon.svg#icon-${this.myProp}"></use>
</svg>

<p>22-10</p>
<vv-tag>My Tags1</vv-tag> <vv-tag class="label-sm">small Tags1</vv-tag> <vv-tag tagType="danger" removable>danger tag</vv-tag>
<br><br><br><br><br>
<vv-table id="table1" data="${this.tableData}"></vv-table>
<button @click="${this.clickHandlerLoadTableData}">load table1 data</button>
<button @click="${this.clickHandlerLoadTableData2}">load table1 data2</button>
<vv-card>
    <vv-table id="table2" column="${this.tableColumns}" data="${this.tableData}"></vv-table>
</vv-card>
<vv-table id="table3" @pre-render="${this.tablePreRender}" data="${this.tableData}"></vv-table>
<br>
<vv-switch @change="${this.switchChangeHandler}"></vv-switch>
<br>
<vv-tab activekey="c2">
<vv-tab-content key="c1" name="Active1">content1</vv-tab-content>
<vv-tab-content key="c2" name="Active2">content2:<vv-input></vv-input></vv-tab-content>
</vv-tab>
<vv-card noTitleBorder>
<vv-button slot="card-toolbar">header btn</vv-button>
</vv-card>
<button @click="${this.clickHandlerBtn}">add button</button>
<button @click="${this.clickHandlerInput}">add input</button>
<button @click="${this.clickHandlerCard}">add card</button>
<button @click="${this.clickHandlerDrawer}">show drawer</button>
<button @click="${this.clickHandlerMessage}">show msg</button>
<button @click="${this.clickHandlerXyMessage}">xymsg</button>
<vv-drawer>
<h5 class="font-weight-bold mb-4 text-center">demo1</h5>
<p>offcanvas.js</p><p>2</p><p>2</p><p>2</p><p>2</p>
<p>offcanvas.js</p><p>2</p><p>2</p><p>2</p><p>2</p>
<p>offcanvas.js</p><p>2</p><p>2</p><p>2</p><p>2</p>
<p>offcanvas.js</p><p>2</p><p>2</p><p>2</p><p>2</p>
<p>offcanvas.js</p><p>2</p><p>2</p><p>2</p><p>2</p>
</vv-drawer>
        <form-draw id="formDraw"></form-draw>
</div>`;
    }
    connectedCallback() {
        super.connectedCallback()
        console.log('design connectedCallback');
    }
    updated(changedProperties) {debugger
        console.log('design updated event');
    }
    clickHandlerBtn(e) {
        console.log(e.target);
        let button = new VvButton();
        let btn = this.renderRoot.querySelector("#formDraw");
        btn.controls.push(button);
        btn.update();
        //this.requestUpdate();debugger
        var el = this.renderRoot.querySelector('#items');
        var sortable = Sortable.create(el,{animation: 1500});

        var dg = this.renderRoot.querySelector('#dragGroup');
        var sortable = Sortable.create(dg,{animation: 1500});

        btn.setDrag();
    }
    clickHandlerInput(e) {
        console.log(e.target);
        let input = new VvInput();
        let $fd = this.renderRoot.querySelector("#formDraw");
        $fd.controls.push(input);
        $fd.update();
        //this.requestUpdate();debugger
    }
    clickHandlerCard(e) {
        console.log(e.target);
        let card = new VvCard();
        let $fd = this.renderRoot.querySelector("#formDraw");
        $fd.controls.push(card);
        $fd.update();
        //this.requestUpdate();debugger
        setTimeout(function(){$fd.setDragCard(card.id)},1000);
    }
    clickHandlerDrawer(){
        let drawer = this.renderRoot.querySelector("vv-drawer");
        drawer.show = true;
    }
    clickHandlerMessage(){
        VvMessage.info('vv info');
    }
    clickHandlerXyMessage(){
        XyMessage.info('xy info');
    }
    clickHandlerLoadTableData(){console.log('load table click')
        //this.renderRoot.querySelector("vv-table").columns=[{title:'编号',key:'no',render:function(row){return html`<b>aaa</b>`;}}];  //JSON.stringify(
        // this.tableColumns = JSON.stringify([{title:'编号',key:'no',render:function(row){return '<b>'+row.no+'-'+row.age+'</b>';}},
        //     {title:'姓名',key:'name'},{title:'年龄',key:'age'}]);
        this.renderRoot.querySelector("vv-table").setColumn([{title:'编号',key:'no',
            render:function(row){return html`<b>${row.no}-${row.age}${row.no=='123'?html`<vv-tag>${row.no}</vv-tage>`:''}</b>`;}},
            {title:'姓名',key:'name'},{title:'年龄',key:'age'}])
        //this.renderRoot.querySelector("vv-table").setRender(this.colCallback);colCallback(name,row){ return html``; }
        this.tableData = JSON.stringify([{no:'123',name:'test01',age:28},{no:'456',name:'test02',age:18},{no:'789',name:'test03',age:38}]);
    }
    clickHandlerLoadTableData2(){console.log('load table click2')
        this.tableColumns = JSON.stringify([{title:'编号',key:'no'},
            {title:'姓名',key:'name'},{title:'年龄',key:'age'}]);
        this.tableData = JSON.stringify([{no:'123',name:'test1',age:38},{no:'456',name:'test2',age:18},{no:'789',name:'test03',age:38}]);
    }
    tablePreRender(e){
        console.log('fire table pre render event')
        this.renderRoot.getElementById("table3").setColumn([{title:'编号',key:'no',
            render:function(row){return html`<b>${row.no}-${row.age}${row.no=='123'?html`<vv-tag>${row.no}</vv-tage>`:''}</b>`;}},
            {title:'姓名',key:'name'},{title:'年龄',key:'age'}]);
    }
    switchChangeHandler(e){
        VvMessage.info('switch change:'+e.detail.checked);
    }
}
window.customElements.define('form-design', FormDesign);