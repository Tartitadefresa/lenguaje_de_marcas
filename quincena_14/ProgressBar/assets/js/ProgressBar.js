class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.id = 'myProgress';

        const bar = document.createElement('div');
        bar.id = 'myBar';
        bar.innerText = '0%';

        wrapper.appendChild(bar);

        const style = document.createElement('style');
        style.textContent = `
            #myProgress {
                width: 100%;
                background-color: rgb(229, 232, 235);
            }

            #myBar {
                width: 0;
                height: 30px;
                background-color: green;
                text-align: center;
                line-height: 30px;
                color: white;
                transition: width 0.5s;
            }
        `;

        this.shadowRoot.append(style, wrapper);

        this.updateProgress(this.getAttribute('progress') || 0);
        this.updateColor(this.getAttribute('color') || 'green');
    }

    static get observedAttributes() {
        return ['progress', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress') {
            this.updateProgress(newValue);
        } else if (name === 'color') {
            this.updateColor(newValue);
        }
    }

    connectedCallback() {
        this.updateProgress(this.getAttribute('progress') || 0);
        this.updateColor(this.getAttribute('color') || 'green');
    }

    updateProgress(value) {
        const bar = this.shadowRoot.querySelector('#myBar');
        const progressValue = Math.min(100, Math.max(0, parseInt(value, 10)));
        bar.style.width = `${progressValue}%`;
        bar.innerText = `${progressValue}%`;
    }

    updateColor(value) {
        const bar = this.shadowRoot.querySelector('#myBar');
        bar.style.backgroundColor = value;
    }

    set progress(value) {
        this.setAttribute('progress', value);
    }

    get progress() {
        return this.getAttribute('progress');
    }

    set color(value) {
        this.setAttribute('color', value);
    }

    get color() {
        return this.getAttribute('color');
    }
}

customElements.define('progress-bar', ProgressBar);