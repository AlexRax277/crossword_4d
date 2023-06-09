/**
 * Функция создания выборки из экземпляров класса Word и занесения их в локальное хранилище.
 * @param {string} fieldSize - размер поля (меленький, средний или большой).
 * Размер поля также определяет количество слов в выборке и количество максимальных пересечений для каждого из слов.
 * В локальное хранилище вносятся как слова по отдельности, так и общая база целиком для удобства использования.
 */

import getRandomIntInclusive from './genRandomNum.js';
import data from './questions.csv';
import Word from './Word.js';

/**
 * Тестовая функция, для воспроизведения игрового поля пользователя.
 * @param {*} d - общая БД;
 * @param {*} list - список из номеров (порядковых) по БД;
 * @returns массив из соответствющих слов.
 * Внимание! Индекс слова в общем массиве (или БД) - это его порядковый номер + 2.
 * Необходимо также задействовать строки 53 и 56 настоящего скрипта вместо строк 52 и 55 соответственно.
 */
// const testFoo = (d, list) => {
//   const res = [];
//   list.forEach((element) => {
//     res.push(d[element]);
//   });
//   return res;
// };
// const myList = [1602,
//   2264,
//   5333,
//   1989,
//   5198,
//   5784,
//   7398,
//   3188,
//   3632,
//   3881];
// const myData = testFoo(data, myList);

function GetData(fieldSize) {
  const getMatches = () => {
    if (fieldSize === '1') {
      return { countWords: 10, countMatches: getRandomIntInclusive(2, 3) };
    } if (fieldSize === '2') {
      return { countWords: 20, countMatches: 2 };
    }
    return { countWords: 30, countMatches: getRandomIntInclusive(1, 2) };
  };

  const res = [];
  let id = 1;
  for (let i = 1; i <= getMatches().countWords; i++) {
    let word = data[getRandomIntInclusive(1, data.length - 1)];
    // let word = myData[i - 1];
    if (!res.includes(word)) {
      word = new Word(id, word.answer, word.question, getMatches().countMatches, data.indexOf(word) + 2);
      // word = new Word(id, word.answer, word.question, getMatches().countMatches, myList[i - 1]);
      res.push(word);
      id += 1;
    }
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
