const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if(btn.textContent === 'ダークテーマにする') {
    btn.textContent = 'ライトテーマにする';
  } eles if {
    btn.textContent = 'ダークテーマにする';
  }
});
