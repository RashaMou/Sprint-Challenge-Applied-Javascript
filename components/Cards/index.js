// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



class Article {
  constructor(article) {
    article.forEach(article => {
    this.article = article;
    this.cardsContainer = document.querySelector('.cards-container')
    this.createArticle()
    }) 
  }  

  createArticle() {
    
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.headline = document.createElement('div')
    this.headline.classList.add('headline')
    
    this.authorContainer = document.createElement('div')
    this.authorContainer.classList.add('author')

    this.imgContainer = document.createElement('div')
    this.imgContainer.classList.add('img-container')
    this.authorImg = document.createElement('img')
    
    this.authorName = document.createElement('span')
    
    this.headline.textContent = this.article.headline
    this.authorImg.src = this.article.authorPhoto
    this.authorName.textContent = this.article.authorName

    this.cardsContainer.appendChild(this.card);
    this.card.appendChild(this.headline)
    this.card.appendChild(this.authorContainer)
    this.authorContainer.appendChild(this.imgContainer)
    this.imgContainer.appendChild(this.authorImg)
    this.authorContainer.appendChild(this.authorName)
  }       
}
  

const lambdaArticles = axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(articles => {
    let arrayofTopics = Object.keys(articles.data.articles)
    arrayofTopics.forEach(topic => new Article(articles.data.articles[topic]))
  })
  .catch(err => {
    console.log('error: ', err)
  })

