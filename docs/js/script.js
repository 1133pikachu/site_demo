const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if(btn.textContent === '🌙') {
    btn.textContent = '☀️';
  } eles if {
    btn.textContent = '🌙';
  }
});
