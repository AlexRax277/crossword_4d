/**
 * 
 */


// import fs from 'fs';
// import readline from 'readline';
import getRandomIntInclusive from './genRandomNum.js';
import data from './questions.csv'
import Word from "./Word.js";


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

function GetData(fieldSize) {
    // fieldSize <

    let res = [];
    for(let i=1; i<=count; i++) {
        const word = data[getRandomIntInclusive(1, data.length - 1)];
        !res.includes(word) ? res.push(word): null;
        res = res.map(el => { return new Word(el['answer'], el['question'], getRandomIntInclusive(2, 3))});
        res.forEach(element => {
            const curList = res.filter(e => e !== element);
            curList.forEach(e => {
                element.addMatch(e);
            })
        });

    };


    return res;
};


export default GetData;
