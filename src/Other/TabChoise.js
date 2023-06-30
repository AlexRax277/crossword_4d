/**
 * Функция для переключения между вкладками
 * без использования навигационных ссылок
 * @param {string} tab - id вкладки
 */
import CurrentGame from '../TabCurrentGame/CurrantGame.js';

const TabChoise = (tab) => {
  const tabs = document.querySelectorAll('.tab-pane');
  tabs.forEach((e) => {
    e.classList.remove('show', 'active');
    document.getElementById(`tab-${tab}`).classList.add('show', 'active');
  });

  document.getElementById('game-field') ? null : CurrentGame();
};

export default TabChoise;
