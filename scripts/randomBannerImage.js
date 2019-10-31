// Images Data
const images = [
  'imgs/img-news1.jpg',
  'imgs/img-news2.jpg',
  'imgs/img-news3.jpg',
  'imgs/img-news4.jpg',
  'imgs/img-news5.jpg',
  'imgs/img-news6.jpg',
  'imgs/img-news7.jpg',
  'imgs/img-news8.jpg',
  'imgs/img-news9.jpg',
  'imgs/img-news10.jpg',
  'imgs/img-news11.jpg',
  'imgs/img-news12.jpg'
];

// Generate random images based on selected topic
const randomTopic = myTopics[Math.floor(Math.random() * images.length)];

const randomImage = document.querySelector('.w-banner');
const handleBannerFetch = data => {
  randomImage.style.backgroundImage = `url("${data}")`;
};
