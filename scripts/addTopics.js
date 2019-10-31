var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger');
var closeButton = document.querySelector('.close-button');

trigger.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.classList.toggle('show-modal');
  }
});

closeButton.addEventListener('click', () => {
  if (event.target === closeButton) {
    modal.classList.toggle('show-modal');
  }
});
