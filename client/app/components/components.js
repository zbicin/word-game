import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Gameboard from './gameboard/gameboard';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Gameboard
])

.name;

export default componentModule;
