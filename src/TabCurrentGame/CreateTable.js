import GetDataFromLS from './GetDataFromLS.js';

const CreateTable = () => {
  const table = document.createElement('table');
  const tBody = document.createElement('tbody');
  table.appendChild(tBody);
  table.classList = 'table col-sm-4';
  table.id = 'game-field';

  GetDataFromLS().map((el) => {
    const tr = document.createElement('tr');
    tr.classList = 'word';
    tr.id = el.id;
    const th = document.createElement('th');
    th.scope = 'row';
    th.classList = 'col-sm-1 text-center';
    th.textContent = el.id;
    tr.appendChild(th);
    el.answer.split('').forEach((symbol) => {
      const td = document.createElement('td');
      td.classList = 'letter col-sm text-center table-bordered border-secondary';
      if (el.solved) {
        td.textContent = symbol;
      }
      tr.appendChild(td);
    });
    tBody.appendChild(tr);
  });

  const mock = document.querySelector('.mock');
  const tab = document.querySelector('.tab-cont');
  mock ? mock.remove() : null;
  !tab.querySelector('.table') ? tab.appendChild(table) : null;
  document.getElementById('clear-field').classList.remove('disabled');
  localStorage.getItem('GameType') === 'simple-mode' ? document.getElementById('check-field').classList.add('invisible') : null;
};

export default CreateTable;
