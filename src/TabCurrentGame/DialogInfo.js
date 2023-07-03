import Input from './Input.js';

const DialogInfo = () => {
  const questionTag = document.querySelector('.question');
  const clue = document.querySelector('.clue');
  const words = document.querySelectorAll('.word');
  const firstWord = JSON.parse(localStorage.getItem('WordID - 1'));
  if (firstWord) {
    questionTag.textContent = `1.${firstWord.question}`;
    Input(firstWord.answer.length, 1);
  }

  const chooseWord = (word) => {
    const wordInfo = JSON.parse(localStorage.getItem(`WordID - ${word.children[0].textContent}`));
    const question = `${wordInfo.id}.${wordInfo.question}`;
    const symbols = wordInfo.answer.length;
    clue.textContent = '';

    let letters = [];
    let letterNum = 1;
    word.querySelectorAll('.letter').forEach((letter) => {
      letter.textContent.length === 1 ? letters.push(`${letterNum}-ая буква ${letter.textContent}`) : null;
      letterNum += 1;
    });
    letters = `Подсказка: ${letters.join(', ')}`;
    questionTag.textContent = question;

    if (letters.length > 11 && !wordInfo.solved) {
      clue.textContent = letters;
    }
    Input(symbols, word.id);
  };

  words.forEach((word) => {
    word.addEventListener('click', () => {
      chooseWord(word);
    });
  });

  window.addEventListener('keydown', (e) => {
    const regex = /Digit[1-9]/;
    if (e.altKey && regex.test(e.code)) {
      chooseWord(Array.from(words).filter((el) => el.id === e.code.replace('Digit', ''))[0]);
    }
  });
};

export default DialogInfo;
