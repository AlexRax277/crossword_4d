/**
 * Инициализация начала новой игры.
 * Все данные текущей игры: режим, размер поля, а также прогресс,
 * записываются в localStorage в фоновом режиме.
 */

import ModalNewGame from './ModalNewGame.js';
import DataToLS from '../DataActions/DataToLS.js';
import AudioHandler from '../Other/AudioHandler.js';
import modalSound from '../Audio/modal.mp3';

const NewGame = () => {
  document.getElementById('new-game').addEventListener('click', () => {
    if (localStorage.getItem('GameType') && localStorage.getItem('FieldSize')) {
      ModalNewGame();
      setTimeout(() => {
        AudioHandler(modalSound);
      }, 300);
    } else { DataToLS(); }
  });
};

export default NewGame;
