import cssFileChunkUrl from './myWebComponent.css?getChunkUrl';
//it is currently not possible to get myWebComponent.css out of the css bundle get return the URL of the chunked css file

class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <!-- <link src="${cssFileChunkUrl}"> for myWebcomponent.css should be here! -->
            <p class="myColor">myColor inside of the web component</p>
        `;
    }
}

customElements.define('my-component', MyComponent);