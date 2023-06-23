import FindStr from './FindStr.js';
import GameInfo from '../TabInfo/GameInfo.js';
import AudioHandler from '../Other/AudioHandler.js';
import errorSound from '../Audio/error.mp3';
import successSound from '../Audio/success.mp3';
import penSound from '../Audio/pen.mp3';

const WordUpdate = (id, challenger, gameType, msg) => {
  const str = FindStr(id);
  const wordInfo = JSON.parse(localStorage.getItem(`WordID - ${id}`));

  const insertWord = () => {
    for (let i = 1; i <= challenger.length; i++) {
      str.childNodes[i].textContent = challenger.split('')[i - 1];
    }
    wordInfo.matches.forEach((match) => {
      const pair = JSON.parse(localStorage.getItem(`WordID - ${match.pairId}`));
      !pair.openSymbols.includes(match.numPair) ? pair.openSymbols.push(match.numPair) : null;
      localStorage.setItem(`WordID - ${match.pairId}`, JSON.stringify(pair));

      const matchStr = FindStr(String(match.pairId));
      matchStr.childNodes[match.numPair].textContent = challenger.split('')[match.numAnswer - 1];
    });
    GameInfo();
  };

  if (gameType === 'simple-mode') {
    if (challenger === wordInfo.answer) {
      wordInfo.solved = true;
      localStorage.setItem(`WordID - ${id}`, JSON.stringify(wordInfo));
      msg.textContent = 'Правильно!';
      insertWord();
      AudioHandler(successSound);
    } else {
      msg.textContent = 'Нет, подумайте еще...';
      AudioHandler(errorSound);
    }
  } else {
    insertWord();
    AudioHandler(penSound);
  }
};

export default WordUpdate;
