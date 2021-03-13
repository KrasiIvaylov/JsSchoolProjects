
import createArticle from './articles.js'

async function start(){
    const article = await (await fetch('./articles.json')).json();
    const main = document.getElementById('content');
    main.innerHTML = article.map(createArticle).join('');

    console.log(article.map(createArticle));

}
start();
