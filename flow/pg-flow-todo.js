import {LitElement, html,css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import { VvCard } from '../components/vv-card.js';
class PgFlowTodo extends LitElement {
    static get styles() {
     return [
       coreCss,
       css`
.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav.nav-pills .nav-item {
    margin-right: 0.25rem;
}
.nav .nav-link {
    display: flex;
    align-items: center;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    padding: 0.75rem 1.5rem;
    color: #7E8299;
}
.nav-pills .nav-link {
    border-radius: 0.42rem;
}
.nav.nav-pills .nav-link {
    color: #B5B5C3;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    position: relative;
}
.nav.nav-pills .show > .nav-link, .nav.nav-pills .nav-link.active {
    color: #ffffff;
    background-color: #3699FF;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.nav.nav-pills .nav-link:after {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.nav-link:hover:not(.active) {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    color: #3699FF;
}
.nav-item a:hover {
  text-decoration: none; }
            `]
    }
    constructor() {
        super();
    }
    render(){
        return html`
      <vv-card notitleborder title="我的流程">
        <div slot="card-toolbar">
			<ul class="nav nav-pills nav-pills-sm nav-dark-75">
				<li class="nav-item">
					<a class="nav-link py-2 px-4 active" href="javascript:;">待审批</a>
				</li>
				<li class="nav-item">
					<a class="nav-link py-2 px-4" href="javascript:;">已审批</a>
				</li>
				<li class="nav-item">
					<a class="nav-link py-2 px-4" href="javascript:;">已提交</a>
				</li>
			</ul>
	    </div>
      </vv-card>
    `;
    }
}
window.customElements.define('pg-flow-todo', PgFlowTodo);