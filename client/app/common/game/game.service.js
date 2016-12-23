const GAME_DURATION_IN_SECODS = 10;

class GameService {

  constructor($interval, GlobalEvents, Helpers, WordBank) {
    'ngInject';

    this.NEW_WORD = 'GameService.newWord';
    this.SCORE_UPDATED = 'GameService.scoreUpdated';
    this.TIME_UPDATED = 'GameService.timeUpdated';
    this.TIME_IS_UP = 'GameService.timeIsUp';

    this.$interval = $interval;

    this.currentAnswer = '';
    this.currentWord = '';
    this.globalEvents = GlobalEvents;
    this.helpers = Helpers;
    this.previousAnswer = null;
    this.remainingSeconds = null;
    this.score = 0;
    this.tickIntervalHandle = null;
    this.wordBank = WordBank;
  }

  get isActive() {
    return !!this.tickIntervalHandle;
  }

  get isAnswerCorrect() {
    return this.currentAnswer === this.currentWord.original;
  }

  get isFinished() {
    return !this.isActive && this.isTimeUp;
  }

  get isTimeUp() {
    return this.remainingSeconds === 0;
  }

  calculateMaximumScoreForWord(word) {
    return Math.floor(Math.pow(1.95, word.length / 3));
  }

  onTick() {
    this.remainingSeconds--;
    this.globalEvents.trigger(this.TIME_UPDATED, this.remainingSeconds);

    if (this.isTimeUp) {
      this.globalEvents.trigger(this.TIME_IS_UP, this.score);
      this.$interval.cancel(this.tickIntervalHandle);
      this.tickIntervalHandle = null;
    }
  }

  setAnswer(newAnswer) {
    this.previousAnswer = this.currentAnswer;
    this.currentAnswer = newAnswer;

    if (this.isAnswerCorrect) {
      this.currentWord = this.wordBank.getNextWord();
      this.globalEvents.trigger(this.NEW_WORD, this.currentWord);
      this.currentAnswer = '';
      this.previousAnswer = null;
      this.score += this.calculateMaximumScoreForWord(this.currentWord.original);
    }

    if (this.previousAnswer) {
      // TODO: make more sophisticated
      let charactersRemoved = this.previousAnswer.length - this.currentAnswer.length;

      if (charactersRemoved > 0) {
        this.score = this.helpers.safeSubtract(charactersRemoved, this.score);
      }
    }

    this.globalEvents.trigger(this.SCORE_UPDATED, this.score);
  }

  start() {
    this.currentWord = this.wordBank.getNextWord();
    this.remainingSeconds = GAME_DURATION_IN_SECODS;
    this.score = 0;
    // TODO: cancel the interval when appropriate
    this.tickIntervalHandle = this.$interval(() => this.onTick(), 1000);

    this.globalEvents.trigger(this.NEW_WORD, this.currentWord);
    this.globalEvents.trigger(this.SCORE_UPDATED, this.score);
    this.globalEvents.trigger(this.TIME_UPDATED, this.remainingSeconds);
  }

}

export default GameService;
