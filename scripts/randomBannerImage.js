const randomTopic = myTopics[Math.floor(Math.random() * images.length)];

const randomImage = document.querySelector('.w-banner');

const handleBannerFetch = data => {
  randomImage.style.backgroundImage = `url("${data}")`;
};
