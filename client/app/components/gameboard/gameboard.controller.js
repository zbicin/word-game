class GameboardController {
  constructor(Player, $state) {
    "ngInject";

    this.$state = $state;
    this.playerName = Player.name;
  }

  proceed() {
    this.$state.go('scoreboard');
  }
}

export default GameboardController;
