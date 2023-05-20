import {LitElement, html, css} from '../lit-core.min.js';
import { VvIcon } from './vv-icon.js';

export class VvLoading extends LitElement {
    static get properties() {
        return {  
            type: String,
            //show: { type: Boolean, reflect: true },
            size: String,
            textContent: String
        };
    }
    //assets/css/style.bundle.css 48598 page-loading 影响host的transition
    static get styles() {
        return [
            css`
        :host{
            display:flex;
            visibility:hidden;
            opacity:0;
            transition:.3s;
            z-index:10;
        }
        :host([show]){
            opacity:1;
            visibility:visible;
        }
        .message{
        display:flex;
        padding:10px 15px;
            z-index: 1011; 
            position: fixed; 
            top: 50%; 
            left: 50%; 
            
            border: 0px; cursor: wait;
            
            align-items:center;
            font-size: 14px;
            color: #666;
            background: #fff;
            border-radius: 3px;
            transform: translateY(-100%);
            transition:.3s transform cubic-bezier(.645, .045, .355, 1);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            pointer-events:all;
        }
        :host([show]) .message{
            transform: translateY(0);
        }

        .message>*{
            margin-right:5px;
        }
        .show{
            display:block;
        }
        .hide{
            display:none;
        }
        :host([show][type="loading"]) vv-icon{
            display:none;
        }
        :host vv-icon{
            color:var(--themeColor,#42b983);
        }
        
        .loading{
            display: block;
            width: 1em;
            height: 1em;
            margin: auto;
            animation: rotate 1.4s linear infinite;
            margin-right:6px;
        }
        .circle {
            stroke: currentColor;
            animation:  progress 1.4s ease-in-out infinite;
            stroke-dasharray: 80px, 200px;
            stroke-dashoffset: 0px;
            transition:.3s;
        }
        @keyframes rotate{
            to{
                transform: rotate(360deg); 
            }
        }
        @keyframes progress {
            0% {
              stroke-dasharray: 1px, 200px;
              stroke-dashoffset: 0px; 
            }
            50% {
              stroke-dasharray: 100px, 200px;
              stroke-dashoffset: -15px; 
            }
            100% {
              stroke-dasharray: 100px, 200px;
              stroke-dashoffset: -125px; 
            } 
        }
        `
        ]
    }
    constructor() {
        super();
        this.type = "loading";
        this.size = "20";
    }
    render(){
        return html`<div class="message">
            <svg color="#1890ff" class="loading" id="loading" viewBox="22 22 44 44"><circle class="circle" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>
            ${this.textContent}
        </div>
        `;
    }


    get show() {
        return this.getAttribute('show')!==null;
    }
    set show(value) {//不需要，否则先触发这个再render，在加载完成后设置才有下落动画
        let that = this;
        setTimeout(function () {
            if (value === null || value === false) {
                that.removeAttribute('show');
                messageContent.style.visibility = "hidden";
                messageContent.style.opacity = 0;
            } else {
                that.setAttribute('show', '');
            }
        },10);
    }

    connectedCallback() {super.connectedCallback();
        this.remove = false;
        this.shadowRoot.addEventListener('transitionend',(ev)=>{
            if(ev.propertyName === 'transform' && !this.show){
                messageContent.removeChild(this);
                this.dispatchEvent(new CustomEvent('close'));
            }
        })
        //this._msgTypeIcon = {};// = this.msgType;
        this.clientWidth;
        this.setAttribute('id', 'host');
        //this.setAttribute("style","display:flex;transition:.3s;z-index:10;color:red");
    }
}

if(!customElements.get('vv-loading')){
    customElements.define('vv-loading', VvLoading);
}

let messageContent = document.getElementById('loading-block');
if(!messageContent){
    messageContent = document.createElement('div');
    messageContent.id = 'loading-block';
    messageContent.style='z-index: 1100;border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.3); cursor: wait; position: fixed;visibility:hidden;opacity:0;transition:.3s;';  //top z-index=97
    document.body.appendChild(messageContent);
}

export default {
    load: function(text='') {
        const message = new VvLoading();
        messageContent.appendChild(message);
        message.textContent = text||'loading';
        message.show = true;
        messageContent.style.visibility = "visible";
        messageContent.style.opacity = 1;
        return message;
    }
}