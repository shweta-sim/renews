let topicsArr = ['health', 'science', 'entertainment'];
let topic = 'health';

window.onload = () => {
  console.log('hi');

  updateClock();
  setInterval('updateClock()', 1000);

  fetch(`${top_news_url}?token=${_api_key}`)
    .then(res => res.json())
    .then(data => {
      handleFetch(data);
    })
    .catch(console.log);
};
