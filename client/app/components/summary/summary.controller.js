class SummaryController {
  constructor(Game) {
    'ngInject';

    this.game = Game;
  }

  get playerName() {
    return this.game.playerName;
  }

  get score() {
    return this.game.score;
  }

  tryAgain() {
    this.game.start();
  }
}

export default SummaryController;
