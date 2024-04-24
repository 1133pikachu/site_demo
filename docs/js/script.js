const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  count.textContent = text.value.length;
  // 90文字を超えた際の処理
  if (text.value.length > 90) {
    count.classList.add('alert');
  } else {
    count.classList.remove('alert');
  };
  // 100文字超えた際の処理
  if (text.value.length > 100) {
    count.classList.add('over');
  } else {
    count.classList.remove('over');
  };
});
