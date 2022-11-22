import {LitElement, html} from '../lit-core.min.js';

class LitAbout extends LitElement {
constructor() {
    super();
}
  render(){
    return html`
      <h2>About Me pages/about.js</h2>
      <p>
        aaaaa121
      </p>
    `;
  }
}
window.customElements.define('lit-about', LitAbout);