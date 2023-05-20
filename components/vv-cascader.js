import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvTagInput } from './vv-tag-input.js';
import {CCGetApi} from '../webapi.js';
export class VvCascader extends LitElement {
static get properties() {
  return {
            open: { type: Boolean, reflect: true },
            data: { type: Array, reflect: true },
            //value: String,
            text: String
    };
}
    static get styles() {
        return [
            coreCss,
            css`
.menu-item.menu-item-rel {
    position: relative;
}
.menu-item:first-child {
    padding-left: 0;
}
.menu-item.menu-item-rel {
    position: relative;
}
.menu-item {
    display: flex;
    align-items: center;
    padding: 0px 0.25rem;
    padding: 0px 0.25rem;
}

.menu-item.menu-item-here > .menu-link,   > .menu-item.menu-item-active > .menu-link {
    background-color: rgba(77, 89, 149, 0.06);
}
 .menu-item > .menu-link {
    border-radius: 4px;
}
header-menu-layout-default  > .menu-item > .menu-link {
    padding: 0.65rem 1.1rem;
}
.menu-item > .menu-link {
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
}
.menu-item .menu-link {
    display: flex;
    text-decoration: none;
    position: relative;
    vertical-align: middle;
    align-items: stretch;
    outline: none !important;
    cursor: pointer;
}
a, button {
    outline: 0 !important;
}
.menu-item > .menu-link .menu-text {
    font-weight: 400;
    font-size: 1rem;
    text-transform: initial;
}
.menu-item > .menu-link > .menu-text {
    width: auto;
}
.menu-item .menu-link .menu-text {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 0;
}
.menu-item > .menu-link .menu-arrow:before {
    font-family: Ki;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: 1;
    text-decoration: inherit;
    text-rendering: optimizeLegibility;
    text-transform: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    content: "";
}
.menu-item > .menu-link > .menu-arrow:before {
    content: "" !important;
} 
/*item*/ 
.menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-submenu > .menu-submenu {
    top: 0;
    display: none;
    margin-top: 0;
}
.menu-item .menu-submenu {
    display: none;
    z-index: 98;
    position: absolute;
    top: 100%;
    transform: translateZ(0);
    -webkit-transform-style: preserve-3d;
    border-radius: 4px;
    padding: 20px 0px;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link,   .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link {
    background-color: #F3F6F9;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-icon,   .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-icon {
    color: #3699FF;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon.svg-icon {
    height: 23px;
    width: 23px;
    margin-left: -2px;
}
.menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link,   .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link {
    background-color: rgba(77, 89, 149, 0.06);
}
.menu-submenu > .menu-subnav > .menu-item.menu-item-hover > .menu-submenu, 
.menu-item.menu-item-hover .menu-submenu > .menu-subnav > .menu-item.menu-item-hover > .menu-submenu {
    display: block;
    animation: header-menu-submenu-fade-in 0.3s ease 1, header-menu-submenu-move-up 0.3s ease-out 1;
}
.menu-submenu,   .menu-item.menu-item-hover .menu-submenu {
    display: block;
    animation: header-menu-submenu-fade-in 0.3s ease 1, header-menu-submenu-move-down 0.3s ease-out 1;
}
.menu-item .menu-submenu.menu-submenu-classic {
    padding: 20px 0px;
}
.menu-item .menu-submenu.menu-submenu-left {
    right: auto;
    left: 0;
}
.menu-item .menu-submenu {
    background-color: #ffffff;
    box-shadow: 0px 15px 50px 0px rgb(82 63 105 / 15%);
}
.menu-item .menu-submenu {
    width: 275px;
    margin: 0 auto;
    left: auto;
    right: auto;
}
.menu-item .menu-submenu {
    padding: 0px;
    border-radius: 4px;
}
 .menu-item .menu-submenu .menu-subnav {
    list-style: none !important;
    padding: 0;
    margin: 0;
}
.menu-item .menu-inner > .menu-item,  .menu-item .menu-subnav > .menu-item {
    display: flex;
    flex-grow: 1;
    margin: 0;
    padding: 10px 20px;
}
 .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-submenu {
    position: relative;
    padding: 0;
    margin: 0;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item {
    padding: 0px;
}
.menu-item .menu-inner > .menu-item .menu-link,   .menu-item .menu-subnav > .menu-item .menu-link {
    display: flex;
    align-items: center;
    flex-grow: 1;
    text-decoration: none;
    position: relative;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link {
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 11px 30px;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon {
    color: #B5B5C3;
}
.menu-item .menu-inner > .menu-item .menu-link .menu-icon, .menu-item .menu-subnav > .menu-item .menu-link .menu-icon {
    display: flex;
    align-items: center;
    flex: 0 0 33px;
    padding: 0;
    font-size: 1.4rem;
}
 .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon {
    font-size: 1.4rem;
    width: 33px;
    padding: 0;
    line-height: 0;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon {
    color: #B5B5C3;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon.svg-icon {
    height: 23px;
    width: 23px;
    margin-left: -2px;
}
svg {
    overflow: hidden;
    vertical-align: middle;
}
.svg-icon svg {
    height: 1.5rem;
    width: 1.5rem;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-text,   .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-text {
    color: #3699FF;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-text {
    color: #3F4254;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-text {
    font-weight: 400;
    font-size: 1rem;
    text-transform: initial;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-arrow {
    color: #B5B5C3;
}
.menu-item .menu-inner > .menu-item .menu-link .menu-arrow,  .menu-item .menu-subnav > .menu-item .menu-link .menu-arrow {
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 10px;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-arrow {
    font-size: 0.6rem;
    width: 20px;
    justify-content: flex-end;
    padding: 0px 0px 0px 10px;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-submenu > .menu-submenu.menu-submenu-right {
    left: 100%;
    right: auto;
}
 .menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link > .menu-arrow,   .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link > .menu-arrow {
    color: #3699FF;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-icon.svg-icon svg g [fill],   > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-icon.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #3699FF;
}

i {
    font-size: 1.25rem;
    color: #B5B5C3;
}
 .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-bullet {
    width: 20px;
}
 .menu-item .menu-inner > .menu-item .menu-link .menu-bullet,  .menu-item .menu-subnav > .menu-item .menu-link .menu-bullet {
    display: flex;
    align-items: center;
    line-height: 0;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-bullet.menu-bullet-dot > span {
    background-color: #B5B5C3;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-bullet.menu-bullet-dot > span {
    width: 4px;
    height: 4px;
    border-radius: 100%;
}
 .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-active > .menu-link .menu-bullet.menu-bullet-dot > span {
    background-color: #3699FF; 
}
.menu-item .menu-submenu > .menu-subnav menu-submenu > .menu-link .menu-bullet > span {
    vertical-align: middle;
    display: inline-block;
}
.menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-bullet.menu-bullet-dot > span,   > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-bullet.menu-bullet-dot > span {
    background-color: #3699FF; 
}
            `]
}
    get value() {
        return this._selectedIds;
    }
    set value(value) {
        this._selectedIds = value;
    }
constructor() {
    super();
    this.type = "vv-cascader";
    this._indexMap = {};
    this._selectedIds = '';
    this.open = false;
    //this.addEventListener('input', this.inputHandler);
}
  render(){
      return html`<div id="root" class="menu-item menu-item-rel ${this.open?'menu-item-hover':''}"><vv-tag-input id="input" @ve-click="${this.tiClickHandler}" @remove="${this.removeHandler}" removable value="${this.text}"></vv-tag-input>
<div id="fe1" class="menu-submenu menu-submenu-classic menu-submenu-left" data-hor-direction="menu-submenu-left">
<ul class="menu-subnav">${this.data?this.data.map(i=> this.renderNode(i) ):'暂无数据'}</ul>
</div></div>`;

    /*return html`<div class="menu-item menu-item-rel menu-item-hover"><vv-tag-input id="input" @ve-click="${this.tiClickHandler}"></vv-tag-input>
<div id="fe1" class="menu-submenu menu-submenu-classic menu-submenu-left" data-hor-direction="menu-submenu-left">
					<ul class="menu-subnav">
						<li id="fe1_1" class="menu-item menu-item-submenu menu-item-hover ${this.menuSub1 == 'fe1_1'?'menu-item-hover':''}" data-menu-toggle="hover" aria-haspopup="true">
							<a href="javascript:;" class="menu-link menu-toggle" @click="${(e)=>{this.onMenuSub1ClickHandler(e,"fe1_1")}}">
								<span class="menu-text">Social Presence</span>
								<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2898"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z" p-id="2899"></path></svg>
							</a>
							<div class="menu-submenu menu-submenu-classic menu-submenu-right" data-hor-direction="menu-submenu-right">
								<ul class="menu-subnav">
									<li id="fel_1_1" class="menu-item menu-item-submenu menu-item-hover" aria-haspopup="true">
										<a href="javascript:;" class="menu-link">
											<span class="menu-text">Reached Users</span>
											<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2898"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z" p-id="2899"></path></svg>
										</a>
										<div class="menu-submenu menu-submenu-classic menu-submenu-right" data-hor-direction="menu-submenu-right">
                                        <ul class="menu-subnav">
                                            <li id="fel_1_1_1" class="menu-item" aria-haspopup="true">
                                                <a href="javascript:;" class="menu-link">
                                                    <span class="menu-text">Three Menu</span>
                                                </a>
                                            </li>
									    </ul>
									</li>
									<li id="fel_1_2" class="menu-item" aria-haspopup="true">
										<a href="javascript:;" class="menu-link">
											<span class="menu-text">SEO Ranking</span>
										</a>
									</li>
								</ul>
							</div>
						</li>
			</li>
		</ul>
		<!--end::Header Nav--></div></div>`;*/
  }
    renderChildren(nodes){
            return html`<div class="menu-submenu menu-submenu-classic menu-submenu-right" data-hor-direction="menu-submenu-right">
						<ul class="menu-subnav">
                            ${nodes.map(i=> this.renderNode(i) )}
                         </ul>
                     </div>`;
    }
    renderNode(node){
        return html`<li id="${node.code}" data-able="${node.data?'n':'y'}" data-ids="${this._indexMap[node.code].id}" data-names="${this._indexMap[node.code].name}" class="menu-item menu-item-submenu ${this._selectedIds.split(',').indexOf(node.code)>=0?'menu-item-hover':''}" @click="${(e)=>this.itemClickHandler(e,node.code)}">
						<a href="javascript:;" class="menu-link">
							<span class="menu-text">${node.name}</span>
							${node.data?html`<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2898"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z" p-id="2899"></path></svg>`:``}
						</a>
						${node.data?this.renderChildren(node.data):''}
                    </li>`
    }
  connectedCallback() {
      super.connectedCallback();
      document.addEventListener('mousedown',this.setpop);
  }
    itemClickHandler(e,id){
        debugger
        let item = e.target.closest('.menu-item-submenu')
        this._selectedIds = item.dataset.ids;
        if(item.dataset.able == 'y'){
            this.value = this._selectedIds;
            this.text = item.dataset.names;
            this.open = false;
            return;
        }
        this.requestUpdate();
    }
    removeHandler(){
        this.value = '';
        this.text = '';
    }
    tiClickHandler(e){
        this.open = !this.open;
    }
    firstUpdated(changedProperties) {debugger
        CCGetApi('http://10.12.28.45:8880/api/common/dictionary/office_tools').then(res => {
            console.log('cascader1', res);
            let arr = this.flat2tree(res,"code","parent","name","data");
            console.log('cascader2', arr);
            this.data = arr;
            this.mapPath(res);
            console.log('cascader3', this._indexMap);
            //this.shadowRoot.getElementById("input").value = res;
        })
    }
    mapPath(res){
        let that = this;
        res.forEach((v,i)=>{
            this._indexMap[v.id] = this.createFullId(res,v.code,v.parent,v.code,v.name);
        })
    }
    createFullId(list, id, parentId, fullId, fullName) {
        if (parentId == '') {
            return {id:fullId,name:fullName};
        }
        const obj = list.find(o => o.code == parentId);
        fullId = obj.id + ',' + fullId;
        fullName = obj.name + '/' + fullName;
        return this.createFullId(list, id, obj.parent, fullId, fullName);
    }
    flat2tree(jsonData,idKey,pidKey,txtKey,newChildKey){
        newChildKey = newChildKey == undefined?"nodes":newChildKey;
        var result = [], temp = {}, i = 0, j = 0, len = jsonData.length
        for(; i < len; i++){
            temp[jsonData[i][idKey]] = jsonData[i] // 以id作为索引存储元素，可以无需遍历直接定位元素
        }
        for(; j < len; j++){
            var currentElement = jsonData[j]
            currentElement["text"] = currentElement[txtKey]  //设置显示字段 text 树控件固定绑定
            currentElement["id"] = currentElement[idKey]  //id 树控件固定绑定
            if(currentElement["id"] == 7){
                currentElement["state"] = {"selected":true};
            }
            var tempCurrentElementParent = temp[currentElement[pidKey]] // 临时变量里面的当前元素的父元素
            if (tempCurrentElementParent) { // 如果存在父元素
                if (!tempCurrentElementParent[newChildKey]) { // 如果父元素没有chindren键
                    tempCurrentElementParent[newChildKey] = [] // 设上父元素的children键
                }
                tempCurrentElementParent[newChildKey].push(currentElement) // 给父元素加上当前元素作为子元素
            } else { // 不存在父元素，意味着当前元素是一级元素
                result.push(currentElement);
            }
        }
        return result;
    }

    setpop = (ev) => {//debugger
        const path = ev.path || (ev.composedPath && ev.composedPath());//debugger
        if(!path.includes(this) && ev.which == '1' && !path.includes(this.renderRoot.getElementById("root").children[0])){
        if(this.open){
            ev.stopPropagation();
            this.open = false;
            }
    }
        console.log('mousedown ev',ev.target);
        console.log('path',path);
    }
}
if(!customElements.get('vv-cascader')) {
    window.customElements.define('vv-cascader', VvCascader);
}