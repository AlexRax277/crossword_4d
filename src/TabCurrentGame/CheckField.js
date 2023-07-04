/**
 * Функция проверки значений игрового поля. Кнопка проверки становится активной только после заполнения всех значений поля.
 * Кнопка доступна только в реалистичном режиме.
 * При проверке идет сличение данных каждого экземпляра класса Word между полями answer и challenger. При положительном результате
 * ответ заносится в список SolvedWords локального хранилища. Как только длина списка достигает общего количества слов,
 * всем словам присваивается статус (solved: true) и идет вызов окна победы.
 */

import GetDataFromLS from './GetDataFromLS.js';
import AudioHandler from '../Other/AudioHandler.js';
import errorSound from '../Audio/error.mp3';
import WinCondition from '../TabInfo/WinCondition.js';

const CheckField = () => {
  const btn = document.getElementById('check-field');
  btn.addEventListener('click', () => {
    const data = GetDataFromLS();
    const solvedWords = JSON.parse(localStorage.getItem('SolvedWords'));
    let counter = 0;
    data.forEach((word) => {
      if (word.answer === word.challenger) {
        counter += 1;
        !solvedWords.includes(word.challenger) ? solvedWords.push(word.challenger) : null;
        localStorage.setItem('SolvedWords', JSON.stringify(solvedWords));
      }
    });
    if (counter < data.length) {
      document.querySelector('.msg').textContent = 'Упс! Что-то не сходится...';
      setTimeout(() => {
        AudioHandler(errorSound);
      }, 300);
    } else {
      data.forEach((word) => {
        word.solved = true;
        localStorage.setItem(`WordID - ${word.id}`, JSON.stringify(word));
      });
      WinCondition();
    }
  });
};

export default CheckField;
