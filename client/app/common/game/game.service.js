const GAME_DURATION = 40 * 1000;

class GameService {
    static TIME_IS_UP = 'GameService.timeIsUp';
    constructor($interval, Helpers, WordBank) {
        "ngInject";

        this.currentAnswer = '';
        this.helpers = Helpers;
        this.previousAnswer = null;
        this.remainingSeconds = GAME_DURATION;
        this.score = 0;

        this.currentWord = WordBank.getNextWord();
        // TODO: cancel the interval when appropriate
        this.tickIntervalHandle = $interval(() => this.onTick(), 1000);
    }

    get isAnswerCorrect() {
        return this.currentAnswer === this.currentWord.original;
    }

    get isTimeUp() {
        return this.remainingSeconds === 0;
    }

    onAnswerChange($event) {
        if(this.isAnswerCorrect) {
            this.currentWord = WordBank.getNextWord();
            this.currentAnswer = '';
            this.previousAnswer = null;
        }
        
        // TODO: make more sophisticated
        let charactersRemoved = this.previousAnswer.length - this.currentAnswer.length;

        if (charactersRemoved > 0) {
            this.score = this.helpers.safeSubtract(charactersRemoved, this.score);
        }
    }

    onTick() {
        this.remainingSeconds--;

        if (this.isTimeUp) {
            this.$rootScope.$emit(GameService.TIME_IS_UP, this.score);
        }
    }

}

export default GameService;