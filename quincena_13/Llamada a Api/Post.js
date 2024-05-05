class Post {
    #userId
    #id
    #title
    #body

    constructor(userId, id, title, body) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
        this.#body = body;
    }

    set userId(userId) {
        this.#userId = userId;
    }

    get userId() {
        return this.#userId;
    }

    set id(id) {
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    set title(title) {
        this.#title = title;
    }

    get title() {
        return this.#title;
    }

    set body(body) {
        this.#body = body;
    }

    get body() {
        return this.#body;
    }

    generateHtml() {
        return `
            <div>
                <h2>${this.#title}</h2>
                <p>${this.#body}</p>
            </div>
        `;
    }
}

export { Post }