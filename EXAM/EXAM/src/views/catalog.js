import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticles } from  '../api/data.js';

const catalogTemplate = (article) => html`
    <section id="catalog-page" class="content catalogue">
        <h1>All Articles</h1>

        <a class="article-preview" href="/catalog">
            ${article.length == 0 ? html` <h3 class="no-articles">No articles yet</h3>`
                    : article.map(articleTemplate)}
        </a>
    </section>`;

const articleTemplate = (article) => html`
    <a class="article-preview" href="/details/${article._id}">
        <article>
            <h3>Topic: <span>${article.title}</span></h3>
            <p>Category: <span>${article.category}</span></p>
        </article>
    </a>`;

export async function articlesPage(ctx){
    const article = await getArticles();

    ctx.render(catalogTemplate(article));
}
