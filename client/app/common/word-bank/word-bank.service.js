const WORDS = [
    'pizza',
    'cat',
    'dog'
];

class WordBankService {
    constructor(Helpers) {
        "ngInject";

        this.currentWordIndex = 0;
        this.helpers = Helpers;
        this.words = this.helpers.shuffleArray(WORDS)
            .map((singleWord) => this.createOriginalAndMangledPair(singleWord));
    }

    createOriginalAndMangledPair(singleWord) {
        return {
            original: singleWord,
            mangled: this.mangleWord(singleWord)
        };
    }

    getNextWord() {
        let isOutOfWords = this.currentWordIndex === this.words.length - 1;

        if(isOutOfWords) {
            // TODO: handle it in a more sophisticated way
            this.currentWordIndex = 0;
        }

        return this.words[this.currentWordIndex++];
    }

    mangleWord(word) {
        return this.helpers.shuffleArray(word.split('')).join('');
    }
}

export default WordBankService;