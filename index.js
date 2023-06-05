import GetData from "./GetData.js";
import getRandomIntInclusive from "./genRandomNum.js";
import Word from "./Word.js";


GetData(10).then(data => {
   data = data.map(e => { return new Word(e[0], e[1], getRandomIntInclusive(2, 3))});

   data.forEach(element => {
      const curList = data.filter(e => e !== element);
      curList.forEach(e => {
          element.addMatch(e);
      })
   });

   data.forEach(e => {
      console.log(e)  
   })

});
