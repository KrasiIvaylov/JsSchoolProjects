import {html} from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
    <section id="welcome">
        <section id="home-page" class="content">
            <h1>Recent Articles</h1>
            <section class="recent js">
                <h2>JavaScript</h2>
                <article>
                    <h3>Arrays</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim nostrum aperiam eius nulla
                        reprehenderit fuga tempora corporis cupiditate quae, possimus illo quidem sunt numquam quibusdam
                        repellendus earum harum minima aspernatur? Recusandae, esse. Delectus officiis veritatis soluta
                        dolor cumque, nam, debitis numquam deleniti quo corporis accusamus ratione reiciendis corrupti.
                        Est unde nihil deleniti praesentium consequatur, quidem, harum ut porro in minus, velit magnam.
                        Assumenda temporibus odio veniam sit provident illo consectetur! In ipsam ab corrupti nesciunt
                        eum, optio est molestias, nam modi neque quisquam quia corporis, consectetur delectus deserunt
                        quo. Suscipit maiores esse officiis, non obcaecati quibusdam. Distinctio totam quibusdam a
                        blanditiis.</p>
                    <a href="/details" class="btn details-btn">Details</a>
                </article>
            </section>
            <section class="recent csharp">
                <h2>C#</h2>
                <article>
                    <h3>Dictionary</h3>
                    <p>Voluptates quos recusandae vero odit ex doloremque error ut iure praesentium hic
                        ducimus, dolore numquam iste ab dolor repellat quam. Illo omnis nemo, voluptates id aliquam,
                        ratione nulla veritatis aspernatur ducimus odio a et soluta accusantium eaque, deserunt numquam.
                        Fuga dicta laboriosam incidunt deleniti quos, optio velit itaque quis nulla, est officiis nemo,
                        consequatur eius. Non tempora eaque odit debitis amet excepturi eos? Nemo sit tempore, aliquid
                        pariatur natus magni dolore cum molestias distinctio, dolores, quibusdam asperiores!
                        Reprehenderit magni, reiciendis amet perspiciatis vitae ad nisi quia quos rem sint,
                        consequuntur, quaerat nostrum. Iure velit consequuntur, magnam in ullam quis neque sed magni
                        perspiciatis repudiandae possimus sint fuga, molestias accusamus reiciendis necessitatibus!</p>
                    <a href="/details" class="btn details-btn">Details</a>
                </article>
            </section>
            <section class="recent java">
                <h2>Java</h2>
                <article>
                    <h3>JDK</h3>
                    <p>Abblanditiis odit eaque nobis autem quisquam quod numquam molestiae, debitis rerum distinctio,
                        iure neque incidunt quidem est facere aliquam totam ducimus in rem magnam minus beatae
                        repudiandae! Corrupti consequatur quidem porro, fugit veritatis earum? Temporibus in eligendi
                        voluptatem quaerat id. Vel beatae possimus corrupti sed praesentium! Voluptatum, reiciendis
                        aliquam? Doloremque repudiandae dolor nisi perspiciatis id esse et placeat sint iste assumenda
                        adipisci nostrum minima, recusandae laudantium fugit tempore saepe magnam! Fugit, veniam!
                        Veritatis eos quas odit, repellendus eligendi tempore numquam architecto? Odit eos aut dolore
                        reprehenderit dignissimos esse dolores consequuntur, incidunt est vero maiores repudiandae rem
                        hic nulla mollitia nihil nobis deserunt quia.</p>
                    <a href="/details" class="btn details-btn">Details</a>
                </article>
            </section>
            <section class="recent python">
                <h2>Python</h2>
                <h3 class="no-articles">No articles yet</h3>
            </section>
        </section>`;

export async function homePage(ctx){
    ctx.render(homeTemplate());
}