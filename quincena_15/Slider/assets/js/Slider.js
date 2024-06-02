class Slider extends HTMLElement {
    #shadowDom
    images;

    constructor() {
      super();
      this.#shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      console.log('connected')
      this.images = this.getAttribute('imagesList').split(' ')
      this.render()
      
      const slidesContainer = this.getElement().querySelector("#slides-container");
      const slide = this.getElement().querySelector(".slide");
      const prevButton = this.getElement().querySelector("#slide-arrow-prev");
      const nextButton = this.getElement().querySelector("#slide-arrow-next");

      nextButton.addEventListener("click", (event) => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
      });
   
      prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
      });

       const scrollBar = this.getAttribute('scrollBar');
      if (scrollBar === 'NO') {

        slidesContainer.style.overflow = 'hidden';
        slidesContainer.style.scrollbarWidth = 'none';
        slidesContainer.style.msOverflowStyle = 'none';
      }
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
        .slider-wrapper {
          margin: 1rem;
          position: relative;
          overflow: hidden;
      }
      .slides-container {
          height: calc(100vh - 2rem);
          width: 100%;
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          overflow: scroll;
          scroll-behavior: smooth;
      }
      .slide {
          width: 100%;
          height: 100%;
          flex: 1 0 100%;
      }
      
      .slide-arrow {
          position: absolute;
          display: flex;
          top: 0;
          bottom: 0;
          margin: auto;
          height: 4rem;
          background-color: white;
          border: none;
          width: 2rem;
          font-size: 3rem;
          padding: 0;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 100ms;
        }
        .slide-arrow:hover,
        .slide-arrow:focus {
          opacity: 1;
        }
        #slide-arrow-prev {
          left: 0;
          padding-left: 0.25rem;
          border-radius: 0 2rem 2rem 0;
        }
        #slide-arrow-next {
          right: 0;
          padding-left: 0.75rem;
          border-radius: 2rem 0 0 2rem;
        </style>
      `

    }

    template() {
      console.log(this.images)

      return `
        <section class="slider-wrapper">
        <button class="slide-arrow" id="slide-arrow-prev">
          &#8249;
        </button>
        
        <button class="slide-arrow" id="slide-arrow-next">
          &#8250;
        </button>
        
        <ul class="slides-container" id="slides-container">
          ${this.getImages()}
        </ul>
      </section>
      `
    }

    getElement() {
      return document.querySelector("my-slider").shadowRoot
    }

    getImages() {
      let imagesTxt = ''

      this.images.forEach(image => {
        imagesTxt += `<li class="slide">
          <img src="${image}" alt="slide" style="width: 100%; height: 100%;">
        </li>`
      })

      return imagesTxt
    }  
     
  }
  customElements.define('my-slider', Slider);
