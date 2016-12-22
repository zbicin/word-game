import angular from 'angular';
import helpersModule from '../helpers/helpers';
import GameService from './game.service';

let gameModule = angular.module('game', [helpersModule])

.service('Game', GameService)

.name;

export default gameModule;