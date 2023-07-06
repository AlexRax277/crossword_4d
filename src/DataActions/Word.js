export default class Word {
  /**
     * Конструктор для создания экземпляра класса Word
     * @param {int} id - уникальный номер слова
     * @param {string} answer - ответ на вопрос (разгадка)
     * @param {string} question - вопрос для разгадки
     * @param {int} countMatches - количество возможных пересечений
     * @param {int} hashNum - порядковый номер слова в общей БД
     * @param {list} matches - список пересечений
     * @param {list} openSymbols - список открытых букв в слове
     * @param {int} applied - количество раз, когда это слово встечается в чужом списке matches
     * @param {boolean} solved - отгадано слово или нет
     */
  constructor(id, answer, question, countMatches, hashNum) {
    this.id = id;
    this.answer = answer;
    this.question = question;
    this.countMatches = countMatches;
    this.hashNum = hashNum;
    this.matches = [];
    this.openSymbols = [];
    this.applied = 0;
    this.solved = false;
  }

  /**
     * Функция для посиска возможных пересечений по буквам между текущим словом и указанным в качестве параметра
     * @param {Word} pair экземпляр класса Word, кандидат на включение в список matches
     */
  addMatch(pair) {
    let shuffledSymbols = [...new Set(this.answer.split('').sort(() => Math.random() - 0.5))];
    const listMatchesSymbols = this.matches.map((e) => e.symbol);
    listMatchesSymbols.forEach((s) => {
      shuffledSymbols = shuffledSymbols.filter((sym) => sym !== s);
    });
    const matchesId = this.matches.map((match) => match.pairId);

    for (let i = 0; i < shuffledSymbols.length; i++) {
      const currentSymbol = shuffledSymbols[i];
      const regexp = String(currentSymbol);
      const data = pair.answer.match(regexp);

      if (data && this.matches.length < this.countMatches
            && pair.applied < pair.countMatches
            && !matchesId.includes(pair.id)) {
        this.matches.push({
          symbol: data[0],
          word: data.input,
          pairId: pair.id,
          numAnswer: this.answer.indexOf(currentSymbol) + 1,
          numPair: data.index + 1,
        });
        pair.applying();
        break;
      }
    }
  }

  /**
     * Функция-счетчик для подсчета количества применений слова
     */
  applying() {
    this.applied += 1;
  }
}
