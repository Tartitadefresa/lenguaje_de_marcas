Promise.all([
    fetch("https://jsonplaceholder.typicode.com/comments"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/todos")
]).then(([comments, posts, todo]) => {
    return Promise.all([comments.json(), posts.json(), todo.json()]);
}).then(res => console.log(res))
