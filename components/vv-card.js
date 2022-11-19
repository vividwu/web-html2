import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from './vv-css.js';

export class VvCard extends LitElement {
    static get properties() {
        return {  type: String,
            id: String,
            title: String,
            subTitle: String,
            noTitleBorder: { type: Boolean, reflect: true },
            size: String
        };
    }
    static get styles() {
        return [
            coreCss,
            css`
            .card.card-custom > .card-header .card-toolbar {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    flex-wrap: wrap;
}
        `
        ]
    }
    constructor() {
        super();
        this.type = "card";
        this.id = "Card_"+new Date().getTime();
        this.title = "VvCard";
        this.subTitle = "";
        this.noTitleBorder = false;
        this.size = "sm"
    }
    render(){
        return html`<div class="card card-custom gutter-b citem">
											<div class="card-header ${this.noTitleBorder?'border-0':''}">
												<div class="card-title">
													<h3 class="card-label">${this.title}</h3>
												</div>
												<div class="card-toolbar"><slot name="card-toolbar"></slot></div>
											</div>
											<div class="card-body">
												<div class="form-group row mt-3" style="display: flex;flex-direction:row;flex-wrap:wrap;margin-left:-12.5px;" id="${this.id}_body">
												    <slot></slot>
												</div>
											</div>
										</div>`;
    }
    clickHandler(e) {
        console.log(e.target);
    }

}
window.customElements.define('vv-card', VvCard);