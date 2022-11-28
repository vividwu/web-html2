import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvTable extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            size: String,
            column: { type: Array, reflect: true},  //[{title:'编号',key:'no',render:function(row){return html`<b>row.no+'.'</b>`;}}]
            data: { type: Array, reflect: true } };
    }
    static get styles() {
        return [
            coreCss,
            css`
            :host{
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    background:#ffffff;/*底色*/
}
table {
    border-collapse: collapse;
}
.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #3F4254;
    background-color: transparent;
}
th {
    text-align: inherit;
    text-align: -webkit-match-parent;
}
.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #EBEDF3;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #EBEDF3;
}
.table thead th, .table thead td {
  font-weight: 600;
  font-size: 1rem;
  border-bottom-width: 1px;
  padding-top: 1rem;
  padding-bottom: 1rem; }
  .table.table-head-custom thead tr, .table.table-head-custom thead th {
  font-weight: 600;
  color: #B5B5C3 !important;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem; }
  .table.table-vertical-center th, .table.table-vertical-center td {
  vertical-align: middle; }
  .table:not(.table-bordered) thead th, .table:not(.table-bordered) thead td {
  border-top: 0; }
        `
        ]
    }
    // set columns(val) {debugger;console.log("set columns",val);
    //     let oldVal = this._columns;
    //     this._columns = val;
    //     this.requestUpdate('columns', oldVal);
    // }
    //
    // get columns() { debugger;return this._columns; }
    constructor() {//1
        super();
        this.type = "table";
        this.column = [];
        this._column = [];
        this.data=[];console.log('table constructor',this.column)
    }
    render(){//3
        console.log('table init',this.column);debugger
        return html`<table class="table table-head-custom table-vertical-center"><thead><tr class="text-left">
${this.column?this.column.map(i => html`<th>${i.labelName}</th>`):''}
</tr></thead>
<tbody>
${this.data?this.data.map(d => html`<tr>${this.column?this.column.map(col => html`<td class="pr-0">${col.render?col.render(d):d[col.id]}</td>`):''}</tr>`):''}
</tbody></table>${this.data?'':html`<div style="text-align:center;padding-bottom:10px">暂无数据</div>`}`;
    }
    setColumn(col){debugger
        console.log('setColumn')
        this._column = col;
        this.column = col;
    }
    connectedCallback() {//2
        super.connectedCallback();console.log('table connect',this.column);
        let event = new CustomEvent('pre-render', {
            detail: {}
        });
        this.dispatchEvent(event);
    }
}
window.customElements.define('vv-table', VvTable);