import Input from './Input.js';

const DialogInfo = () => {
  const tag = document.getElementById('dialog-info');
  const words = document.querySelectorAll('.word');

  words.forEach((word) => {
    word.addEventListener('click', () => {
      const wordInfo = JSON.parse(localStorage.getItem(`WordID - ${word.children[0].textContent}`));
      const question = `${wordInfo.id}. ${wordInfo.question}`;
      const symbols = wordInfo.answer.length;

      let letters = [];
      let letterNum = 1;
      word.querySelectorAll('.letter').forEach((letter) => {
        letter.textContent ? letters.push(`${letterNum}-ая буква ${letter.textContent}`) : null;
        letterNum += 1;
      });
      letters = `Подсказка: ${letters.join(', ')}`;
      tag.textContent = question;

      if (letters.length > 11 && !wordInfo.solved) {
        const clue = document.createElement('div');
        clue.classList = 'col mt-2';
        clue.textContent = letters;
        tag.appendChild(clue);
      }
      Input(symbols, word.id);
    });
  });
};

export default DialogInfo;
