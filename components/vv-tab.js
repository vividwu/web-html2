import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
/*/features/custom/line-tabs.html*/
export class VvTab extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            value: String,
            label: String,
            activekey: String,
            disabled:  { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
            :host{
             width:100%;
            }
            ol,ul,dl {
  margin-top: 0;
  margin-bottom: 1rem; }
  .nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none; }
  .nav-tabs {
  border-bottom: 2px solid #E4E6EF; }
.nav-link {
  display: block;cursor: pointer;
  padding: 0.5rem 1rem; }
  .nav-link:hover, .nav-link:focus {
    text-decoration: none; }
  .nav-link.disabled {
    color: #7E8299;
    pointer-events: none;
    cursor: default; }
      .nav-tabs .nav-link {
    border: 2px solid transparent;
    border-top-left-radius: 0.42rem;
    border-top-right-radius: 0.42rem; }
    
    .nav.nav-tabs.nav-tabs-line .nav-link {
  border: 0;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  padding: 0.65rem 0;
  margin: 0 1rem; }
  .fade {
  transition: opacity 0.15s linear; }
  .tab-content > .tab-pane {
  display: none; }

.tab-content > .active {
  display: block; }
  .nav.nav-tabs.nav-tabs-line .nav-item {
  margin: 0 0 -1px 0; }
  .nav.nav-tabs.nav-tabs-line .nav-item:first-child .nav-link {
  margin-left: 0; }
  .nav.nav-tabs.nav-tabs-line .nav-link:hover:not(.disabled),
.nav.nav-tabs.nav-tabs-line .nav-link.active,
.nav.nav-tabs.nav-tabs-line .show > .nav-link {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #3699FF;
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  
  .nav .nav-link {
  display: flex;
  align-items: center;
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  padding: 0.75rem 1.5rem;
  color: #7E8299; }

  .nav .show > .nav-link:after,
  .nav .nav-link:hover:not(.disabled):after,
  .nav .nav-link.active:after {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    color: #3699FF; }
            `]
    }
    constructor() {
        super();
        this.type = "tab";
    }
    render() {
        console.log('tab2')
        return html`<ul id="navBtns" class="nav nav-tabs nav-tabs-line" @click="${this.handleTabChange}">
        <!--tab button-->
        </ul>
        <div class="tab-content mt-5">
            <slot id="slot" @slotchange=${this.handleSlotChange}></slot>
        </div>`
    }
    connectedCallback() {
        super.connectedCallback();
        console.log('tab1')
    }
    handleTabChange(e){debugger
        const item = e.target.closest('.nav-item');
        if(item){
            this.activekey = item.dataset.key;
            this.shadowRoot.querySelectorAll("#navBtns li").forEach((v,i)=>{
                //console.log(v)
                if(item.dataset.key === v.dataset.key) {
                    v.childNodes[0].setAttribute("class","nav-link active");
                }else{
                    v.childNodes[0].setAttribute("class","nav-link");
                }
            });
            this.shadowRoot.getElementById("slot").assignedElements().forEach((v,i)=>{
                //console.log(v.key);
                if(v.key === item.dataset.key) {
                    v.renderRoot.querySelector("#tp1").setAttribute("class","tab-pane fade active show");
                }else{
                    v.renderRoot.querySelector("#tp1").setAttribute("class","tab-pane fade active");
                }
            });
        }
    }
    handleSlotChange(e){console.log('tab handleSlotChange');debugger
        let that = this;
        const childNodes = e.target.assignedNodes({flatten: true});
        console.log('slot',childNodes)
        childNodes.map((node) => {
            if(node.nodeName == "VV-TAB-CONTENT"){debugger
                //tab button
                let li = document.createElement("LI");
                li.setAttribute("class","nav-item");
                li.setAttribute("data-key",node.getAttribute("key"));  //node.key
                let a = document.createElement("A");
                //a.setAttribute("href","#"+node.key);
                a.innerText = node.name;
                if(that.activekey===null){
                    that.activekey = that.shadowRoot.getElementById('slot')[0].key;
                }
                if(node.getAttribute("key") === that.activekey){
                    //node.renderRoot.getElementById("tp1").setAttribute("class","tab-pane fade active show");
                    a.setAttribute("class","nav-link active");
                }else{
                    //node.renderRoot.getElementById("tp1").setAttribute("class","tab-pane fade");
                    a.setAttribute("class","nav-link");
                }
                li.appendChild(a);
                that.renderRoot.getElementById("navBtns").appendChild(li);
            }
        })
    }
}
if(!customElements.get('vv-tab')) {
    window.customElements.define('vv-tab', VvTab);
}