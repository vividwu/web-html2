import {LitElement, html, css} from '../lit-core.min.js';
import { VvIcon } from './vv-icon.js';

export class VvMessage extends LitElement {

    static get properties() {
        return {  
            type: String,
            //show: { type: Boolean, reflect: true },
            size: String,
            msgType: String,
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
            margin:auto;
            display:flex;
            padding:10px 15px;
            margin-top:10px;
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
        vv-loading{
            display:none;
        }

        :host([show][type="loading"]) vv-loading{
            display:block;
        }
        :host([show][type="loading"]) vv-icon{
            display:none;
        }
        :host vv-icon{
            color:var(--themeColor,#42b983);
        }
        `
        ]
    }
    constructor() {
        super();
        this.type = "message";
        this.size = "20";
    }
    render(){
        return html`<div class="message">
            <vv-icon id="message-type" name="${this.typeMap(this.msgType).name}" color="${this.typeMap(this.msgType).color}" class="message-type" size="16"></vv-icon>
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
            } else {
                that.setAttribute('show', '');
            }
        },10);
    }

    // set msgType(value) {
    //     this.setAttribute('type', value);
    //     // let oldVal = this.msgType;
    //     // this.requestUpdate('msgType', oldVal);
    // }

    typeMap(type) {
        let name = '';
        let color = '';
        switch (type) {
            case 'info':
                name = 'info-circle-fill';
                color = 'var(--infoColor,#1890ff)';
                break;
            case 'success':
                name = 'check-circle-fill';
                color = 'var(--successColor,#52c41a)';
                break;
            case 'error':
                name = 'close-circle-fill';
                color = 'var(--errorColor,#f4615c)';
                break;
            case 'warning':
                name = 'warning-circle-fill';
                color = 'var(--waringColor,#faad14)';
                break;
            default:
                break;
        }
        return {
            name:name,
            color:color
        }
    }

    connectedCallback() {super.connectedCallback();
        this.remove = false;
        this.messageType = this.shadowRoot.getElementById('message-type');
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
    // firstUpdated(changedProperties) {
    //     let that = this;
    //     setTimeout(function () {
    //         if (that.show === null || that.show === false) {
    //             that.removeAttribute('show');
    //         } else {
    //             that.setAttribute('show', '');
    //         }
    //     },10);
    // }

    // attributeChangedCallback (name, oldValue, newValue) {
    //     if( name == 'msgType' && this.messageType){
    //         if(newValue!==null){
    //             this._msgTypeIcon.name = this.typeMap(newValue).name;
    //             this._msgTypeIcon.color = this.typeMap(newValue).color;
    //         }
    //     }
    //     if( name == 'icon' && this.messageType){
    //         if(newValue!==null){
    //             this.messageType.name = newValue;
    //         }
    //     }
    // }
}

if(!customElements.get('vv-message')){
    customElements.define('vv-message', VvMessage);
}
debugger
let messageContent = document.getElementById('message-content');
if(!messageContent){
    messageContent = document.createElement('div');
    messageContent.id = 'message-content';
    messageContent.style='position:fixed; pointer-events:none; left:0; right:0; top:10px; z-index:9999;';  //top z-index=97
    document.body.appendChild(messageContent);
}

export default {
    info: function(text='',duration,onclose) {
        const message = new VvMessage();
        message.timer && clearTimeout(message.timer);
        messageContent.appendChild(message);
        message.msgType = 'info';
        message.textContent = text;
        message.show = true;
        message.onclose = onclose;
        message.timer = setTimeout(()=>{
            message.show = false;
        },duration||3000);
        return message;
    },

    success: function(text='',duration,onclose) {
        const message = new VvMessage();
        message.timer && clearTimeout(message.timer);
        messageContent.appendChild(message);
        message.msgType = 'success';
        message.textContent = text;
        message.show = true;
        message.onclose = onclose;
        message.timer = setTimeout(()=>{
            message.show = false;
    },duration||3000);
        return message;
    },

    error: function(text='',duration,onclose) {
        const message = new VvMessage();
        message.timer && clearTimeout(message.timer);
        messageContent.appendChild(message);
        message.msgType = 'error';
        message.textContent = text;
        message.show = true;
        message.onclose = onclose;
        message.timer = setTimeout(()=>{
            message.show = false;
    },duration||3000);
        return message;
    },

    warning: function(text='',duration,onclose) {
        const message = new VvMessage();
        message.timer && clearTimeout(message.timer);
        messageContent.appendChild(message);
        message.msgType = 'warning';
        message.textContent = text;
        message.show = true;
        message.onclose = onclose;
        message.timer = setTimeout(()=>{
            message.show = false;
    },duration||3000);
        return message;
    },

    show: function({text,duration,onclose,icon}) {
        const message = new VvMessage();
        message.timer && clearTimeout(message.timer);
        messageContent.appendChild(message);
        message.icon = icon;
        message.textContent = text||'';
        message.show = true;
        message.onclose = onclose;
        if(duration!==0){
            message.timer = setTimeout(()=>{
                message.show = false;
        },duration||3000);
        }
        return message;
    }
}