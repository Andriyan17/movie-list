class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowDOM
      .querySelector("#searchElement")
      .addEventListener("keyup", this._pencarian.bind(this));
  }

  _pencarian(event) {
    const cari = event.target.value.toLowerCase();
    const filmList = document.querySelectorAll(".col-sm-4");

    filmList.forEach((film) => {
      const isiList = film
        .querySelector(".card-body > h5")
        .textContent.toLowerCase();
      if (isiList.indexOf(cari) != -1) {
        film.setAttribute("style", "display:block");
      } else {
        film.setAttribute("style", "display: none !important");
      }
    });
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        max-width: 800px;
        padding: 16px;
        position: sticky;
        top: 10px;
        background-color: white;
        margin: 2rem auto;
      }
      
      .search-container > input {
        width: 100%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid #ff8906;
        font-weight: bold;
      }
      
      .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid #ff8906;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container > input::placeholder {
        color: #ff8906;
        font-weight: normal;
      }
      
      
      @media screen and (max-width: 550px) {
        .search-container {
          flex-direction: column;
          position: static;
        }
      
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
      
        .search-container > button {
          width: 100%;
        }
      }
      </style>
      <div id="search-container" class="search-container">
        <input placeholder="Cari film" id="searchElement" type="search">
      </div>`;
  }
}

customElements.define("search-bar", SearchBar);
