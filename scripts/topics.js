let topicsArr = ['health', 'science', 'entertainment'];
let topic = 'health';

window.onload = () => {
  console.log('hi');

  updateClock();
  setInterval('updateClock()', 1000);

  fetch(`${top_news_url}?token=${_api_key}`)
    .then(res => res.json())
    .then(data => {
      const results = data.articles;
      clearFeed();
      for (let r of results) {
        renderFeed(r);
      }
    })
    .catch(console.log);
};
