import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvIcon } from './vv-icon.js';
export class VvDialog extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            title: String,
            text: String,
            width: String,
            height: String,
            show:  { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
:host{
            position:fixed;
            display:flex;
            left:0;
            top:0;
            right:0;
            bottom:0;
            z-index:-1;
            background:rgba(0,0,0,.3);
            visibility:hidden;
            opacity:0;
            /*backdrop-filter: blur(3px);*/
            transition:.3s;
        }
        :host([show]){
            opacity:1;
            z-index:999;
            visibility:visible;
        }
        .dialog {
            display:flex;
            position:relative;
            min-width: 360px;
            margin:auto;
            box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
            /*box-shadow: 0px 0px 60px -15px rgb(0 0 0 / 20%);*/
            box-sizing: border-box;
            max-width: calc(100vw - 20px);
            max-height: calc(100vh - 20px);
            border-radius: 3px;
            background-color: #fff;
            opacity:0;
            transform:scale(0.5);
            transition:.3s cubic-bezier(.645, .045, .355, 1);
            border-radius:0.42rem;
        }
        :host([show]) .dialog{
            opacity:1;
            transform:scale(1);
        }
.dialog-content {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding: 20px 20px;
    flex: 1;
    flex-direction: column;
}
.dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    /*min-height: 70px;*/
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent;
}
.font-size-h5 {
 font-size: 1.25rem !important;
}
.dialog-body {
    padding: 2rem 2.25rem;
    flex: 1;
    overflow: auto;
    min-height: 50px;
}
.dialog-body::-webkit-scrollbar {
    width:8px;
    height:8px;
}
.dialog-body::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 5px;
}
.dialog-body::-webkit-scrollbar-thumb:hover {
    background:#9f9f9f;
}
.dialog-footer {
    padding: 3px 0 20px 0;
    margin-top: -3px;
    text-align: right;
}
        `
        ]
    }
    constructor() {
        super();
        this.type = "dialog";
        this.show = false
    }
    render(){debugger
        return html`<div class="dialog" style="${this.width?'width:'+this.width+'px':''};${this.height?'height:'+this.height+'px':''}">
    <div class="dialog-content">
        <div class="dialog-header px-4 py-3">
            <h4 class="text-left font-weight-bold m-0">${this.title}</h4>
            <a class="text-right btn btn-xs btn-icon btn-light btn-hover-primary"><vv-icon name="close" size="15" @click="${this.closeClick}"></vv-icon></a>
        </div>
        <div class="dialog-body">
            <slot></slot>
        </div>
        <div class="dialog-footer"><slot name="footer"></slot></div>
    </div>
</div>`;
    }

    connectedCallback() {debugger
        super.connectedCallback();
        console.log('drawer connectedCallback');
    }
    closeClick(e) {debugger
        this.show = false;
    }
    firstUpdated(changedProperties) {

    }
}
if(!customElements.get('vv-dialog')) {
    window.customElements.define('vv-dialog', VvDialog);
}