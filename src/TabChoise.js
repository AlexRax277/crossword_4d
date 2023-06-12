/**
 * Функция для переключения между вкладками 
 * без использования навигационных ссылок
 * @param {string} tab - id вкладки
 */

const TabChoise = (tab) => {
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach(e => {
        e.classList.remove('show', 'active');
        if(e.id === tab) {
            e.classList.add('show', 'active');
        }
    });

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if(link.id === tab) {
            link.classList.add('active');
        }
    });
};

export default TabChoise;
