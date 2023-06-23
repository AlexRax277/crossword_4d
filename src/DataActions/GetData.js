/**
 * Ниже приведен алгоритм (закомментирован) для работы с исходными данными через файловую систему.
 */

// import fs from 'fs';
// import readline from 'readline';

// const stream = fs.createReadStream("./questions.csv");
// const reader = readline.createInterface({ input: stream });

// async function GetData(n) {
//     let allQ = [];
//     let currQ = [];
//     const data = await new Promise((resolve) => {
//         reader.on("line", row => {
//             allQ.push(row.split(";"));

//         });

//         reader.on("close", () => {
//             for (let i = 0; i < n; i++) {
//                 currQ.push(allQ[getRandomIntInclusive(0, allQ.length - 1)]);
//             }
//             return resolve(currQ);
//         });
//     });
//     return data;
// };

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

import getRandomIntInclusive from './genRandomNum.js';
import data from './questions.csv';
import Word from './Word.js';

function GetData(fieldSize) {
  const getMatches = () => {
    if (fieldSize === '1') {
      return { countWords: 10, countMatches: getRandomIntInclusive(2, 3) };
    } if (fieldSize === '2') {
      return { countWords: 20, countMatches: 2 };
    }
    return { countWords: 30, countMatches: getRandomIntInclusive(1, 2) };
  };

  let res = [];
  for (let i = 1; i <= getMatches().countWords; i++) {
    const word = data[getRandomIntInclusive(1, data.length - 1)];
    !res.includes(word) ? res.push(word) : null;
    res = res.map((el) => new Word(res.indexOf(el) + 1, el.answer, el.question, getMatches().countMatches));
    res.forEach((element) => {
      const curList = res.filter((e) => e !== element);
      curList.forEach((e) => {
        element.addMatch(e);
      });
    });
  }

  res.forEach((word) => {
    !localStorage.getItem(`WordID - ${word.id}`) ? localStorage.setItem(`WordID - ${word.id}`, JSON.stringify(word)) : null;
  });

  !localStorage.getItem('Data') ? localStorage.setItem('Data', JSON.stringify(res)) : null;

  return res;
}

export default GetData;
