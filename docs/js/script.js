const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // もしボタンのテキストが「ダークモードにする」になっているなら
  if(btn.textContent === '🌙'){
    // クリックされた時に「ライトモードにする」に変更
    btn.textContent = '☀️';
  
  // そうでないなら（「ライトモードにする」と表示されているなら）
  } else {
    // クリックされた時に「ダークモードにする」に戻す
    btn.textContent = '🌙';
  }
});
