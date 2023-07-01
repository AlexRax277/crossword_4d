import GameInfo from '../TabInfo/GameInfo.js';
import CurrentGame from './CurrantGame.js';

const ClearField = () => {
  const btn = document.getElementById('clear-field');
  btn.addEventListener('click', () => {
    for (let i = 1; i <= JSON.parse(localStorage.getItem('Data')).length; i++) {
      const word = JSON.parse(localStorage.getItem(`WordID - ${i}`));
      word.solved = false;
      word.openSymbols = [];
      word.challenger = '';
      document.getElementById('check-field').classList.add('disabled');
      localStorage.setItem(`WordID - ${i}`, JSON.stringify(word));
    }
    document.querySelector('.clue').textContent = '';
    localStorage.setItem('SolvedWords', '[]');
    CurrentGame();
    GameInfo();
  });
};

export default ClearField;
