import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
export class SecHeaderMenu extends LitElement {
    static get properties() {
        return {  id: String,
            menuRoot:String,
            menuSub1:String,
                show:  { type: Boolean }
        };
    }
    static get styles() {
        return [coreCss,css`
.header-menu {
    display: flex;
    align-items: stretch;
}
.header-menu {
    display: flex;
    align-items: stretch;
    height: 100%;
    margin: 0;
}
.header-menu .menu-nav {
    display: flex;
    align-items: stretch;
}
.header-menu .menu-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: stretch;
}
.header-menu .menu-nav > .menu-item:first-child {
    padding-left: 0;
}
.header-menu .menu-nav > .menu-item.menu-item-rel {
    position: relative;
}
.header-menu .menu-nav > .menu-item {
    display: flex;
    align-items: center;
    padding: 0px 0.25rem;
    padding: 0px 0.25rem;
}
.header-menu .menu-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: stretch;
}
.header-menu .menu-nav > .menu-item.menu-item-here > .menu-link, .header-menu .menu-nav > .menu-item.menu-item-active > .menu-link {
    background-color: rgba(77, 89, 149, 0.06);
}
.header-menu .menu-nav > .menu-item > .menu-link {
    border-radius: 4px;
}
.header-menu.header-menu-layout-default .menu-nav > .menu-item > .menu-link {
    padding: 0.65rem 1.1rem;
}
.header-menu .menu-nav > .menu-item > .menu-link {
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
}
.header-menu .menu-nav > .menu-item .menu-link {
    display: flex;
    text-decoration: none;
    position: relative;
    vertical-align: middle;
    align-items: stretch;
    outline: none !important;
    text-decoration: none;
    cursor: pointer;
}
a, button {
    outline: 0 !important;
}
.header-menu .menu-nav > .menu-item > .menu-link .menu-text {
    font-weight: 400;
    font-size: 1rem;
    text-transform: initial;
}
.header-menu .menu-nav > .menu-item > .menu-link > .menu-text {
    width: auto;
}
.header-menu .menu-nav > .menu-item .menu-link .menu-text {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 0;
}
.header-menu .menu-nav > .menu-item > .menu-link .menu-arrow:before {
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
.header-menu .menu-nav > .menu-item > .menu-link > .menu-arrow:before {
    content: "" !important;
} 
/*item*/ 
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-submenu > .menu-submenu {
    top: 0;
    display: none;
    margin-top: 0;
}
.header-menu .menu-nav > .menu-item .menu-submenu {
    display: none;
    z-index: 98;
    position: absolute;
    top: 100%;
    transform: translateZ(0);
    -webkit-transform-style: preserve-3d;
    border-radius: 4px;
    padding: 20px 0px;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link, .header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link {
    background-color: #F3F6F9;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-icon, .header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-icon {
    color: #3699FF;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon.svg-icon {
    height: 23px;
    width: 23px;
    margin-left: -2px;
}
.header-menu .menu-nav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link, .header-menu .menu-nav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link {
    background-color: rgba(77, 89, 149, 0.06);
}
.header-menu .menu-nav .menu-item.menu-item-active-tab .menu-submenu > .menu-subnav > .menu-item.menu-item-hover > .menu-submenu, .header-menu .menu-nav .menu-item.menu-item-hover .menu-submenu > .menu-subnav > .menu-item.menu-item-hover > .menu-submenu {
    display: block;
    animation: header-menu-submenu-fade-in 0.3s ease 1, header-menu-submenu-move-up 0.3s ease-out 1;
}
.header-menu .menu-nav .menu-item.menu-item-active-tab .menu-submenu, .header-menu .menu-nav .menu-item.menu-item-hover .menu-submenu {
    display: block;
    animation: header-menu-submenu-fade-in 0.3s ease 1, header-menu-submenu-move-down 0.3s ease-out 1;
}
.header-menu .menu-nav > .menu-item .menu-submenu.menu-submenu-classic {
    padding: 20px 0px;
}
.header-menu .menu-nav > .menu-item .menu-submenu.menu-submenu-left {
    right: auto;
    left: 0;
}
.header-menu .menu-nav > .menu-item .menu-submenu {
    background-color: #ffffff;
    box-shadow: 0px 15px 50px 0px rgb(82 63 105 / 15%);
}
.header-menu .menu-nav > .menu-item .menu-submenu {
    width: 275px;
    margin: 0 auto;
    left: auto;
    right: auto;
}
.header-menu .menu-nav > .menu-item .menu-submenu {
    padding: 0px;
    border-radius: 4px;
}
.header-menu .menu-nav > .menu-item .menu-submenu .menu-subnav {
    list-style: none !important;
    padding: 0;
    margin: 0;
}
.header-menu .menu-nav > .menu-item .menu-inner > .menu-item, .header-menu .menu-nav > .menu-item .menu-subnav > .menu-item {
    display: flex;
    flex-grow: 1;
    margin: 0;
    padding: 10px 20px;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-submenu {
    position: relative;
    padding: 0;
    margin: 0;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item {
    padding: 0px;
}
.header-menu .menu-nav > .menu-item .menu-inner > .menu-item .menu-link, .header-menu .menu-nav > .menu-item .menu-subnav > .menu-item .menu-link {
    display: flex;
    align-items: center;
    flex-grow: 1;
    text-decoration: none;
    position: relative;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link {
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 11px 30px;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon {
    color: #B5B5C3;
}
.header-menu .menu-nav > .menu-item .menu-inner > .menu-item .menu-link .menu-icon, .header-menu .menu-nav > .menu-item .menu-subnav > .menu-item .menu-link .menu-icon {
    display: flex;
    align-items: center;
    flex: 0 0 33px;
    padding: 0;
    font-size: 1.4rem;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon {
    font-size: 1.4rem;
    width: 33px;
    padding: 0;
    line-height: 0;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon {
    color: #B5B5C3;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon.svg-icon {
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
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-text, .header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-text {
    color: #3699FF;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-text {
    color: #3F4254;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-text {
    font-weight: 400;
    font-size: 1rem;
    text-transform: initial;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-arrow {
    color: #B5B5C3;
}
.header-menu .menu-nav > .menu-item .menu-inner > .menu-item .menu-link .menu-arrow, .header-menu .menu-nav > .menu-item .menu-subnav > .menu-item .menu-link .menu-arrow {
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 10px;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-arrow {
    font-size: 0.6rem;
    width: 20px;
    justify-content: flex-end;
    padding: 0px 0px 0px 10px;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-submenu > .menu-submenu.menu-submenu-right {
    left: 100%;
    right: auto;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link > .menu-arrow, .header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link > .menu-arrow {
    color: #3699FF;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-icon.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-icon.svg-icon svg g [fill], .header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-icon.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #3699FF;
}

i {
    font-size: 1.25rem;
    color: #B5B5C3;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-bullet {
    width: 20px;
}
.header-menu .menu-nav > .menu-item .menu-inner > .menu-item .menu-link .menu-bullet, .header-menu .menu-nav > .menu-item .menu-subnav > .menu-item .menu-link .menu-bullet {
    display: flex;
    align-items: center;
    line-height: 0;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-bullet.menu-bullet-dot > span {
    background-color: #B5B5C3;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-bullet.menu-bullet-dot > span {
    width: 4px;
    height: 4px;
    border-radius: 100%;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-active > .menu-link .menu-bullet.menu-bullet-dot > span {
    background-color: #3699FF; 
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item > .menu-link .menu-bullet > span {
    vertical-align: middle;
    display: inline-block;
}
.header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item:hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-bullet.menu-bullet-dot > span, .header-menu .menu-nav > .menu-item .menu-submenu > .menu-subnav > .menu-item.menu-item-hover:not(.menu-item-here):not(.menu-item-active) > .menu-link .menu-bullet.menu-bullet-dot > span {
    background-color: #3699FF; 
}
        `
        ]
    }
    constructor() {
        super();
        this.type = "header-menu";
    }
    // get show() {
    //     return this._show;
    // }
    // set show(val) {debugger
    //     const {x, y, height} = this._target.getBoundingClientRect();
    //     console.log("popup show set ",this._target.clientWidth);
    //     //this.renderRoot.getElementById("popup").width = this._target.clientWidth;
    //     this._show = val;
    //     this.requestUpdate();
    // }
    // changeAttributes() {debugger
    //     console.log("popup show set changeAttributes");
    //     this.requestUpdate();
    // }
    //
    // changeProperties() {debugger
    //     console.log("popup show set changeProperties");
    // }
    render(){
        return html`<div id="secHeaderMenu" class="header-menu header-menu-mobile header-menu-layout-default">
		<!--begin::Header Nav-->
		<ul class="menu-nav">
			<li class="menu-item menu-item-submenu menu-item-rel menu-item-active" data-menu-toggle="click" aria-haspopup="true">
				<a href="javascript:;" class="menu-link menu-toggle">
					<span class="menu-text">Pages</span>
				</a>
				
			</li>
			<li class="menu-item menu-item-submenu menu-item-rel ${this.menuRoot == 'fe1'?'menu-item-hover':''}" data-menu-toggle="click" aria-haspopup="true">
				<a href="javascript:;" @click="${(e)=>{this.onMenuRootClickHandler(e,"fe1")}}" class="menu-link menu-toggle">
					<span class="menu-text">Features</span>
				</a>
				<div id="fe1" class="menu-submenu menu-submenu-classic menu-submenu-left" data-hor-direction="menu-submenu-left">
					<ul class="menu-subnav">
						<li id="fe1_1" class="menu-item menu-item-submenu ${this.menuSub1 == 'fe1_1'?'menu-item-hover':''}" data-menu-toggle="hover" aria-haspopup="true">
							<a href="javascript:;" class="menu-link menu-toggle" @click="${(e)=>{this.onMenuSub1ClickHandler(e,"fe1_1")}}">
								<span class="svg-icon menu-icon">
									<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Send.svg-->
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
										<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<rect x="0" y="0" width="24" height="24"></rect>
											<path d="M3,13.5 L19,12 L3,10.5 L3,3.7732928 C3,3.70255344 3.01501031,3.63261921 3.04403925,3.56811047 C3.15735832,3.3162903 3.45336217,3.20401298 3.70518234,3.31733205 L21.9867539,11.5440392 C22.098181,11.5941815 22.1873901,11.6833905 22.2375323,11.7948177 C22.3508514,12.0466378 22.2385741,12.3426417 21.9867539,12.4559608 L3.70518234,20.6826679 C3.64067359,20.7116969 3.57073936,20.7267072 3.5,20.7267072 C3.22385763,20.7267072 3,20.5028496 3,20.2267072 L3,13.5 Z" fill="#000000"></path>
										</g>
									</svg>
									<!--end::Svg Icon-->
								</span>
								<span class="menu-text">Social Presence</span>
								<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2898"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z" p-id="2899"></path></svg>
							</a>
							<div class="menu-submenu menu-submenu-classic menu-submenu-right" data-hor-direction="menu-submenu-right">
								<ul class="menu-subnav">
									<li class="menu-item" aria-haspopup="true">
										<a href="javascript:;" class="menu-link">
											<i class="menu-bullet menu-bullet-dot">
												<span></span>
											</i>
											<span class="menu-text">Reached Users</span>
										</a>
									</li>
									<li class="menu-item" aria-haspopup="true">
										<a href="javascript:;" class="menu-link">
											<i class="menu-bullet menu-bullet-dot">
												<span></span>
											</i>
											<span class="menu-text">SEO Ranking</span>
										</a>
									</li>
								</ul>
							</div>
						</li>
			</li>
		</ul>
		<!--end::Header Nav--></div>`;
    }
    onMenuRootClickHandler(e,id){debugger
        this.menuRoot = id;
    }
    onMenuSub1ClickHandler(e,id){debugger
        this.menuSub1 = id;
    }
    focusHandler(e){debugger
        console.log('popup focus',e.target);
    }
    clickHandler(e) {debugger
        console.log('popup click',e.target);
        if(e.srcElement.tagName == 'VV-OPTION') {
            let event = new CustomEvent('option-click', {
                detail: {
                    value: e.target.value,
                    text: e.target.innerText
                }
            });
            this.dispatchEvent(event);
        }
    }
    connectedCallback() {
        super.connectedCallback();debugger
        // this._target ??= this.previousElementSibling;
        //document.addEventListener('mousedown',this.setpop);
    }
    setpop = (ev) => {debugger
        const path = ev.path || (ev.composedPath && ev.composedPath());//debugger
        if(this.menuRoot && !path.includes(this) && ev.which == '1' && !path.includes(ev.path.includes(this.renderRoot.getElementById("secHeaderMenu").children[0]))){
            this.menuSub1 = "";
            this.menuRoot = "";
        }
        console.log('menu mousedown ev',ev.target);
    }
    disconnectedCallback() {
        document.removeEventListener('mousedown', this);
    }
}
if(!customElements.get('sec-header-menu')) {
    window.customElements.define('sec-header-menu', SecHeaderMenu);
}