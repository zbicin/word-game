import angular from 'angular';
import gameboardComponent from './gameboard.component';
import Game from '../../common/game/game';

let gameboardModule = angular.module('gameboard', [
  Game
])

.component('gameboard', gameboardComponent)
  
.name;

export default gameboardModule;
