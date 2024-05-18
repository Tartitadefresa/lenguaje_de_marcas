class MyNavbar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const navbar = document.createElement('header');
        navbar.innerHTML = `
            <style>
                header {
                    width: 100%;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    background: #232323;
                    color: #ccc;
                }
                .logo {
                    letter-spacing: 3px;
                }
                .nav {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 10px;
                    width: 30%;
                }
                .navlink {
                    list-style: none;
                    margin: 0;
                }
                .navlink a {
                    color: #ccc;
                    text-decoration: none;
                    font-size: 0.8em;
                }
                .burger {
                    font-size: 0.8em;
                    display: none;
                }
                @media screen and (max-width: 678px) {
                    .burger {
                        display: block;
                    }
               </style>
            <h1 class="logo">LOGO</h1>
            <ul class="nav">
                <li class="navlink"><a href="./index.html">Home</a></li>
                <li class="navlink"><a href="./About.html">About</a></li>
                <li class="navlink"><a href="./Projects.html">Projects</a></li>
                <li class="navlink"><a href="./Contact.html">Contact</a></li>
            </ul>
            <div class="burger">
                <i class="fas fa-bars"></i>
            </div>
        `;

        shadow.appendChild(navbar);
    }

    connectedCallback() {
        const shadow = this.shadowRoot;
        const burger = shadow.querySelector('.burger i');
        const nav = shadow.querySelector('.nav');

        function toggleNav() {
            burger.classList.toggle('fa-bars');
            burger.classList.toggle('fa-times');
            nav.classList.toggle('nav-active');
        }

        burger.addEventListener('click', toggleNav);
    }
}

customElements.define('my-navbar', MyNavbar);