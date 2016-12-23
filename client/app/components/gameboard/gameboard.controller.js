class GameboardController {
  constructor(Game, GlobalEvents) {
    'ngInject';

    this.currentAnswer = '';
    this.currentMangledWord = Game.currentWord.mangled;
    this.game = Game;
    this.remainingTime = Game.remainingSeconds;
    this.score = 0;
    GlobalEvents.on(Game.NEW_WORD, (newWord) => this.onNewWord(newWord));
    GlobalEvents.on(Game.SCORE_UPDATED, (newScore) => this.onNewScore(newScore));
    GlobalEvents.on(Game.TIME_UPDATED, (newTime) => this.onTimeUpdated(newTime));
    GlobalEvents.on(Game.TIME_IS_UP, () => this.onTimeIsUp());
  }

  get isGameActive() {
    return this.game.isActive;
  }

  get playerName() {
    return this.game.playerName;
  }

  onAnswerChange() {
    this.game.setAnswer(this.currentAnswer);
  }

  onNewScore(newScore) {
    this.score = newScore;
  }

  onNewWord(newWord) {
    this.currentAnswer = '';
    this.currentMangledWord = newWord.mangled;
    console.log(`Psst, the answer is: ${newWord.original}.`);
  }

  onTimeIsUp() {
    // TODO
  }

  onTimeUpdated(newTime) {
    this.remainingTime = newTime;
  }
}

export default GameboardController;
