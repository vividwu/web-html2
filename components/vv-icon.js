import {LitElement, html, css} from '../lit-core.min.js';
/*https://www.iconfont.cn/collections/detail?cid=9402*/
export class VvIcon extends LitElement {
    static get properties() {
        return {  name: String,
            type: String,
            path: String,
            size: String,
            color: String
        };
    }
    static get styles() {
        return [
            css`
        :host{
            font-size:inherit;
            display:inline-block;
            transition:.3s;
        }
        .icon {
            display:block;
            width: 1em;
            /*height: 1em;vivid 宽高会影响原始大小*/
            margin: auto;
            fill: currentColor;
            overflow: hidden;
            /*transition:inherit;*/
        }
        :host([spin]){
            animation: rotate 1.4s linear infinite;
        }
        @keyframes rotate{
            to{
                transform: rotate(360deg); 
            }
        }
        `
        ]
    }
    constructor() {
        super();
        this.type = "icon";
        this.size = "20";
    }
    render(){
        // return html`${this.name?html`<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024" style="font-size:${this.size}px;">
        //     <use id="use"></use>
        // </svg>`:
        // html`<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024" style="font-size:${this.size}px;"><path id="path"></path></svg>`}
        // `;作为整体元素渲染，否则单独use、path不显示
        return html`${this.name?html`<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024" style="font-size:${this.size}px;">
            <use id="use"></use>
        </svg>`:
            html`<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024" style="font-size:${this.size}px;"><path id="path"></path></svg>`}
        `;
    }
    connectedCallback() {
        super.connectedCallback();
        // this.icon = this.shadowRoot.getElementById('icon');
        // this.use = this.icon.querySelector('use');
        // this.d = this.icon.querySelector('path');
    }
    // attributeChangedCallback (name, oldValue, newValue) {
    //     console.log('icon attributeChangedCallback:',name, oldValue, newValue);debugger
    //     if(name == 'name' && this.use){
    //         this.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `/assets/plugins/global/fonts/icon.svg#icon-${newValue}`);
    //     }
    //     // if( name == 'path' && this.d){
    //     //     this.d.setAttribute("d", newValue);
    //     // }
    //     // if( name == 'size' && this.icon){
    //     //     this.icon.style.fontSize = newValue + 'px';
    //     // }
    // }
    firstUpdated(changedProperties) {
        let icon = this.shadowRoot.getElementById('icon');
        let use = icon.querySelector('use');
        if (use) {
            use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../assets/plugins/global/fonts/icon.svg#icon-${this.name}`);
        }
        let path = icon.querySelector('path');
        if (path) {
            path.setAttribute("d", this.path);
        }
        if (this.color) {
            icon.style.color = this.color;
        }
    }
}
if(!customElements.get('vv-icon')) {
    window.customElements.define('vv-icon', VvIcon);
}