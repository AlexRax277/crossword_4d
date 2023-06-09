/**
 * Функция вызова модального окна завершения игры. Аналогична предшествующей началу новой игры
 * при наличии в локальном хранилище данных о текущей, но есть существенные отличия в событиях,
 * прикрепленных к кнопкам окна. Для удобства пользования при всплытии фокус падает на окно.
 * При согласии начинается новая игра с параметрами предудещей, но новой базой слов.
 * При отказе выводится статистика по текущей игре.
 */

import TabChoise from '../Other/TabChoise.js';
import GetData from '../DataActions/GetData.js';

const EndGame = () => {
  const modalTag = document.getElementById('endGame-modal');
  const options = { backdrop: 'static', focus: true, keyboard: false };
  const modal = new bootstrap.Modal(modalTag, options);
  modal.show();
  modalTag.addEventListener('shown.bs.modal', () => {
    modalTag.querySelector('.modal-dialog').focus();
  });

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
        document.querySelector('.clue').textContent = '';
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
