class HomeController {
  constructor(Player, $state) {
    "ngInject";

    this.playerName = Player.name;
    this.$state = $state;
  }

  savePlayerName($event) {
    $event.preventDefault();
    this.$state.go('gameboard');
  }
}

export default HomeController;
