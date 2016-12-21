import angular from 'angular';
import PlayerFactory from './player.factory';

let playerModule = angular.module('player', [])

.factory('Player', PlayerFactory)
  
.name;

export default playerModule;
