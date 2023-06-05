export default class Word{
    constructor(answer, question, countMatches) {
        this.answer = answer;
        this.question = question;
        this.countMatches = countMatches;
        this.matches = [];
        this.applied = 0;
        this.solved = false;
    };

    addMatch(pair) {
        let shuffledSymbols = [...new Set(this.answer.split('').sort(() => Math.random() - 0.5))];
        const listMatchesSymbols = this.matches.map(e => { return e.symbol });
        listMatchesSymbols.forEach(s => {
            shuffledSymbols = shuffledSymbols.filter(sym => sym != s);
        }); 

        for(let i=0; i<shuffledSymbols.length; i++) {
            const currentSymbol = shuffledSymbols[i];
            const regexp = String(currentSymbol);
            const data = pair.answer.match(regexp);

            if(data && this.matches.length < this.countMatches
            && pair.applied < pair.countMatches) {
                this.matches.push({
                    'symbol': data[0],
                    'word': data.input,
                    'num': data.index
                });
                pair.applying();
                break;
            };
        };
    };

    applying() {
        this.applied += 1;
    }
};


