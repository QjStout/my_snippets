const template = document.createElement('template');
template.innerHTML = `
    <div class="my-component">
        <h3></h3>
        <p><slot name="para1"/></p>
        <p><slot name="para2"/></p>
    </div>
`;

export default class MyComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('value');
    }
}

window.customElements.define('my-component', MyComponent);