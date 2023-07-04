/**
 * Функция создания выборки из экземпляров класса Word и занесения их в локальное хранилище.
 * @param {string} fieldSize - размер поля (меленький, средний или большой).
 * Размер поля также определяет количество слов в выборке и количество максимальных пересечений для каждого из слов.
 * В локальное хранилище вносятся как слова по отдельности, так и общая база целиком для удобства использования.
 */

import getRandomIntInclusive from './genRandomNum.js';
import data from './questions.csv';
import Word from './Word.js';

function GetData(fieldSize) {
  const getMatches = () => {
    if (fieldSize === '1') {
      return { countWords: 10, countMatches: getRandomIntInclusive(2, 3) };
    } if (fieldSize === '2') {
      return { countWords: 20, countMatches: 2 };
    }
    return { countWords: 30, countMatches: getRandomIntInclusive(1, 2) };
  };

  let res = [];
  for (let i = 1; i <= getMatches().countWords; i++) {
    const word = data[getRandomIntInclusive(1, data.length - 1)];
    !res.includes(word) ? res.push(word) : null;
    res = res.map((el) => new Word(res.indexOf(el) + 1, el.answer, el.question, getMatches().countMatches));
    res.forEach((element) => {
      const curList = res.filter((e) => e !== element);
      curList.forEach((e) => {
        element.addMatch(e);
      });
    });
  }

  res.forEach((word) => {
    !localStorage.getItem(`WordID - ${word.id}`) ? localStorage.setItem(`WordID - ${word.id}`, JSON.stringify(word)) : null;
  });

  !localStorage.getItem('Data') ? localStorage.setItem('Data', JSON.stringify(res)) : null;

  return res;
}

export default GetData;
