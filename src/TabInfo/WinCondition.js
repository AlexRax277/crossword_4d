/**
 * Функция-условие вывода победного окна, выделена в отдельный компонент
 * для возможности переиспользования в разных игровых режимах.
 */

import AudioHandler from '../Other/AudioHandler.js';
import EndGame from './EndGame.js';
import victorySound from '../Audio/victory.mp3';

const WinCondition = () => {
  if (JSON.parse(localStorage.getItem('Data')).length === JSON.parse(localStorage.getItem('SolvedWords')).length) {
    setTimeout(() => {
      AudioHandler(victorySound);
      EndGame();
    }, 1000);
  }
};

export default WinCondition;
