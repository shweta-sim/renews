const searchBtn = document.querySelector('#searchButton');
const dummyPic = './imgs/img-news3.jpg';

function createDiv(content) {
  const newsWrapper = document.querySelector('.newsfeed');

  let articleWrapper = document.createElement('article');
  newsWrapper.appendChild(articleWrapper);

  let articleDiv = document.createElement('div');
  articleWrapper.appendChild(articleDiv);

  let articleImg = document.createElement('img');
  articleDiv.appendChild(articleImg);

  let articleHeading = document.createElement('h5');
  articleDiv.appendChild(articleHeading);

  let articleDate = document.createElement('p');
  articleDiv.appendChild(articleDate);

  let articleDesc = document.createElement('p');
  articleDiv.appendChild(articleDesc);

  content.image
    ? (articleImg.src = content.image)
    : (articleImg.src = dummyPic);
  articleHeading.textContent = content.title;
  articleDate.textContent = content.publishedAt;
  articleDesc.textContent = content.description;
}

searchBtn.addEventListener('click', event => {
  event.preventDefault();
  const searchVal = document.querySelector('#search').value;
  console.log(searchVal);

  fetch(`${search_url}?q=${searchVal}&token=${_api_key}`)
    .then(res => res.json())
    .then(data => {
      const results = data.articles;
      for (let r of results) {
        createDiv(r);
      }
    })
    .catch(console.log);
});
