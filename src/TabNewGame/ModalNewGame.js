/**
 * Модальное окно, предупреждающее о перезаписи данных текущей игры.
 * При согласии localStorage очищается, и происходит переход во вкладку
 * "Новая игра", при отклонении происходит переход во вкладку "Продолжить игру".
 */

import TabChoise from '../Other/TabChoise.js';
import DataToLS from '../DataActions/DataToLS.js';

const ModalNewGame = () => {
  const modalTag = document.getElementById('newGame-modal');
  const options = { backdrop: 'static', focus: true, keyboard: false };
  const modal = new bootstrap.Modal(modalTag, options);
  modal.show();
  modalTag.addEventListener('shown.bs.modal', () => {
    modalTag.querySelector('.modal-dialog').focus();
  });

  const btnDenied = document.getElementById('btn-modal-denied');
  const btnAccept = document.getElementById('btn-modal-accept');
  const btnClose = document.getElementById('btn-close');

  [btnAccept, btnDenied, btnClose].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target === btnDenied || e.target === btnClose) {
        modal.hide();
        TabChoise('continue-game');
      } else if (e.target === btnAccept) {
        modal.hide();
        localStorage.clear();
        const field = document.getElementById('game-field');
        document.querySelector('.question').textContent = '';
        document.querySelector('.clue').textContent = '';
        document.getElementById('clear-field').classList.add('disabled');
        document.getElementById('check-field').classList.add('disabled');
        const form = document.getElementById('form').childNodes[0];
        form ? form.remove() : null;
        field ? field.remove() : null;
        DataToLS();
      }
    });
  });
};

export default ModalNewGame;
