const loading = document.querySelector('#loading');

window.addEventLisrener('load', () => {
  loading.classList.add('loaded');
});
