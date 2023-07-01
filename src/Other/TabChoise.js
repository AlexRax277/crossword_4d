/**
 * Функция для переключения между вкладками
 * без использования навигационных ссылок
 * @param {string} tab - id вкладки
 */
import CurrentGame from '../TabCurrentGame/CurrantGame.js';

const TabChoise = (tab) => {
  [...document.querySelectorAll('.nav-link'), document.querySelector('.navbar-brand')].forEach((link) => {
    link.classList.remove('active');
    link.id === tab ? link.classList.add('active') : null;
  });
  const tabs = document.querySelectorAll('.tab-pane');
  tabs.forEach((e) => {
    e.classList.remove('show', 'active');
    document.getElementById(`tab-${tab}`).classList.add('show', 'active');
  });

  document.getElementById('game-field') ? null : CurrentGame();
};

export default TabChoise;
