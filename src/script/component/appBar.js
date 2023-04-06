class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    :host {
    width: 100%;
    background-color: #0f0e17;
    color: #fffffe;
    margin-bottom: 1rem;
    display: block;
    
  }
  h2 {
    padding: 1rem;
  }
  span {
    color: #ff8906;
    font-weight: bold;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      text-align: center;
    }
  }
    </style>
    <h2>Daftar<span> Film</span>.</h2>`;
  }
}

customElements.define("app-bar", AppBar);
