// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class TextBlock extends LitElement {
  static get properties() {
    return {
    body: { type: Object },
    test: { type: String }
   };
  }

  static get styles() {
    return css`
      .container {
        width: 50%;
        margin: 0 auto;
      }
    `;
  }

  constructor() {
    super();
  }

  render(){
    return html`
        <slot></slot>
    `;
  }
}

customElements.define('text-block', TextBlock);
