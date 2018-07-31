class Circle extends HTMLElement {
    constructor() {
        super();

        // Creamos shadow root
        var shadow = this.attachShadow({mode: 'open'});

        // Creamos el elemento
        var div = document.createElement('div');
        div.className = 'circle';
        div.style = `
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background-color: black;
        `;

        // Añadimos el elemento al shadow
        shadow.appendChild(div);
    }
}

customElements.define('circle-component', Circle);
