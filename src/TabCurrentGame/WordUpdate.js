/**
 * Функция проверки введенного слова и его дальнейшего отображения на игровом поле.
 * @param {int} id - уникальный идентификатор слова, с его помощью идет поиск ответа в локальном хранилище,
 *                  а также проведение изменений внутри соответствующего объекта;
 * @param {str} challenger - слово, введенное пользователем и прошедшее валидацию данных;
 * @param {str} gameType - текущий игровой режим, запись о нем ведется в локальном хранилище;
 * @param {element} msg - узел в дом-дереве, куда будет выводиться сообщение о результате.
 */

import FindStr from './FindStr.js';
import GameInfo from '../TabInfo/GameInfo.js';
import AudioHandler from '../Other/AudioHandler.js';
import errorSound from '../Audio/error.mp3';
import successSound from '../Audio/success.mp3';
import penSound from '../Audio/pen.mp3';
import SetAttributes from '../Other/SetAttributes.js';
import WinCondition from '../TabInfo/WinCondition.js';

const WordUpdate = (id, challenger, gameType, msg) => {
  const str = FindStr(id);
  const wordInfo = JSON.parse(localStorage.getItem(`WordID - ${id}`));

  /**
   * Функция-обработчик для непосредственной вставки слова в ячейки игрового поля.
   * В зависимости от игрового режима ведет себя по-разному.
   * При передаче слова на игровое поле ячейки внутри строки, созданные под буквы этого слова,
   * объединяются в одну и слово пишется целиком. Это сделано для того, чтобы скринридер читал
   * в дальнейшем слово целиком, а не побуквенно. Для реалистичного режима при обратной связи между
   * словами может быть вставлена или заменена только конкретная буква приведенного слова.
   * Открытые буквы вносятся в соответствующее свойство объекта класса Word.
   */
  const insertWord = () => {
    SetAttributes(str.childNodes[1], { colspan: `${challenger.length}`, status: 'solved' });
    str.childNodes[1].textContent = challenger;

    if (gameType === 'real-mode') {
      wordInfo.challenger = challenger;
    }

    wordInfo.matches.forEach((match) => {
      const pair = JSON.parse(localStorage.getItem(`WordID - ${match.pairId}`));
      const newOpenSym = [match.numPair, challenger.split('')[match.numAnswer - 1]];
      const openNumSym = pair.openSymbols.map((sym) => sym[0]);
      !openNumSym.includes(match.numPair) ? pair.openSymbols.push(newOpenSym) : null;

      const matchStr = FindStr(String(match.pairId));
      if (matchStr.childNodes[1].textContent.length < 2) {
        matchStr.childNodes[match.numPair].textContent = challenger.split('')[match.numAnswer - 1];
      }
      if (gameType === 'real-mode' && matchStr.childNodes.length === 2) {
        const listSymbols = matchStr.childNodes[1].textContent.split('');
        listSymbols[match.numPair - 1] = challenger.split('')[match.numAnswer - 1];
        pair.challenger = listSymbols.join('');
      }
      localStorage.setItem(`WordID - ${match.pairId}`, JSON.stringify(pair));
    });
    localStorage.setItem(`WordID - ${id}`, JSON.stringify(wordInfo));
    GameInfo();
  };

  if (gameType === 'simple-mode') {
    if (challenger === wordInfo.answer) {
      wordInfo.solved = true;
      localStorage.setItem(`WordID - ${id}`, JSON.stringify(wordInfo));
      const solvedWords = JSON.parse(localStorage.getItem('SolvedWords'));
      !solvedWords.includes(challenger) ? solvedWords.push(challenger) : null;
      localStorage.setItem('SolvedWords', JSON.stringify(solvedWords));
      msg.textContent = 'Правильно!';
      insertWord();
      setTimeout(() => {
        AudioHandler(successSound);
      }, 300);
    } else {
      msg.textContent = 'Нет, подумайте еще...';
      setTimeout(() => {
        AudioHandler(errorSound);
      }, 300);
    }
  } else {
    insertWord();
    AudioHandler(penSound);
  }
  WinCondition();
};

export default WordUpdate;
