import angular from 'angular';
import homeComponent from './home.component';
import Game from '../../common/game/game';

let homeModule = angular.module('home', [
  Game
])

.component('home', homeComponent)
  
.name;

export default homeModule;
