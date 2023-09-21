const msgList = document.querySelectorAll('.chat-msg-text');

function validateWordWrap(el, maxLength) {
  let wordList = el.innerText.split(' ');
  let res = '';

  
  wordList.forEach(word => {
    if (word.length >= maxLength) {
      res += ` <span style="word-break:break-all; overflow-wrap: break-word">${word}</span>`
    } else {
      res += ` ${word}`
    }
  })
  el.innerHTML = res;
  console.log(el);
}

msgList.forEach(msg => {
  validateWordWrap(msg, 35);
});