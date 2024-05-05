import { Post } from './Post.js';

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        const filteredPosts = posts.filter(post => post.title.startsWith('a'));
        filteredPosts.forEach(post => {
            const postObj = new Post(post.userId, post.id, post.title, post.body);
            const postHtml = postObj.generateHtml();
            document.body.innerHTML += postHtml;
        });
    })
    .catch(error => console.error(error));