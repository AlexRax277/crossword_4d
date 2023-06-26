import AudioHandler from './Other/AudioHandler.js';
import CurrentGame from './TabCurrentGame/CurrantGame.js';
import NewGame from './TabNewGame/NewGame.js';
import clickSound from './Audio/click.mp3';
import GameInfo from './TabInfo/GameInfo.js';
import TabChoise from './Other/TabChoise.js';
import Icon from './icon.png';

const iconBrand = document.getElementById('icon-brand');
const image = new Image();
image.src = Icon;
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

setInterval(() => {
  document.querySelectorAll('.word').forEach((word) => {
    word.querySelectorAll('.letter').forEach((letter) => {
      if (letter.textContent.length > 1 && letter.nextSibling) {
        letter.nextSibling.remove();
      }
    });
  });
}, 1000);

NewGame();
CurrentGame();
setInterval(() => { GameInfo(); }, 10 * 1000);
