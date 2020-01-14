// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class NumberCounter extends LitElement {
  static get properties() {
    return {
    count: { type: Number },
   };
  }

  static get styles() {
    return css`
      .container {
        width: 175px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        padding: 12px 24px;
        font-family: Arial, Helvetica, sans-serif;
      }

      span {
        font-size: 48px;
        color: #ff9b05;
        margin-bottom: 12px;
        width: 100%;
        font-family: sans-serif;
      }

      button {
        padding: 6px 24px;
        background-color: white;
        color: #ff9b05;
        border: solid 3px #ff9b05;
        border-radius: 3px;
        font-size: 24px;
        transition: background 0.2s ease;
      }

      button:hover {
        background: #ff9b05;
        color: white;
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.count = 1;
  }

  incrementCount() {
    this.count = this.count + 1;
  }

  decrementCount() {
    this.count = this.count - 1;
  }

  render(){
    return html`
      <div class=${`container`}>
        <h3>Todo list</h3>
        <span>${this.count}</span>
          <button @click="${this.decrementCount}">-</button>
          <button @click="${this.incrementCount}">+</button>
      </div>
    `;
  }
}

customElements.define('number-counter', NumberCounter);
