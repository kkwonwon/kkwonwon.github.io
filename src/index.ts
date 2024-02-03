import photos = require("./file");

class MainPage extends HTMLElement {
    connectedCallback() {
        let h1tag = document.createElement("h1");
        h1tag.innerHTML = "mainpage";
        this.appendChild(h1tag);
    }
}

customElements.define("main-page", MainPage);
