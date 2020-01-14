// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

class TodoList extends LitElement {
  static get properties() {
    return {
    title: { type: String },
    todos: { type: Array },
    input: { type: String }
   };
  }

  static get styles() {
    return css`
      .container {
        width: 300px;
        margin: 1rem auto 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        padding: 12px 24px;
        font-family: Arial, Helvetica, sans-serif;
      }
      h3 {
        width: 100%;
      }

      button {
        width: 25%;
        border: solid 3px #ff9b05;
      }
      input {
        width: 50%;
      }
      .items {
        width: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.todos = [];
    this.input = "";
  }

  addTodo() {
    this.todos.push(this.input);
    this.input = "";
    console.log(this.shadowDom);
  }

  updateInput(e) {
    this.input = e.target.value;
  }

  render(){
    return html`

      <div class=${`container`}>
          <h3>Todo list</h3>
          <input type="text" @input="${this.updateInput}" .value="${this.input}" placeholder="Add a todo"/>
          <button @click="${this.addTodo}">Add</button>
            <div class="items">
            ${
              this.todos && this.todos.map(item => {
                return html`
                  <p>${item}</p>
                  `
              })
            }
            </div>
      </div>
    `;
  }
}

customElements.define('todo-list', TodoList);
