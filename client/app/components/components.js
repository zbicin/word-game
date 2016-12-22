import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Gameboard from './gameboard/gameboard';
import Scoreboard from './scoreboard/scoreboard';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Gameboard,
  Scoreboard
])

.name;

export default componentModule;
