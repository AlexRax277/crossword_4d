import SetAttributes from '../Other/SetAttributes.js';

const MainFoo = () => {
  setInterval(() => {
    let k = 0;
    document.querySelectorAll('.word').forEach((word) => {
      const wordInfo = JSON.parse(localStorage.getItem(`WordID - ${word.childNodes[0].textContent}`));
      word.querySelectorAll('.letter').forEach((letter) => {
        if (letter.textContent.length > 1 && letter.nextSibling) {
          letter.nextSibling.remove();
        }
      });
      if (wordInfo.solved || wordInfo.challenger) {
        SetAttributes(word.childNodes[1], { colspan: `${wordInfo.answer.length}`, status: 'solved' });
        wordInfo.solved ? word.childNodes[1].textContent = wordInfo.answer : null;
        wordInfo.challenger ? word.childNodes[1].textContent = wordInfo.challenger : null;
      }

      wordInfo.openSymbols.forEach((s) => {
        if (word.childNodes[s[0]] && word.childNodes[s[0]].textContent === '') {
          word.childNodes[s[0]].textContent = String(s[1]);
        }
        if (wordInfo.challenger && s[1] !== wordInfo.challenger[s[0] - 1]) {
          wordInfo.openSymbols.splice(s);
          wordInfo.openSymbols.push([s[0], String(wordInfo.challenger[s[0] - 1])]);
        }
      });
      wordInfo.openSymbols.sort();
      localStorage.setItem(`WordID - ${word.childNodes[0].textContent}`, JSON.stringify(wordInfo));
      wordInfo.challenger ? k += 1 : null;
    });

    if (JSON.parse(localStorage.getItem('Data')) && k === JSON.parse(localStorage.getItem('Data')).length) {
      document.getElementById('check-field').classList.remove('disabled');
    }
    window.goatcounter.visit_count({ append: 'body' });
  }, 5000);
};

export default MainFoo;
