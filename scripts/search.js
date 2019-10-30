const searchBtn = document.querySelector('#searchButton');

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  const searchVal = document.querySelector('#search').value;
  console.log(searchVal);

  fetch(`${search_url}?q=${searchVal}&token=${_api_key}`)
    .then(res => res.json())
    .then(data => {
      handleFetch(data);
    })
    .catch(console.log);
});
