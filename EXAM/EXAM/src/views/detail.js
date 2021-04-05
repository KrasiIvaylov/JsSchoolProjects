import {html} from '../../node_modules/lit-html/lit-html.js';
import {deleteArticle, getArticleById} from '../api/data.js';

const detailsTemplate = () => html`
    <section id="details-page" class="content details">
        <h1>Arrays</h1>

        <div class="details-content">
            <strong>Published in category JavaScript</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim nostrum aperiam eius nulla
                reprehenderit fuga tempora corporis cupiditate quae, possimus illo quidem sunt numquam quibusdam
                repellendus earum harum minima aspernatur? Recusandae, esse. Delectus officiis veritatis soluta
                dolor cumque, nam, debitis numquam deleniti quo corporis accusamus ratione reiciendis corrupti.
                Est unde nihil deleniti praesentium consequatur, quidem, harum ut porro in minus, velit magnam.
                Assumenda temporibus odio veniam sit provident illo consectetur! In ipsam ab corrupti nesciunt
                eum, optio est molestias, nam modi neque quisquam quia corporis, consectetur delectus deserunt
                quo. Suscipit maiores esse officiis, non obcaecati quibusdam. Distinctio totam quibusdam a
                blanditiis.</p>

            <div class="buttons">
                <a href="#" class="btn delete">Delete</a>
                <a href="#" class="btn edit">Edit</a>
                <a href="#" class="btn edit">Back</a>
            </div>
        </div>
    </section>`;

export async function detailsPage(ctx){
    const userId = sessionStorage.getItem('userId');
    const articleId = ctx.params.id;
    const article = await getArticleById(articleId);
    const isOwner = userId === article._ownerId;
    ctx.render(detailsTemplate(article, isOwner, onDelete));

    async function onDelete(){
        const confirmed = confirm('Are you sure');
        if (confirmed){
            await deleteArticle(articleId);
            ctx.page.redirect('/catalog');
        }
    }
}