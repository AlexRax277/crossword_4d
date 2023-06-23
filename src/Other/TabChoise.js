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

  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.classList.remove('active');
    document.getElementById(tab).classList.add('active');
  });
  CurrentGame();
};

export default TabChoise;
