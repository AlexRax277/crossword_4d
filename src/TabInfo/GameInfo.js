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

    newString.innerHTML = `<th scope="row">${el.id}</th>
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
};

export default GameInfo;
