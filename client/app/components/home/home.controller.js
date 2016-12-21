class HomeController {
  constructor(Player) {
    "ngInject";

    this.playerName = Player.name;
  }
}

export default HomeController;
