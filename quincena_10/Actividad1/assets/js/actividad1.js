import * as articleManager from './articleManager.js'

articleManager.addArticle('PC', 'Contenido de PC')
articleManager.addArticle('Laptop', 'Contenido de Laptop')
articleManager.addArticle('Tablet', 'Contenido de Tablet')

articleManager.findArticleByTitle('PC')

articleManager.countArticles()

articleManager.updateArticleContent(0, 'Contenido de PC actualizado')

articleManager.deleteArticle(2)

articleManager.printAllArticles()
