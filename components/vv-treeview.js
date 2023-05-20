import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvIcon } from './vv-icon.js';
export class VvTreeview extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            title: String,
            text: String,
            data: { type: Array, reflect: true },
            show:  { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
.jstree-node, .jstree-children, .jstree-container-ul {
    /*display: block;*/
    margin: 0;
    padding: 0;
    list-style-type: none;
    list-style-image: none;
    
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease-in-out;
}

.jstree-icon:empty {
    display: inline-block;
    text-decoration: none;
    margin: 0;
    padding: 0;
    vertical-align: top;
    text-align: center;
}

.jstree-ocl {
    cursor: pointer;
}
.jstree-node {
    white-space: nowrap;
}
.jstree-node, .jstree-icon {
    background-color: transparent;
}
.jstree-node {
    min-height: 24px;
    line-height: 24px;
    margin-left: 24px;
    min-width: 24px;
}
.jstree-node {
    background-position: -292px -4px;
    background-repeat: repeat-y;
}
.jstree-container-ul > .jstree-node {
    margin-left: 0;
    margin-right: 0;
}
.jstree-icon:empty {
    width: 11px;  /*24*/
    height: 24px;
    line-height: 24px;
}
.jstree-icon {
    color: #3F4254;
    font-size: 0.8rem;
}
.jstree-anchor {
    display: inline-block;
    color: black;
    white-space: nowrap;
    padding: 0 4px 0 1px;
    margin: 0;
    vertical-align: top;
}
.jstree-anchor, .jstree-anchor:link, .jstree-anchor:visited, .jstree-anchor:hover, .jstree-anchor:active {
    text-decoration: none;
    color: inherit;
}
.jstree-anchor, .jstree-default .jstree-animated, .jstree-default .jstree-wholerow {
    transition: background-color 0.15s, box-shadow 0.15s;
}
.jstree-anchor {
    line-height: 24px;
    height: 24px;
}
.jstree-anchor {
    color: #3F4254;
    padding: 0 8px 0 4px;
}
.jstree-anchor > .jstree-themeicon {
    margin-right: 2px;
    line-height: 24px;
    width: 16px;
    height: 24px;   
}
.jstree-leaf > .jstree-ocl {
    background-position: -68px -4px;
}
.jstree-icon-close svg{
    transform: rotate(-90deg);
}
.jstree-icon-close,.jstree-icon-open{
    display: inline-block;
    /* font-size: 10px; */
    vertical-align: baseline
}
.vv-icon-wrapper {
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    /*vertical-align: -0.125em;*/
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.jstree-clicked {
    border: 0;
    background: #F3F6F9;
    border-radius: 3px;
    box-shadow: none;
}
.jstree-anchor:hover {
  background: #3699FF !important;
  border-radius: 3px;
}
.child-close {
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
}
        `
        ]
    }
    constructor() {
        super();
        this.type = "treeview";
        this.show = false,
        this._data = [{
            id:'1',
            label: '一级 1',
            children: [{
                id:'11',
                label: '二级 1-1'
            },{
                id:'12',
                label: '二级 1-2',
                children: [{
                    id:'121',
                    label: '三级 1-2-1',
                    children: [{
                        id:'1211',
                        label: '四级 1-2-1-1'
                    }]
                }]
            },{
                id:'13',
                label: '二级 1-3'
            }]
        }]
    }
    renderChildren(node){
        if(node.children){
            return html`<li role="none" id="${node.id}" class="jstree-node">
<i class="jstree-icon jstree-ocl" role="presentation"></i>
<a class="jstree-anchor" href="javascript:;" aria-level="1" id="${node.id}_anchor">
    <i class="jstree-icon jstree-themeicon vv-icon-wrapper jstree-icon-close" @click="${(e)=>this.iconClick(e,node.id)}" role="presentation">
        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
    </i>
    <span @click="${(e)=>this.lableClick(e,node.id,node.ext)}">${node.label}</span>
</a>
<ul class="jstree-children child-close">${node.children.map(i=> this.renderChildren(i) )}</ul>
</li>`;
        }else{
            return this.renderNode(node);
        }
    }
    renderNode(node){
        return html`<li role="none" id="${node.id}" class="jstree-node">
    <i class="jstree-icon jstree-ocl" role="presentation"></i>
    <a class="jstree-anchor" href="javascript:;" aria-level="1" id="${node.id}_anchor">
            <i class="jstree-icon jstree-ocl" role="presentation"></i>
            <span @click="${(e)=>this.lableClick(e,node.id,node.ext)}">${node.label}</span>
    </a>
</li>`
    }
    iconClick(e,id){debugger
        let child = this.renderRoot.getElementById(id+"_anchor").nextElementSibling; //e.target.parentElement.nextElementSibling;
        console.log("next",child);
        // if(child == null){
        //     console.log("no children node");
        //     return;
        // }
        if(child.nodeName == "UL"){
            child.classList.toggle("child-close");
        }
    }
    lableClick(e,id,ext){debugger
        const anchors = this.renderRoot.querySelectorAll(".jstree-anchor");
        anchors.forEach((anchor)=>{ anchor.classList.remove("jstree-clicked") });
        this.renderRoot.getElementById(id+"_anchor").classList.toggle("jstree-clicked");
        if(e.srcElement.tagName == 'SPAN') {
            let event = new CustomEvent('label-click', {
                detail: {
                    id: id,
                    label: e.target.innerText,
                    ext: ext
                }
            });
            this.dispatchEvent(event);
        }
    }
    render(){debugger
        return html`<ul class="jstree-container-ul jstree-children">
${this.data?this.data.map(i=>this.renderChildren(i)):'暂无数据'}
</ul>`
        /*return html`<ul class="jstree-container-ul jstree-children">
    <li role="none" id="j1_1" class="jstree-node">
        <i class="jstree-icon jstree-ocl" role="presentation"></i>
        <a class="jstree-anchor" href="#" aria-level="1" id="j1_1_anchor">
            <i class="jstree-icon jstree-themeicon vv-icon-wrapper" role="presentation">
                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
            </i>
            Root node 1
        </a>
        <ul role="group" class="jstree-children">
            <li role="none" id="j1_2" class="jstree-node  jstree-leaf">
                <i class="jstree-icon jstree-ocl" role="presentation"></i>
                <a class="jstree-anchor jstree-clicked" href="javascript:;" role="treeitem" aria-level="2" id="j1_2_anchor">
                    <i class="jstree-icon jstree-themeicon vv-icon-wrapper jstree-icon-close" role="presentation">
                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
                    </i>
                    Initially selected
                </a>
            </li>
            <li role="none" id="j1_3" class="jstree-node  jstree-leaf">
                <i class="jstree-icon jstree-ocl" role="presentation"></i>
                <a class="jstree-anchor" href="#" role="treeitem" aria-level="2" id="j1_3_anchor">
                    <i class="jstree-icon jstree-themeicon" role="presentation"></i>
                    custom icon URL
                </a>
            </li>
            <li role="none" id="j1_4" class="jstree-node">
                <i class="jstree-icon jstree-ocl" role="presentation"></i>
                <a class="jstree-anchor" href="#" role="treeitem" aria-level="2" id="j1_4_anchor">
                    <i class="jstree-icon jstree-themeicon vv-icon-wrapper" role="presentation">
                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
                    </i>
                    initially open
                </a>
                <ul role="group" class="jstree-children">
                     <li role="none" id="j1_6" class="jstree-node  jstree-leaf jstree-last">
                        <i class="jstree-icon jstree-ocl" role="presentation"></i>
                        <a class="jstree-anchor" href="#" role="treeitem" aria-level="3" id="j1_6_anchor">
                            <i class="jstree-icon jstree-themeicon" role="presentation"></i>
                            Another node
                        </a>
                     </li>
                </ul>
            </li>
        <li role="none" id="j1_7" class="jstree-node  jstree-leaf jstree-last">
            <i class="jstree-icon jstree-ocl" role="presentation"></i>
            <a class="jstree-anchor" href="#" role="treeitem" aria-level="2" id="j1_7_anchor">
                <i class="jstree-icon jstree-themeicon" role="presentation"></i>
                Custom icon class (bootstrap)
            </a>
        </li>
        </ul>
    </li>
    <li role="none" id="j1_8" class="jstree-node  jstree-leaf jstree-last">
        <i class="jstree-icon jstree-ocl" role="presentation"></i>
        <a class="jstree-anchor" href="#" role="treeitem" aria-level="1" id="j1_8_anchor">
            <i class="jstree-icon jstree-themeicon vv-icon-wrapper jstree-icon-close" role="presentation">
                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
            </i>
            Clickable link node
        </a>
    </li>
</ul>`;*/
    }

    connectedCallback() {debugger
        super.connectedCallback();
        console.log('drawer connectedCallback');
    }
    firstUpdated(changedProperties) {

    }
}
if(!customElements.get('vv-treeview')) {
    window.customElements.define('vv-treeview', VvTreeview);
}