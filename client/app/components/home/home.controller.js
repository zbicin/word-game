class HomeController {
  constructor(Game, $state) {
    "ngInject";

    this.$state = $state;
    this.game = Game;
    this.playerName = Game.playerName;
  }

  savePlayerName($event) {
    $event.preventDefault();
    this.game.playerName = this.playerName;
    this.$state.go('gameboard');
  }
}

export default HomeController;
