import angular from 'angular';
import GameService from './game.service';

let gameModule = angular.module('game', [])

.service('Game', GameService)

.name;

export default gameModule;