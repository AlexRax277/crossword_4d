import fs from 'fs';
import readline from 'readline';
import getRandomIntInclusive from './genRandomNum.js';

const stream = fs.createReadStream("./questions.csv");
const reader = readline.createInterface({ input: stream });

async function GetData(n) {
    let allQ = [];
    let currQ = [];
    const data = await new Promise((resolve) => {
        reader.on("line", row => {
            allQ.push(row.split(";"));

        });

        reader.on("close", () => {
            for (let i = 0; i < n; i++) {
                currQ.push(allQ[getRandomIntInclusive(0, allQ.length - 1)]);
            }
            return resolve(currQ);
        });
    });
    return data;
};

export default GetData;
