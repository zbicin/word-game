import angular from 'angular';
import Helpers from './helpers/helpers';
import Navbar from './navbar/navbar';
import Player from './player/player';

let commonModule = angular.module('app.common', [
  Helpers,
  Navbar,
  Player
])
  
.name;

export default commonModule;
