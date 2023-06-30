import CurrentGame from './CurrantGame.js';

const ClearField = () => {
  const btn = document.getElementById('clear-field');
  btn.addEventListener('click', () => {
    for (let i = 1; i <= JSON.parse(localStorage.getItem('Data')).length; i++) {
      const word = JSON.parse(localStorage.getItem(`WordID - ${i}`));
      word.solved = false;
      localStorage.setItem(`WordID - ${i}`, JSON.stringify(word));
    }
    CurrentGame();
  });
};

export default ClearField;
