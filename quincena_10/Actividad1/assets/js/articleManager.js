// Definición de la lista de artículos
let articles = [];

// Función para obtener todos los artículos
function getAllArticles() {
  return articles;
}

// Función para buscar un artículo por su título
function findArticleByTitle(title) {
  return articles.find((article) => article.title === title);
}

// Función para buscar artículos que contengan una palabra clave en su contenido
function searchArticlesByKeyword(keyword) {
  return articles.filter((article) => article.content.includes(keyword));
}

// Función para contar el número total de artículos
function countArticles() {
  return articles.length;
}

// Función para actualizar el contenido de un artículo por su índice
function updateArticleContent(index, newContent) {
  if (index >= 0 && index < articles.length) {
    articles[index].content = newContent;
  } else {
    console.error("Índice fuera de rango");
  }
}

// Función para imprimir todos los artículos en la consola
function printAllArticles() {
  console.log("Lista de Artículos:");
  articles.forEach((article, index) => {
    console.log(`${index + 1}. Título: ${article.title}`);
    console.log(`   Contenido: ${article.content}`);
  });
}

// Función para agregar un artículo a la lista
function addArticle(title, content) {
  articles.push({ title, content });
}

// Función para eliminar un artículo de la lista por su índice
function deleteArticle(index) {
  if (index >= 0 && index < articles.length) {
    articles.splice(index, 1);
  } else {
    console.error("Índice fuera de rango");
  }
}

export {
  getAllArticles,
  findArticleByTitle,
  searchArticlesByKeyword,
  countArticles,
  updateArticleContent,
  printAllArticles,
  addArticle,
  deleteArticle,
}
