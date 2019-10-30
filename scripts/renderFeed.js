const newsWrapper = document.querySelector('.newsfeed');

const clearFeed = () => {
  newsWrapper.innerHTML = '';
};

const renderFeed = content => {
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

  articleImg.src = images[Math.floor(Math.random() * images.length)];
  articleHeading.textContent = content.title;
  articleDate.textContent = content.publishedAt;
  articleDesc.textContent = content.description;
};
