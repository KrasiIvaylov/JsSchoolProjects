const createArticle = (article) => `
 <article>
            <header>
                <h3>${article.title}</h3>
                <div class="article-content">
                    <p>
                        ${article.content}
                    </p>
                </div>
                <footer>${article.author}</footer>
            </header>
        </article>
`;
export default createArticle;