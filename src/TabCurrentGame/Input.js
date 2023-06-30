import AudioHandler from '../Other/AudioHandler.js';
import WordUpdate from './WordUpdate.js';
import errorSound from '../Audio/error.mp3';

const Input = (symbols, id) => {
  const form = document.getElementById('form');
  const ending = symbols > 4 ? 'букв' : 'буквы';
  const gameType = localStorage.getItem('GameType');

  form.innerHTML = `<div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">${`${symbols} ${ending}`}</span>
                            <input type="text" class="form-control" id="challenger" style="width: 15px;" placeholder="Введите слово" aria-describedby="addon-wrapping">
                            <button type="submit" class="btn btn-outline-secondary" id="btn-challenger">Принять</button>
                        </div>
                        <div class="msg col-sm-auto">    
                        </div>`;

  form.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    const pattern = /^[а-яА-Яa-zA-Z]+$/;
    const challenger = form.querySelector('.form-control').value.toLowerCase();
    const msg = form.querySelector('.msg');
    if (challenger.length !== symbols || !pattern.test(challenger)) {
      msg.textContent = 'Проверьте количество введенных букв.';
      AudioHandler(errorSound);
    } else {
      WordUpdate(id, challenger, gameType, msg);
    }
  });
};

export default Input;
