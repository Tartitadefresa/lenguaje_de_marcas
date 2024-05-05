const button = document.getElementById('searchButton');
button.addEventListener('click', () => {
    const search = document.getElementById('searchInput').value;
    const url = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${search}&utf8=&format=json&origin=*`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const searchResult = data.query.search;
            const result = document.getElementById('result');
            result.innerHTML = '';

            for (let i = 0; i < searchResult.length; i++) {
                const title = searchResult[i].title;
                const snippet = searchResult[i].snippet;
                const link = `https://es.wikipedia.org/wiki/${title}`;
                const result = document.getElementById('result');
                result.innerHTML += `
                    <h3>${title}</h3>
                    <p>${snippet}</p>
                    <a href="${link}" target="_blank">Ver más</a>
                `;
            }
        })
        .catch(error => console.log(error));
})