class Countdown extends HTMLElement {
    #shadowDom
    nums;
    inicio;
    counter;
    finalMessage;
    repl;

    constructor() {
        super();
        this.#shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('connected')
        this.inicio = parseInt(this.getAttribute('inicio'))
        this.render()

        this.nums = this.getElement().querySelectorAll(".nums span");
        this.counter = this.getElement().querySelector(".counter");
        this.finalMessage = this.getElement().querySelector(".final");
        this.repl = this.getElement().getElementById("replay");

        this.repl.addEventListener("click", () => {
            this.resetDOM();
            this.runAnimation();
        });          

        this.runAnimation();

        
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `
        
        const clonedTemplate = template.content.cloneNode(true)
        console.log(clonedTemplate)
        this.#shadowDom.appendChild(clonedTemplate) 
    }

    templateCss() {
        return `
            <style>
            body {
                background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
                font-family: 'Roboto', sans-serif;
                margin: 0;
                height: 100vh;
            }
            
            .counter {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            
            .counter.hide {
                transform: translate(-50%, -50%) scale(0);
                animation: hide .2s ease-out;
            }
            
            
            h4 {
                font-size: 20px;
                margin: 5px;
                text-transform: uppercase;
            }
            
            
            @keyframes hide {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                }
            
                100% {
                    transform: translate(-50%, -50%) scale(0);
                }
            }
            
            .final {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
            }
            
            .final.show {
                transform: translate(-50%, -50%) scale(1);
                animation: show .3s ease-in;
            }
            
            @keyframes show {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                }
            
                80% {
                    transform: translate(-50%, -50%) scale(1.4);
                }
            
                100% {
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            
            .nums {
                color: #3498db;
                position: relative;
                font-size: 50px;
                overflow: hidden;
                width: 250px;
                height: 50px;
            }
            
            .nums span {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) rotate(120deg);
                transform-origin: bottom center;
            }
            
            .nums span.in {
                transform: translate(-50%, -50%) rotate(0deg);
                animation: goIn .5s ease-in-out;
            }
            
            .nums span.out {
                animation: goOut .5s ease-in-out;
            }
            
            @keyframes goIn {
                0% {
                    transform: translate(-50%, -50%) rotate(120deg);
                }
            
                30% {
                    transform: translate(-50%, -50%) rotate(-20deg);
                }
            
                60% {
                    transform: translate(-50%, -50%) rotate(10deg);
                }
            
                90%,
                100% {
                    transform: translate(-50%, -50%) rotate(0deg);
                }
            
            }
            
            @keyframes goOut {
            
                0%,
                30% {
                    transform: translate(-50%, -50%) rotate(0deg);
                }
            
                60% {
                    transform: translate(-50%, -50%) rotate(20deg);
                }
            
                100% {
                    transform: translate(-50%, -50%) rotate(-120deg);
                }
            }

            </style>
        `
    }

    template() {
        return `
            <div class="counter">
                <div class="nums">
                    ${this.createNums()}
                </div>
                <h4>Get Ready</h4>
            </div>
            <div class="final">
                <h1>GO</h1>
                <button id="replay">replay</button>
            </div>
        `
    }

    resetDOM() {
        this.counter.classList.remove("hide");
        this.finalMessage.classList.remove("show");
      
        this.nums.forEach((num) => {
          num.classList.value = "";
        });
      
        this.nums[0].classList.add("in");
    }

    runAnimation() {
        this.nums.forEach((num, idx) => {
            const penultimate = this.nums.length - 1;
            num.addEventListener("animationend", (e) => {
            if (e.animationName === "goIn" && idx !== penultimate) {
                num.classList.remove("in");
                num.classList.add("out");
            } else if (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in");
            } else {
                this.counter.classList.add("hide");
                this.finalMessage.classList.add("show");
            }
            });
        });
    }

    getElement() {
        return document.querySelector("my-countdown").shadowRoot
    }

    createNums() {
        let text = ''

        console.log(this.inicio)

        for (let i = this.inicio; i >= 0; i--) {
            if (i === 0) text += `<span class="in">${i}</span>`
            else text += `<span>${i}</span>`
        }

        return text;
    }
}

customElements.define('my-countdown', Countdown)