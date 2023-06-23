/**
 * Функция для передачи данных в localStorage
 */

import TabChoise from '../Other/TabChoise.js';
import GetData from './GetData.js';

const DataToLS = () => {
  document.getElementById('accept-game-settings').addEventListener('click', () => {
    document.querySelectorAll('.form-check-input').forEach((e) => {
      e.checked ? localStorage.setItem('GameType', e.id) : null;
    });
    const fieldSize = document.getElementById('plaing-field').value;
    localStorage.setItem('FieldSize', fieldSize);
    GetData(fieldSize);
    TabChoise('continue-game');
  });
};

export default DataToLS;
