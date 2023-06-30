import ClearField from './ClearField.js';
import CreateTable from './CreateTable.js';
import DialogInfo from './DialogInfo.js';
import FindStr from './FindStr.js';
import GetDataFromLS from './GetDataFromLS.js';

const CurrentGame = () => {
  const data = localStorage.getItem('Data');
  const mock = document.createElement('div');
  mock.classList = 'mock col-sm-8 m-3';
  mock.textContent = 'Для начала игры перейдите во вкладку "Новая игра" и задайте необходимые параметры.';

  const tab = document.querySelector('.tab-cont');
  tab.innerHTML = '';

  if (data) {
    CreateTable();
    GetDataFromLS().forEach((el) => {
      if (el.solved) {
        el.matches.forEach((match) => {
          const matchStr = FindStr(String(match.pairId));
          matchStr.childNodes[match.numPair].textContent = el.answer.split('')[match.numAnswer - 1];
        });
      }
    });
  } else {
    tab.appendChild(mock);
  }

  DialogInfo();
  ClearField();
};

export default CurrentGame;
