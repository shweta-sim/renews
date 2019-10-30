const searchBtn = document.querySelector('#searchButton');

searchBtn.addEventListener('click', event => {
  event.preventDefault();
  const searchVal = document.querySelector('#search').value;
  console.log(searchVal);

  fetch(`${search_url}?q=${searchVal}&token=${_api_key}`)
    .then(res => res.json())
    .then(data => {
      const results = data.articles;
      clearFeed();
      for (let r of results) {
        renderFeed(r);
      }
    })
    .catch(console.log);
});
