import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvIcon } from './vv-icon.js';

export class VvPagination extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            size: String,
            current: Number,
            pagesize: Number,
            total: Number };
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
.btn-sm, .btn-group-sm > .btn {
    padding: 0.55rem 0.75rem;
    font-size: 0.925rem;
    line-height: 1.35;
    border-radius: 0.42rem;
}

.icon-xs {
    font-size: 0.65rem !important;
}

i {
    font-size: 1.25rem;
    color: #B5B5C3;
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
        this.type = "pagination";
        this.pagesize = 1;
        this.total = 0;
        this.current = 1;
        this._count = 0;
        this._place = [];
    }
    render(){//3
        this.updatePage();
        console.log('pagination init',this._count,this._place);
        //let t = Array.from({length:this._count},(el,i)=>i).splice(0,9).map(el=>`${el}`).join(',');
        //console.log('t',t);d-flex flex-wrap
        return html`<div class="py-2 mr-3">
            <a id="left" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1 ${this.current==1?"disabled":""}"><vv-icon name="left" class="icon-xs"></vv-icon></a>
            ${this._place.map(n => html`<a class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1 ${this.current==n?"active":""} ${typeof n==='number'?"":"disabled"}" @click="${()=>this.numClickHandler(n)}">${typeof n==='number'?n:"..."}</a>` )}
            <a id="right" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1 ${this.current==this._count?"disabled":""}"><vv-icon name="right" class="icon-xs"></vv-icon></a>
            </div>`
        /*return html`<div class="d-flex flex-wrap py-2 mr-3">
			<a id="left" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
				<vv-icon name="left" class="icon-xs"></vv-icon>
			</a>
			<a class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
			<a class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">23</a>
			<a class="btn btn-icon btn-sm border-0 btn-hover-primary active mr-2 my-1">24</a>
			<a class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">25</a>
			<a class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">26</a>
			<a class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">27</a>
			<a class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">28</a>
			<a class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
			<a id="right" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
				<vv-icon name="right" class="icon-xs"></vv-icon>
			</a>
		</div>`;*/
    }
    updatePage(current=this.current){debugger
        // this.left.disabled = current==1;
        // this.right.disabled = current==this.count;
        this._count = Math.ceil(this.total/this.pagesize);
        if(this._count>9 ) {
            switch (this.current) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    this._place = [1, 2, 3, 4, 5, 6, 7, 'next', this._count];
                    break;
                case this._count:
                case this._count - 1:
                case this._count - 2:
                case this._count - 3:
                case this._count - 4:
                    this._place = [1, 'pre', this._count - 6, this._count - 5, this._count - 4, this._count - 3, this._count - 2, this._count - 1, this._count];
                    break;
                default:
                    this._place = [1, 'pre', current - 2, current - 1, current, current + 1, current + 2, 'next', this._count];
                    break;
            }
        }else{
            this._place = Array.from({length:this._count},(el,i)=>i).splice(0,9).map(el=>el+1);
        }
    }
    numClickHandler(num){
        if(this.current != num) {
            this.current = num;
            let event = new CustomEvent('change', {
                detail: {
                    current: this.current,
                    pagesize: this.pagesize,
                    total: this.total
                }
            });
            this.dispatchEvent(event);
        }
    }
    connectedCallback() {//2
        super.connectedCallback();
    }
}
window.customElements.define('vv-pagination', VvPagination);