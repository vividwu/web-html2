import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvIcon } from './vv-icon.js';
import { VvCascader } from '../components/vv-cascader.js';
export class VvEditTable extends LitElement {
    static get properties() {
        return {
            id: String,
            type: String,
            size: String,
            labelName: String,
            design: {type: Boolean, reflect: true},
            editable: {type: Boolean, reflect: true},
            column: {type: Array, reflect: true},  //[{title:'编号',key:'no',render:function(row){return html`<b>row.no+'.'</b>`;}}]
            data: {type: Array, reflect: true}
        };
    }

    static get styles() {
        return [
            coreCss,
            css`
            :host{
    display: block;
    width: 100%;
    /*overflow-x: auto;会影响popup弹出容器出滚动*/
    -webkit-overflow-scrolling: touch;
    /*background:#ffffff;底色*/
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
  
  .card.card-custom > .card-header .card-toolbar {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    flex-wrap: wrap;
}
  a:not([href]):hover {
    text-decoration: none; }
.card.card-custom > .card-body {
    padding: 0rem 2.25rem;
}
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
        this.data = [];
        console.log('table constructor', this.column)
    }

    render() {//3
        console.log('table init', this.column);
        debugger
        return html`<div class="card card-custom gutter-b">
									<div class="card-header border-0 py-5">
										<div class="card-title">
										<h3 class="card-label">${this.labelName}</h3>
										</div>
										<div class="card-toolbar"><a @click="${this.addRowClick}" class="btn btn-primary font-weight-bolder">New Report</a></div>
									</div>
									<div class="card-body">
										<table class="table table-head-custom table-vertical-center"><thead>
										<tr class="text-left">
${this.column ? this.column.map(i => html`<th class="col-sm-${i.size}" @click="${(e) =>{this.onTitleClickHandler(e,i)}}">${i.labelName}${this.design ? html`<vv-icon name="close-circle-fill" color="#ed5565" class="elem-delete" @click="${(e) =>{this.onColumnRemoveHandler(e,i)}}"></vv-icon>` : ''}</th>`):''}
${this.editable ? html`<th>操作</th>` : ''}
</tr>
</thead>
<tbody>
${this.data ? this.data.map((d, i) => html`<tr>
    ${this.column ? this.column.map(col => html`<td>${this.renderCellControl(col, d[col.id])}</td>`):''}
    ${this.editable ? html`<td><vv-icon @click="${() =>{this.delRowClick(i)}}" name="close-circle-fill" color="#ed5565"></vv-icon></td>` : ''}
</tr>`):''}
</tbody></table>${this.data ? '' : html`<div style="text-align:center;padding-bottom:10px">暂无数据</div>`}
</div>
</div>`;
    }

    setColumn(col) {
        debugger
        console.log('setColumn')
        this._column = col;
        this.column = col;
    }

    connectedCallback() {//2
        super.connectedCallback();
        console.log('table connect', this.column);
        let event = new CustomEvent('pre-render', {
            detail: {}
        });
        this.dispatchEvent(event);
    }

    addRowClick() {
        let newRow = {};
        this.column.map(d => {
            newRow[d.id] = "";
    })
        ;
        this.data.push(newRow);
        this.requestUpdate();
    }

    delRowClick(i) {
        this.data.splice(i, 1);
        this.requestUpdate();
    }

    renderCellControl(columnConfig, data) {
        if (columnConfig.type == "input") {
            return html`<vv-input name="${columnConfig.id}" value="${data}"></vv-input>`
        } else if (columnConfig.type == "select") {
            return html`<vv-select name="${columnConfig.id}"></vv-select>`
        } else if (columnConfig.type == "date") {
            return html`<vv-date name="${columnConfig.id}"></vv-date>`
        } else if (columnConfig.type == "cascader") {
            return html`<vv-cascader name="${columnConfig.id}"></vv-cascader>`
        }
    }

    onTitleClickHandler(e, col) {
        let event = new CustomEvent('title-click', {
            detail: {column: col}
        });
        this.dispatchEvent(event);
    }

    onColumnRemoveHandler(e, col) {
        let event = new CustomEvent('column-remove', {
            detail: {column: col}
        });
        this.dispatchEvent(event);
    }
}
if(!customElements.get('vv-edit-table')) {
    window.customElements.define('vv-edit-table', VvEditTable);
}