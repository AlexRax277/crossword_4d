/**
 * Функция поиска строки в таблице или конкретного слова.
 * @param {*} idStr - уникальное значение id экземпляра класса Word.
 * @returns возвращает элемент дом-дерева (слово).
 */

const FindStr = (idStr) => {
  const allWordsStr = document.querySelectorAll('.word');
  let res;
  allWordsStr.forEach((word) => {
    word.id === idStr ? res = word : null;
  });
  return res;
};

export default FindStr;
