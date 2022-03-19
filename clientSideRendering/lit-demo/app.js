import { html, render } from 'lit-html';

const articleTemplate = (article) => html`
        <article>
            <header>
                <h3>New Title</h3>
                <div class="article-content">
                    <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <footer>New Author</footer>
            </header>
        </article>

`;

async function start() {
    const articles = await (await fetch('./articles.json')).json();
    const main = document.getElementById('content');

    const article = articleTemplate(articles[0]);
    render(article, main);
}

start();