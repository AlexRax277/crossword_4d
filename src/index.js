// import GetData from "./GetData.js";
import getRandomIntInclusive from "./genRandomNum.js";
import NewGame from "./NewGame.js";


// GetData(10).then(data => {
//    data = data.map(e => { return new Word(e[0], e[1], getRandomIntInclusive(2, 3))});

//    data.forEach(element => {
//       const curList = data.filter(e => e !== element);
//       curList.forEach(e => {
//           element.addMatch(e);
//       })
//    });

//    data.forEach(e => {
//       console.log(e)  
//    })

// });





// const data = GetData(localStorage.getItem('fieldSize'));
// console.log(data)

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', e => {
        const tabs = document.querySelectorAll('.tab-pane');
        tabs.forEach(tab => {
            tab.classList.remove('show', 'active');
            if (tab.id === e.target.id) {
                tab.classList.add('show', 'active');
            }
        });
    });
});

NewGame();


