const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch(error){
        console.log('There was an error', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        //create and append button to link to the article to read
        const linkToArticle = document.createElement('button');
        linkToArticle.
    
      // TODO: Use document.createElement and appendChild to create and append more elements
  
      newsDiv.appendChild(articleDiv);
    }
}