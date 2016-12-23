import angular from 'angular';
import Home from './home/home';
import Gameboard from './gameboard/gameboard';
import Scoreboard from './scoreboard/scoreboard';

let componentModule = angular.module('app.components', [
  Home,
  Gameboard,
  Scoreboard
])

.name;

export default componentModule;
