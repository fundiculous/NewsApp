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
        articleDiv.classList.add('article'); 

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title.toUpperCase();
        articleDiv.appendChild(title);

        //adding the article image
        const articleImage = document.createElement('img');
        articleImage.src = article.urlToImage;
        articleImage.width = 220;
        articleImage.alt = article.title; 
        articleDiv.appendChild(articleImage);

        //create and append button to link to the article to read
        const linkToArticle = document.createElement('button');
        linkToArticle.textContent = 'Full story here';
        linkToArticle.target = '_blank'; 
        articleDiv.appendChild(linkToArticle);

   
    
      // TODO: Use document.createElement and appendChild to create and append more elements
  
      newsDiv.appendChild(articleDiv);
    }
}