import angular from 'angular';
import Home from './home/home';
import Gameboard from './gameboard/gameboard';
import Scoreboard from './scoreboard/scoreboard';
import Summary from './summary/summary';

let componentModule = angular.module('app.components', [
  Home,
  Gameboard,
  Scoreboard,
  Summary
])

.name;

export default componentModule;
