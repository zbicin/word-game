class HomeController {
  constructor(Player, $state) {
    "ngInject";

    this.$state = $state;
    this.playerName = Player.name;
  }

  savePlayerName($event) {
    $event.preventDefault();
    this.$state.go('gameboard');
  }
}

export default HomeController;
