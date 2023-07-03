import AudioHandler from './Other/AudioHandler.js';
import CurrentGame from './TabCurrentGame/CurrantGame.js';
import NewGame from './TabNewGame/NewGame.js';
import clickSound from './Audio/click.mp3';
import GameInfo from './TabInfo/GameInfo.js';
import TabChoise from './Other/TabChoise.js';
import Icon from './icon.png';
import MainFoo from './TabNewGame/MainFoo.js';

const iconBrand = document.getElementById('icon-brand');
const image = new Image();
image.src = Icon;
image.alt = 'Бесцветный трехмерный куб, распадающийся на отдельные кубические фрагменты одинакового размера';
image.style.width = '30%';
iconBrand.appendChild(image);

window.addEventListener('click', (e) => {
  const brand = document.querySelector('.navbar-brand');
  if (Array.from(e.target.classList).includes('nav-link') || e.target === brand) {
    e.preventDefault();
    TabChoise(e.target.id);
    AudioHandler(clickSound);
  } else if (Array.from(e.target.classList).includes('btn')) {
    e.preventDefault();
    AudioHandler(clickSound);
  }
});

MainFoo();
NewGame();
CurrentGame();
setInterval(() => { GameInfo(); }, 5 * 1000);
