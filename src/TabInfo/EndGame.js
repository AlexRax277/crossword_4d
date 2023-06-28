import TabChoise from '../Other/TabChoise.js';
import GetData from '../DataActions/GetData.js';

const EndGame = () => {
  const modalTag = document.getElementById('endGame-modal');
  const options = { backdrop: 'static', focus: true, keyboard: false };
  const modal = new bootstrap.Modal(modalTag, options);
  modal.show();
  const btnDenied = document.getElementById('btn-modal-end-denied');
  const btnAccept = document.getElementById('btn-modal-end-accept');
  const btnClose = document.getElementById('btn-end-close');

  [btnAccept, btnDenied, btnClose].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target === btnDenied || e.target === btnClose) {
        modal.hide();
        TabChoise('info');
      } else if (e.target === btnAccept) {
        modal.hide();
        const mode = localStorage.getItem('GameType');
        const fieldSize = localStorage.getItem('FieldSize');
        localStorage.clear();
        const field = document.getElementById('game-field');
        document.querySelector('.question').textContent = '';
        const form = document.getElementById('form').childNodes[0];
        form ? form.remove() : null;
        field ? field.remove() : null;
        localStorage.setItem('GameType', mode);
        localStorage.setItem('SolvedWords', '[]');
        localStorage.setItem('FieldSize', fieldSize);
        GetData(fieldSize);
        TabChoise('continue-game');
      }
    });
  });
};

export default EndGame;
