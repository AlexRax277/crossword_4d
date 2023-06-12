/**
 * Модальное окно, предупреждающее о перезаписи данных текущей игры.
 * При согласии localStorage очищается, и происходит переход во вкладку 
 * "Новая игра", при отклонении происходит переход во вкладку "Продолжить игру".
 */

import TabChoise from "./TabChoise.js";


const ModalNewGame = () =>{
    const modalTag = document.getElementById('newGame-modal');
    const options = {'backdrop': 'static', 'focus': true, 'keyboard': false};
    const modal = new bootstrap.Modal(modalTag, options);
    modal.show();
    const btnDenied = document.getElementById('btn-modal-denied');
    const btnAccept = document.getElementById('btn-modal-accept');

    [btnAccept, btnDenied].forEach(e => {
        e.addEventListener('click', (e) => {
            if(e.target === btnDenied) {
                modal.hide();
                TabChoise('continue-game');
            } else if(e.target === btnAccept) {
                modal.hide();
                localStorage.clear();
                document.getElementById('accept-game-settings').addEventListener('click', () => {
                    document.querySelectorAll('.form-check-input').forEach(e => {
                        e.checked ? localStorage.setItem('typeGame', e.id): null;
                    });
                    localStorage.setItem('fieldSize', document.getElementById('plaing-field').value);
                    
                    TabChoise('continue-game');
                });
            };
        });
    });    
};

export default ModalNewGame;
