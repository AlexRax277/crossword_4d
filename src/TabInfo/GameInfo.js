/**
 * Функция отображения данных по текущей игре во вкладке "Прогресс".
 * Обновляется каждые 5 сек и/или при отображении нового слова на игровом поле.
 * Все данные подгружаются из локального хранилища.
 * Отображение состоит из прогресс-бара, тестовой информации и таблицы.
 */

import GetDataFromLS from '../TabCurrentGame/GetDataFromLS';

const GameInfo = () => {
  const tabInfo = document.getElementById('tab-info');
  const progress = tabInfo.querySelector('.progress-bar');
  const table = tabInfo.querySelector('.table-body');
  table ? table.innerHTML = '' : null;
  let solvedWords = 0;

  const data = GetDataFromLS();
  data.forEach((el) => {
    const newString = document.createElement('tr');
    const openSymbols = [];
    el.openSymbols.forEach((symbol) => {
      openSymbols.push(`${symbol[0]}-ая буква ${symbol[1]}`);
    });

    newString.innerHTML = `<th scope="row">${el.id}<span style="font-size: 8px">(${el.hashNum})</span></th>
                            <td>${el.question}</td>
                            <td>${el.answer.length}</td>
                            <td>${openSymbols.join('; ')}</td>
                            <td>${el.solved ? el.answer : ''}</td>`;

    table ? table.appendChild(newString) : null;
    el.solved ? solvedWords += 1 : null;
  });

  if (solvedWords > 0) {
    solvedWords = `${Math.floor((solvedWords / data.length) * 100)}%`;
  }
  progress.style.width = solvedWords;
  progress.textContent = solvedWords;
  document.querySelector('.invis').textContent = `На текущий момент разгадано ${solvedWords} слов.`;
};

export default GameInfo;
