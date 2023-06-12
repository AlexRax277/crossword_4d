/**
 * Инициализация начала новой игры.
 * Все данные текущей игры: режим, размер поля, а также прогресс, 
 * записываются в localStorage в фоновом режиме.
 */

import ModalNewGame from "./ModalNewGame.js";


const NewGame = () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.id === 'new-game') {
            link.addEventListener('click', () => {
                if(localStorage.getItem('typeGame') && localStorage.getItem('fieldSize')) {
                    ModalNewGame();
                } else { return };
            });
        };
    });
};

export default NewGame;
