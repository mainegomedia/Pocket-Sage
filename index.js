import "./search-bar.js";

window.addEventListener('load', ()=> {
    searchQuotes(); 
});

const muhammadQuotesUrl = ("");

async function searchQuotes() {
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

    const main = document.querySelector('main');

    json.articles.forEach(article => {
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });
}