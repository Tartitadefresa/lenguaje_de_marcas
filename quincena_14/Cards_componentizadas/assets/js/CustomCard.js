class CustomCard extends HTMLElement {
    #shadowDom

    constructor() {
        super();
        this.#shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('connected')
        this.render()
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `
        
        const clonedTemplate = template.content.cloneNode(true)
        this.#shadowDom.appendChild(clonedTemplate)
    }

    template() {
        return `
            <figure class="${this.getAttribute('color')}">
                <figcaption>
                    <h2>${this.getAttribute('nombre')} <span>${this.getAttribute('apellidos')}</span></h2>
                    <p>${this.getAttribute('frase')}</p>
                    <div class="icons">
                        <a href="#"><i class="ion-ios-home"></i></a>
                        <a href="#"><i class="ion-ios-email"></i></a>
                        <a href="#"><i class="ion-ios-telephone"></i></a>
                    </div>
                </figcaption>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample7.jpg" alt="sample7" />
                <div class="position">${this.getAttribute('profesion')}</div>
            </figure>
        `
    }

    templateCss() {
        return `
            <style>
                @import url(./assets/styles/CustomCard.css) 
            </style>

        `
    }
}

customElements.define('custom-card', CustomCard)