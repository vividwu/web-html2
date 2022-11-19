import {LitElement, html} from './lit-core.min.js';
import {Sortable} from './sortable.core.esm-1.15.0.js'
class FormDraw extends LitElement {
    static get properties() {
        return {
            controls: Array };
    }
    constructor() {
        super();
        this.controls=[];
    }
    render(){
        console.log('render draw')
        return html`<div id="con456">${this.controls.map(i => this.showControl(i) )}
</div>`;
//         return html`${this.controls.length>0? html`<p>add after</p>`:html`<b>first load</b>`}`;
    }
    connectedCallback() {
        super.connectedCallback()
        console.log('draw connectedCallback');
    }
    setDrag(){debugger
        let topCon = this.renderRoot.querySelector("#con456");  //只在这一父元素下直接的子元素支持拖拽
        Sortable.create(topCon, {
            group: 'nested',
            animation: 1000,
            fallbackOnBody: true,
            swapThreshold: 0.65
        });
    }
    setDragCard(id){debugger
        let card = this.renderRoot.querySelector("#"+id);//.shadowRoot.getElementById(id+"_body");
        Sortable.create(card,{
            draggable: '.citem',
            group: 'nested',
            animation: 150,
            fallbackOnBody: true,
            swapThreshold: 0.65
        });
    }
    showControl(con){
        if(con.type === undefined){
            return html`<span>lost control type</span>`
        }
        if(con.type==='button'){
            return html`<vv-button>${con.value}</vv-button>`
        }else if(con.type==='input'){
            return html`<vv-input vlaue="${con.value}" class="col-sm-4 vv-control-wapper citem"></vv-input>`
        }else if(con.type==='card'){
            return html`<vv-card id="${con.id}" title="${con.title}"></vv-card>`
        }else{
            return html`<span>unkonw control type : ${con.type}</span>`
        }
    }
}
window.customElements.define('form-draw', FormDraw);