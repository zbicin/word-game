import angular from 'angular';
import Navbar from './navbar/navbar';
import Player from './player/player';

let commonModule = angular.module('app.common', [
  Navbar,
  Player
])
  
.name;

export default commonModule;
